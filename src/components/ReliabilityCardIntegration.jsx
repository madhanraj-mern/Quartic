import React from 'react';
import ReliabilityCard from './ReliabilityCard';
import ReliabilityCardEnhanced from './ReliabilityCardEnhanced';
import styles from './ReliabilityCardIntegration.module.css';

const ReliabilityCardIntegration = () => {
  return (
    <div className={styles.integrationContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Reliability Solutions</h2>
        <p className={styles.sectionDescription}>
          Choose the animation style that best fits your design needs
        </p>
        
        <div className={styles.cardsGrid}>
          {/* Basic Card */}
          <div className={styles.cardWrapper}>
            <h3 className={styles.cardTitle}>Basic Animation</h3>
            <ReliabilityCard />
          </div>
          
          {/* Enhanced Card with Fade In */}
          <div className={styles.cardWrapper}>
            <h3 className={styles.cardTitle}>Enhanced - Fade In</h3>
            <ReliabilityCardEnhanced animationType="fadeIn" />
          </div>
          
          {/* Enhanced Card with Slide In */}
          <div className={styles.cardWrapper}>
            <h3 className={styles.cardTitle}>Enhanced - Slide In</h3>
            <ReliabilityCardEnhanced animationType="slideIn" />
          </div>
        </div>
        
        <div className={styles.usageInfo}>
          <h4>Usage Instructions:</h4>
          <ul>
            <li>Copy the component files to your project</li>
            <li>Import and use <code>ReliabilityCard</code> for basic animations</li>
            <li>Import and use <code>ReliabilityCardEnhanced</code> for advanced animations</li>
            <li>Set <code>animationType="fadeIn"</code> or <code>animationType="slideIn"</code></li>
            <li>Customize colors and styles in the CSS modules</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReliabilityCardIntegration;
