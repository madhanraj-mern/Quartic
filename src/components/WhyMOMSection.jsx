import React from 'react';
import { motion } from 'framer-motion';

const WhyMOMSection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  // Use Strapi data with fallbacks
  const momData = data || homepage?.theQuarticAdvantage || {};
  const title = momData.title || 'The Quartic Advantage';
  const subtitle = momData.subtitle || 'Connected, Intelligent MOM';
  
  // Debug logging
  console.log('WhyMOMSection - homepage:', homepage);
  console.log('WhyMOMSection - momData:', momData);
  
  const features = momData.features || [
    {
      title: 'Highly Responsive',
      description: 'Adapts to changes instantly with context-rich insights.'
    },
    {
      title: 'Predictive Operations',
      description: 'Enables foresight using industrial AI for smarter control.'
    },
    {
      title: 'Automated Decision Systems',
      description: 'Reduces manual input by executing logic-based decisions at speed.'
    },
    {
      title: 'Real-Time Connectivity',
      description: 'Breaks down silos by linking OT, IT, and enterprise systems.'
    }
  ];

  // Debug logging
  console.log('WhyMOMSection - homepage:', homepage);
  console.log('WhyMOMSection - momData:', momData);

  return (
    <section className="theQuarticAdvantage">
      <div className="container">
        <div className="row gx-0">
          {/* Left Side - Diagram */}
          <div className="col-lg-7 home_why_mom_svg_col">
            <motion.div
              className="zoom-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="svg_holder">
                <img 
                  src="/src/assets/images/home/intelligent-mom.svg" 
                  alt="Connected, Intelligent MOM Diagram" 
                  width="100%" 
                  height="100%"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-5 home_why_mom_dsc_content_col">
            <motion.div
              className="home_why_mom_dsc_content_holder"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="sec_heading_wrap">
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">{title}</span>
                  <h2 className="h3_heading_text fw-medium split_text words_slide_from_right">
                    {subtitle}
                  </h2>
                </div>
              </div>
              
              <div className="whymom_card_dsc_content_item_row">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="whymom_card_dsc_content_item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="dsc_content_item_body side-dot">
                      <h3 className="heading_text">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="btn_holder"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href="#" className="btn btn-primary">
                  Why Intelligent MOM →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMOMSection;
