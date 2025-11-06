// Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out or follow me on these platforms.</p>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="mailto:yourmail@example.com"><FaEnvelope /></a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} CodingWitAhad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
