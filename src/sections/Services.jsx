import React from 'react';
import '../styles/sections/Services.css';
import Monetization from '../assets/services/monetization.jpg'
import Itservice from '../assets/services/itservice.jpg'
import Biometrics from '../assets/services/biometrics.jpg'
import Devfactory from '../assets/services/devfactory.jpg'
import Consultancy from '../assets/services/consultancy.jpg'
import Goverment from '../assets/services/government_pse.jpg'
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Monetization",
      description: "Oceňujeme služby a události podle variabilních oceňovacích pravidel a poskytujeme konsolidovaný pohled na zákaznické účty a vyúčtování.",
      image: Monetization
    },
    {
      id: 2,
      title: "IT Service Management",
      description: "Zaměřujeme se na zvýšení efektivity, kvality a hospodárnosti IT služeb v soukromém i veřejném sektoru.",
      image: Itservice
    },
    {
      id: 3,
      title: "Biometrics",
      description: "Pomáháme zajistit bezpečnost monitorované oblasti pomocí technologií jedinečných biologických charakteristik subjektů.",
      image: Biometrics
    },
    {
      id: 4,
      title: "DevFactory",
      description: "Zrealizujeme vaše nápady a vize vlastních aplikací do jejich funkční podoby.",
      image: Devfactory
    },
    {
      id: 5,
      title: "Payroll",
      description: "Poskytujeme kompletní outsourcing a automatizaci mzdového účetnictví. S našimi chytrými řešeními šetříte čas, náklady a eliminujete chyby.",
      image: Consultancy
    },
    {
      id: 6,
      title: "eGovernment",
      description: "Pomáháme s implementací IT řešení ve veřejném sektoru a s digitalizací státní správy.",
      image: Goverment
    }
  ];

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
            <div key={service.id} className="service-card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;