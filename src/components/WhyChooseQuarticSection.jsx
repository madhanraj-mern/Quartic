import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import warehouseImg from '../assets/images/home/home_wcq_sec_bg_img.jpg';
import { mapBulletPoints, getSectionData } from '../utils/dataMapping';

const StyledSection = styled.section`
  padding: 0;
  background: transparent;
  position: relative;
  overflow: hidden;
  
  .container {
    max-width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 2;
  }

  .why_choose_wrapper {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .background_image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${warehouseImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.05) 60%,
        transparent 100%
      );
      z-index: 2;
    }
  }

  .content_box {
    position: relative;
    z-index: 3;
    background: #ffffff;
    padding: 40px 35px;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-bottom: 0;
    margin-right: 0;
    
    @media (max-width: 1200px) {
      max-width: 350px;
      padding: 35px 30px;
    }
    
    @media (max-width: 768px) {
      max-width: 100%;
      padding: 30px 25px;
      margin: 0;
    }
  }

  .section_title {
    font-size: 32px;
    font-weight: 700;
    color: #000000;
    margin: 0 0 30px 0;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 25px;
    }
  }

  .features_list {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
  }

  .feature_item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    color: #000000;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .check_icon {
      width: 20px;
      height: 20px;
      background: #ff6a00;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
      
      &::before {
        content: '✓';
        color: white;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }

  .cta_button {
    background: #ff6a00;
    color: #ffffff;
    border: none;
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    
    &:hover {
      background: #e55a00;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 106, 0, 0.3);
    }
    
    .arrow_icon {
      transition: transform 0.3s ease;
      font-size: 14px;
    }
    
    &:hover .arrow_icon {
      transform: translateX(4px);
    }
  }
`;

const WhyChooseQuarticSection = ({ homepage, data }) => {
  // Use section data or homepage fallback
  const whyChooseData = getSectionData(data, homepage, {}, 'whyChooseQuartic');
  
  // Extract features from bulletPoints array or use fallback
  let features = [];
  if (whyChooseData.bulletPoints && Array.isArray(whyChooseData.bulletPoints)) {
    features = mapBulletPoints(whyChooseData.bulletPoints);
  } else if (whyChooseData.features && Array.isArray(whyChooseData.features)) {
    features = whyChooseData.features;
  } else if (whyChooseData.listItems && Array.isArray(whyChooseData.listItems)) {
    features = whyChooseData.listItems;
  } else {
    // Static fallback
    features = [
      'Built for regulated manufacturing',
      'Deep OT/IT integration with DataOps',
      'Accelerates time-to-impact with small-data AI',
      'Scalable for complex plant networks'
    ];
  }
  
  const title = whyChooseData.title || 'Why Choose Quartic';
  const subtitle = whyChooseData.subtitle || whyChooseData.description || '';
  const ctaText = whyChooseData.ctaText || whyChooseData.buttonText || 'Talk to an Expert';
  const ctaUrl = whyChooseData.ctaUrl || whyChooseData.buttonUrl || '#contact';
  

  return (
    <StyledSection>
      <div className="container">
        <div className="why_choose_wrapper">
          <div className="background_image"></div>
          
          <motion.div 
            className="content_box"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2 className="section_title">{title}</h2>
            {subtitle && (
              <p className="section_subtitle" style={{ 
                fontSize: '16px', 
                color: '#666', 
                marginBottom: '20px' 
              }}>
                {subtitle}
              </p>
            )}
            
            <ul className="features_list">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="feature_item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.1) 
                  }}
                >
                  <div className="check_icon"></div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href={ctaUrl}
              className="cta_button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
              <span className="arrow_icon">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </StyledSection>
  );
};

export default WhyChooseQuarticSection;
