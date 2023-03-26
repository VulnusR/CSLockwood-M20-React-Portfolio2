import React from 'react';
import Header from './header.js';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Footer from './Footer.js';

import './Styles/styles.css';


function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume /> 
      <Footer />
    </div>
  );
}

export default App;