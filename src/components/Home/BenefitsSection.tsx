// src/components/Home/BenefitsSection.tsx

import React from 'react';
import BenefitCard from './BenefitCard';  // Ensure the path is correct to import BenefitCard
import benefitsData from './BenefitsData'; // Ensure the path is correct to import benefitsData
import './BenefitsSection.css';  // Ensure you create and link the CSS file for styling

const BenefitsSection: React.FC = () => {
    return (
        <section className="benefits-section">
            <div className="container">
                {benefitsData.map(benefit => (
                    <BenefitCard
                        key={benefit.id}
                        id={benefit.id}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;
