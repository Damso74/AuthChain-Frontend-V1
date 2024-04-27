// Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import Connect from '../../wallet/connect';
import CheckSecret from './MonSecret';
import DataVisualization from './DataVisualization';
import Support from './Support';
import styles from './Dashboard.module.css'; // Import CSS module
import { useSecret } from '../../context/SecretContext';

const Dashboard: React.FC = () => {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const { secret } = useSecret();

  const handleOpen = () => {
    open();
  };

  if (!isConnected) {
    // Si non connecté, invite l'utilisateur à se connecter ou à s'inscrire
    return (
      <div className={styles.dashboard}>
        <div className={styles.welcomeSection}>
          <h2>Welcome to AuthChain</h2>
          <p>To access your dashboard, please connect your wallet or sign up.</p>
          <div className={styles.authActions}>
            <Link to="/signup" className={styles.actionLink}>Sign Up</Link>
            <Connect onOpen={handleOpen} />
          </div>
        </div>
      </div>
    );
  }

  if (!secret) {
    // Si non connecté, invite l'utilisateur à se connecter ou à s'inscrire
    return (
      <div className={styles.dashboard}>
        <div className={styles.welcomeSection}>
          <h2>Welcome to AuthChain</h2>
          <p>To access your dashboard, please connect your wallet or sign up.</p>
          <div className={styles.authActions}>
            <Link to="/signup" className={styles.actionLink}>Sign Up</Link>
            <Connect onOpen={handleOpen} />
          </div>
        </div>
      </div>
    );
  }

  // Si connecté, affiche le tableau de bord avec les informations de l'utilisateur
  return (
    <div className={styles.dashboard}>

  <div className={styles.notifications}>
          <h3 className={styles.notificationsTitle}>Notifications</h3>
          <div className={styles.notificationsList}>
            {/* You can map through your notifications array here */}
            <div className={styles.notificationItem}>
              <span className={styles.notificationIcon}>🔔</span>
              <p className={styles.notificationMessage}>Welcome to AuthChain! Your account is now secure.</p>
            </div>
            <div className={styles.notificationItem}>
              <span className={styles.notificationIcon}>🔒</span>
              <p className={styles.notificationMessage}>Your last login was from an unrecognized device.</p>
            </div>
            <div className={styles.notificationItem}>
              <span className={styles.notificationIcon}>⚙️</span>
              <p className={styles.notificationMessage}>System update completed successfully.</p>
            </div>
            {/* Add more notification items as needed */}
          </div>
        </div>


      <div className={styles.dataVisualization}>
        <DataVisualization />
      </div>


        <div className={styles.recentActivities}>
          <CheckSecret />
      </div>

        <div className={styles.settingsShortcut}>
      <h3 className={styles.settingsTitle}>Quick Settings</h3>
      <div className={styles.settingsList}>
        <div className={styles.settingItem}>
          <span className={styles.settingIcon}>🔒</span>
          <div className={styles.settingDetails}>
            <h4 className={styles.settingName}>Account Security</h4>
            <p className={styles.settingDescription}>Update your password and manage two-factor authentication.</p>
          </div>
        </div>
        <div className={styles.settingItem}>
          <span className={styles.settingIcon}>🔔</span>
          <div className={styles.settingDetails}>
            <h4 className={styles.settingName}>Notification Preferences</h4>
            <p className={styles.settingDescription}>Customize how you receive alerts and updates.</p>
          </div>
        </div>
        {/* Add more setting items as needed */}
      </div>
      <div className={styles.settingsActions}>
        <button className={styles.settingsButton}>Manage Settings</button>
        </div>
        </div>

      <Support></Support>
      </div>
    );
  };

  export default Dashboard;
