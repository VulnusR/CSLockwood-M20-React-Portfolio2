import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <NavItem link="#about-me" text="About Me" />
        <NavItem link="#portfolio" text="Portfolio" />
        <NavItem link="#contact" text="Contact" />
        <NavItem link="#resume" text="Resume" />
      </ul>
    </nav>
  );
}

function NavItem(props) {
    return (
      <li>
        <a href={props.link}>{props.text}</a>
      </li>
    );
}
  
export default Nav;