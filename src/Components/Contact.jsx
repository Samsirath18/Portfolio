import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // ✅ le bon package pour Vite
import './Contact.css';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' ou 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setStatusType('error');
      setStatusMessage("❗ Tous les champs sont requis.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusType('error');
      setStatusMessage("❗ Adresse e-mail invalide.");
      return;
    }

    emailjs.sendForm(
  'service_6tlzfpt',          
  'template_phm51rd',         
  form.current,
  'GAdsPyTGhu3QCJhI2'         
)

    .then(() => {
      setStatusType('success');
      setStatusMessage("✅ Message envoyé avec succès !");
      form.current.reset();
    })
    .catch(() => {
      setStatusType('error');
      setStatusMessage("❌ Une erreur s'est produite. Réessayez.");
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Me Contacter</h2>
      <p className="section-subtitle">Une question ? Une collaboration ? N'hésitez pas à m’écrire.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form fade-in-up">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" rows="5" required></textarea>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>

      {statusMessage && (
        <div className={`form-message ${statusType}`}>
          {statusMessage}
        </div>
      )}
    </section>
  );
}

export default Contact;
