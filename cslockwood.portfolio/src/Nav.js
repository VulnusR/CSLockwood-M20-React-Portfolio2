import React from 'react';

function Nav() {
  return (
    <nav className='Navbar'>
      <button className="Nav-btn" link="#about-me">About Me</button>
      <button className="Nav-btn" link="#portfolio">Portfolio</button>
      <button className="Nav-btn" link="#contact">Contact</button>
      <button className="Nav-btn" link="#resume">Resume</button>
    </nav>
  );
}

  
export default Nav;