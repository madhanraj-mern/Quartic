import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import wcqBgImg from '../assets/images/home/home_wcq_sec_bg_img.jpg';

const WCQSection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  // Use Strapi data with fallbacks
  const wcqData = data || homepage?.wcq || {};
  const title = wcqData.title || 'Why Choose Quartic';
  const subtitle = wcqData.subtitle || 'The Future of Manufacturing';
  const description = wcqData.description || 'Experience the power of intelligent manufacturing operations management.';
  const backgroundImage = wcqData.backgroundImage || wcqBgImg;
  
  // Debug logging
  console.log('WCQSection - homepage:', homepage);
  console.log('WCQSection - wcqData:', wcqData);

  return (
    <section className="home_wcq_sec position-relative w-100">
      <div className="home_wcq_content_wrap overflow-hidden">
        <div className="bg_img_holder anim-item-blur">
          <div className="lg-img-holder d-none d-md-block">
            <img 
              className="" 
              src={wcqBgImg} 
              loading="lazy" 
              alt="Manufacturing Background" 
            />
          </div>
          <div className="img_holder d-block d-md-none">
            <div className="ratio">
              <img 
                className="" 
                src={wcqBgImg} 
                loading="lazy" 
                alt="Manufacturing Background" 
              />
            </div>
          </div>
        </div>

        <div className="home_wcq_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="wcq_content_holder text-center"
                >
                  <AnimatedText
                    tag="h2"
                    className="h2_heading_text fw-semibold text-white mb-4"
                    text="Why Choose Quartic"
                  />
                  <div className="wcq_features">
                    <div className="row g-4">
                      <div className="col-md-4">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="wcq_feature"
                        >
                          <h4 className="feature_title text-white">Built for regulated manufacturing</h4>
                        </motion.div>
                      </div>
                      <div className="col-md-4">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="wcq_feature"
                        >
                          <h4 className="feature_title text-white">Deep integration with OT and IT systems</h4>
                        </motion.div>
                      </div>
                      <div className="col-md-4">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="wcq_feature"
                        >
                          <h4 className="feature_title text-white">Accelerates time-to-impact with AI</h4>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WCQSection;
