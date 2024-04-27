// WhyAuthChain.tsx
import styles from './WhyAuthChain.module.css'; // Import the CSS module

const WhyAuthChain = () => {
    return (
        <section className={styles.whyAuthChain}>
            <div className={styles.content}>
                <h2 className={styles.title}>Why AuthChain?</h2>
                <ul className={styles.list}>
                    <li><strong>Enhanced Security:</strong> Uses Ethereum smart contracts for robust and transparent authentication verification without intermediaries.</li>
                    <li><strong>Unparalleled Privacy:</strong> With DataProtector, email addresses are encrypted, turning sensitive information into unusable data for third parties.</li>
                    <li><strong>Seamless Integration:</strong> Easy-to-use SDKs and APIs for straightforward integration into existing systems.</li>
                    <li><strong>Cost Efficiency:</strong> Reduce your security management expenses with a decentralized solution that minimizes the need for expensive servers and data managers.</li>
                </ul>
            </div>
            <div className={styles.animation}>
                <img src="src/assets/images/Why.png" alt="Why AuthChain" />
            </div>
        </section>
    );
};

export default WhyAuthChain;
