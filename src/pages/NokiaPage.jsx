import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../assets/logo/logo_elvian.png';
import { Icon } from '@mdi/react';
import { mdiArrowUp, mdiCellphoneLink, mdiNetworkOutline, mdiServerNetwork, mdiSwapHorizontal, mdiDatabase } from '@mdi/js';
import '../styles/pages/NokiaPage.css';
import imageSrc from '../assets/nokia-page/nokia-page.webp';

const NokiaPage = () => {
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nokia-menu-open');
    } else {
      document.body.classList.remove('nokia-menu-open');
    }
    
    return () => {
      document.body.classList.remove('nokia-menu-open');
    };
  }, [menuOpen]);

  return (
    <>
      <header className="nokia-header">
        <div className="nokia-header-container">
          <div className="nokia-logo">
            <Link to="/">
              <img src={Logo} alt="Elvian logo" />
            </Link>
          </div>

          <nav className="nokia-desktop-nav">
            <ul className="nokia-nav-list">
              <li className="nokia-nav-item">
                <Link to="/" className="nokia-nav-link">Zpět na hlavní stránku</Link>
              </li>
              <li className="nokia-nav-item">
                <a href="#nokia-about" className="nokia-nav-link">O společnosti</a>
              </li>
              <li className="nokia-nav-item">
                <a href="#nokia-products" className="nokia-nav-link">Produkty</a>
              </li>
              <li className="nokia-nav-item">
                <a href="#nokia-why" className="nokia-nav-link">Proč Nokia</a>
              </li>
              <li className="nokia-nav-item">
                <a href="#nokia-kontakt" className="nokia-nav-link">Kontakt</a>
              </li>
            </ul>
          </nav>

          <button className="nokia-menu-button" onClick={toggleMenu} aria-label="Open menu">
            <span className="nokia-menu-text">MENU</span>
            <div className="nokia-hamburger-icon">
              <span className="nokia-hamburger-line"></span>
              <span className="nokia-hamburger-line"></span>
              <span className="nokia-hamburger-line"></span>
            </div>
          </button>
        </div>
      </header>

      <div className={`nokia-mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="nokia-menu-header">
          <div className="nokia-logo">
            <Link to="/">
              <img src={Logo} alt="Elvian logo" />
            </Link>
          </div>

          <button className="nokia-close-button" onClick={toggleMenu} aria-label="Close menu">
            <span className="nokia-close-text">ZAVŘÍT</span>
            <div className="nokia-close-icon"></div>
          </button>
        </div>

        <nav className="nokia-menu-nav">
          <Link to="/" className="nokia-menu-item" onClick={toggleMenu}>
            Zpět na hlavní stránku
          </Link>
          <a href="#nokia-about" className="nokia-menu-item" onClick={toggleMenu}>
            O společnosti
          </a>
          <a href="#nokia-products" className="nokia-menu-item" onClick={toggleMenu}>
            Produkty
          </a>
          <a href="#nokia-why" className="nokia-menu-item" onClick={toggleMenu}>
            Proč Nokia
          </a>
          <a href="#nokia-kontakt" className="nokia-menu-item" onClick={toggleMenu}>
            Kontakt
          </a>
        </nav>
      </div>

      <div className={`nokia-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <main className="nokia-page">

        <section className="nokia-hero">
          <div className="nokia-container">
            <h1>Portfolio společnosti Nokia</h1>
            <p className="nokia-hero-subtitle">Špičková síťová a telekomunikační řešení pro moderní podniky</p>
          </div>
        </section>
        
        <section className="nokia-about" id="nokia-about">
              <h2>V čem je Nokia skvělá a co to je za firmu?</h2>
          <div className="nokia-container flex-layout">
            <div className="nokia-about-content">
              <p>Nokia je globální leader v oblasti telekomunikačních technologií a síťových řešení, který již desítky let posouvá hranice inovací. Tato finská společnost, založená v roce 1865, se vypracovala z výrobce papíru na jednoho z nejvýznamnějších hráčů v digitálním světě.</p>
              
              <p>Dnes je Nokia synonymem pro špičkové technologie, které propojují lidi, stroje a zařízení po celém světě. Její síla spočívá v kombinaci pokročilých technologií, jako je 5G, optické sítě a datová centra, s důrazem na spolehlivost, bezpečnost a udržitelnost.</p>
              
              <p>Nokia pomáhá operátorům, podnikům i veřejnému sektoru zvyšovat produktivitu a připravovat se na budoucnost díky svému širokému portfoliu produktů a služeb.</p>
            </div>
          <div className="nokia-product-image">
        <img src={imageSrc} alt={`Produkt`} loading="lazy" />
      </div>
          </div>
        </section>
        
        <section className="nokia-products" id="nokia-products">
          <div className="nokia-container">
            <h2>Klíčové produkty a řešení</h2>
            
            <div className="nokia-product-grid">
              <div className="nokia-product-card">
                <div className="nokia-product-icon">
                  <Icon path={mdiCellphoneLink} size={2} />
                </div>
                <h3>Privátní 5G sítě</h3>
                <p>Privátní 5G sítě od Nokie představují revoluci v průmyslové konektivitě. Jsou navrženy pro podniky, jako jsou továrny, přístavy nebo logistické firmy, které potřebují rychlé, bezpečné a spolehlivé připojení.</p>
                <p>Tyto sítě nabízejí nízkou latenci a vysokou kapacitu, což umožňuje automatizaci, monitorování v reálném čase a nasazení technologií Industry 4.0. Nokia je průkopníkem v této oblasti a podporuje přechod na digitální budoucnost.</p>
              </div>
              
              <div className="nokia-product-card">
                <div className="nokia-product-icon">
                  <Icon path={mdiNetworkOutline} size={2} />
                </div>
                <h3>DWDM (Dense Wavelength Division Multiplexing)</h3>
                <p>DWDM je technologie optických sítí, která umožňuje přenos obrovského množství dat přes jediné optické vlákno. Nokia využívá tuto technologii k zajištění vysokokapacitních, dlouhých přenosových tras – od městských sítí až po podmořské kabely.</p>
                <p>Je ideální pro poskytovatele služeb a datová centra, kteří potřebují škálovatelnost a efektivitu při zachování nízké spotřeby energie.</p>
              </div>
              
              <div className="nokia-product-card">
                <div className="nokia-product-icon">
                  <Icon path={mdiSwapHorizontal} size={2} />
                </div>
                <h3>IP/MPLS (Internet Protocol/Multiprotocol Label Switching)</h3>
                <p>IP/MPLS řešení od Nokie zajišťují rychlé, bezpečné a flexibilní propojení sítí. Tato technologie se používá k řízení datového provozu v komplexních sítích, například pro mobilní backhaul, podnikové sítě nebo kritickou infrastrukturu.</p>
                <p>Nokia nabízí vysokou spolehlivost a automatizaci, díky čemuž mohou firmy optimalizovat své operace a snižovat náklady.</p>
              </div>
              
              <div className="nokia-product-card">
                <div className="nokia-product-icon">
                  <Icon path={mdiServerNetwork} size={2} />
                </div>
                <h3>GPON (Gigabit Passive Optical Network)</h3>
                <p>GPON je technologie pro vysokorychlostní připojení k internetu přes optická vlákna. Nokia ji využívá k poskytování ultraširokopásmového přístupu pro domácnosti, firmy i komunity.</p>
                <p>Tento systém je energeticky efektivní a umožňuje přenos dat, hlasu i videa s minimálními nároky na údržbu, což z něj činí základ budoucích pevných sítí.</p>
              </div>
              
              <div className="nokia-product-card">
                <div className="nokia-product-icon">
                  <Icon path={mdiDatabase} size={2} />
                </div>
                <h3>Datacentrová řešení</h3>
                <p>Nokia nabízí pokročilá datacentrová řešení, která podporují umělou inteligenci, cloudové služby a masivní datové toky. Její datové switche a optické propojení zajišťují vysokou hustotu, nízkou latenci a spolehlivost.</p>
                <p>Tyto systémy jsou navrženy pro moderní podniky, které chtějí využít potenciál AI a škálovat svou infrastrukturu od okraje sítě až po cloud.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="nokia-why" id="nokia-why">
          <div className="nokia-container">
            <h2>Proč si vybrat Nokia?</h2>
            
            <div className="nokia-why-content">
              <p>Nokia vyniká díky své schopnosti integrovat špičkové technologie do komplexních řešení, která jsou přizpůsobena potřebám zákazníků. Ať už jde o mobilní sítě, optickou přenosovou infrastrukturu nebo průmyslové aplikace, Nokia přináší inovace, které zvyšují efektivitu, bezpečnost a udržitelnost.</p>
              
              <p>S globální přítomností a dlouholetou tradicí je Nokia partnerem, který pomáhá budovat propojený svět budoucnosti.</p>
              
              <div className="nokia-benefits">
                <div className="nokia-benefit">
                  <h3>Inovace</h3>
                  <p>Desítky let zkušeností v posouvání hranic technologií</p>
                </div>
                
                <div className="nokia-benefit">
                  <h3>Komplexnost</h3>
                  <p>Široké portfolio řešení od mobilních sítí po datacentra</p>
                </div>
                
                <div className="nokia-benefit">
                  <h3>Spolehlivost</h3>
                  <p>Důraz na bezpečnost a vysokou dostupnost služeb</p>
                </div>
                
                <div className="nokia-benefit">
                  <h3>Udržitelnost</h3>
                  <p>Energeticky efektivní technologie šetrné k životnímu prostředí</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="nokia-cta" id="nokia-kontakt">
          <div className="nokia-container">
            <div className="nokia-cta-content">
              <h2>Transformujte svou síťovou infrastrukturu s Nokia a Elvian Technologies</h2>
              <p className="nokia-tagline">Získejte profesionální konzultaci a implementaci Nokia řešení</p>
              <a href="mailto:info@elvian.cz" className="nokia-cta-button">Kontaktujte nás</a>
            </div>
          </div>
        </section>
        
        {showScrollTop && (
          <button 
            className="nokia-scroll-top" 
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

export default NokiaPage;