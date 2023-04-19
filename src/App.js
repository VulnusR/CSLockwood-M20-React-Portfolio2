import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/header.js';
import AboutMe from './componets/AboutMe.js';
import Portfolio from './componets/Portfolio.js';
import Contact from './componets/Contact.js';
import Resume from './componets/Resume.js';
import Footer from './componets/Footer.js';
import './assets/styles.css';

function App() {
  return (
    <Router>
      <div className="parentdiv">
        <Header />
        <Routes>
          <Route path="/CSLockwood-M20-React-Portfolio2/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;