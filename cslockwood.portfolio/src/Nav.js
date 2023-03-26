import React from 'react';
import { Link } from 'react-router-dom';

function NavItem(props) {
  return (
    <li>
      <Link to={props.path}>
        <button className="Nav-btn">
          {props.text}
        </button>
      </Link>
    </li>
  );
}

function Nav() {
  return (
    <nav className='Navbar' style={{ listStyleType: 'none' }}>
        <NavItem path="/" text="About Me" />
        <NavItem path="/portfolio" text="Portfolio" />
        <NavItem path="/contact" text="Contact" />
        <NavItem path="/resume" text="Resume" />
    </nav>
  );
}

  
export default Nav;