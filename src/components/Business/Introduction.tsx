import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import styles from './Introduction.module.css'; // Import the CSS module

const Introduction = () => {
    const animationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (animationRef.current) {
            const animationInstance = lottie.loadAnimation({
                container: animationRef.current, // Now guaranteed not to be null
                renderer: 'svg',
                loop: false, // Do not loop the animation
                autoplay: true,
                path: 'src/animation/animation-security.json' // Path to animation JSON
            });

            return () => animationInstance.destroy(); // Clean up the animation instance on unmount
        }
    }, []);

    return (
        <section className={styles.introduction}>
            <h1 className={styles.title}>AuthChain: Advanced Authentication Security for Businesses</h1>
            <p className={styles.description}>
                Enhance the security of your online services with AuthChain, an innovative dual authentication solution leveraging the power of blockchain. This technology not only secures digital identities but also ensures the total confidentiality of user data through advanced encryption mechanisms.
            </p>
            <div ref={animationRef} className={styles.animation}></div>
        </section>
    );
};

export default Introduction;
