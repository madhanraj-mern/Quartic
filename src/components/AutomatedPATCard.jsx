import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AutomatedPATCard.module.css';

const AutomatedPATCard = ({ animationType = 'fadeIn' }) => {
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
        className={styles.automatedPATCard}
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
              <path 
                d="M9 2V6H7V8H9V10H7V12H9V14H7V16H9V18H7V20H9V22H11V20H13V18H11V16H13V14H11V12H13V10H11V8H13V6H11V2H9Z" 
                fill="currentColor"
              />
              <path 
                d="M15 6H17V8H15V6Z" 
                fill="currentColor"
              />
              <path 
                d="M15 10H17V12H15V10Z" 
                fill="currentColor"
              />
              <path 
                d="M15 14H17V16H15V14Z" 
                fill="currentColor"
              />
              <path 
                d="M15 18H17V20H15V18Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          <h3 className={styles.title}>Automated PAT</h3>
          
          <motion.p 
            className={styles.description}
            variants={descriptionVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            Integrated analytics for continuous batch verification.
          </motion.p>
          
          <motion.div 
            className={styles.linkContainer}
            variants={linkVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <a href="/automated-pat" className={styles.link}>
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

export default AutomatedPATCard;
