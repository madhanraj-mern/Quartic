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

  .one_side_full_container {
    padding-right: 0;
    margin-left: auto;
    margin-right: 0;
  }

  .row {
    margin: 0;
  }

  .gx-0 {
    --bs-gutter-x: 0;
  }

  .osfc_left_col {
    @media (max-width: 991px) {
      width: 100%;
    }
    
    .left_top_content {
      padding-top: 55px;
      padding-right: 30px;
      
      @media (min-width: 768px) {
        padding-top: 65px;
        padding-right: 30px;
      }
      
      @media (min-width: 992px) {
        padding-top: 98px;
      }
      
      .h3_heading_text {
        @media (min-width: 992px) {
          font-size: 28px;
        }
        @media (min-width: 1800px) {
          font-size: 40px;
        }
      }
    }
  }

  .osfc_right_col {
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .roles_slider_holder {
    padding-top: 20px;
    padding-bottom: 50px;
    position: relative;
    
    @media (min-width: 768px) {
      padding-top: 40px;
      padding-bottom: 60px;
    }
    
    @media (min-width: 992px) {
      padding-top: 60px;
      padding-left: 30px;
    }
    
    @media (min-width: 1200px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    
    .divider_line {
      left: 0;
      top: 0;
      bottom: 0;
      opacity: 0.4 !important;
      width: 1px;
      height: 100%;
      position: absolute;
      background-color: rgba(151, 214, 223, 0.5);
      
      @media (max-width: 991px) {
        display: none;
      }
    }
  }

  .roles_slider_container {
    width: 100%;
  }

  .roles_thumb_slider {
    .splide__slide {
      position: relative;
      cursor: pointer;
      padding: 0 10px 16px 0;
      background: none;
      border: none;
      outline: none;
      transition: color 0.3s;
      display: flex;
      flex-direction: column;
      border: none !important;
      justify-content: flex-end;

      .thumb_nav_text {
        color: rgba(255, 255, 255, 0.57);
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        
        @media (min-width: 768px) {
          font-size: 22px;
          line-height: 27px;
        }
        
        @media (min-width: 1400px) {
          font-size: 26px;
          line-height: 29px;
        }
        
        @media (min-width: 1800px) {
          font-size: 32px;
          line-height: 36px;
        }
        
        @media (max-width: 767px) {
          br {
            display: none;
          }
        }
      }

      &::after {
        content: "";
        height: 2px;
        width: 100%;
        position: absolute;
        background: rgba(217, 217, 217, 1);
        transform: scaleX(1);
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
      }
    }
    
    .splide__slide.is-active {
      border: none;
      
      .thumb_nav_text {
        color: #f15a29;
      }
    }
    
    .underline {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: #f15a29;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s;
      z-index: 1;
    }
    
    .splide__slide.is-active .underline {
      transform: scaleX(1);
      transition: transform 6s linear;
      background-color: #f15a29;
    }
  }

  .roles_main_slider {
    position: relative;
    padding-top: 20px;
    overflow: hidden;
    
    @media (min-width: 768px) {
      padding-top: 46px;
    }
    
    @media (min-width: 992px) {
      .col-lg-5 {
        flex: 0 0 auto;
        width: 47%;
      }
      .col-lg-7 {
        flex: 0 0 auto;
        width: 53%;
      }
    }
  }

  .roles_main_slider_content {
    width: 100%;

    .dsc_content {
      width: 100%;
      
      .comn_dsc_text_white {
        h2, h3, h4, h5, h6 {
          font-size: 18px;
          line-height: 1.3;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 25px;
          
          @media (min-width: 992px) {
            font-size: 20px;
            margin-bottom: 45px;
          }
          
          @media (min-width: 1800px) {
            font-size: 24px;
          }
        }
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          margin-top: 10px;
          position: relative;
          padding-left: 30px;
          
          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background-image: url('../assets/images/icons/check-white.svg');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
          }
          
          p {
            color: #ffffff;
            margin: 0;
            font-size: 16px;
            line-height: 1.4;
          }
        }
      }
      
      .link_holder {
        margin-top: 30px;
        
        @media (min-width: 992px) {
          margin-top: 50px;
        }
      }
      
      .link_text {
        font-size: 18px;
        
        @media (min-width: 1800px) {
          font-size: 22px;
        }
      }
    }
    
    .img_holder {
      box-shadow: 0px 4px 54px 0px rgba(0, 0, 0, 0.05);
      width: 100%;

      .ratio {
        &::before {
          padding-top: calc(370 / 550 * 100%);
        }
      }
    }
  }

  .read_more_link {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      color: #f15a29;
      
      .read_more_link_arrow {
        transform: translateX(4px);
      }
    }
    
    .read_more_link_arrow {
      transition: transform 0.3s ease;
      width: 20px;
      height: 20px;
      background: url('../assets/images/icons/arrow-right-white.svg') no-repeat center center;
      background-size: contain;
    }
  }

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
    margin-bottom: 20px;
  }

  .h3_heading_text {
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
  }
`;

const StakeholdersSection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  // Use Strapi data with fallbacks
  const stakeholdersData = data || homepage?.stakeholders || {};
  const title = stakeholdersData.title || 'Stakeholders';
  const subtitle = stakeholdersData.subtitle || 'Built for Every Role';
  const description = stakeholdersData.description || 'Comprehensive solutions designed for every role in manufacturing operations.';
  
  // Debug logging
  console.log('StakeholdersSection - homepage:', homepage);
  console.log('StakeholdersSection - stakeholdersData:', stakeholdersData);
  const [activeTab, setActiveTab] = useState(0); // Process Engineers is active by default

  // Default stakeholders data - matching original HTML content
  const defaultStakeholders = [
    {
      id: 0,
      title: 'Process Engineers',
      heading: 'Monitor, analyze, and tune processes in real time with contextual AI support.',
      bullets: [
        'Optimize control strategies on live production',
        'Identify root causes faster with MVDA',
        'Eliminate guesswork in process tuning'
      ],
      image: processEngineerImg
    },
    {
      id: 1,
      title: 'Data Scientists',
      heading: 'Leverage clean, contextualized OT/IT data to deploy AI models that scale.',
      bullets: [
        'Access ready-to-use industrial datasets',
        'Apply models with faster validation cycles',
        'Reduce model-to-impact lag time'
      ],
      image: dataAnalystImg
    },
    {
      id: 2,
      title: 'IT & Enterprise Architects',
      heading: 'Securely bridge OT and IT with a scalable, governed data infrastructure.',
      bullets: [
        'Integrate edge, cloud, and enterprise systems',
        'Maintain compliance and data lineage',
        'Avoid vendor lock-in with open standards'
      ],
      image: qualityComplianceImg
    },
    {
      id: 3,
      title: 'Digital Transformation Leaders',
      heading: 'Turn digital strategy into measurable plant-level impact — quickly and at scale.',
      bullets: [
        'Connect strategy to real operational KPIs',
        'Accelerate time-to-impact from months to weeks',
        'Build a culture of informed decision-making'
      ],
      image: reliabilityMaintenanceImg
    },
    {
      id: 4,
      title: 'Quality Teams',
      heading: 'Gain real-time visibility into quality metrics across batches and sites.',
      bullets: [
        'Automate CPV and deviation detection',
        'Shorten batch release and investigation cycles',
        'Ensure CFR21 and GMP traceability'
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
    <StyledSection className="home_roles_sec bg-black">
      <div className="container one_side_full_container pe-0 ms-auto me-0">
        <div className="row gx-0">
          <div className="osfc_left_col d-flex flex-column">
            <div className="left_top_content">
              <div className="sec_heading_wrap">
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">Roles</span>
                  <h2 className="h3_heading_text fw-medium text-white split_text words_slide_from_right">
                    Quartic Built for every stakeholders
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="osfc_right_col">
            <div className="roles_slider_holder">
              <div className="divider_line anim-item-clipDown-line"></div>
              <div className="roles_slider_container">
                {/* Thumb Slider */}
                <div className="roles_thumb_slider">
                  <div className="splide__track">
                    <div className="splide__list">
                      {stakeholders.map((stakeholder) => (
                        <div 
                          key={stakeholder.id}
                          className={`splide__slide ${activeTab === stakeholder.id ? 'is-active' : ''}`}
                          onClick={() => handleTabClick(stakeholder.id)}
                        >
                          <span className="thumb_nav_text">
                            {stakeholder.title.includes(' ') ? 
                              stakeholder.title.split(' ').map((word, index) => 
                                index === 0 ? word : <><br key={index} />{word}</>
                              ) : 
                              stakeholder.title
                            }
                          </span>
                          <div className="underline"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Main Slider */}
                <div className="roles_main_slider">
                  <div className="row gx-0 gy-4 gy-lg-0">
                    <div className="col-lg-5 pe-lg-4">
                      <div className="roles_main_slider_content">
                        <div className="dsc_content_holder">
                          <div className="dsc_content">
                            <div className="comn_dsc_text_white">
                              <h3>{activeStakeholder.heading}</h3>
                              <ul>
                                {activeStakeholder.bullets.map((bullet, index) => (
                                  <li key={index}>
                                    <p>{bullet}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="link_holder">
                              <a href="#" className="read_more_link d-inline-block">
                                <span className="d-flex align-items-center">
                                  <div className="read_more_link_text">Read More</div>
                                  <div className="read_more_link_arrow"></div>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="roles_main_slider_content">
                        <div className="img_holder">
                          <div className="ratio">
                            <img 
                              className="object-fit-cover" 
                              src={activeStakeholder.image}
                              loading="lazy" 
                              alt={activeStakeholder.title} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default StakeholdersSection;
