import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import styles from './AnimationStyles.module.css'; // Assuming you have a CSS module for styles
import animationData from './teamwork-graphic.json';

const AnimationTeamworkGraphic: React.FC = () => {
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

export default AnimationTeamworkGraphic;
