import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    
    @media (max-width: 1200px) {
      flex: none;
      padding-right: 0;
    }
  }

  .tag_lightBlue {
    display: inline-block;
    background: #e3f2fd;
    color: #1976d2;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    border: 1px solid #bbdefb;
  }

  .h3_heading_text {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  .section_description {
    font-size: 18px;
    line-height: 1.6;
    color: #b0b0b0;
    margin-bottom: 0;
  }

  .right_content {
    flex: 1;
    padding-left: 40px;
    
    @media (max-width: 1200px) {
      padding-left: 0;
    }
  }

  .tabs_container {
    margin-bottom: 40px;
  }

  .tabs_list {
    display: flex;
    gap: 0;
    border-bottom: 1px solid #333;
    margin-bottom: 0;
  }

  .tab_button {
    background: none;
    border: none;
    color: #666;
    font-size: 16px;
    font-weight: 500;
    padding: 20px 24px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    
    &:hover {
      color: #ff6a00;
    }
    
    &.active {
      color: #ff6a00;
      border-bottom-color: #ff6a00;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 15px 16px;
    }
  }

  .content_area {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 30px;
    }
  }

  .content_text {
    flex: 1;
  }

  .content_heading {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 30px;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .content_bullets {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
  }

  .bullet_item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    color: #ffffff;
    font-size: 16px;
    line-height: 1.5;
  }

  .check_icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    margin-right: 12px;
    position: relative;
    flex-shrink: 0;
    
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #000000;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .read_more_link {
    color: #ff6a00;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
    
    &:hover {
      color: #e55a00;
    }
    
    .arrow_icon {
      font-size: 14px;
      transition: transform 0.3s ease;
    }
    
    &:hover .arrow_icon {
      transform: translateX(4px);
    }
  }

  .navigation_arrows {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .arrow_button {
    background: none;
    border: 1px solid #333;
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #ff6a00;
      color: #ff6a00;
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

const WhoIsItForSection = ({ homepage, data }) => {
  const [activeTab, setActiveTab] = useState(2); // Quality & Compliance is active by default (index 2)

  // Fallback data when Strapi is not available
  const fallbackData = {
    title: "WHO IS IT FOR",
    subtitle: "Quartic Built for every stakeholder",
    description: "Comprehensive solutions designed for every role in manufacturing operations.",
    stakeholders: [
      {
        id: 0,
        title: "Process Engineers",
        description: "Optimize manufacturing processes with real-time data insights and predictive analytics.",
        features: [
          "Real-time process monitoring",
          "Predictive quality control",
          "Automated optimization recommendations"
        ],
        image: processEngineerImg
      },
      {
        id: 1,
        title: "Data Analysts",
        description: "Transform raw manufacturing data into actionable business intelligence.",
        features: [
          "Advanced analytics dashboards",
          "Custom data visualizations",
          "Automated reporting"
        ],
        image: dataAnalystImg
      },
      {
        id: 2,
        title: "Quality & Compliance",
        description: "Maximize equipment uptime with predictive maintenance and reliability engineering.",
        features: [
          "Predictive maintenance",
          "Asset performance monitoring",
          "Maintenance optimization"
        ],
        image: qualityComplianceImg
      },
      {
        id: 3,
        title: "Reliability & Maintenance",
        description: "Ensure equipment reliability and minimize downtime.",
        features: [
          "Preventive maintenance",
          "Equipment monitoring",
          "Reliability analysis"
        ],
        image: reliabilityMaintenanceImg
      },
      {
        id: 4,
        title: "Digital Transformation",
        description: "Lead digital transformation initiatives across manufacturing operations.",
        features: [
          "Digital roadmap planning",
          "Change management",
          "Technology integration"
        ],
        image: digitalTransformationImg
      }
    ]
  };

  // Use Strapi data if available, otherwise use fallback
  const sectionData = data || homepage?.whoIsItFor || fallbackData;
  const stakeholders = sectionData.stakeholders || fallbackData.stakeholders;
  
  // Debug logging
  console.log('WhoIsItForSection - homepage:', homepage);
  console.log('WhoIsItForSection - data:', data);
  console.log('WhoIsItForSection - sectionData:', sectionData);
  console.log('WhoIsItForSection - stakeholders:', stakeholders);

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
              <span className="tag_lightBlue lh-base tag-mb-20px">{sectionData.title || "WHO IS IT FOR"}</span>
              <h2 className="h3_heading_text fw-medium text-white text-start">
                {sectionData.subtitle || "Quartic Built for every stakeholder"}
              </h2>
              {sectionData.description && (
                <p className="section_description text-white-50 mt-3">
                  {sectionData.description}
                </p>
              )}
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
                className="content_text"
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
                      {activeStakeholder.description}
                    </h3>
                    
                    <ul className="content_bullets">
                      {activeStakeholder.features.map((feature, index) => (
                        <li key={index} className="bullet_item">
                          <div className="check_icon"></div>
                          <span>{feature}</span>
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

export default WhoIsItForSection;