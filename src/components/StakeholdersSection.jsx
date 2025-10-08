import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useStrapiData from '../hooks/useStrapiData';

// Import stakeholder images
import processEngineerImg from '../assets/images/home/roles_main_slider_img.jpg';
import dataAnalystImg from '../assets/images/about/people/about_people_item_img2.jpg';
import qualityComplianceImg from '../assets/images/about/people/about_people_item_img3.jpg';
import reliabilityMaintenanceImg from '../assets/images/about/people/about_people_item_img4.jpg';
import digitalTransformationImg from '../assets/images/about/people/about_people_item_img5.jpg';

const StyledSection = styled.section`
  padding: 100px 0;
  background: #000000;
  position: relative;
  overflow: hidden;
  
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 80px;
    position: relative;
    z-index: 2;
    
    @media (max-width: 1200px) {
      padding: 0 60px;
    }
    
    @media (max-width: 768px) {
      padding: 0 24px;
    }
  }

  .stakeholders_wrapper {
    display: flex;
    gap: 0;
    align-items: flex-start;
    min-height: 600px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 30%;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgb(50, 50, 50);
      z-index: 1;
    }
    
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 60px;
      
      &::after {
        display: none;
      }
    }
  }

  .left_content {
    flex: 0 0 30%;
    padding-right: 40px;
    position: relative;
    z-index: 2;
    
    .tag_lightBlue {
      display: inline-block;
      background: #C6E8F0;
      color: #000000;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 32px;
    }
    
    .h2_heading_text {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.2;
      color: #ffffff;
      margin: 0;
      letter-spacing: -0.02em;
      
      @media (max-width: 768px) {
        font-size: 28px;
      }
    }
    
    @media (max-width: 1200px) {
      flex: 1;
      padding-right: 0;
    }
  }

  .right_content {
    flex: 0 0 70%;
    padding-left: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
    z-index: 2;
    
    @media (max-width: 1200px) {
      flex: 1;
      padding-left: 0;
      gap: 30px;
    }
  }

  .tabs_container {
    width: 100%;
    margin-bottom: 0;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: rgb(50, 50, 50);
    }
  }

  .tabs_list {
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 0;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding-bottom: 16px;
    overflow-x: auto;
    
    @media (max-width: 1200px) {
      gap: 25px;
    }
    
    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  .tab_button {
    background: none;
    border: none;
    color: #969696;
    font-size: 16px;
    font-weight: 400;
    padding: 12px 0;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    text-align: left;
    white-space: nowrap;
    flex-shrink: 0;
    min-width: max-content;
    
    &:hover {
      color: #FF6600;
    }
    
    &.active {
      color: #FF6600;
      font-weight: 600;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -16px;
        left: 0;
        right: 0;
        height: 3px;
        background: #FF6600;
        border-radius: 2px;
      }
    }
    
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 10px 0;
    }
  }

  .content_area {
    position: relative;
    min-height: 400px;
    display: flex;
    gap: 40px;
    align-items: flex-start;
    margin-top: 50px;
    
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 30px;
    }
  }

  .content_item {
    flex: 1;
    max-width: 350px;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.4s ease;
    
    &.active {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .content_heading {
    font-size: 22px;
    font-weight: 400;
    color: #ffffff;
    margin: 0 0 30px 0;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .content_bullets {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
  }

  .bullet_item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    color: #ffffff;
    font-size: 16px;
    line-height: 1.5;
    
    .check_icon {
      width: 18px;
      height: 18px;
      background: transparent;
      border: 2px solid #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
      
      &::before {
        content: '✓';
        color: white;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }

  .read_more_link {
    color: #FF6600;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    margin-bottom: 30px;
    
    &:hover {
      color: #e55a00;
      
      .arrow_icon {
        transform: translateX(4px);
      }
    }
    
    .arrow_icon {
      transition: transform 0.3s ease;
    }
  }

  .navigation_arrows {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    align-self: flex-start;
    
    .arrow_button {
      background: none;
      border: none;
      color: #ffffff;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 24px;
      
      &:hover {
        color: #FF6600;
      }
      
      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }

  .stakeholder_image {
    width: 300px;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    flex-shrink: 0;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 60px;
      background: linear-gradient(to left, rgba(0, 0, 0, 0.8), transparent);
      border-radius: 0 8px 8px 0;
    }
    
    @media (max-width: 1200px) {
      width: 100%;
      height: 350px;
    }
    
    @media (max-width: 768px) {
      height: 250px;
    }
  }
`;

const StakeholdersSection = ({ homepage }) => {
  const [activeTab, setActiveTab] = useState(3); // Reliability & Maintenance is active by default

  // Default stakeholders data
  const defaultStakeholders = [
    {
      id: 0,
      title: 'Process Engineers',
      heading: 'Monitor, analyze, and tune live processes with contextual AI.',
      bullets: [
        'Optimize control strategies during live production',
        'Identify root causes faster with MVDA',
        'Eliminate guesswork in process tuning'
      ],
      image: processEngineerImg
    },
    {
      id: 1,
      title: 'Data Analyst',
      heading: 'Unlock insights from complex manufacturing data streams.',
      bullets: [
        'Integrate data from multiple sources and systems',
        'Apply advanced analytics and machine learning models',
        'Generate actionable insights and reports'
      ],
      image: dataAnalystImg
    },
    {
      id: 2,
      title: 'Quality & Compliance',
      heading: 'Gain real-time visibility and control over product quality.',
      bullets: [
        'Automate CPV and deviation detection workflows',
        'Reduce release time through live quality insights',
        'Ensure GMP and CFR21-compliant traceability'
      ],
      image: qualityComplianceImg
    },
    {
      id: 3,
      title: 'Reliability & Maintenance',
      heading: 'Predict and prevent equipment failures before they occur.',
      bullets: [
        'Implement predictive maintenance strategies',
        'Monitor equipment health in real-time',
        'Reduce unplanned downtime and maintenance costs'
      ],
      image: reliabilityMaintenanceImg
    },
    {
      id: 4,
      title: 'Digital Transformation',
      heading: 'Accelerate your digital transformation journey.',
      bullets: [
        'Modernize legacy systems and processes',
        'Implement Industry 4.0 technologies',
        'Drive operational excellence through data'
      ],
      image: digitalTransformationImg
    }
  ];

  // Transform function to map Strapi data to our format
  const transformStrapiData = (strapiData) => {
    if (!strapiData || !Array.isArray(strapiData)) {
      return defaultStakeholders;
    }
    
    return strapiData.map((item, index) => {
      const defaultStakeholder = defaultStakeholders[index] || defaultStakeholders[0];
      
      return {
        id: item.id || index,
        title: item.title || defaultStakeholder.title,
        heading: item.heading || defaultStakeholder.heading,
        bullets: item.bullets || defaultStakeholder.bullets,
        image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${item.image.url}` : defaultStakeholder.image
      };
    });
  };

  // Fetch from Strapi with fallback using enhanced API
  const { data: strapiStakeholders, loading: strapiLoading, strapiAvailable } = useStrapiData(
    '/api/stakeholders',
    defaultStakeholders,
    {
      useStrapiAPI: true,
      transform: transformStrapiData
    }
  );

  // Use Strapi data if available and not loading, otherwise use default data
  const stakeholders = strapiLoading ? defaultStakeholders : strapiStakeholders;

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handlePrevious = () => {
    setActiveTab(prev => prev > 0 ? prev - 1 : stakeholders.length - 1);
  };

  const handleNext = () => {
    setActiveTab(prev => prev < stakeholders.length - 1 ? prev + 1 : 0);
  };

  const activeStakeholder = stakeholders[activeTab];

  return (
    <StyledSection>
      <div className="container">
        <div className="stakeholders_wrapper">
          <div className="left_content">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <span className="tag_lightBlue lh-base tag-mb-20px">Who Is It For</span>
              <h2 className="h3_heading_text fw-medium text-white text-start">
                Built for Regulated Operations
              </h2>
            </motion.div>
          </div>

          <div className="right_content">
            <motion.div
              className="tabs_container"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="tabs_list">
                {stakeholders.map((stakeholder) => (
                  <button
                    key={stakeholder.id}
                    className={`tab_button ${activeTab === stakeholder.id ? 'active' : ''}`}
                    onClick={() => handleTabClick(stakeholder.id)}
                  >
                    {stakeholder.title}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="content_area">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    className={`content_item ${activeTab === activeStakeholder.id ? 'active' : ''}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="content_heading">
                      {activeStakeholder.heading}
                    </h3>
                    
                    <ul className="content_bullets">
                      {activeStakeholder.bullets.map((bullet, index) => (
                        <li key={index} className="bullet_item">
                          <div className="check_icon"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#" className="read_more_link">
                      Read More
                      <span className="arrow_icon">→</span>
                    </a>

                    <div className="navigation_arrows">
                      <button 
                        className="arrow_button"
                        onClick={handlePrevious}
                        aria-label="Previous stakeholder"
                      >
                        ←
                      </button>
                      <button 
                        className="arrow_button"
                        onClick={handleNext}
                        aria-label="Next stakeholder"
                      >
                        →
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="stakeholder_image"
                style={{ backgroundImage: `url(${activeStakeholder.image})` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default StakeholdersSection;
