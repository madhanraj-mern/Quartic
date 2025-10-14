import React, { useMemo, useState } from 'react';
import '../assets/css/industry-showcase.css';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import pharmaImg from '../assets/images/home/iws/iws-slider-img.jpg';
import chemicalsImg from '../assets/images/home/iws/iws-slider-img4.jpg';
import cpgImg from '../assets/images/home/iws/iws-slider-img2.jpg';
import foodImg from '../assets/images/home/iws/iws-slider-img3.jpg';

const WhereItWorksSection = ({ homepage }) => {
  // Fallback data when Strapi is not available
  const fallbackData = {
    title: "Where It Works",
    subtitle: "Built for Regulated Operations",
    description: "For industries where agility, compliance, and context must scale together.",
    industries: [
      {
        title: 'iLuminator DataOps',
        description: 'Create Context-in-Motion: Stream real-time context for materials, processes, procedures, and equipment.',
        ctaLabel: 'Learn More',
        background: pharmaImg,
        type: 'iluminator',
        metrics: [
          { value: 35, label: 'faster data integration' },
          { value: 45, label: 'reduction in data prep time' },
          { value: 60, label: 'improved data quality' },
          { value: 100, label: 'real-time data access' },
        ],
      },
      {
        title: 'Chemicals & Advanced Materials',
        description: 'Improve formulations and quality consistency.',
        ctaLabel: 'Read More',
        background: chemicalsImg,
        metrics: [
          { value: 22, label: 'increase in first-pass quality' },
          { value: 27, label: 'reduction in deviations' },
          { value: 18, label: 'faster validation cycles' },
          { value: 40, label: 'higher asset utilization' },
        ],
      },
      {
        title: 'Consumer Packaged Goods',
        description: 'Drive OEE and reduce quality losses.',
        ctaLabel: 'Read More',
        background: cpgImg,
        metrics: [
          { value: 25, label: 'reduction in waste' },
          { value: 31, label: 'faster changeovers' },
          { value: 34, label: 'increase in order fulfilment' },
          { value: 40, label: 'increase in forecast accuracy' },
        ],
      },
      {
        title: 'Food & Beverage',
        description: 'Deliver safety, yield, and speed at scale.',
        ctaLabel: 'Read More',
        background: foodImg,
        metrics: [
          { value: 20, label: 'higher beer yield' },
          { value: 49, label: 'reduction in batch variability' },
          { value: 26, label: 'lower energy usage' },
          { value: 33, label: 'increase in line uptime' },
        ],
      },
    ]
  };

  // Use Strapi data if available, otherwise use fallback
  const sectionData = homepage?.attributes?.whereItWorks || fallbackData;
  const industries = sectionData.industries || fallbackData.industries;
  
  // Debug logging
  console.log('WhereItWorksSection - homepage:', homepage);
  console.log('WhereItWorksSection - sectionData:', sectionData);
  console.log('WhereItWorksSection - industries:', industries);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <section className="home_iws_sec quartic_industry_showcase" id="statistics">
      <div className="container one_side_full_container pe-0 ms-auto me-0">
        <div className="divider_line"></div>
        <div className="row gx-0">
          <div className="osfc_left_col d-flex flex-column">
            <div className="left_top_content pe-2 pe-md-3">
              <div className="sec_heading_wrap">
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">Industry</span>
                  <h2 className="h3_heading_text fw-medium text-black">
                    {sectionData.subtitle || "Built for Regulated Operations"}
                  </h2>
                </div>
                <div className="heading_text mt-3">
                  <p>{sectionData.description || "We serve data-critical industries where context and compliance matter."}</p>
                </div>
              </div>
            </div>

            <div className="left_counter_content d-flex flex-column pe-md-3">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeIndustry.title}
                  className="industry_counter_block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                >
                  {activeIndustry.metrics.map((metric, metricIndex) => (
                    <div className="counter-content-item" key={`${activeIndustry.title}-${metric.label}`}>
                      <div className="counter-content">
                        <div className="counter-number d-flex align-items-center flex-shrink-0">
                          <AnimatedCounter end={metric.value} suffix="%" delay={metricIndex * 0.12} />
                        </div>
                        <div className="counter-infoText">
                          <p className="m-0">{metric.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="osfc_right_col">
            <div className="industry_media_wrapper">
              <div className="industry_image_stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.background}
                    className="industry_image_backdrop"
                    style={{ backgroundImage: `url(${activeIndustry.background})` }}
                    initial={{ opacity: 0.45, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.45 }}
                  />
                </AnimatePresence>

                <motion.div
                  key={`${activeIndustry.title}-card`}
                  className={`industry_detail_card ${activeIndustry.type === 'iluminator' ? 'iluminator_card' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <h3>{activeIndustry.title}</h3>
                  <p>{activeIndustry.description}</p>
                  <a href="#" className="btn btn_orange">
                    <span>{activeIndustry.ctaLabel}</span>
                    <span className="arrow"></span>
                  </a>
                </motion.div>
              </div>

              <div className="industry_tab_bar">
                {industries.map((industry, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={industry.title}
                      type="button"
                      className={`industry_tab_item ${isActive ? 'active' : ''} ${industry.type === 'iluminator' ? 'iluminator_tab' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                    >
                      <span className="tab_index">0{index + 1}</span>
                      <span className="tab_label">{industry.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereItWorksSection;
