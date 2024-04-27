import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'; // Assuming the CSS module is properly configured
import lottie from 'lottie-web';

const About: React.FC = () => {
    const blockchainAnimationRef = useRef<HTMLDivElement>(null);
    const secureAuthAnimationRef = useRef<HTMLDivElement>(null);
    const teamAnimationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blockchainAnim = lottie.loadAnimation({
            container: blockchainAnimationRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animation/blockchain-graphic.json' // Path to specific animation JSON
        });

        const secureAuthAnim = lottie.loadAnimation({
            container: secureAuthAnimationRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animation/secure-lock-graphic.json' // Path to specific animation JSON
        });

        const teamAnim = lottie.loadAnimation({
            container: teamAnimationRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animation/teamwork-graphic.json' // Path to specific animation JSON
        });

        // Cleanup animations on component unmount
        return () => {
            blockchainAnim.destroy();
            secureAuthAnim.destroy();
            teamAnim.destroy();
        };
    }, []);

    return (
        <div className={styles.aboutContainer}>
            <section className={`${styles.introSection} ${styles.section}`}>
                <h1 className={styles.title}>Welcome to AuthChain</h1>
                <p className={styles.paragraph}>
                    AuthChain revolutionizes online security by integrating blockchain technology to create an immutable and secure authentication system. Our platform ensures that your digital interactions remain private and secure.
                </p>
                <div ref={blockchainAnimationRef} className={styles.animationContainer}></div>
            </section>

            <section className={`${styles.securitySection} ${styles.section}`}>
                <h2 className={styles.subtitle}>Unmatched Security</h2>
                <p className={styles.paragraph}>
                    Experience unparalleled security levels. Our platform ensures complete immutability and resistance to cyber threats, powered by blockchain.
                </p>
                <div ref={secureAuthAnimationRef} className={styles.animationContainer}></div>
            </section>

            <section className={`${styles.missionSection} ${styles.section}`}>
                <h2 className={styles.subtitle}>Our Mission</h2>
                <p className={styles.paragraph}>
                    To provide a secure, transparent, and efficient authentication system that puts users' privacy first, making online transactions safer than ever.
                </p>
                <div className={styles.highlight}>Empowering users, Enhancing trust, Ensuring privacy.</div>
            </section>

            <section className={`${styles.teamSection} ${styles.section}`}>
                <h2 className={styles.subtitle}>Meet Our Team</h2>
                <p className={styles.paragraph}>
                    We are driven by a passion to disrupt the traditional security paradigms and are backed by a team of expert developers and security specialists.
                </p>
                <div ref={teamAnimationRef} className={styles.animationContainer}></div>
            </section>

            <section className={`${styles.ctaSection} ${styles.section}`}>
                <h2 className={styles.subtitle}>Join the Revolution</h2>
                <p className={styles.paragraph}>
                    Ready to take control of your digital identity? Join us and be part of the future of secure online authentication.
                </p>
                <Link to="/signup" className={styles.ctaButton}>Get Started</Link>
            </section>
        </div>
    );
};

export default About;
