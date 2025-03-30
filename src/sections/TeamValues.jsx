import React, { useEffect } from 'react';
import { Icon } from '@mdi/react';
import * as mdi from '@mdi/js';
import '../styles/sections/TeamValues.css';

const TeamValues = () => {
  const values = [
    {
      id: 1,
      icon: mdi.mdiTarget,
      title: "Cílevědomě",
      description: "Promyšlená vize produktů a přesné plánování nám pomáhá plně využít potenciálu týmu a dosáhnout očekávaného cíle.",
      category: "approach"
    },
    {
      id: 2,
      icon: mdi.mdiRocketLaunch,
      title: "Rychle",
      description: "Týmová spolupráce, agilní řízení projektů a podpůrné nástroje typu Confluence a Jira nám pomáhají pracovat rychle a efektivně.",
      category: "approach"
    },
    {
      id: 3,
      icon: mdi.mdiLightbulbOn,
      title: "Účelně",
      description: "Testovací a provozní prostředí se snažíme zautomatizovat, škálovat a spravovat moderními nástroji Cucumber a Kubernetes.",
      category: "approach"
    },
    {
      id: 4,
      icon: mdi.mdiArmFlex,
      title: "Houževnatí",
      description: "Věci nemusí vždy vycházet podle plánu. My to ale nevzdáváme. Umíme se zakousnout.",
      category: "character"
    },
    {
      id: 5,
      icon: mdi.mdiAccountGroup,
      title: "Vytrvalí",
      description: "Přes všechny náročné pracovní a životní etapy jádro týmu stále drží pohromadě více než 10 let.",
      category: "character"
    },
    {
      id: 6,
      icon: mdi.mdiHandshake,
      title: "Spolehliví",
      description: "Nikdy jsme dohody a termíny neporušili. A nehodláme s tím začínat.",
      category: "character"
    }
  ];

  useEffect(() => {
    const tabs = document.querySelectorAll('.values-tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        
        this.classList.add('active');
        
        const filter = this.getAttribute('data-category');
        const cards = document.querySelectorAll('.value-card');
        
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, []);

  return (
    <section className="team-values-section" id='team-values'>
      <div className="values-container">
        <div className="values-header">
          <h2 className="values-title">Jak pracujeme a jací jsme</h2>
          <p className="values-subtitle">
            Naše přístupy k práci a firemní hodnoty jsou základem každého úspěšného projektu
          </p>
          
          <div className="values-tabs">
            <button className="values-tab active" data-category="all">
              Všechny hodnoty
            </button>
            <button className="values-tab" data-category="approach">
              Jak pracujeme
            </button>
            <button className="values-tab" data-category="character">
              Jací jsme
            </button>
          </div>
        </div>
        
        <div className="values-cards">
          {values.map(value => (
            <div 
              key={value.id} 
              className={`value-card ${value.category}`}
              data-category={value.category}
            >
              <div className="value-icon-container">
                <Icon 
                  path={value.icon}
                  size={1.5}
                  className={`value-icon ${value.category}-icon`}
                />
              </div>
              <div className="value-content">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamValues;