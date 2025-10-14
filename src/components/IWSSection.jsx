import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import iwsImg1 from '../assets/images/home/iws/iws-slider-img.jpg';
import iwsImg2 from '../assets/images/home/iws/iws-slider-img2.jpg';
import iwsImg3 from '../assets/images/home/iws/iws-slider-img3.jpg';
import iwsImg4 from '../assets/images/home/iws/iws-slider-img4.jpg';
import '@splidejs/splide/dist/css/splide.min.css';

const IWSSection = ({ homepage }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  
  // Industry tabs data - matching reference image exactly
  const industries = [
    {
      id: 0,
      title: 'Life Sciences',
      description: 'Enable CPV, PAT, and faster time-to-release.',
      ctaText: 'Read More',
      ctaUrl: '#',
      image: iwsImg1
    },
    {
      id: 1,
      title: 'Chemicals',
      description: 'Improve formulations and quality consistency.',
      ctaText: 'Read More',
      ctaUrl: '#',
      image: iwsImg4
    },
    {
      id: 2,
      title: 'Consumer Packaged Goods',
      description: 'Drive OEE and reduce quality losses.',
      ctaText: 'Read More',
      ctaUrl: '#',
      image: iwsImg2
    },
    {
      id: 3,
      title: 'Food & Beverage',
      description: 'Deliver safety, yield, and speed at scale.',
      ctaText: 'Read More',
      ctaUrl: '#',
      image: iwsImg3
    }
  ];
  
  // Handle active industry changes with clean animation
  useEffect(() => {
    console.log('Active industry changed to:', activeIndustry);
    
    // Clean up all popup cards
    const allPopups = document.querySelectorAll('.tab_content');
    allPopups.forEach((popup, i) => {
      if (i === activeIndustry) {
        // Show active popup with animation
        popup.classList.add('active');
        popup.style.display = 'block';
      } else {
        // Hide inactive popups
        popup.classList.remove('active');
        popup.style.display = 'none';
      }
    });
  }, [activeIndustry]);
  
  // Initialize Splide sliders
  useEffect(() => {
    const initializeSliders = async () => {
      try {
        // Dynamically import Splide
        const { default: Splide } = await import('@splidejs/splide');
        
        // Initialize main slider
        if (mainSliderRef.current) {
          const mainSlider = new Splide('#iws_slider_main', {
            type: 'slide',
            rewind: true,
            pagination: false,
            arrows: false,
            cover: true,
            autoplay: true,
            interval: 4000,
            speed: 1500,
          });

          // Initialize thumbnail slider
          if (thumbSliderRef.current) {
            const thumbSlider = new Splide('#iws_thumb_slider', {
              gap: 0,
              rewind: true,
              pagination: false,
              isNavigation: true,
              focus: 'center',
              arrows: false,
              mediaQuery: 'min',
              breakpoints: {
                0: {
                  perPage: 1,
                  direction: 'ttb',
                  height: 100,
                },
                768: {
                  perPage: 4,
                  direction: 'ltr',
                  height: 132,
                },
              },
            });

            // Sync sliders
            mainSlider.sync(thumbSlider);
            mainSlider.mount();
            thumbSlider.mount();
          }
        }
      } catch (error) {
        console.warn('Slider initialization failed:', error);
      }
    };

    initializeSliders();
  }, []);

  // Initialize counter animation
  useEffect(() => {
    const initializeCounters = async () => {
      try {
        // Dynamically import CountUp
        const { CountUp } = await import('countup.js');
        
        const counters = document.querySelectorAll('.statvalue');
        const countUpInstances = [];

        counters.forEach((counter, index) => {
          const endValue = parseInt(counter.getAttribute('numx'));
          const countUp = new CountUp(counter, endValue, {
            startVal: 0,
            duration: 2,
          });
          countUpInstances.push(countUp);
        });

        // Initialize waypoint for counter animation using Intersection Observer as fallback
        const statisticsElement = document.getElementById('statistics');
        if (statisticsElement) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                countUpInstances.forEach(countUp => {
                  countUp.reset();
                  countUp.start();
                });
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.5
          });
          
          observer.observe(statisticsElement);
        }
      } catch (error) {
        console.warn('Counter animation failed to initialize:', error);
      }
    };

    initializeCounters();
  }, []);

  // Use Strapi data with fallbacks - Fixed data access pattern
  const whereItWorksData = homepage?.WhereItWorks || {};
  const title = whereItWorksData.title || 'Where It Works';
  const heading = whereItWorksData.Heading || 'Built for Regulated Operations';
  const description = whereItWorksData.description || 'For industries where agility, compliance, and context must scale together.';

  // Key metrics/benefits data - matching reference image exactly
  const metrics = [
    { value: '20%', description: 'faster batch release' },
    { value: '15%', description: 'higher process yield' },
    { value: '30%', description: 'fewer investigations' },
    { value: '100%', description: 'audit-ready traceability' }
  ];

  return (
    <section className="home_iws_sec" id="statistics" style={{ minHeight: '600px', backgroundColor: '#ffffff' }}>
      <div className="container one_side_full_container pe-0 ms-auto me-0">
        <div className="divider_line"></div>
        <div className="row gx-0">
          {/* Left Column - Text Content */}
          <div className="osfc_left_col d-flex flex-column">
            <div className="left_top_content pe-2 pe-md-3">
              <div className="sec_heading_wrap anim-item-left" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">{title}</span>
                  <h2 className="h3_heading_text fw-medium split_text words_slide_from_right">
                    {heading}
                  </h2>
                </div>
                <div className="heading_text mt-3">
                  <p>{description}</p>
                </div>
              </div>
            </div>
            
            {/* Key Metrics - Counter Animation */}
            <div className="left_counter_content d-flex flex-column pe-md-3">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="counter-content-item anim-item-zoomIn" 
                  data-aos="fade-up" 
                  data-aos-duration="800" 
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className="counter-content">
                    <div className="counter-number d-flex align-items-center flex-shrink-0">
                      <span className="counter statvalue" numx={metric.value.replace('%', '')}>0</span>
                      <span>%</span>
                    </div>
                    <div className="counter-infoText">
                      <p className="m-0">{metric.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="osfc_right_col">
            <div className="iws_slider_holder anim-item-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
              {/* Main Image with Active Industry */}
              <div className="main-slide-image">
                <div className="ratio">
                  <img 
                    src={industries[activeIndustry].image} 
                    alt={industries[activeIndustry].title} 
                    loading="lazy"
                    className="slide-image"
                    key={activeIndustry} // Force re-render for smooth transition
                    onError={(e) => {
                      console.log('Image failed to load:', industries[activeIndustry].image);
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', industries[activeIndustry].image);
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  />
                </div>
              </div>

              {/* Industry Tabs Navigation */}
              <div className="iws_tab_nav_wrap" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                <div className="iws_tab_nav_holder">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`industry_tab_item ${activeIndustry === index ? 'active' : ''}`}
                      data-active={activeIndustry === index ? 'true' : 'false'}
                      onClick={() => {
                        console.log('Tab clicked:', index, 'Current active industry:', activeIndustry);
                        setActiveIndustry(index);
                      }}
                      data-aos="fade-up" 
                      data-aos-duration="600" 
                      data-aos-delay={700 + (index * 100)}
                      data-aos-disable="true"
                    >
                      <div className="tab_title">{industry.title}</div>
                      <div 
                        className={`tab_content ${activeIndustry === index ? 'active' : ''}`}
                      >
                        <div className="tab_title_popup">{industry.title}</div>
                        <div className="tab_description">{industry.description}</div>
                        <div className="tab_actions">
                          <button className="tab_button">{industry.ctaText}</button>
                          <div className="chat_icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IWSSection;
