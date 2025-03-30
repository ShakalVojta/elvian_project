import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../assets/logo/logo_elvian.png';
import { Icon } from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';
import '../styles/pages/TaxAccounting.css';

const TaxAccounting = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('tax-menu-open');
    } else {
      document.body.classList.remove('tax-menu-open');
    }
    
    return () => {
      document.body.classList.remove('tax-menu-open');
    };
  }, [menuOpen]);

  return (
    <>
      <header className="tax-acc-header">
        <div className="tax-acc-header-container">
          <div className="tax-acc-logo">
            <Link to="/">
              <img src={Logo} alt="Elvian logo" />
            </Link>
          </div>

          <nav className="tax-acc-desktop-nav">
            <ul className="tax-acc-nav-list">
              <li className="tax-acc-nav-item">
                <Link to="/" className="tax-acc-nav-link">Zpět na hlavní stránku</Link>
              </li>
              <li className="tax-acc-nav-item">
                <a href="#tax-sluzby" className="tax-acc-nav-link">Služby</a>
              </li>
              <li className="tax-acc-nav-item">
                <a href="#tax-jak-to-funguje" className="tax-acc-nav-link">Jak to funguje</a>
              </li>
              <li className="tax-acc-nav-item">
                <a href="#tax-proc-my" className="tax-acc-nav-link">Proč my</a>
              </li>
              <li className="tax-acc-nav-item">
                <a href="#tax-kontakt" className="tax-acc-nav-link">Kontakt</a>
              </li>
            </ul>
          </nav>

          <button className="tax-acc-menu-button" onClick={toggleMenu} aria-label="Open menu">
            <span className="tax-acc-menu-text">MENU</span>
            <div className="tax-acc-hamburger-icon">
              <span className="tax-acc-hamburger-line"></span>
              <span className="tax-acc-hamburger-line"></span>
              <span className="tax-acc-hamburger-line"></span>
            </div>
          </button>
        </div>
      </header>

      <div className={`tax-acc-mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="tax-acc-menu-header">
          <div className="tax-acc-logo">
            <Link to="/">
              <img src={Logo} alt="Elvian logo" />
            </Link>
          </div>

          <button className="tax-acc-close-button" onClick={toggleMenu} aria-label="Close menu">
            <span className="tax-acc-close-text">ZAVŘÍT</span>
            <div className="tax-acc-close-icon"></div>
          </button>
        </div>

        <nav className="tax-acc-menu-nav">
          <Link to="/" className="tax-acc-menu-item" onClick={toggleMenu}>
            Zpět na hlavní stránku
          </Link>
          <a href="#tax-sluzby" className="tax-acc-menu-item" onClick={toggleMenu}>
            Služby
          </a>
          <a href="#tax-jak-to-funguje" className="tax-acc-menu-item" onClick={toggleMenu}>
            Jak to funguje
          </a>
          <a href="#tax-proc-my" className="tax-acc-menu-item" onClick={toggleMenu}>
            Proč my
          </a>
          <a href="#tax-kontakt" className="tax-acc-menu-item" onClick={toggleMenu}>
            Kontakt
          </a>
        </nav>
      </div>

      <div className={`tax-acc-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <main className="tax-acc-page">
        <section className="tax-acc-hero">
          <div className="tax-acc-container">
            <h1>Outsourcing mzdového účetnictví a personální agendy od Elvian Technologies</h1>
            <p className="tax-acc-hero-subtitle">Kompletní správa mzdové a personální agendy vaší společnosti s využitím našeho inteligentního systému Artigo</p>
          </div>
        </section>
        
        <section className="tax-acc-intro">
          <div className="tax-acc-container">
            <div className="tax-acc-intro-content">
              <p>Společnost <strong>Elvian Technologies</strong> poskytuje profesionální a komplexní řešení outsourcingu mzdového účetnictví a personální agendy. Jsme nejen experti v oblasti mzdové problematiky, ale také zkušení softwaroví vývojáři. Náš jedinečný systém <strong>Artigo</strong>, který jsme sami vyvinuli, nabízí rychlou, bezpečnou a přesnou správu veškerých vašich mzdových a personálních procesů.</p>
              
              <p>Díky naší službě se budete moci plně soustředit na hlavní aktivity vaší společnosti a veškeré starosti s personálními a mzdovými záležitostmi přenechat profesionálům.</p>
            </div>
          </div>
        </section>
        
        <section className="tax-acc-services" id="tax-sluzby">
          <div className="tax-acc-container">
            <h2>Co naše služba obsahuje?</h2>
            
            <div className="tax-acc-service-grid">
              <div className="tax-acc-service-box">
                <h3>Outsourcing mzdového účetnictví</h3>
                <div className="tax-acc-service-list">
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Kompletní výpočet mezd z dodaných podkladů</p>
                  </div>
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Výpočet odvodů na sociální a zdravotní pojištění</p>
                  </div>
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Generování výplatních pásek a příkazů k úhradě</p>
                  </div>
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Elektronická komunikace s úřady</p>
                  </div>
                </div>
              </div>
              
              <div className="tax-acc-service-box">
                <h3>Personální outsourcing (HR agenda)</h3>
                <div className="tax-acc-service-list">
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Správa pracovně-právní dokumentace</p>
                  </div>
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Příprava pracovních smluv a dodatků</p>
                  </div>
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Evidence školení a lékařských prohlídek</p>
                  </div>
                  <div className="tax-acc-service-item">
                    <div className="tax-acc-service-bullet"></div>
                    <p>Správa zaměstnaneckých benefitů</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="tax-acc-how-it-works" id="tax-jak-to-funguje">
          <div className="tax-acc-container">
            <h2>Jak to funguje?</h2>
            
            <div className="tax-acc-process">
              <div className="tax-acc-process-step">
                <div className="tax-acc-step-number">1</div>
                <div className="tax-acc-step-content">
                  <h3>Audit současného stavu</h3>
                  <p>Provedeme detailní analýzu vašich současných interních procesů, zhodnotíme efektivitu používaných postupů a identifikujeme případná rizika nebo oblasti s potenciálem úspory.</p>
                </div>
              </div>
              
              <div className="tax-acc-process-step">
                <div className="tax-acc-step-number">2</div>
                <div className="tax-acc-step-content">
                  <h3>Navržení optimálního řešení</h3>
                  <p>Na základě výsledků auditu navrhneme konkrétní kroky a připravíme přehledný plán přechodu na náš systém Artigo.</p>
                </div>
              </div>
              
              <div className="tax-acc-process-step">
                <div className="tax-acc-step-number">3</div>
                <div className="tax-acc-step-content">
                  <h3>Implementace a spuštění služby</h3>
                  <p>Zajistíme hladký přechod od vašich interních systémů, nastavíme celý proces zpracování mezd a personální agendy podle vašich potřeb a poskytneme přístup do systému Artigo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="tax-acc-why-us" id="tax-proc-my">
          <div className="tax-acc-container">
            <h2>Proč právě my?</h2>
            
            <div className="tax-acc-benefits">
              <div className="tax-acc-benefit">
                <div className="tax-acc-benefit-icon">01</div>
                <h3>Moderní technologické řešení</h3>
                <p>Vlastní unikátní systém <strong>Artigo</strong>, který zajistí bezpečnost a efektivitu procesů.</p>
              </div>
              
              <div className="tax-acc-benefit">
                <div className="tax-acc-benefit-icon">02</div>
                <h3>Komplexní pokrytí</h3>
                <p>Zajišťujeme mzdovou i personální agendu pod jednou střechou.</p>
              </div>
              
              <div className="tax-acc-benefit">
                <div className="tax-acc-benefit-icon">03</div>
                <h3>Garance legislativní správnosti</h3>
                <p>Sledujeme aktuální legislativní změny za vás.</p>
              </div>
              
              <div className="tax-acc-benefit">
                <div className="tax-acc-benefit-icon">04</div>
                <h3>Individuální přístup</h3>
                <p>Přizpůsobíme se specifickým potřebám vaší společnosti.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="tax-acc-cta" id="tax-kontakt">
          <div className="tax-acc-container">
            <div className="tax-acc-cta-content">
              <h2>Přenechte svou mzdovou a personální agendu expertům</h2>
              <p className="tax-acc-tagline">Elvian Technologies – chytré řešení pro mzdy a personalistiku</p>
              <a href="mailto:info@elvian.cz" className="tax-acc-cta-button">Kontaktujte nás</a>
            </div>
          </div>
        </section>
        
        {showScrollTop && (
          <button 
            className="tax-acc-scroll-top" 
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <Icon path={mdiArrowUp} size={1} />
          </button>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default TaxAccounting;