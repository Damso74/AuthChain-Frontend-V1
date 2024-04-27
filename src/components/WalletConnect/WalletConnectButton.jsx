//src/components/WalletConnect/WalletConnectButton.jsx
import React from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

// Options de configuration pour les fournisseurs de Web3
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "INFURA_ID", // Remplacez par votre clé Infura
    },
  },
  // Vous pouvez ajouter d'autres fournisseurs ici
};

let web3Modal;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: "mainnet", // ou autres comme "rinkeby"
    cacheProvider: true, // le cache permet à Web3Modal de se souvenir du fournisseur sélectionné
    providerOptions,
  });
}

function WalletConnectButton() {
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      console.log("Wallet connecté à l'adresse:", address);
      // Gérer la connexion et l'adresse du wallet selon vos besoins
    } catch (err) {
      console.error("Erreur lors de la connexion au portefeuille:", err);
    }
  };

  return (
    <button onClick={connectWallet} className="connect-wallet-button">
      Connecter Wallet
    </button>
  );
}

export default WalletConnectButton;
