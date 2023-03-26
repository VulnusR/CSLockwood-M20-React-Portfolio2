import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header.js';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Footer from './Footer.js';
import './Styles/styles.css';

function App() {
  return (
    <Router>
      <div className="parentdiv">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
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