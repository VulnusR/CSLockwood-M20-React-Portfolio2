import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
      <footer className = "Footer-Box">
        <ul className = "Footer-content-Parent">
          <li className='icon'>
            <a href="https://github.com/VulnusR">
              <FaGithub className='iconcolor' />
            </a>
          </li>
          <li className='icon'>
            <a href="https://www.linkedin.com/in/caleb-lockwood-3106a0236/" >
              <FaLinkedin className='iconcolor' />
            </a>
          </li>
          <li className='icon'>
            <a href="https://twitter.com/VulnusR" >
              <FaTwitter className='iconcolor' />
            </a>
          </li>
        </ul>
      </footer>
    );
}
  
export default Footer;
