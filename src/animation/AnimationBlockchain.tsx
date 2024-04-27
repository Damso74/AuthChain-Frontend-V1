// AnimationBlockchain.tsx

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animation/animation-blockchain.json';

const AnimationBlockchain: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default AnimationBlockchain;
