import styles from './Introduction.module.css'; // Import the CSS module
import AnimationSecurity from '../../animation/AnimationSecurity'; // Import the AnimationSecurity component

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <h1 className={styles.title}>AuthChain: Advanced Authentication Security for Businesses</h1>
            <p className={styles.description}>
                Enhance the security of your online services with AuthChain, an innovative dual authentication solution leveraging the power of blockchain. This technology not only secures digital identities but also ensures the total confidentiality of user data through advanced encryption mechanisms.
            </p>
            <AnimationSecurity />
        </section>
    );
};

export default Introduction;
