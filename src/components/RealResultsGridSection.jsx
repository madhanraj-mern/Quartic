import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 80px 0;
  background: #ffffff;
  overflow: visible;
  
  &.real-results-grid-section {
    padding: 80px 0 !important;
    background: #ffffff !important;
    overflow: visible !important;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    overflow: visible;
  }

  .real_results_row {
    display: flex !important;
    align-items: flex-start !important;
    gap: 40px !important;
    overflow: visible !important;
    flex-direction: row !important;
    width: 100% !important;
    
    @media (max-width: 768px) {
      flex-direction: column !important;
      gap: 30px !important;
    }
  }

  .row {
    display: flex !important;
    align-items: flex-start !important;
    gap: 40px !important;
    overflow: visible !important;
    flex-direction: row !important;
    width: 100% !important;
    
    @media (max-width: 768px) {
      flex-direction: column !important;
      gap: 30px !important;
    }
  }

  .real_results_col_4 {
    flex: 0 0 33.333333% !important;
    max-width: 33.333333% !important;
    display: block !important;
    width: 33.333333% !important;
    
    @media (max-width: 768px) {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }

  .real_results_col_8 {
    flex: 0 0 66.666667% !important;
    max-width: 66.666667% !important;
    display: block !important;
    width: 66.666667% !important;
    
    @media (max-width: 768px) {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }

  .col-lg-4 {
    flex: 0 0 33.333333% !important;
    max-width: 33.333333% !important;
    display: block !important;
    width: 33.333333% !important;
    
    @media (max-width: 768px) {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }

  .col-lg-8 {
    flex: 0 0 66.666667% !important;
    max-width: 66.666667% !important;
    display: block !important;
    width: 66.666667% !important;
    
    @media (max-width: 768px) {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }

  .left_navigation {
    font-size: 16px !important;
    font-family: "Red Hat Text", sans-serif !important;
    color: rgb(56, 62, 69) !important;
    line-height: 24px !important;
    text-decoration: rgb(56, 62, 69) !important;
    width: 264.031px !important;
    height: 100vh !important;
    border: 0px none rgb(56, 62, 69) !important;
    padding: 75px 0px !important;
    min-height: 100vh !important;
    max-width: 100% !important;
    min-width: auto !important;
    position: sticky !important;
    top: 0 !important;
    display: flex !important;
    border-spacing: 0px !important;
    transition: all !important;
    outline: rgb(56, 62, 69) none 0px !important;
    box-sizing: border-box !important;
    flex-direction: column !important;
    justify-content: center !important;
    
    @media (max-width: 768px) {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      padding: 40px 0px !important;
      min-height: auto !important;
    }
  }

  .tag_lightBlue {
    display: inline-block !important;
    background: #e3f2fd !important;
    color: #1976d2 !important;
    padding: 8px 16px !important;
    border-radius: 4px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    margin-bottom: 20px !important;
  }

  .section_title {
    font-size: 48px !important;
    font-weight: 700 !important;
    line-height: 1.1 !important;
    color: rgb(56, 62, 69) !important;
    font-family: "Red Hat Text", sans-serif !important;
    margin: 0 0 40px 0 !important;
    letter-spacing: -0.02em !important;
    
    @media (max-width: 768px) {
      font-size: 36px !important;
      margin-bottom: 30px !important;
      line-height: 1.2 !important;
    }
  }

  .industry_list {
    margin-bottom: 40px !important;
  }

  .industry_item {
    color: rgb(56, 62, 69) !important;
    font-size: 18px !important;
    font-family: "Red Hat Text", sans-serif !important;
    line-height: 1.3 !important;
    margin-bottom: 8px !important;
    padding: 6px 0 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    position: relative !important;
    
    &.active {
      color: #ff6a00 !important;
      text-decoration: underline !important;
    }
    
    &:hover {
      color: #ff6a00 !important;
      text-decoration: underline !important;
    }
    
    &:last-child {
      margin-bottom: 0 !important;
    }
  }

  .cta_heading {
    font-size: 24px !important;
    font-weight: 700 !important;
    color: rgb(56, 62, 69) !important;
    font-family: "Red Hat Text", sans-serif !important;
    margin: 0 0 30px 0 !important;
    line-height: 1.2 !important;
    
    @media (max-width: 768px) {
      font-size: 20px !important;
      line-height: 1.1 !important;
    }
  }

  .cta_button {
    background: #ff6a00 !important;
    color: #ffffff !important;
    border: none !important;
    padding: 16px 32px !important;
    border-radius: 8px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    text-decoration: none !important;
    
    &:hover {
      background: #e55a00 !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(255, 106, 0, 0.3) !important;
    }
    
    .arrow_icon {
      transition: transform 0.3s ease !important;
    }
    
    &:hover .arrow_icon {
      transform: translateX(4px) !important;
    }
  }

  .cards_grid_container {
    position: relative;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 10px;
    scroll-behavior: smooth;
    
    /* Custom scrollbar styling */
    scrollbar-width: thin;
    scrollbar-color: #ff6a00 #f0f0f0;
    
    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #ff6a00;
      border-radius: 4px;
      
      &:hover {
        background: #e55a00;
      }
    }
    
    @media (max-width: 768px) {
      height: auto;
      overflow: visible;
      padding-right: 0;
    }
  }

  .cards_grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 20px !important;
    min-height: 100% !important;
    position: relative !important;
    width: 100% !important;
    padding-bottom: 20px !important;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr !important;
      gap: 15px !important;
      padding-bottom: 0 !important;
    }
  }

  .card_column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (max-width: 768px) {
      gap: 15px;
    }
  }

  .result_card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    padding: 30px 23px;
    position: relative;
    overflow: visible;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    filter: blur(8px);
    opacity: 0.4;
    transform: scale(0.95);
    min-height: 300px;
    width: 100%;
    max-width: 389.479px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-family: "Red Hat Text", sans-serif;
    color: rgb(56, 62, 69);
    line-height: 24px;
    text-decoration: rgb(56, 62, 69);
    border: 0px none rgb(56, 62, 69);
    border-spacing: 0px;
    outline: rgb(56, 62, 69) none 0px;
    box-sizing: border-box;

    &.active {
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      z-index: 10;
    }

    @media (max-width: 768px) {
      min-height: 250px;
      width: 100%;
      max-width: 100%;
    }
  }

  .card_header {
    margin-bottom: 20px;
  }

  .card_badge {
    display: inline-block;
    background: #e3f2fd;
    color: #1976d2;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
  }

  .card_title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: #000000;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .kpi_metrics {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e9ecef;
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 15px;
    }
  }

  .kpi_item {
    text-align: center;
    flex: 1;
  }

  .kpi_value {
    font-size: 32px;
    font-weight: 700;
    color: #ff6a00;
    margin: 0;
    line-height: 1;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .kpi_label {
    font-size: 12px;
    color: #666666;
    margin: 5px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .kpi_divider {
    width: 1px;
    height: 40px;
    background: #e9ecef;
    
    @media (max-width: 480px) {
      display: none;
    }
  }

  .testimonial_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .quote_icon {
    font-size: 48px;
    color: #e9ecef;
    font-weight: 300;
    line-height: 1;
    margin-bottom: 10px;
    font-family: serif;
  }

  .testimonial_quote {
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    margin: 0 0 15px 0;
    font-style: italic;
    flex: 1;
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  .testimonial_author {
    font-size: 12px;
    font-weight: 600;
    color: #666666;
    margin: 0 0 10px 0;
  }

  .read_more_link {
    color: #ff6a00;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
    
    &:hover {
      color: #e55a00;
      text-decoration: underline;
    }
  }

  .column_divider {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #e9ecef;
    transform: translateX(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const RealResultsGridSection = ({ homepage }) => {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef([]);

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
    cards: [
      {
        id: 0,
        industry: "Life Sciences",
        title: "5% Cycle Time Recovery with Reliability in Egg-Based Vaccine Production",
        metrics: [
          { value: "5%", label: "Cycle Time Recovery" },
          { value: "5X", label: "Faster Repair Times" }
        ],
        testimonial: "Quartic's predictive reliability capabilities transformed our egg-based vaccine manufacturing. Their AI-driven insights provided the visibility and proactive action we needed for operational excellence.",
        author: "Sr. Manager, Vaccine Manufacturing, Global Pharma Company"
      },
      {
        id: 1,
        industry: "Chemicals",
        title: "25% Faster Cycle Time with Real-Time Quality Monitoring and Optimization",
        metrics: [
          { value: "25%", label: "Cycle Time Reduction" },
          { value: "100%", label: "Defect Elimination" }
        ],
        testimonial: "Quartic's real-time insights and predictive monitoring helped us eliminate defects and significantly reduced cycle times. It fundamentally changed our quality assurance process.",
        author: "Operations Director, Advanced Materials Manufacturer"
      },
      {
        id: 2,
        industry: "Consumer Packaged Goods",
        title: "Predictive Quality Optimization Cuts Lab Costs by 80% in CPG Manufacturing",
        metrics: [
          { value: "80%", label: "Lab Testing Cost Reduction" },
          { value: "5X", label: "Faster Root Cause Analysis" }
        ],
        testimonial: "Quartic's solutions significantly transformed our manufacturing by embedding artificial intelligence in our CPG industry quality operations. Predictive quality monitoring has now become integral to our manufacturing processes.",
        author: "Director of Quality Operations, Global CPG Leader"
      },
      {
        id: 3,
        industry: "Food & Beverage",
        title: "AI-Powered Quality Control Reduces Waste by 30% in Food Production",
        metrics: [
          { value: "30%", label: "Waste Reduction" },
          { value: "40%", label: "Quality Improvement" }
        ],
        testimonial: "Quartic's AI-driven quality control system revolutionized our food production line. We've seen dramatic improvements in efficiency and quality consistency.",
        author: "Quality Manager, Leading Food Manufacturer"
      }
    ],
    ctaHeading: "Discover all customer use cases",
    ctaText: "Explore All",
    ctaUrl: "#case-studies"
  };

  // Use Strapi data if available, otherwise use fallback
  const sectionData = homepage?.RealResults || fallbackData;
  const industries = sectionData.industries || fallbackData.industries;
  const cards = sectionData.cards || fallbackData.cards;
  
  // Debug logging
  console.log('RealResultsGridSection - homepage:', homepage);
  console.log('RealResultsGridSection - sectionData:', sectionData);
  console.log('RealResultsGridSection - cards:', cards);

  // Scroll detection using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio to get the most visible card
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        if (visibleEntries.length > 0) {
          const mostVisibleCard = visibleEntries[0];
          const cardId = Number(mostVisibleCard.target.dataset.card);
          setActiveCard(cardId);
          
          // Update left navigation without scrolling
          const leftNav = document.querySelector('.left_navigation');
          if (leftNav) {
            const industryItems = leftNav.querySelectorAll('.industry_item');
            if (industryItems[cardId]) {
              // Remove active class from all items
              industryItems.forEach(item => item.classList.remove('active'));
              // Add active class to current item
              industryItems[cardId].classList.add('active');
            }
          }
        }
      },
      { 
        threshold: 0.5, // single threshold to reduce complexity
        rootMargin: '-10% 0px -10% 0px' // larger margin for smoother detection
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Handle left navigation scroll behavior
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const leftNav = document.querySelector('.left_navigation');
          const section = document.querySelector('.real-results-grid-section');
          
          if (leftNav && section) {
            const sectionRect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // When the section is at the bottom of viewport (Food & Beverage visible)
            if (sectionRect.bottom <= viewportHeight) {
              leftNav.style.position = 'static';
              leftNav.style.height = 'auto';
              leftNav.style.minHeight = 'auto';
            } else {
              leftNav.style.position = 'sticky';
              leftNav.style.height = '100vh';
              leftNav.style.minHeight = '100vh';
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIndustryClick = (index) => {
    setActiveCard(index);
    
    // Scroll to the corresponding card on the right side
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      // Find the cards grid container
      const cardsContainer = document.querySelector('.cards_grid_container');
      if (cardsContainer) {
        // Calculate the position of the target card relative to the container
        const containerRect = cardsContainer.getBoundingClientRect();
        const cardRect = targetCard.getBoundingClientRect();
        const scrollTop = cardsContainer.scrollTop;
        const cardOffsetTop = cardRect.top - containerRect.top + scrollTop;
        
        // Smooth scroll to the card
        requestAnimationFrame(() => {
          cardsContainer.scrollTo({
            top: cardOffsetTop - (containerRect.height / 2) + (cardRect.height / 2),
            behavior: 'auto' // Changed to auto to prevent glitches
          });
        });
      }
    }
  };

  return (
    <StyledSection className="real-results-grid-section">
      <div className="container">
        <div className="real_results_row">
          {/* Left Column - Navigation */}
          <div className="real_results_col_4">
            <motion.div 
              className="left_navigation"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="tag_lightBlue">Real Results</span>
              <h2 className="section_title">{sectionData.subtitle || "Driving KPIs in Batch-Critical Environments"}</h2>
              
              <div className="industry_list">
                {industries.map((industry, index) => (
                  <motion.div 
                    key={index}
                    className={`industry_item ${activeCard === index ? 'active' : ''}`}
                    onClick={() => handleIndustryClick(index)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1) 
                    }}
                    whileHover={{ color: '#ff6a00' }}
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

          {/* Right Column - Cards Grid */}
          <div className="real_results_col_8">
            <motion.div 
              className="cards_grid_container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="cards_grid">
                {/* Column Divider */}
                <div className="column_divider"></div>
                
                {/* Left Column - Cards 0 and 2 (Life Sciences, Consumer Packaged Goods) */}
                <div className="card_column">
                  {cards.filter((card) => card.id === 0 || card.id === 2).sort((a, b) => a.id - b.id).map((card, columnIndex) => {
                    const actualIndex = card.id;
                    return (
                      <motion.div
                        key={card.id}
                        ref={(el) => (cardRefs.current[actualIndex] = el)}
                        data-card={actualIndex}
                        className={`result_card ${activeCard === actualIndex ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: columnIndex * 0.2 }}
                      >
                        <div className="card_header">
                          <span className="card_badge">{card.industry}</span>
                          <h3 className="card_title">{card.title}</h3>
                        </div>

                        <div className="kpi_metrics">
                          {card.metrics.map((metric, metricIndex) => (
                            <React.Fragment key={metricIndex}>
                              <div className="kpi_item">
                                <div className="kpi_value">{metric.value}</div>
                                <div className="kpi_label">{metric.label}</div>
                              </div>
                              {metricIndex < card.metrics.length - 1 && <div className="kpi_divider"></div>}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="testimonial_content">
                          <div>
                            <div className="quote_icon">"</div>
                            <blockquote className="testimonial_quote">
                              {card.testimonial}
                            </blockquote>
                            <div className="testimonial_author">
                              {card.author}
                            </div>
                          </div>
                          <a href="#" className="read_more_link">
                            Read More →
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Column - Cards 1 and 3 (Chemicals, Food & Beverage) */}
                <div className="card_column">
                  {cards.filter((card) => card.id === 1 || card.id === 3).sort((a, b) => a.id - b.id).map((card, columnIndex) => {
                    const actualIndex = card.id;
                    return (
                      <motion.div
                        key={card.id}
                        ref={(el) => (cardRefs.current[actualIndex] = el)}
                        data-card={actualIndex}
                        className={`result_card ${activeCard === actualIndex ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: (columnIndex + 1) * 0.2 }}
                      >
                        <div className="card_header">
                          <span className="card_badge">{card.industry}</span>
                          <h3 className="card_title">{card.title}</h3>
                        </div>

                        <div className="kpi_metrics">
                          {card.metrics.map((metric, metricIndex) => (
                            <React.Fragment key={metricIndex}>
                              <div className="kpi_item">
                                <div className="kpi_value">{metric.value}</div>
                                <div className="kpi_label">{metric.label}</div>
                              </div>
                              {metricIndex < card.metrics.length - 1 && <div className="kpi_divider"></div>}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="testimonial_content">
                          <div>
                            <div className="quote_icon">"</div>
                            <blockquote className="testimonial_quote">
                              {card.testimonial}
                            </blockquote>
                            <div className="testimonial_author">
                              {card.author}
                            </div>
                          </div>
                          <a href="#" className="read_more_link">
                            Read More →
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default RealResultsGridSection;
