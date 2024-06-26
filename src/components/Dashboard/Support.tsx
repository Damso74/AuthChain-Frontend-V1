import styles from './SupportAccess.module.css';
import Lottie from 'react-lottie-player';
import animationData from '../../animation/animation-support.json';  // Ensure the path is correct
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const SupportAccess = () => {
  return (
    <div className={styles.supportAccess}>
      <h3 className={styles.supportTitle}>Need Help?</h3>
      <p className={styles.supportText}>
        Our dedicated support team is here to assist you with any inquiries or issues.
      </p>
      <Link to="/contact" className={styles.supportLink}>
        Contact Support
      </Link>
      <div className={styles.animationContainer}>
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    </div>
  );
};

export default SupportAccess;
