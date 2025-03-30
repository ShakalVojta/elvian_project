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
        <h1 className="hero-title">Profesionální IT služby a řešení pro váš byznys</h1>
        <p className="hero-subtitle">
          Od IT managementu a vývoje aplikací až po biometrické systémy a mzdové účetnictví. 
          S našimi komplexními službami získáte spolehlivého partnera pro růst vašeho podnikání.
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