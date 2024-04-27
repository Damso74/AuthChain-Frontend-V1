// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useRef } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Fortmatic from 'fortmatic';
import { ethers } from 'ethers';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');

  const web3ModalRef = useRef(null);

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: 'mainnet', // ou le réseau de votre choix
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider, // nécessaire
          options: {
            infuraId: process.env.REACT_APP_INFURA_ID, // Utilisez votre Infura ID à partir de .env
          },
        },
        'custom-coinbase': {
          display: {
            logo: 'images/coinbase-wallet-logo.svg', // Ajoutez le chemin de votre image de logo Coinbase
            name: 'Coinbase Wallet',
            description: 'Connect to your Coinbase Wallet',
          },
          package: CoinbaseWalletSDK, // Le package npm est nécessaire ici
          options: {
            appName: 'AuthChain', // Remplacez par le nom de votre application
            infuraId: process.env.REACT_APP_INFURA_ID, // Utilisez votre Infura ID à partir de .env
          },
        },
        fortmatic: {
          package: Fortmatic,
          options: {
            key: process.env.REACT_APP_FORTMATIC_KEY, // Utilisez votre clé Fortmatic à partir de .env
          },
        },
        // Ajoutez ici d'autres fournisseurs selon les besoins
      },
    });

    if (web3ModalRef.current.cachedProvider) {
      connectWallet();
    }
  }, []);

  const connectWallet = async () => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setIsAuthenticated(true);

      // Gestion des changements de compte
      provider.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          disconnectWallet();
        }
      });

      // Gestion des changements de réseau
      provider.on("chainChanged", (_chainId) => {
        window.location.reload();
      });

    } catch (err) {
      console.error('Error connecting to wallet:', err);
      setError(err.message);
    }
  };

  const disconnectWallet = async () => {
    web3ModalRef.current.clearCachedProvider();
    setIsAuthenticated(false);
    setWalletAddress('');
    setError('');

    if (web3ModalRef.current.provider?.disconnect) {
      await web3ModalRef.current.provider.disconnect();
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, walletAddress, error, connectWallet, disconnectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};
