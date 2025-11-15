import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container container">
        <h1 className="footer__title">Arpit Pandey</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/arpit-pandey-529406220/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="https://github.com/Arpit21345" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github"></i>
          </a>
          <a href="https://leetcode.com/u/Arpit21345/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-brackets-curly"></i>
          </a>
        </div>

        <div className="footer__contact">
          <div className="footer__contact-item">
            <i className="uil uil-envelope"></i>
            <a href="mailto:arpit21345j@gmail.com">arpit21345j@gmail.com</a>
          </div>
          <div className="footer__contact-item">
            <i className="uil uil-phone"></i>
            <a href="tel:+918090113505">+91 8090113505</a>
          </div>
        </div>

        <span className="footer__copy">
          &#169; Arpit Pandey. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
