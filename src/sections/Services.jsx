import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sections/Services.css';
import Monetization from '../assets/services/qubify.png'
import Itservice from '../assets/services/itservice.jpg'
import Biometrics from '../assets/services/bio-photo.png'
import Devfactory from '../assets/services/devfactory.jpg'
import Consultancy from '../assets/services/consultancy.jpg'
import Goverment from '../assets/services/government_pse.jpg'

const Services = () => {
  const services = [
    {
      id: 5,
      title: "Mzdová agenda",
      description: "Poskytujeme kompletní outsourcing a automatizaci mzdového účetnictví. S našimi chytrými řešeními šetříte čas, náklady a eliminujete chyby.",
      image: Consultancy,
      link: "#workflow",
      serviceId: "payroll"
    },
    {
      id: 1,
      title: "Monetizace",
      description: "Oceňujeme služby a události podle variabilních oceňovacích pravidel a poskytujeme konsolidovaný pohled na zákaznické účty a vyúčtování.",
      image: Monetization,
      link: "#workflow",
      serviceId: "monetization"
    },
    {
      id: 2,
      title: "Správa IT služeb",
      description: "Zaměřujeme se na zvýšení efektivity, kvality a hospodárnosti IT služeb v soukromém i veřejném sektoru.",
      image: Itservice,
      link: "#workflow",
      serviceId: "itservice"
    },
    {
      id: 3,
      title: "Biometrie",
      description: "Pomáháme zajistit bezpečnost monitorované oblasti pomocí technologií jedinečných biologických charakteristik subjektů.",
      image: Biometrics,
      link: "#workflow",
      serviceId: "biometrics"
    },
    {
      id: 4,
      title: "DevFactory",
      description: "Zrealizujeme vaše nápady a vize vlastních aplikací do jejich funkční podoby.",
      image: Devfactory,
      link: "#workflow",
      serviceId: "devfactory"
    },
    {
      id: 6,
      title: "eGovernment",
      description: "Pomáháme s implementací IT řešení ve veřejném sektoru a s digitalizací státní správy.",
      image: Goverment,
      link: "#workflow",
      serviceId: "egovernment"
    }
  ];

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section" id='services'>
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">S čím vám pomůžeme</h2>
          <p className="services-description">
            Zajistíme pro vás široké spektrum služeb od analýzy požadavků a potřeb, přes návrh a design řešení, samotnou
            implementaci včetně provozu, podpory a konzultačních činností v následujících oblastech:
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <a 
              key={service.id} 
              href={service.link} 
              className="service-card"
              onClick={(e) => scrollToSection(service.serviceId, e)}
            >
              <div 
                className="service-bg" 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;