import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Button, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAccount, useDisconnect } from 'wagmi';
import Connect from '../../wallet/connect';
import { useWeb3Modal } from '@web3modal/react';

const Header = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const handleOpen = () => {
    open();
  };

  const formatAddress = (address: string | undefined) => {
    if (address) {
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }
    return 'Not connected';
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/logo-authchain-long.png" alt="AuthChain Logo" className="logo" />
        </Link>
      </div>
      <IconButton
        className="menu-button"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleMenu}
        sx={{ display: { md: 'none' } }}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/business" onClick={toggleMenu}>Business</Link></li>
          <li><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
          {isConnected && <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>}
          {!isConnected && <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>}
        </ul>
      </nav>
      <div className="wallet-connect-container">
        {!isConnected ? (
          <Connect onOpen={handleOpen} />
        ) : (
          <div className="auth-buttons">
            <Typography variant="body2" color="common.white" sx={{ marginRight: '10px' }}>
              {formatAddress(address)}
            </Typography>
            <Button onClick={handleDisconnect} className="button disconnect-wallet-button">
              Disconnect
            </Button>
            <Button onClick={handleOpen} className="button connect-wallet-button">
              My Wallet
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
