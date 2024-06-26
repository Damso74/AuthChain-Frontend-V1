import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
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

  return <div ref={animationContainerRef} style={{ width: 400, height: 400 }}></div>;
};

export default AnimationTeamworkGraphic;
