import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from './animation-home.json';
import styles from './AnimationStyles.module.css';

const AnimationHome: React.FC = () => {
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

export default AnimationHome;
