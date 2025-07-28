import React from 'react';
import './Apropos.css';
import { FaReact, FaWordpress, FaBootstrap, FaCss3Alt } from 'react-icons/fa';

function Apropos() {
  return (
    <section id="apropos" className="apropos-section">
      <div className="apropos-container">
        <div className="apropos-text fade-in-left">
          <h2 className="section-title">À propos de moi</h2>
          <p>
            Je suis <strong>Samsirath</strong>,développeuse web avec une âme de sociologue.
Entre empathie et logique, je conçois des interfaces digitales esthétiques, utiles et inclusives.
Que ce soit avec du code ou des outils no-code, je cherche toujours à créer un web vivant, humain, et orienté résultat.

Pour moi, chaque projet est une opportunité de bâtir un pont entre design, accessibilité et impact.
          </p>
          <p className="competences-title">Mes compétences principales :</p>
          <ul className="competences-list">
            <li><FaReact className="icon"/> React</li>
            <li><FaWordpress className="icon" /> WordPress</li>
            <li><FaBootstrap className="icon" /> Bootstrap</li>
            <li><FaCss3Alt className="icon" /> CSS Moderne</li>
          </ul>
        </div>
        <div className="apropos-photo fade-in-right">
          <img src="/img/sam.jpg" alt="Samsirath" />
        </div>
      </div>
    </section>
  );
}

export default Apropos;
