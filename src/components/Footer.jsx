import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import '../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h2 className="footer-title">Elvian Technologies</h2>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:info@elvian.cz" className="contact-value">info@elvian.cz</a>
              </div>
              <div className="footer-contact-item">
                <span className="contact-label">Telefon</span>
                <a href="tel:731462048" className="contact-value">731 462 048</a>
              </div>
              <div className="footer-contact-item">
                <span className="contact-label">Datová schránka</span>
                <span className="contact-value">v27v499</span>
              </div>
              <div className="footer-social">
                <a href="https://linkedin.com/company/elvian-technologies" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Icon path={mdiLinkedin} size={1.2} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Adresa sídla</h3>
            <div className="footer-address">
              <p>Elvian Technologies s.r.o.</p>
              <p>Na Folimance 2155/15</p>
              <p>120 00 Praha 2 - Vinohrady</p>
              <p>IČ: 06641288</p>
              <p>DIČ: CZ06641288</p>
              <p>Číslo účtu: 5078415399/0800</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Elvian Technologies s.r.o.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;