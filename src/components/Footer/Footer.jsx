import React from 'react'
import './Footer.css'
import { color } from 'framer-motion'
function Footer({ darkMode }) {
  return (
    <footer
      style={
        // { background: darkMode ? "#1b1000" : "#d4d2ea" },
        { color: darkMode ? "#f0ebeb" : "#000000" }
      }
    >
      <div className="footer-container">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/rajan-sapkota-88b95a18b/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/thisisrajansapkota" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        &copy; copyright all rights reserved. <h1 className="heart">❤️</h1>
      </div>
    </footer>
  );
}

export default Footer