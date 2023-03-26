import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;