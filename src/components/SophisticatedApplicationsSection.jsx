import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useStrapiData from '../hooks/useStrapiData';

// Import application icons
import processOptimizerIcon from '../assets/images/home/solutions/icons/performance-improvement.svg';
import reliabilityIcon from '../assets/images/home/solutions/icons/predictive-maintenance.svg';
import batchMvdaIcon from '../assets/images/home/solutions/icons/batch-optimisation.svg';
import pdOptimizerIcon from '../assets/images/home/solutions/icons/quality-by-design.svg';
import automatedPatIcon from '../assets/images/home/solutions/icons/energy-utility-optimization.svg';

// Import solution images
import solutionImg1 from '../assets/images/home/solutions/solution-img1.jpg';
import solutionImg2 from '../assets/images/home/iws/iws-slider-img2.jpg';
import solutionImg3 from '../assets/images/home/iws/iws-slider-img3.jpg';
import solutionImg4 from '../assets/images/home/iws/iws-slider-img4.jpg';
import solutionImg5 from '../assets/images/home/iws/iws-slider-img.jpg';

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

  /* Industrial DataOps Style Card System */
  .flex_card_group_total {
    width: 100%;
    display: flex;
    column-gap: 11px;
    padding-bottom: 7px;
    height: 469px;
    padding-top: 20px;
    
    @media (max-width: 1200px) {
      flex-direction: column;
      height: auto;
      gap: 20px;
    }
  }

  .flex_card_group {
    width: 100%;
    position: relative;
    height: 469px;
    display: flex;
    overflow: hidden;
    column-gap: 11px;
    
    @media (max-width: 1200px) {
      flex-direction: column;
      height: auto;
      gap: 20px;
    }
  }

  .flex_card {
    background: linear-gradient(186.98deg, #ffffff 22.04%, #8e8e8e 98.17%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.19), -10px -6px 20px 0px rgba(0, 0, 0, 0.11);
    border-radius: 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s linear;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.4s 0.2s linear;
      z-index: 0;
    }
    
    &.is_hovered {
      flex-grow: 2;
      
      &::before {
        opacity: 1;
      }
    }
    
    @media (max-width: 1200px) {
      height: 300px;
      min-height: 300px;
    }
  }

  .card_top_content {
    padding: 25px 20px 20px 26px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: transform 0.3s linear, opacity 0.3s linear;
  }

  .card_top_content_onhover {
    padding: 25px 20px 20px 26px;
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: auto;
    right: 0;
    width: 100%;
    opacity: 0;
    transform: translateX(-20px);
    visibility: hidden;
    transition: transform 0.3s linear 0.4s, opacity 0.3s linear 0.4s, visibility 0.3s linear 0.3s, width 0.3s linear 0s;
  }

  .flex_card:hover .card_top_content,
  .flex_card.is_hovered .card_top_content {
    transform: translateX(-50px);
    opacity: 0;
    z-index: 0;
  }

  .flex_card:hover .card_top_content_onhover,
  .flex_card.is_hovered .card_top_content_onhover {
    width: 100%;
    z-index: 1;
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  .icon-holder {
    width: 53px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .icon-holder img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  .heading_text {
    font-size: 22px;
    color: #000000;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
    transition: color 0.3s ease;
    
    @media (min-width: 1800px) {
      font-size: 26px;
    }
  }

  .dscText_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dscText_content p {
    color: #666;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }

  .link_holder {
    margin-top: 10px;
  }

  .link_text {
    color: #f15a29;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    
    @media (min-width: 1800px) {
      font-size: 20px;
    }
    
    &:hover {
      color: #e55a00;
    }
  }

  .card_side_img_holder {
    width: calc(100% - 28px);
    height: 204px;
    margin-left: auto;
    transition: width 0.5s 0.1s linear;
    position: relative;
    margin-top: auto;
    
    @media (min-width: 1400px) {
      height: 255px;
      width: calc(100% - 35px);
    }
    
    @media (min-width: 1800px) {
      height: 300px;
    }
  }

  .flex_card:hover .card_side_img_holder,
  .flex_card.is_hovered .card_side_img_holder {
    width: calc(100% - 100px);
    transition: width 0.3s 0.1s linear;
  }

  .card_side_img {
    background-position: top left;
    background-repeat: no-repeat;
    background-size: auto 100%;
    width: 100%;
    height: 100%;
    transition: background-position 0.3s 0.2s linear;
    border-radius: 0 0 8px 8px;
  }

  .flex_card:hover .card_side_img,
  .flex_card.is_hovered .card_side_img {
    background-position: top right;
    background-size: auto 100%;
    transition: background-position 0.5s 0s linear;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .flex_card_group_total {
      flex-direction: column;
      height: auto;
    }
    
    .flex_card_group {
      flex-direction: column;
      height: auto;
    }
    
    .flex_card {
      height: 300px;
      min-height: 300px;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;
    
    .flex_card {
      height: 280px;
      min-height: 280px;
    }
    
    .card_top_content,
    .card_top_content_onhover {
      padding: 20px;
    }
    
    .heading_text {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .flex_card {
      height: 260px;
      min-height: 260px;
    }
    
    .heading_text {
      font-size: 18px;
    }
  }
`;

const SophisticatedApplicationsSection = ({ homepage }) => {
  // Default applications data with proper icons and images
  const defaultApplications = [
    {
      icon: processOptimizerIcon,
      title: 'Process Optimizer',
      description: 'Drive quality, efficiency, and yield with real-time process control and AI-powered diagnostics.',
      ctaText: 'Learn more',
      ctaUrl: 'https://www.quartic.ai/process-optimizer',
      iconAlt: 'Process Optimizer icon',
      image: solutionImg1
    },
    {
      icon: reliabilityIcon,
      title: 'Reliability',
      description: 'Predict failures and minimize downtime using contextual signals from across assets.',
      ctaText: 'Learn more',
      ctaUrl: 'https://www.quartic.ai/reliability',
      iconAlt: 'Reliability icon',
      image: solutionImg2
    },
    {
      icon: batchMvdaIcon,
      title: 'Batch MVDA',
      description: 'Unlock deep process insights using multivariate models across production and lab data.',
      ctaText: 'Learn more',
      ctaUrl: 'https://www.quartic.ai/batch-mvda',
      iconAlt: 'Batch MVDA icon',
      image: solutionImg3
    },
    {
      icon: pdOptimizerIcon,
      title: 'PD Optimizer',
      description: 'In-silico optimization for faster product scale-up and formulation development.',
      ctaText: 'Learn more',
      ctaUrl: 'https://www.quartic.ai/pd-optimizer',
      iconAlt: 'PD Optimizer icon',
      image: solutionImg4
    },
    {
      icon: automatedPatIcon,
      title: 'Automated PAT',
      description: 'Integrated analytics for continuous batch verification and quality assurance.',
      ctaText: 'Learn more',
      ctaUrl: 'https://www.quartic.ai/automated-pat',
      iconAlt: 'Automated PAT icon',
      image: solutionImg5
    }
  ];

  // Transform function to map Strapi data to our format
  const transformStrapiData = (strapiData) => {
    return strapiData.map((item, index) => {
      const defaultApp = defaultApplications[index] || defaultApplications[0];
      
      return {
        icon: item.icon?.url ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${item.icon.url}` : defaultApp.icon,
        title: item.title || defaultApp.title,
        description: item.description || defaultApp.description,
        ctaText: item.ctaText || defaultApp.ctaText,
        ctaUrl: item.ctaUrl || defaultApp.ctaUrl,
        iconAlt: item.iconAlt || defaultApp.iconAlt,
        image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${item.image.url}` : defaultApp.image
      };
    });
  };

  // Fetch from Strapi with fallback using enhanced API
  const { data: strapiApplications, loading: strapiLoading, strapiAvailable } = useStrapiData(
    '/api/applications',
    defaultApplications,
    {
      useStrapiAPI: true,
      transform: transformStrapiData
    }
  );

  // Use Strapi data if available and not loading, otherwise use default data
  const applications = strapiLoading ? defaultApplications : strapiApplications;
  const sectionTitle = homepage?.applications?.title || 'Transform Your Operations with Quartic';
  
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

  return (
    <StyledSection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec_heading_wrap text-center mb-4">
              <span className="tag_lightBlue lh-base tag-mb-20px">Applications</span>
              <motion.h2
                className="h2_heading_text fw-medium text-black"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {sectionTitle}
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Desktop Cards with Industrial DataOps Style */}
        <div className="home_solutions_cards_holder d-none d-xl-block">
          <div className="flex_card_group_total">
            <div className="flex_card_group">
              {applications.map((app, index) => {
                const isHighlighted = app.title === 'Reliability';
                const delays = [200, 300, 400, 500, 600];
                
                return (
                  <div
                    key={index}
                    className={`flex_card flex_card_is_hoverable ${isHighlighted ? 'is_hovered always_hovered' : ''}`}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={String(delays[index])}
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="card_top_content">
                        <div className="icon-holder">
                          <img 
                            loading="lazy" 
                            className="object-fit-contain" 
                            src={app.icon} 
                            alt={app.iconAlt || app.title} 
                          />
                        </div>
                        <h3 className="heading_text fw-medium lh-base">{app.title}</h3>
                      </div>
                      
                      <div className="card_top_content_onhover">
                        <div className="100% d-flex justify-content-between inner-box">
                          <div className="icon-holder flex-shrink-0">
                            <img 
                              loading="lazy" 
                              className="object-fit-contain" 
                              src={app.icon} 
                              alt={app.iconAlt || app.title} 
                            />
                          </div>
                          <div className="dscText_content">
                            <h3 className="heading_text fw-medium lh-base">{app.title}</h3>
                            <p className="mb-0">{app.description}</p>
                            <div className="link_holder mt-2">
                              <a href={app.ctaUrl} className="link_text" aria-label={app.ctaText}>
                                {app.ctaText}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card_side_img_holder mt-auto">
                        <div
                          className="card_side_img"
                          style={{ backgroundImage: `url(${app.image})` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="home_solutions_accordion_holder d-block d-xl-none">
          <div className="container px-sm-0">
            <div className="accordion card-accordion" id="home_solutions_accordion">
              {applications.map((app, index) => {
                const isActive = index === 0; // First item active by default
                return (
                  <div className="accordion-item" key={app.title}>
                    <h3 className="accordion-header" id={`heading-${app.title}`}>
                      <button
                        className={`accordion-button${isActive ? '' : ' collapsed'}`}
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={`collapse-${app.title}`}
                      >
                        <div className="icon-holder">
                          <img loading="lazy" className="object-fit-contain" src={app.icon} alt={app.title} />
                        </div>
                        <span className="heading_text fw-medium lh-base">{app.title}</span>
                      </button>
                    </h3>
                    <div
                      id={`collapse-${app.title}`}
                      className={`accordion-collapse collapse${isActive ? ' show' : ''}`}
                      aria-labelledby={`heading-${app.title}`}
                    >
                      <div className="accordion-body">
                        <div className="accordion-body-content">
                          <div className="dscText_content">
                            <p className="mb-0">{app.description}</p>
                            <div className="link_holder mt-2">
                              <a href={app.ctaUrl} className="link_text" aria-label={app.ctaText}>
                                {app.ctaText}
                              </a>
                            </div>
                          </div>
                          <div className="img_wrap">
                            <div className="ratio">
                              <img src={app.image} alt={app.title} loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default SophisticatedApplicationsSection;
