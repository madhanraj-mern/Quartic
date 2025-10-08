import React, { useState } from 'react';
import ReliabilityCard from './ReliabilityCard';
import ReliabilityCardEnhanced from './ReliabilityCardEnhanced';
import styles from './ReliabilityCardDemo.module.css';

const ReliabilityCardDemo = () => {
  const [animationType, setAnimationType] = useState('fadeIn');

  return (
    <div className={styles.demoContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reliability Card Animation Demo</h1>
        <p className={styles.subtitle}>
          Choose an animation type to see different effects
        </p>
        
        <div className={styles.controls}>
          <button 
            className={`${styles.button} ${animationType === 'fadeIn' ? styles.active : ''}`}
            onClick={() => setAnimationType('fadeIn')}
          >
            Fade In Animation
          </button>
          <button 
            className={`${styles.button} ${animationType === 'slideIn' ? styles.active : ''}`}
            onClick={() => setAnimationType('slideIn')}
          >
            Slide In Animation
          </button>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardSection}>
          <h2 className={styles.sectionTitle}>Basic Card</h2>
          <ReliabilityCard />
        </div>

        <div className={styles.cardSection}>
          <h2 className={styles.sectionTitle}>Enhanced Card ({animationType})</h2>
          <ReliabilityCardEnhanced animationType={animationType} />
        </div>
      </div>

      <div className={styles.features}>
        <h3 className={styles.featuresTitle}>Animation Features</h3>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <h4>Fade In Effect</h4>
            <p>Card fades in from bottom with smooth opacity transition</p>
          </div>
          <div className={styles.feature}>
            <h4>Slide In Effect</h4>
            <p>Card slides in from left with smooth position transition</p>
          </div>
          <div className={styles.feature}>
            <h4>Hover Effects</h4>
            <p>Card lifts up on hover with enhanced shadow</p>
          </div>
          <div className={styles.feature}>
            <h4>Responsive Design</h4>
            <p>Animations work smoothly on all screen sizes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReliabilityCardDemo;
