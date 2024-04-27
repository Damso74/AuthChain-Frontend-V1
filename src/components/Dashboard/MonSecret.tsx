import { useSecret } from '../../context/SecretContext'; // Ensure the import path is correct
import App from './App';
import styles from './CheckSecret.module.css';


const CheckSecret = () => {
    const { secret, setSecret } = useSecret();

    // Function to reset the secret
    const resetSecret = async () => {
        await setSecret(null); // Resets the secret to null
    };

    return (
        <div className={styles.checkSecretContainer}>
            <h2 className={styles.checkSecretTitle}>Check Your Encrypted Email Address</h2>
            {secret ? (
                <div>
                    <p className={styles.checkSecretText}>
                        The current secret represents the encrypted dataset where your email, linked to your Ethereum wallet, is securely stored. This ensures that your email is ultra-secure on the blockchain.
                    </p>
                    <span className={styles.checkSecretStrong}>Encrypted Address (Secret): {secret}</span>
                    <button onClick={resetSecret} className={styles.checkSecretButton}>
                        Unlink Email
                    </button>
                    <App></App>
                    <p className={styles.checkSecretUnlinkInfo}>
                        If you wish to change the email linked to your wallet, you can unlink the current one by clicking the button above.
                    </p>
                </div>
            ) : (
                <p>No email address is currently linked to your wallet.</p>
            )}
        </div>
    );
};

export default CheckSecret;
