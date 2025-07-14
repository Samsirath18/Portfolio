import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Me Contacter</h2>
      <p className="section-subtitle">Une question ? Une collaboration ? N'hésitez pas à m’écrire.</p>
      <form className="contact-form fade-in-up">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" rows="5" required></textarea>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
