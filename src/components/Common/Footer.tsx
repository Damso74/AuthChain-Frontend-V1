// src/components/Common/Footer.tsx
import { Link } from 'react-router-dom';
import './Footer.css'; // Assurez-vous d'ajouter les styles correspondants

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/docs">Documentation</Link>
          <Link to="/contact">Contact</Link>
        </section>
        <section className="footer-open-source">
          <p>This project is open source. Contribute on <a href="https://github.com/Damso74/AuthChain-Frontend-V1.git" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
