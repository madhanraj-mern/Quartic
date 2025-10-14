import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import warehouse background image
import warehouseImg from '../assets/images/home/home_wcq_sec_bg_img.jpg';

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

  .real_results_wrapper {
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
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    background: #ff6a00;
    padding: 12px 18px;
    margin: 0 0 30px 0;
    line-height: 1.2;
    border-radius: 8px;
    display: inline-block;
    
    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 25px;
      padding: 10px 16px;
    }
  }

  .industries_list {
    margin-bottom: 30px;
  }

  .industry_item {
    color: #333333;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 8px;
    padding: 8px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ff6a00;
      text-decoration: underline;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  .cta_heading {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin: 0 0 20px 0;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .description {
    color: #333333;
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 20px 0;
  }

  .cta_button {
    background: #ff6a00;
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    
    &:hover {
      background: #e55a00;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 106, 0, 0.3);
    }
    
    .arrow_icon {
      transition: transform 0.3s ease;
    }
    
    &:hover .arrow_icon {
      transform: translateX(4px);
    }
  }
`;

const RealResultsSection = ({ homepage }) => {
  // Fallback data when Strapi is not available
  const fallbackData = {
    title: "Real Results",
    subtitle: "Driving KPIs in Batch-Critical Environments",
    description: "See how leading manufacturers achieve measurable results with Quartic's intelligent manufacturing solutions.",
    industries: [
      "Life Sciences",
      "Chemicals", 
      "Consumer Packaged Goods",
      "Food & Beverage"
    ],
    ctaHeading: "Discover all customer use cases",
    ctaText: "Explore All",
    ctaUrl: "#case-studies"
  };

  // Use Strapi data if available, otherwise use fallback
  const sectionData = homepage?.realResults || fallbackData;
  const industries = sectionData.industries || fallbackData.industries;
  
  // Debug logging
  console.log('RealResultsSection - homepage:', homepage);
  console.log('RealResultsSection - sectionData:', sectionData);
  console.log('RealResultsSection - industries:', industries);

  return (
    <StyledSection>
      <div className="container">
        <div className="real_results_wrapper">
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
            <h2 className="section_title">{sectionData.subtitle || "Driving KPIs in Batch-Critical Environments"}</h2>
            
            {sectionData.description && (
              <p className="description">{sectionData.description}</p>
            )}
            
            <div className="industries_list">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="industry_item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.1) 
                  }}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
            
            <h3 className="cta_heading">{sectionData.ctaHeading || "Discover all customer use cases"}</h3>
            
            <motion.a 
              href={sectionData.ctaUrl || "#case-studies"}
              className="cta_button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sectionData.ctaText || "Explore All"}
              <span className="arrow_icon">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </StyledSection>
  );
};

export default RealResultsSection;

