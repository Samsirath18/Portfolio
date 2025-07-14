import React from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
