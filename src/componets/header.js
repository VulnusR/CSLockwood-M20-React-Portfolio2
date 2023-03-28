import React from 'react';
import Nav from './Nav';

function Header() {
    return (
      <header className='Main-Header'>
        <h1 className='header-title'>CS Lockwood</h1>
        <Nav />
      </header>
    );
}
  
export default Header;