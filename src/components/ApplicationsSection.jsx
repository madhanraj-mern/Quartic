import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import processOptimizerIcon from '../assets/images/home/solutions/icons/performance-improvement.svg';
import reliabilityIcon from '../assets/images/home/solutions/icons/predictive-maintenance.svg';
import batchMvdaIcon from '../assets/images/home/solutions/icons/batch-optimisation.svg';
import pdOptimizerIcon from '../assets/images/home/solutions/icons/quality-by-design.svg';
import automatedPatIcon from '../assets/images/home/solutions/icons/energy-utility-optimization.svg';

const StyledSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
  
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 2;
  }

  .sec_heading_wrap {
    text-align: center;
    margin-bottom: 60px;
    
    .tag_lightBlue {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 20px;
    }
    
    .h2_heading_text {
      font-size: 48px;
      font-weight: 600;
      line-height: 1.2;
      color: #000;
      margin: 0;
      letter-spacing: -0.02em;
      
      @media (max-width: 768px) {
        font-size: 36px;
      }
    }
  }

  .applications_group {
    display: flex;
    gap: 20px;
    margin-top: 60px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: 1200px) {
      gap: 16px;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      padding: 0 20px;
    }
    
    @media (max-width: 480px) {
      gap: 16px;
      padding: 0 16px;
    }
  }

  .applications_col {
    flex: 1;
    min-width: 200px;
    max-width: 240px;
    
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .application_card {
    position: relative;
    height: 100%;
    min-height: 320px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    user-select: none;
    
    @media (max-width: 768px) {
      min-height: 280px;
    }
    
    @media (max-width: 480px) {
      min-height: 260px;
    }
    
    &.highlighted {
      background: linear-gradient(135deg, #ff6a00 0%, #ff8a33 100%);
      color: white;
      transform: scale(1.05);
      box-shadow: 0 8px 30px rgba(255, 106, 0, 0.3);
      
      .icon_holder {
        background: rgba(255, 255, 255, 0.2);
      }
      
      .heading_text {
        color: white;
      }
      
      .application_card_description {
        color: rgba(255, 255, 255, 0.9);
        opacity: 1;
        transform: translateY(0);
        max-height: 200px;
        text-align: center;
      }
      
      .application_card_link {
        opacity: 1;
        transform: translateY(0);
        
        a {
          color: white;
        }
      }
    }
    
    &:hover {
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2) !important;
      z-index: 10;
      border: 2px solid #ff6a00 !important;
      
      .icon_holder {
        background: rgba(255, 106, 0, 0.2) !important;
      }
      
      .heading_text {
        color: #ff6a00 !important;
      }
      
      .application_card_description {
        color: #555555 !important;
      }
    }
    
    &.highlighted:hover {
      .heading_text {
        color: white;
      }
      
      .application_card_description {
        color: rgba(255, 255, 255, 0.9);
      }
      
      .application_card_link a {
        color: white;
      }
    }
  }

  .application_card_content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: transparent;
  }

  .application_card_top {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .icon_holder {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(255, 106, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    margin-bottom: 20px;
    
    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

  .heading_text {
    font-size: 1.2rem;
    line-height: 1.4;
    color: #333333;
    margin: 0 0 12px 0;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    transition: color 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    letter-spacing: -0.01em;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .application_card_description {
    position: relative;
    z-index: 1;
    margin: 0 0 20px 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #666666;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    max-height: none;
    overflow: visible;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    
    p {
      margin: 0;
    }
  }

  .application_card_link {
    position: relative;
    z-index: 1;
    margin-top: auto;
    padding-top: 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
    
    a {
      color: #ff6a00;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      
      &:hover {
        color: #e55a00;
      }
      
      svg {
        width: 16px;
        height: 16px;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      &:hover svg {
        transform: translateX(4px);
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #ff6a00;
        transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform-origin: left;
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }

  // Background decoration
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(241, 90, 41, 0.02) 0%, rgba(102, 126, 234, 0.02) 100%);
    pointer-events: none;
  }
`;

const ApplicationsSection = ({ homepage }) => {
  // Default applications data matching the live site exactly
  const defaultApplications = [
    {
      icon: processOptimizerIcon,
      title: 'Process Optimizer',
      description: 'AI-powered process control for yield, quality, and diagnostics.',
      ctaText: 'Learn More',
      ctaUrl: 'https://www.quartic.ai/process-optimizer',
      iconAlt: 'Process Optimizer icon'
    },
    {
      icon: reliabilityIcon,
      title: 'Reliability',
      description: 'Predictive failure detection to minimize downtime.',
      ctaText: 'Learn More',
      ctaUrl: 'https://www.quartic.ai/reliability',
      iconAlt: 'Reliability icon'
    },
    {
      icon: batchMvdaIcon,
      title: 'Batch MVDA',
      description: 'Multivariate insights across lab and plant data streams.',
      ctaText: 'Learn More',
      ctaUrl: 'https://www.quartic.ai/batch-mvda',
      iconAlt: 'Batch MVDA icon'
    },
    {
      icon: pdOptimizerIcon,
      title: 'PD Optimizer',
      description: 'In-silico optimization for faster product scale-up.',
      ctaText: 'Learn More',
      ctaUrl: 'https://www.quartic.ai/pd-optimizer',
      iconAlt: 'PD Optimizer icon'
    },
    {
      icon: automatedPatIcon,
      title: 'Automated PAT',
      description: 'Integrated analytics for continuous batch verification.',
      ctaText: 'Learn More',
      ctaUrl: 'https://www.quartic.ai/automated-pat',
      iconAlt: 'Automated PAT icon'
    }
  ];

  // Use Strapi data if available, otherwise use default data
  const sectionData = homepage?.applicationsSection;
  const applications = sectionData?.applications || defaultApplications;
  const sectionTitle = sectionData?.title || 'Transform Your Operations with Quartic';
  
  // Debug logging
  console.log('ApplicationsSection - homepage:', homepage);
  console.log('ApplicationsSection - sectionData:', sectionData);
  console.log('ApplicationsSection - applications:', applications);
  


  useEffect(() => {
    // Initialize AOS only if not already initialized
    if (!window.__AOS_INITIALIZED__) {
      AOS.init({ 
        duration: 800, 
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
      window.__AOS_INITIALIZED__ = true;
    }
    
    // Refresh AOS after component mounts to ensure animations work
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <StyledSection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec_heading_wrap text-center mb-4">
              <span className="tag_lightBlue lh-base tag-mb-20px">Applications</span>
              <motion.h2
                className="h2_heading_text fw-medium text-black"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {sectionTitle}
              </motion.h2>
            </div>
          </div>
        </div>

        <div className="applications_group">
          {applications.map((app, index) => {
            const isHighlighted = app.title === 'Reliability';
            const delays = [200, 300, 400, 500, 600];
            
            return (
              <div key={index} className="applications_col">
                <motion.div
                  className={`application_card ${isHighlighted ? 'highlighted' : ''}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={String(delays[index])}
                >
                  <div className="application_card_content">
                    <motion.div 
                      className="application_card_top"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index * 0.15) + 0.2 }}
                    >
                      <motion.div 
                        className="icon_holder"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={app.icon} 
                          alt={app.iconAlt || app.title} 
                          width="28" 
                          height="28" 
                          loading="lazy" 
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="heading_text"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.15) + 0.3 }}
                      >
                        {app.title}
                      </motion.h3>
                    </motion.div>
                    
                    <motion.p 
                      className="application_card_description"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.15) + 0.4 }}
                    >
                      {app.description}
                    </motion.p>
                    
                    <motion.div 
                      className="application_card_link"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.15) + 0.5 }}
                    >
                      <a href={app.ctaUrl}>
                        {app.ctaText}
                        <motion.svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </StyledSection>
  );
};

export default ApplicationsSection;