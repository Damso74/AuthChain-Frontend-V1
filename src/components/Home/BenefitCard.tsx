// src/components/Home/BenefitCard.tsx

import React from 'react';
import './BenefitCard.css'; // Make sure the CSS path is correct

interface BenefitCardProps {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
    return (
        <div className="benefit-card">
            <img src={`/assets/icons/${icon}`} alt={`${title} Icon`} className="benefit-icon" />
            <h3 className="benefit-title">{title}</h3>
            <p className="benefit-description">{description}</p>
        </div>
    );
};

export default BenefitCard;
