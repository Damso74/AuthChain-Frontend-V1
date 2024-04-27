import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lottie, { AnimationItem } from 'lottie-web'; // Import the type AnimationItem
import BenefitsSection from './BenefitsSection';
import About from '../About/About';

import './Home.css'; 

import { initHeroAnimation } from './heroAnimation'; 

const Home: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);  // Référence pour le canvas des particules

  useEffect(() => {
    initHeroAnimation('hero-canvas');  // Initialisation des particules

    // Declare anim with the correct type
    let anim: AnimationItem | null = null;

    if (animationContainer.current) {
      anim = lottie.loadAnimation({
        container: animationContainer.current, // L'élément DOM pour l'animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'public/animation/animation-home.json' // Chemin correct vers le fichier d'animation
      }) as AnimationItem; // Use type assertion here if needed
    }

    // Return a cleanup function
    return () => {
      if (anim) {
        anim.destroy(); // Nettoyage de l'animation Lottie
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = 300;
        initHeroAnimation('hero-canvas');  // Réinitialisation des particules lors du redimensionnement
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="home">
      {/* Hero Section with Lottie Animation */}
      <section className="hero-section">
        <canvas ref={canvasRef} id="hero-canvas" className="hero-animation"></canvas> {/* Canvas for particle animation */}
        <div className="hero-content">
          <h1>Enhanced Security, Simplified</h1>
          <p>Your bridge to decentralized authentication.</p>
          <Link to="/signup" className="btn-get-started">Get Started</Link>
        </div>
        <div ref={animationContainer} className="lottie-animation" /> {/* Container for the lottie animation */}
      </section>

      {/* Benefits Section */}
      <BenefitsSection />
      <About></About>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        {/* This section will provide a step-by-step guide on how AuthChain works */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        {/* This section will display testimonials from users */}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        {/* This section will address frequently asked questions about AuthChain */}
      </section>

    </div>
  );
};

export default Home;
