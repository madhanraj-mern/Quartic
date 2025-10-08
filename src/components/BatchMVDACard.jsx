import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './BatchMVDACard.module.css';

const BatchMVDACard = ({ animationType = 'fadeIn' }) => {
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

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: animationType === 'fadeIn' ? 20 : 0,
      x: animationType === 'slideIn' ? -100 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x: animationType === 'slideIn' ? -50 : 0,
      y: animationType === 'fadeIn' ? 20 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        ref={cardRef}
        className={styles.batchMVDACard}
        variants={cardVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        whileHover={{
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <motion.div 
          className={styles.cardContent}
          variants={contentVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className={styles.iconContainer}>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <rect x="7" y="7" width="3" height="10" fill="currentColor"/>
              <rect x="11" y="11" width="3" height="6" fill="currentColor"/>
              <rect x="15" y="9" width="3" height="8" fill="currentColor"/>
            </svg>
          </div>
          
          <h3 className={styles.title}>Batch MVDA</h3>
          
          <motion.p 
            className={styles.description}
            variants={descriptionVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            Multivariate insights across lab and plant data streams.
          </motion.p>
          
          <motion.div 
            className={styles.linkContainer}
            variants={linkVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <a href="/batch-mvda" className={styles.link}>
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BatchMVDACard;
