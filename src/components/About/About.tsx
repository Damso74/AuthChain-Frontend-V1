import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'; // Assuming the CSS module is properly configured
import AnimationBlockchainGraphic from '../../animation/AnimationBlockchainGraphic';
import AnimationSecureLockGraphic from '../../animation/AnimationSecureLockGraphic';
import AnimationTeamworkGraphic from '../../animation/AnimationTeamworkGraphic';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={`${styles.introSection} ${styles.section}`}>
        <h1 className={styles.title}>Welcome to AuthChain</h1>
        <p className={styles.paragraph}>
          AuthChain revolutionizes online security by integrating blockchain technology to create an immutable and secure authentication system. Our platform ensures that your digital interactions remain private and secure.
        </p>
        <AnimationBlockchainGraphic />
      </section>

      <section className={`${styles.securitySection} ${styles.section}`}>
        <h2 className={styles.subtitle}>Unmatched Security</h2>
        <p className={styles.paragraph}>
          Experience unparalleled security levels. Our platform ensures complete immutability and resistance to cyber threats, powered by blockchain.
        </p>
        <AnimationSecureLockGraphic />
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
        <AnimationTeamworkGraphic />
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
