import React from 'react';
import Navbar from './Components/Navbar';
import Accueil from './Components/Accueil';
import Apropos from './components/Apropos';
import Projets from './Components/Projets';
import Contact from './Components/Contact';
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
