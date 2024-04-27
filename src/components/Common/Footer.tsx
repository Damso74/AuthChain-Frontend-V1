// src/components/Common/Footer.jsx
import './Footer.css'; // Assurez-vous d'ajouter les styles correspondants

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer-links">
          <a href="/about">About</a>
          <a href="/docs">Documentation</a>
          <a href="/contact">Contact</a>
        </section>
        <section className="footer-open-source">
          <p>This project is open source. Contribute on <a href="https://github.com/authchain">GitHub</a>.</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
