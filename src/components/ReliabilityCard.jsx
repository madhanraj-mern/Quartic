import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ReliabilityCard.module.css';

const ReliabilityCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <motion.div
        ref={cardRef}
        className={styles.reliabilityCard}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
        whileHover={{
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <div className={styles.cardContent}>
          <div className={styles.iconContainer}>
            <img 
              src="/assets/images/home/solutions/icons/predictive-maintenance.svg" 
              alt="Reliability Icon" 
              className={styles.icon}
            />
          </div>
          
          <h3 className={styles.title}>Reliability</h3>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4
            }}
          >
            Predictive failure detection to minimize downtime.
          </motion.p>
          
          <motion.div 
            className={styles.linkContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.6
            }}
          >
            <a href="/reliability" className={styles.link}>
              Learn More
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
              >
                <path 
                  d="M4 8H12M12 8L8 4M12 8L8 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReliabilityCard;
