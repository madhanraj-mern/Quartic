import React from 'react';
import { motion } from 'framer-motion';

const CTASection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  // Use Strapi data with fallbacks
  const ctaData = data || homepage?.ctaSection || {};
  const title = ctaData.title || 'Ready to See What Manufacturing Decision Intelligence Looks Like?';
  const description = ctaData.description || 'Powering connected, responsive, and agile manufacturing by unifying plant-floor systems, enterprise data, and AI-enabled decision intelligence.';
  const ctaText = ctaData.ctaText || 'Schedule a Demo';
  const ctaUrl = ctaData.ctaUrl || '#';
  
  // Debug logging
  console.log('CTASection - homepage:', homepage);
  console.log('CTASection - ctaData:', ctaData);

  return (
    <section className="cta_sec bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center text-white py-5"
            >
              <h2 className="h2_heading_text fw-medium mb-4">
                {title}
              </h2>
              <p className="lead mb-4">
                {description}
              </p>
              <motion.a
                href={ctaUrl}
                className="btn btn_orange"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={ctaText}
              >
                <span>{ctaText}</span>
                <motion.span
                  className="arrow"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
