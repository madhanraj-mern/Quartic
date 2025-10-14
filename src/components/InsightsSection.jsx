import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import insightsVideo from '../assets/images/home/GettyImages-video.mp4';
import useVideoAutoPlayOnView from '../hooks/useVideoAutoPlayOnView';
// import {
//   StaggeredContainer,
//   staggerItem, 
//   ClipDownLine,
//   viewportOptions 
// } from '../utils/animations.jsx';

const InsightsSection = ({ homepage }) => {
  const videoRef = useRef(null);
  useVideoAutoPlayOnView(videoRef);

  // Use Strapi data with fallbacks
  const howItWorksData = homepage?.HowItWorks || {};
  const title = howItWorksData.title || 'How It Works';
  const subtitle = howItWorksData.subtitle || 'AI-driven Optimization Needs Context';
  const description = howItWorksData.description || 'AI in manufacturing is only as good as the data it runs on. Quartic contextualizes OT data, enabling faster, smarter decisions across MOM workflows.';
  const ctaText = howItWorksData.ctaText || 'Explore Quartic Platform';
  const ctaUrl = howItWorksData.ctaUrl || '#';

  return (
    <section className="home_insights_sec">
      <div className="container one_side_full_container pe-0 ms-auto me-0 position-relative">
        <div className="divider_line d-none d-md-block"></div>
        <div className="row gx-0 align-items-center">
          <div className="osfc_left_col pe-2 pe-md-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sec_heading_wrap"
            >
              <div className="sec_heading_holder">
                <span className="tag_lightBlue lh-base tag-mb-20px">{title}</span>
                <h2 className="h3_heading_text fw-medium split_text words_slide_from_right">
                  {subtitle}
                </h2>
              </div>
            </motion.div>
          </div>
          <div className="osfc_right_col">
            <div className="home_insights_content_holder w-100 position-relative overflow-hidden">
              <div className="ratio">
                <video ref={videoRef} className="object-fit-cover" preload="metadata" loop muted playsInline autoPlay>
                  <source src={insightsVideo} type="video/mp4" />
                </video>
              </div>
              <div className="dsc_content_holder">
                <h3 className="h3_heading_text split_text words_slide_from_right">
                  {description}
                </h3>
                <div className="link_holder">
                  <a href={ctaUrl} className="link_text" aria-label={ctaText}>
                    {ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
