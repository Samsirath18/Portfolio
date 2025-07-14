import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <section id="accueil" className="accueil-section">
      <div className="accueil-content">
        <h1 className="accueil-title">
           <span className="highlight">ALADJI BONI S. Samsirath</span>
        </h1>
        <p className="accueil-subtitle">
          Développeuse Web & exploratrice d’expériences utilisateur — je conçois des interfaces qui marient design et efficacité.
        </p>
        <div className="accueil-buttons">
          <a href="https://github.com/Samsirath18" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/samsirath-aladji-boni-s" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
        </div>
      </div>
      <div className="accueil-illustration">
        {/* Ici tu peux mettre une image ou illustration svg */}
        <img src="/img/sam.jpg" alt="Illustration développeuse" />
      </div>
    </section>
  );
}

export default Accueil;
