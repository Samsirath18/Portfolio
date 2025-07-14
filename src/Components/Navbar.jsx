import React from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="custom-navbar shadow-sm">
      <div className="navbar-container">
        <a href="#accueil" className="logo">Samsirath Sylla.dev</a>
        <ul className="nav-links">
          <li><a href="#accueil"><FaHome /> <span>Accueil</span></a></li>
          <li><a href="#apropos"><FaUser /> <span>À propos</span></a></li>
          <li><a href="#projets"><FaProjectDiagram /> <span>Projets</span></a></li>
          <li><a href="#contact"><FaEnvelope /> <span>Contact</span></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
