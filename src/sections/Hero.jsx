import React from 'react';
import '../styles/sections/Hero.css';
import HeroImage from '../assets/hero/airport-hall.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }} id='hero'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Automatizace mezd, dodávky Nokia technologií a komplexní IT řešení.</h1>
        <p className="hero-subtitle">
        Díky vlastním inovativním produktům a silnému partnerství s Nokií efektivně digitalizujeme firmy, modernizujeme jejich infrastrukturu a podporujeme dlouhodobý růst.
        </p>
        <div className="hero-buttons">
          <button 
            className="hero-cta primary" 
            onClick={() => scrollToSection('services')}
          >
            Naše služby
          </button>
          <button 
            className="hero-cta secondary" 
            onClick={() => scrollToSection('contact')}
          >
            Kontaktujte nás
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;