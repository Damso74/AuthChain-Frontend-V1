import React from 'react';
import PricingOption from './PricingOption'; // Importing the PricingOption component
import './Pricing.css'; // Importing CSS for styling

// Defining the structure for pricing plans
interface PricingPlan {
  title: string;
  features: string[];
  planType: string;
  animationPath: string; // Path to the animation for each plan
}

// Sample data for pricing plans
const pricingPlans: PricingPlan[] = [
  {
    title: "Free Access to Basic Tools",
    features: [
      "No cost entry to explore platform capabilities.",
      "Access basic iExec tools for integration and functional testing.",
      "Ideal for small teams and startups wanting to explore technology.",
      "Instant activation with simple sign-up."
    ],
    planType: "Free Offer - Easy Start",
    animationPath: 'src/animation/animation-free.json' // Assuming animations are stored in public/animations
  },
  {
    title: "Scalable Enterprise Solution",
    features: [
      "Full management capabilities for users, connections, and devices.",
      "Custom solutions to fit specific organizational needs.",
      "Enhances operational efficiency with advanced integration options.",
      "Contact us for personalized consultation and a customized quote."
    ],
    planType: "Standard Offer - Business",
    animationPath: 'src/animation/animation-business.json'
  },
  {
    title: "Exclusive Services for Large Enterprises",
    features: [
      "Tailored for large enterprises needing bespoke solutions.",
      "Includes dedicated support and customized functionalities.",
      "Ensures scalability and compliance for complex organizational requirements.",
      "Direct contact for detailed consultations and customized pricing arrangements."
    ],
    planType: "Premium Offer - Custom",
    animationPath: 'src/animation/animation-premium.json'
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="pricingContainer">
      {pricingPlans.map(plan => (
        <PricingOption
          key={plan.planType}
          title={plan.title}
          features={plan.features}
          planType={plan.planType}
          animationPath={plan.animationPath}
        />
      ))}
    </div>
  );
};

export default Pricing;
