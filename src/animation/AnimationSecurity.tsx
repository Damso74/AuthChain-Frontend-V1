import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from './animation-security.json';
import styles from './AnimationSecurityStyles.module.css'; // Import the new CSS module

const AnimationSecurity: React.FC = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainerRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // Clean up on unmount
  }, []);

  return <div ref={animationContainerRef} className={styles.animationContainer}></div>;
};

export default AnimationSecurity;
