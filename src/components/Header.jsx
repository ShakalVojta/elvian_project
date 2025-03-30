import React, { useState, useEffect } from 'react';
import '../styles/components/Header.css';
import Logo from '../assets/logo/logo_elvian.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="/" onClick={(e) => scrollToSection('hero', e)}>
              <img src={Logo} alt="Elvian logo" />
            </a>
          </div>

          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#hero" className="nav-link" onClick={(e) => scrollToSection('hero', e)}>Úvod</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link" onClick={(e) => scrollToSection('services', e)}>Služby</a>
              </li>
              <li className="nav-item">
                <a href="#workflow" className="nav-link" onClick={(e) => scrollToSection('workflow', e)}>Produkty</a>
              </li>
              <li className="nav-item">
                <a href="#team-values" className="nav-link" onClick={(e) => scrollToSection('team-values', e)}>Jak pracujeme</a>
              </li>
              <li className="nav-item">
                <a href="#kontakt" className="nav-link" onClick={(e) => scrollToSection('contact', e)}>Kontakt</a>
              </li>
            </ul>
          </nav>

          <button className="menu-button" onClick={toggleMenu} aria-label="Open menu">
            <span className="menu-text">MENU</span>
            <div className="hamburger-icon">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <div className="logo">
            <a href="/" onClick={(e) => scrollToSection('hero', e)}>
              <img src={Logo} alt="Elvian logo" />
            </a>
          </div>

          <button className="close-button" onClick={toggleMenu} aria-label="Close menu">
            <span className="close-text">ZAVŘÍT</span>
            <div className="close-icon"></div>
          </button>
        </div>

        <nav className="menu-nav">
          <a href="#hero" className="menu-item" onClick={(e) => scrollToSection('hero', e)}>
            Úvod
            <div className="chevron-icon">
              <span className="chevron-line"></span>
              <span className="chevron-line"></span>
            </div>
          </a>
          <a href="#services" className="menu-item" onClick={(e) => scrollToSection('services', e)}>
            Služby
            <div className="chevron-icon">
              <span className="chevron-line"></span>
              <span className="chevron-line"></span>
            </div>
          </a>
          <a href="#team-values" className="menu-item" onClick={(e) => scrollToSection('team-values', e)}>
            Jak pracujeme
            <div className="chevron-icon">
              <span className="chevron-line"></span>
              <span className="chevron-line"></span>
            </div>
          </a>
          <a href="#workflow" className="menu-item" onClick={(e) => scrollToSection('workflow', e)}>
            Produkty
            <div className="chevron-icon">
              <span className="chevron-line"></span>
              <span className="chevron-line"></span>
            </div>
          </a>
          <a href="#kontakt" className="menu-item" onClick={(e) => scrollToSection('kontakt', e)}>
            Kontakt
          </a>
        </nav>
      </div>

      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </>
  );
};

export default Header;