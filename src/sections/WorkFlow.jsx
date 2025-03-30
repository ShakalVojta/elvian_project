import React from 'react';
import '../styles/sections/WorkFlow.css';
import { Link } from 'react-router-dom';

const WorkFlow = () => {
  const products = [
    {
      id: 1,
      name: "Qubefy",
      subtitle: "Oceňování služeb a správa vyúčtování",
      description: "Vyspělá platforma pro účtování předplacených i zpětně hrazených služeb. Umožňuje zpoplatnit libovolně poskytované služby a vystavit zákazníkovi jediné vyúčtování za určité období.",
      features: [
        "Oceňování událostí",
        "Fakturace",
        "Správa vyúčtování",
        "Vymáhání pohledávek",
        "Exporty na míru zákazníka"
      ],
      link: "https://qubefy.com/?lang=cs",
      externalLink: true
    },
    {
      id: 2,
      name: "Outsourcing mzdového účetnictví",
      subtitle: "Komplexní zpracování mezd a personalistiky",
      description: "Převezmeme kompletní odpovědnost za mzdovou agendu vaší firmy, ušetříme vám čas i náklady.",
      features: [
        "Kompletní výpočet a zpracování mezd",
        "Generování výplatních pásek a hlášení institucím",
        "Komunikaci s úřady včetně zastupování při kontrolách",
        "Online reporting a nepřetržitý přístup k datům"
      ],
      link: "/tax-accounting",
      externalLink: false
    },
    {
      id: 3,
      name: "Sentio",
      subtitle: "Bezpečnost na základě biometrie",
      description: "Platforma pro vývoj produktů založených na biometrických technologiích pro potřeby zajištění bezpečnosti veřejného i soukromého sektoru. Navrhneme a dodáme kompletní řešení na klíč včetně technologických zařízení umožňujících monitorování určených oblastí a kontrolu přístupu.",
      features: [
        "Identifikace osob v obraze",
        "Porovnávání biometrických údajů",
        "Vyhledávání v registrech",
        "Otisky prstů",
        "Demografické analýzy",
        "Víceúrovňové zabezpečení"
      ]
    },
    {
      id: 4,
      name: "Service Desk",
      subtitle: "Zpracování incidentů a požadavků",
      description: "Service Desk je kompletní helpdesk systém založený na ITIL knihovně a je vhodný jako IT Service Management řešení pro velké organizace v soukromém i veřejném sektoru. Našich bohatých zkušeností můžete také využít formou konzultací během samotného implementačního projektu.",
      features: [
        "Reálné zkušenosti napříč sektory podnikání",
        "Procesní úpravy na míru",
        "Poradenství při implementaci změn",
        "Návrh stromu služeb",
        "ITIL v3"
      ]
    },
    {
      id: 5,
      name: "Outsourcing IT služeb",
      subtitle: "Komplexní IT podpora pro vaši firmu",
      description: "Kompletní outsourcing IT služeb pro plynulý chod IT systémů společnosti na základě přesné specifikace požadavků klientů. Přebíráme veškerou odpovědnost za provozované služby, včetně komunikace s třetími stranami.",
      features: [
        "Provoz firemních IT služeb (HW, SW, podpora)",
        "Expertní konzultace v oboru IT a telekomunikací",
        "Hosting (fyzický, virtuální – VMWare)",
        "Dodávky hardware a software",
        "Vývoj aplikací na míru"
      ]
    },
    {
      id: 6,
      name: "Komplexní síťová řešení",
      subtitle: "Spolehlivá infrastruktura pro vaše podnikání",
      description: "Nezávisle na druhu podnikání společnosti je síťová infrastruktura jedním z nejzásadnějších prvků efektivního IT prostředí. Naši IT profesionálové uzpůsobí dodávané síťové řešení vašim obchodním aktivitám a vytvoří základ pro nasazení nejnovějších technologií od předních dodavatelů síťových prvků. Jsme Value-Added distributor síťových prvků od společnosti Nokia.",
      features: [
        "Routing and switching",
        "Optimalizace WAN",
        "Voice Over IP (VOIP)",
        "Campus LAN řešení"
      ]
    }
  ];

  return (
    <section className="workflow-section" id='workflow'>
      <div className="container">
        <h2 className="section-title">Naše produkty a služby</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
              </div>
              <div className="product-body">
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <span className="bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {product.link && (
                  <div className="product-link">
                    {product.externalLink ? (
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        více o {product.name}
                      </a>
                    ) : (
                      <Link to={product.link}>
                        více o {product.name}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;