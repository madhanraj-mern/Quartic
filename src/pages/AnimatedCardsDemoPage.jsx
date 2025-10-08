import React, { useState } from 'react';
import ProcessOptimizerCard from '../components/ProcessOptimizerCard';
import ReliabilityCardNew from '../components/ReliabilityCardNew';
import BatchMVDACard from '../components/BatchMVDACard';
import PDOptimizerCard from '../components/PDOptimizerCard';
import AutomatedPATCard from '../components/AutomatedPATCard';
import AnimatedCardsShowcase from '../components/AnimatedCardsShowcase';
import styles from './AnimatedCardsDemoPage.module.css';

const AnimatedCardsDemoPage = () => {
  const [activeTab, setActiveTab] = useState('showcase');

  const tabs = [
    { 
      id: 'showcase', 
      label: 'Showcase', 
      component: <AnimatedCardsShowcase />,
      description: 'Interactive showcase with animation controls'
    },
    { 
      id: 'process-optimizer', 
      label: 'Process Optimizer', 
      component: <ProcessOptimizerCard animationType="fadeIn" />,
      description: 'AI-powered process control with gear icon'
    },
    { 
      id: 'reliability', 
      label: 'Reliability', 
      component: <ReliabilityCardNew animationType="slideIn" />,
      description: 'Predictive failure detection with graph icon'
    },
    { 
      id: 'batch-mvda', 
      label: 'Batch MVDA', 
      component: <BatchMVDACard animationType="fadeIn" />,
      description: 'Multivariate insights with bar chart icon'
    },
    { 
      id: 'pd-optimizer', 
      label: 'PD Optimizer', 
      component: <PDOptimizerCard animationType="slideIn" />,
      description: 'In-silico optimization with calculator icon'
    },
    { 
      id: 'automated-pat', 
      label: 'Automated PAT', 
      component: <AutomatedPATCard animationType="fadeIn" />,
      description: 'Integrated analytics with test tube icon'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Animated Cards Demo</h1>
        <p className={styles.subtitle}>
          Explore all five animated sections with smooth animations and hover effects
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
              <span className={styles.tabLabel}>{tab.label}</span>
              <span className={styles.tabDescription}>{tab.description}</span>
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.implementationInfo}>
          <h3>Implementation Details</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h4>🎨 Animation Types</h4>
              <ul>
                <li>Fade In: translateY(20px) → translateY(0)</li>
                <li>Slide In: translateX(-100%) → translateX(0)</li>
                <li>Hover: translateY(-5px) + enhanced shadow</li>
              </ul>
            </div>
            <div className={styles.infoItem}>
              <h4>🎯 Color Scheme</h4>
              <ul>
                <li>Text: #333333 (dark grey)</li>
                <li>Background: #ffffff (white)</li>
                <li>Shadow: rgba(0, 0, 0, 0.1)</li>
                <li>Accent: #ff6a00 (orange)</li>
              </ul>
            </div>
            <div className={styles.infoItem}>
              <h4>📱 Responsive Design</h4>
              <ul>
                <li>Mobile-first approach</li>
                <li>Touch-friendly interactions</li>
                <li>Optimized spacing</li>
                <li>Flexible layouts</li>
              </ul>
            </div>
            <div className={styles.infoItem}>
              <h4>♿ Accessibility</h4>
              <ul>
                <li>Reduced motion support</li>
                <li>Keyboard navigation</li>
                <li>High contrast mode</li>
                <li>Screen reader friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardsDemoPage;
