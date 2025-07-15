import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Accueil from "./Components/Accueil.jsx";
import Footer from "./Components/Footer.jsx";
import Projets from "./Components/Projets.jsx";
import Contact from './Components/Contact.jsx';
import Apropos from './Components/Apropos.jsx'; 
import Navbar from './Components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
