import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import styles from './AnimationStyles.module.css'; // Assuming you have a CSS module for styles
import animationData from './blockchain-graphic.json';

const AnimationBlockchainGraphic: React.FC = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainerRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // Clean up on unmount
  }, []);

  return <div ref={animationContainerRef} className={styles.animationContainer}></div>;
};

export default AnimationBlockchainGraphic;
