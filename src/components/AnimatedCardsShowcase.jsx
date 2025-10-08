import React, { useState } from 'react';
import ProcessOptimizerCard from './ProcessOptimizerCard';
import ReliabilityCardNew from './ReliabilityCardNew';
import BatchMVDACard from './BatchMVDACard';
import PDOptimizerCard from './PDOptimizerCard';
import AutomatedPATCard from './AutomatedPATCard';
import styles from './AnimatedCardsShowcase.module.css';

const AnimatedCardsShowcase = () => {
  const [animationType, setAnimationType] = useState('fadeIn');
  const [activeCard, setActiveCard] = useState('all');

  const cards = [
    {
      id: 'process-optimizer',
      title: 'Process Optimizer',
      description: 'AI-powered process control for yield, quality, and diagnostics.',
      component: ProcessOptimizerCard,
      icon: '⚙️'
    },
    {
      id: 'reliability',
      title: 'Reliability',
      description: 'Predictive failure detection to minimize downtime.',
      component: ReliabilityCardNew,
      icon: '📊'
    },
    {
      id: 'batch-mvda',
      title: 'Batch MVDA',
      description: 'Multivariate insights across lab and plant data streams.',
      component: BatchMVDACard,
      icon: '📈'
    },
    {
      id: 'pd-optimizer',
      title: 'PD Optimizer',
      description: 'In-silico optimization for faster product scale-up.',
      component: PDOptimizerCard,
      icon: '🧮'
    },
    {
      id: 'automated-pat',
      title: 'Automated PAT',
      description: 'Integrated analytics for continuous batch verification.',
      component: AutomatedPATCard,
      icon: '🧪'
    }
  ];

  const renderCard = (card) => {
    const CardComponent = card.component;
    return (
      <div key={card.id} className={styles.cardWrapper}>
        <CardComponent animationType={animationType} />
      </div>
    );
  };

  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Animated Cards Showcase</h1>
        <p className={styles.subtitle}>
          Explore all five animated sections with smooth fade-in and slide-in effects
        </p>
        
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label className={styles.label}>Animation Type:</label>
            <div className={styles.buttonGroup}>
              <button 
                className={`${styles.button} ${animationType === 'fadeIn' ? styles.active : ''}`}
                onClick={() => setAnimationType('fadeIn')}
              >
                Fade In
              </button>
              <button 
                className={`${styles.button} ${animationType === 'slideIn' ? styles.active : ''}`}
                onClick={() => setAnimationType('slideIn')}
              >
                Slide In
              </button>
            </div>
          </div>
          
          <div className={styles.controlGroup}>
            <label className={styles.label}>View:</label>
            <div className={styles.buttonGroup}>
              <button 
                className={`${styles.button} ${activeCard === 'all' ? styles.active : ''}`}
                onClick={() => setActiveCard('all')}
              >
                All Cards
              </button>
              <button 
                className={`${styles.button} ${activeCard === 'grid' ? styles.active : ''}`}
                onClick={() => setActiveCard('grid')}
              >
                Grid View
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {activeCard === 'all' ? (
          <div className={styles.cardsContainer}>
            {cards.map((card) => (
              <div key={card.id} className={styles.cardSection}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{card.icon}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
                {renderCard(card)}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.gridContainer}>
            {cards.map((card) => (
              <div key={card.id} className={styles.gridCard}>
                <div className={styles.gridCardHeader}>
                  <span className={styles.gridCardIcon}>{card.icon}</span>
                  <h3 className={styles.gridCardTitle}>{card.title}</h3>
                </div>
                {renderCard(card)}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.features}>
        <h3 className={styles.featuresTitle}>Animation Features</h3>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <h4>🎨 Smooth Animations</h4>
            <p>Fade-in and slide-in effects with optimized performance</p>
          </div>
          <div className={styles.feature}>
            <h4>📱 Responsive Design</h4>
            <p>Works perfectly on all screen sizes and devices</p>
          </div>
          <div className={styles.feature}>
            <h4>♿ Accessibility</h4>
            <p>Supports reduced motion and keyboard navigation</p>
          </div>
          <div className={styles.feature}>
            <h4>🎯 Hover Effects</h4>
            <p>Engaging interactions with smooth transitions</p>
          </div>
          <div className={styles.feature}>
            <h4>🎪 Icon Animations</h4>
            <p>Custom SVG icons with hover animations</p>
          </div>
          <div className={styles.feature}>
            <h4>⚡ Performance</h4>
            <p>Hardware-accelerated animations for 60fps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardsShowcase;
