import React, { useState } from 'react';
import ReliabilityCard from '../components/ReliabilityCard';
import ReliabilityCardEnhanced from '../components/ReliabilityCardEnhanced';
import ReliabilityCardDemo from '../components/ReliabilityCardDemo';
import ReliabilityCardIntegration from '../components/ReliabilityCardIntegration';
import styles from './ReliabilityDemoPage.module.css';

const ReliabilityDemoPage = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic Card', component: <ReliabilityCard /> },
    { id: 'enhanced-fade', label: 'Enhanced (Fade)', component: <ReliabilityCardEnhanced animationType="fadeIn" /> },
    { id: 'enhanced-slide', label: 'Enhanced (Slide)', component: <ReliabilityCardEnhanced animationType="slideIn" /> },
    { id: 'demo', label: 'Interactive Demo', component: <ReliabilityCardDemo /> },
    { id: 'integration', label: 'Integration Guide', component: <ReliabilityCardIntegration /> }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reliability Card Animation Showcase</h1>
        <p className={styles.subtitle}>
          Explore different animation implementations for the Reliability section
        </p>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tabList}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.features}>
          <h3>Key Features</h3>
          <div className={styles.featureGrid}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReliabilityDemoPage;
