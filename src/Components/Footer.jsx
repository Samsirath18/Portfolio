import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2025 Samsirath. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="https://github.com/Samsirath18" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/samsirath-aladji-boni-s" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
