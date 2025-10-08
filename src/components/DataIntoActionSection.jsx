import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import AnimatedDivider from './AnimatedDivider';
import diaBlockImg1 from '../assets/images/home/dia_block-img1.jpg';

const DataIntoActionSection = ({ homepage }) => {
  // Use Strapi data with fallbacks
  const exploreButtonData = homepage?.exploreButton || {};
  const buttonText = exploreButtonData.buttonName || 'Explore All';
  const buttonUrl = exploreButtonData.url || 'https://www.quartic.ai/customers/';
  
  // Debug logging
  console.log('🔍 Explore Button Debug:', {
    hasHomepage: !!homepage,
    hasExploreButtonData: !!exploreButtonData,
    buttonText,
    buttonUrl,
    exploreButtonData
  });
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const industryData = {
    block1: {
      title: 'Pharmaceutical Manufacturing',
      subtitle: '20% reduction in batch disposition time using real-time quality intelligence',
      image: diaBlockImg1,
      description: 'A global biopharma player cut batch release timelines by connecting PAT and CPV data with contextualized AI-based insights.',
      metrics: [
        { value: '20%', label: 'faster batch release' },
        { value: '15%', label: 'higher process yield' }
      ]
    },
    block2: {
      title: 'Chemical Industry',
      subtitle: '15% improvement in first-pass yield, enabled by eXponence',
      image: diaBlockImg1,
      description: 'Quartic gave us visibility we didn\'t know we lacked.',
      metrics: [
        { value: '3X', label: 'faster root cause detection' },
        { value: '80%', label: 'less manual investigation' }
      ]
    },
    block3: {
      title: 'Food & Beverage',
      subtitle: 'Accelerated time-to-production for new formulations',
      image: diaBlockImg1,
      description: 'Quartic enabled a specialty chem company to simulate and validate new formulations 30% faster using advanced MVDA tools.',
      metrics: [
        { value: '30%', label: 'faster formulation' },
        { value: '25%', label: 'reduced testing time' }
      ]
    }
  };

  const blockKeys = Object.keys(industryData);

  return (
    <section className="home_data_into_action_sec">
      <div className="container position-relative pe-0">
        <AnimatedDivider className="d-none d-md-block" />
        <div className="row gx-0">
          <div className="osfc_left_col d-flex flex-column justify-content-between row-gap-md-4 sidebar">
            <div className="left_top_content">
              <div className="sec_heading_wrap">
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">Pharmaceuticals | CPG | Chemicals</span>
                  <AnimatedText
                    tag="h2"
                    className="h3_heading_text fw-medium"
                    text="Driving KPIs in Batch-Critical Environments"
                  />
                </div>
              </div>

              <div className="home_data_into_action_nav d-none d-md-block">
                <ul>
                  {blockKeys.map((key, index) => (
                    <li key={key}>
                      <button
                        type="button"
                        className={`nav-link ${activeCardIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveCardIndex(index)}
                      >
                        {industryData[key].title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              <div className="discover_link_holder">
                <a 
                  href={buttonUrl} 
                  className="btn btn_orange"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    console.log('🔍 Button clicked:', { buttonUrl, buttonText });
                    // Allow the link to work normally
                  }}
                >
                  {buttonText}
                </a>
              </div>
          </div>

          <div className="osfc_right_col">
            <div
              className="dia_content_blocks_holder flex_card_group"
              data-active-index={activeCardIndex}
            >
              {Object.entries(industryData).map(([key, data], index) => {
                const isActive = index === activeCardIndex;
                return (
                  <motion.div
                    key={key}
                    className={`dia_block dia_block_item dia_block_style1 msn_block_item flex_card_is_hoverable ${index === 0 ? 'always_hovered' : ''} ${isActive ? 'is_hovered active' : ''}`.trim()}
                    data-index={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveCardIndex(index)}
                  >
                    <div className="dia_block_item_body">
                      <div className="dia_block_top">
                        <span className="tag_lightBlue lh-base tag-mb-20px">{data.title}</span>
                        <h4 className="headingText">{data.subtitle}</h4>
                      </div>
                      <div className="dia_block_img_holder">
                        <div className="ratio">
                          <img src={data.image} alt={data.title} loading="lazy" />
                        </div>
                      </div>
                      <div className="dia_block_bottom d-flex flex-column">
                        <div className="metrics_row d-flex gap-4 my-3">
                          {data.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="metric_item">
                              <div className="metric_value fw-bold text-primary fs-5">{metric.value}</div>
                              <div className="metric_label small text-muted">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <p className="text_style1">{data.description}</p>
                        <div className="link_holder">
                          <a href="#" className="link_text" aria-label="Read More">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              <div className="dia_block_item dia_block_style3 msn_block_item">
                <div className="dia_block_item_body position-relative">
                  <div className="svg_holder">
                    <svg width="252" height="127" viewBox="0 0 252 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="dia-cta-mask" maskUnits="userSpaceOnUse" x="1" y="1" width="250" height="125">
                        <rect width="250" height="125" transform="translate(1 1)" fill="url(#dia-cta-gradient)" />
                      </mask>
                      <g mask="url(#dia-cta-mask)">
                        <path d="M9.99621 110.914L1 126H251V1L247.449 22.5517H242.714C241.451 26.1437 238.831 33.3276 238.453 33.3276C238.074 33.3276 235.612 37.6379 234.428 39.7931L224.248 46.2586L218.33 54.8793L208.86 46.2586L203.888 39.7931L196.786 54.8793H189.447L183.292 39.7931C180.924 37.6379 176.095 33.3276 175.716 33.3276C175.337 33.3276 172.244 29.0172 170.744 26.8621H166.956L157.96 33.3276L150.148 39.7931L146.597 54.8793L135.943 61.3448L130.498 67.8103L124.343 78.5862L118.424 92.7295H115.82L108.718 94.0765L101.852 78.5862L95.9337 67.8103H92.3826L86.2273 61.3448L77.4678 67.8103H69.1818L60.8958 78.5862L52.6098 91.5173L46.4545 104.448L39.8258 110.914L30.8295 104.448L23.7273 110.914L16.625 117.379L9.99621 110.914Z" fill="#ECFDF3" />
                      </g>
                      <path className="draw-path" d="M1 126L9.99621 110.914L16.625 117.379L23.7273 110.914L30.8295 104.448L39.8258 110.914L46.4545 104.448L52.6098 91.5173L60.8958 78.5862L69.1818 67.8104H77.4678L86.2273 61.3448L92.3826 67.8104H95.9337L101.852 78.5862L108.718 94.0765L115.82 92.7295H118.424L124.343 78.5862L130.498 67.8104L135.943 61.3448L146.597 54.8793L150.148 39.7931L157.96 33.3276L166.956 26.8621H170.744C172.244 29.0172 175.337 33.3276 175.716 33.3276C176.095 33.3276 180.924 37.6379 183.292 39.7931L189.447 54.8793H196.786L203.888 39.7931L208.86 46.2586L218.33 54.8793L224.248 46.2586L234.428 39.7931C235.612 37.6379 238.074 33.3276 238.453 33.3276C238.831 33.3276 241.451 26.1437 242.714 22.5517H247.449L251 1" stroke="#97D6DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <g opacity="0.2" className="pulse-circle">
                        <rect x="146.531" y="7.859" width="40.969" height="40.969" rx="20.484" stroke="#F15A29" strokeWidth="2" />
                      </g>
                      <rect className="pulse-circle" x="156.297" y="17.625" width="21.438" height="21.438" rx="10.719" fill="white" />
                      <rect x="156.297" y="17.625" width="21.438" height="21.438" rx="10.719" stroke="#F15A29" strokeWidth="2" />
                      <defs>
                        <linearGradient id="dia-cta-gradient" x1="125" y1="0" x2="125" y2="125" gradientUnits="userSpaceOnUse">
                          <stop />
                          <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="dsc_content">
                    <h2 className="h4_heading_text">Ready to see KPI impact?</h2>
                    <div className="btn_holder">
                      <a href="#" className="btn btn_orange" aria-label="Request a Demo">
                        <span>Request a Demo</span>
                        <span className="arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataIntoActionSection;
