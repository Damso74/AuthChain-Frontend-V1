import styles from './BusinessBenefits.module.css'; // Import the CSS module

const BusinessBenefits = () => {
    return (
        <section className={styles.businessBenefits}>
            <h2>Business Advantages</h2>
            <ul>
                <li><strong>Fraud Reduction:</strong> Significantly lower the risk of hacking with a blockchain-based system that stores no sensitive data centrally.</li>
                <li><strong>Regulatory Compliance:</strong> AuthChain helps you comply with GDPR and other data protection regulations through its privacy-by-design architecture.</li>
                <li><strong>User Experience Improvement:</strong> Fast and seamless authentication processes for users without compromising their security or privacy.</li>
            </ul>
        </section>
    );
};

export default BusinessBenefits;
