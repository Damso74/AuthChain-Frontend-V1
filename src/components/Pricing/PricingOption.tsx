// PricingOption.tsx
import React, { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';
import styles from './PricingOption.module.css';
import { Link } from 'react-router-dom';


interface PricingOptionProps {
    title: string;
    features: string[];
    planType: string;
    animationPath: string;
}

const PricingOption: React.FC<PricingOptionProps> = ({ title, features, planType, animationPath }) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const [animationInstance, setAnimationInstance] = useState<any>(null);

    useEffect(() => {
        if (animationContainer.current) {
            const anim = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: false,
                path: animationPath
            });
            setAnimationInstance(anim);
            return () => anim.destroy();
        }
    }, [animationPath]);

    const handleMouseEnter = () => {
        animationInstance.play();
    };

    const handleMouseLeave = () => {
        animationInstance.stop();
    };

    return (
        <div className={styles.pricingOption} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div ref={animationContainer} className={styles.animationContainer}></div>
            <h2 className={styles.planType}>{planType}</h2>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>{feature}</li>
                ))}
            </ul>
            <Link to="/contact" className={styles.selectButtongo}>Select This Plan</Link>

        </div>
    );
};

export default PricingOption;
