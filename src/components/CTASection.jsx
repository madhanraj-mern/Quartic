import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
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
                Ready to See What Manufacturing Decision Intelligence Looks Like?
              </h2>
              <p className="lead mb-4">
                Powering connected, responsive, and agile manufacturing by unifying plant-floor systems, 
                enterprise data, and AI-enabled decision intelligence.
              </p>
              <motion.a
                href="#"
                className="btn btn_orange"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Schedule a Demo"
              >
                <span>Schedule a Demo</span>
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
