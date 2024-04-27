import styles from './UseCases.module.css'; // Import the CSS module
import fintechIcon from '../../assets/icons/payment.png'; // Example icon for FinTech
import ecommerceIcon from '../../assets/icons/ecommerce.png'; // Example icon for E-commerce
import healthcareIcon from '../../assets/icons/healthcare.png'; // Example icon for Healthcare

const UseCases = () => {
    return (
        <section className={styles.useCases}>
            <h2 className={styles.heading}>Use Cases</h2>
            <ul className={styles.list}>
                <li>
                    <img src={fintechIcon} alt="FinTech" className={styles.icon} />
                    <strong>FinTech Enterprises   -   </strong>    Secure transactions and user communications with strong authentication and transparent identity verification.
                </li>
                <li>
                    <img src={ecommerceIcon} alt="E-commerce" className={styles.icon} />
                    <strong>E-commerce Platforms   -   </strong>    Protect your customers from fraud and strengthen trust in your platform.
                </li>
                <li>
                    <img src={healthcareIcon} alt="Healthcare" className={styles.icon} />
                    <strong>Healthcare Providers   -   </strong>    Ensure the protection of health data in compliance with HIPAA and GDPR laws.
                </li>
            </ul>
        </section>
    );
};

export default UseCases;
