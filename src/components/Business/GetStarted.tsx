import styles from './GetStarted.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';


const GetStarted = () => {
    return (
        <section className={styles.getStarted}>
            <h2>Get Started with AuthChain</h2>
            <p>Ready to transform your business security? Contact us today for a personalized demo or to discuss how AuthChain can be integrated into your existing architecture.</p>
            <Link to="/contact" className={styles.ctaButton}>Get Started</Link>
        </section>
    );
};

export default GetStarted;
