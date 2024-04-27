// src/components/Home/BenefitsData.ts

// Define the structure for a single benefit using an interface
interface Benefit {
    id: number;
    icon: string;
    title: string;
    description: string;
}

// Array of benefit objects
const benefitsData: Benefit[] = [
    {
        id: 1,
        icon: "shield-icon.png",  // Assume you have these SVGs in your public/assets/icons directory
        title: "Enhanced Security",
        description: "Utilize blockchain's immutable and encrypted nature to secure your transactions and data."
    },
    {
        id: 2,
        icon: "blockchain-icon.png",
        title: "Decentralized Control",
        description: "Take control away from central authorities and enable a truly decentralized user experience."
    },
    {
        id: 3,
        icon: "lock-icon.png",
        title: "Privacy First",
        description: "Protect your identity and transactions with robust privacy protocols intrinsic to blockchain."
    }
];

export default benefitsData;
