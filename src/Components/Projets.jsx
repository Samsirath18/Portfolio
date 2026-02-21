import React from 'react';
import './Projets.css';

const projets = [
 {
    titre: 'Consultation & Enquête',
    description: "Projet construit avec React et des animations modernes.",
    image: '/img/consultation.png',
    github: 'https://github.com/Samsirath18/agent-enqueteur',
    demo: 'https://agent-enqueteur.vercel.app/',
  },
  {
    titre: 'EtudiRoom',
    description: "Site vitrine développé avec WordPress et Elementor pour faciliter la location de logements étudiants.",
    image: '/img/etudie.png',
    demo: 'https://samsirath.dclic-pk.com/',
  },
  {
    titre: 'Portfolio personnel',
    description: "Mon portfolio construit avec React et des animations modernes.",
    image: '/img/boni.png',
    github: 'https://github.com/Samsirath18/Portfolio',
    demo: 'https://monportfo.netlify.app/',
  },

];

function Projets() {
  return (
    <section id="projets" className="projets-section">
      <h2 className="section-title">Mes Projets</h2>
      <div className="projets-grid">
        {projets.map((projet, i) => (
          <div key={i} className="projet-card fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
            <img src={projet.image} alt={projet.titre} className="projet-image" />
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="btn-group">
              {projet.github && (
                <a href={projet.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
              )}
              {projet.demo && (
                <a href={projet.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Démo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;
