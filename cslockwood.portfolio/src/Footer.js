import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
      <footer className = "Footer-Box">
        <ul>
          <li>
            <a href="https://github.com/VulnusR">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caleb-lockwood-3106a0236/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/VulnusR">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </footer>
    );
}
  
export default Footer;
