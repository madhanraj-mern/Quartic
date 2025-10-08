import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import batchOptimizationIcon from '../assets/images/home/solutions/icons/batch-optimisation.svg';
import performanceImprovementIcon from '../assets/images/home/solutions/icons/performance-improvement.svg';
import predictiveMaintenanceIcon from '../assets/images/home/solutions/icons/predictive-maintenance.svg';
import qualityByDesignIcon from '../assets/images/home/solutions/icons/quality-by-design.svg';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: batchOptimizationIcon,
      title: 'Batch Optimization',
      description: 'Optimize your manufacturing processes with AI-driven insights and real-time monitoring.',
      features: ['Real-time monitoring', 'Predictive analytics', 'Quality control', 'Efficiency improvement']
    },
    {
      icon: predictiveMaintenanceIcon,
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures and reduce downtime with predictive maintenance solutions.',
      features: ['Predictive maintenance', 'Asset monitoring', 'Failure prediction', 'Maintenance scheduling']
    },
    {
      icon: qualityByDesignIcon,
      title: 'Quality by Design',
      description: 'Ensure consistent product quality with automated quality control and monitoring systems.',
      features: ['Automated PAT', 'Quality monitoring', 'Defect detection', 'Compliance tracking']
    },
    {
      icon: performanceImprovementIcon,
      title: 'Performance Improvement',
      description: 'Transform your industrial data into actionable insights with advanced analytics.',
      features: ['MVDA', 'Statistical analysis', 'Data visualization', 'Trend analysis']
    }
  ];

  return (
    <div className="solutions-page">
      <Header />
      
      {/* Hero Section */}
      <section className="light_hero_banner header_after_sec">
        <div className="light_hero_banner_inr">
          <div className="container one_side_full_container pe-0 ms-auto me-0 position-relative">
            <div className="divider_line d-none d-lg-block"></div>
            <div className="row gx-0">
              <div className="osfc_left_col break_on_md">
                <div className="w-100 left_content pe-3 pe-lg-4 light_hero_banner_breadcrumb_holder">
                  <nav aria-label="breadcrumb" className="light_hero_banner_breadcrumb">
                    <ol className="breadcrumb flex-column">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Solutions</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="osfc_right_col break_on_md">
                <div className="w-100 right_content">
                  <div className="row gx-0 align-items-center">
                    <div className="hero-content-col">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                      >
                        <h1 className="fw-semibold hero-main-headingtext text-black">
                          Manufacturing Solutions That Drive Results
                        </h1>
                        <div className="dsc_text">
                          <p>
                            Discover how our comprehensive suite of solutions can transform your manufacturing operations 
                            and deliver measurable improvements in efficiency, quality, and reliability.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions_grid_sec comn_sec_py">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sec_heading_wrap text-center mb-5"
          >
            <div className="sec_heading_holder">
              <span className="tag_lightBlue lh-base tag-mb-20px">Our Solutions</span>
              <h2 className="h3_heading_text fw-medium">
                Comprehensive Manufacturing Solutions
              </h2>
            </div>
            <div className="heading_dsc_text text-black mt-3 lh-base">
              <p>
                From process optimization to quality management, our solutions are designed to address 
                every aspect of your manufacturing operations.
              </p>
            </div>
          </motion.div>

          <div className="row g-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-lg-6"
              >
                <div className="solution_card h-100">
                  <div className="card_body">
                    <div className="icon_holder mb-3">
                      <img src={solution.icon} alt={solution.title} />
                    </div>
                    <h3 className="card_title fw-medium mb-3">{solution.title}</h3>
                    <p className="card_description mb-4">{solution.description}</p>
                    <ul className="features_list">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature_item">
                          <span className="check_icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="card_action mt-4">
                      <a href="#" className="btn btn_outline_orange">
                        <span>Learn More</span>
                        <span className="arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions_cta_sec bg_light_fa comn_sec_py">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="h3_heading_text fw-medium mb-4">
              Ready to Transform Your Manufacturing Operations?
            </h2>
            <p className="text_18_box color_black mb-4">
              Get a personalized demo and see how our solutions can drive measurable improvements in your operations.
            </p>
            <a href="#" className="btn btn_orange">
              <span>Request a Demo</span>
              <span className="arrow"></span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
