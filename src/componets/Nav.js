import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavItem(props) {
  const location = useLocation();

  // check if the current location matches the NavItem path
  const isActive = location.pathname === props.path;

  // add the active class if the NavItem is active
  const buttonClass = isActive ? "Nav-btn-active" : "Nav-btn";
  
  return (
    <li>
      <Link to={props.path}>
        <button className={buttonClass}>
          {props.text}
        </button>
      </Link>
    </li>
  );
}

function Nav() {
  return (
    <nav className='Navbar' style={{ listStyleType: 'none' }}>
        <NavItem path="/CSLockwood-M20-React-Portfolio2/" text="About Me" />
        <NavItem path="/portfolio" text="Portfolio" />
        <NavItem path="/contact" text="Contact" />
        <NavItem path="/resume" text="Resume" />
    </nav>
  );
}

  
export default Nav;