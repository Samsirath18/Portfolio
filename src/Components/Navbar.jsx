import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <a href="#accueil" className="logo">Samsirath Sylla.dev</a>

        <div className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={closeMenu}><a href="#accueil"><FaHome /> <span>Accueil</span></a></li>
          <li onClick={closeMenu}><a href="#apropos"><FaUser /> <span>À propos</span></a></li>
          <li onClick={closeMenu}><a href="#projets"><FaProjectDiagram /> <span>Projets</span></a></li>
          <li onClick={closeMenu}><a href="#contact"><FaEnvelope /> <span>Contact</span></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
