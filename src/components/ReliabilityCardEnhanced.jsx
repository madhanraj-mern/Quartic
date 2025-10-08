import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ReliabilityCardEnhanced.module.css';

const ReliabilityCardEnhanced = ({ animationType = 'fadeIn' }) => {
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
        className={styles.reliabilityCard}
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
            <img 
              src="/assets/images/home/solutions/icons/predictive-maintenance.svg" 
              alt="Reliability Icon" 
              className={styles.icon}
            />
          </div>
          
          <h3 className={styles.title}>Reliability</h3>
          
          <motion.p 
            className={styles.description}
            variants={descriptionVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            Predictive failure detection to minimize downtime.
          </motion.p>
          
          <motion.div 
            className={styles.linkContainer}
            variants={linkVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReliabilityCardEnhanced;
