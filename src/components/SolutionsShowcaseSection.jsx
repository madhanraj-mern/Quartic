import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import processOptimizerIcon from '../assets/images/home/solutions/icons/performance-improvement.svg';
import reliabilityIcon from '../assets/images/home/solutions/icons/predictive-maintenance.svg';
import mvdaIcon from '../assets/images/home/solutions/icons/batch-optimisation.svg';
import pdOptimizerIcon from '../assets/images/home/solutions/icons/quality-by-design.svg';
import automatedPatIcon from '../assets/images/home/solutions/icons/energy-utility-optimization.svg';

const SolutionsShowcaseSection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Use Strapi data with fallbacks
  const solutionsData = data || homepage?.solutionsShowcase || {};
  const title = solutionsData.title || 'Solutions';
  const subtitle = solutionsData.subtitle || 'Comprehensive Manufacturing Solutions';
  const description = solutionsData.description || 'Transform your manufacturing operations with our suite of intelligent solutions.';
  
  // Debug logging
  console.log('SolutionsShowcaseSection - homepage:', homepage);
  console.log('SolutionsShowcaseSection - solutionsData:', solutionsData);

  const solutions = solutionsData.solutions || [
    {
      id: 'process-optimizer',
      icon: processOptimizerIcon,
      title: 'Process Optimiser',
      description: 'AI-powered process control for yield, quality, and diagnostics.',
      features: [
        'Real-time process optimization',
        'Predictive quality control',
        'Automated diagnostics',
        'Yield improvement strategies'
      ],
      link: '#'
    },
    {
      id: 'reliability',
      icon: reliabilityIcon,
      title: 'Reliability',
      description: 'Predict failures and minimize downtime using contextual signals from across assets.',
      features: [
        'Predictive maintenance',
        'Asset health monitoring',
        'Failure prediction models',
        'Downtime reduction strategies'
      ],
      link: '#'
    },
    {
      id: 'mvda',
      icon: mvdaIcon,
      title: 'MVDA',
      description: 'Multivariate insights across lab and plant data streams.',
      features: [
        'Multivariate data analysis',
        'Pattern recognition',
        'Statistical process control',
        'Data correlation insights'
      ],
      link: '#'
    },
    {
      id: 'pd-optimizer',
      icon: pdOptimizerIcon,
      title: 'Process Development',
      description: 'In-silico optimization for faster product scale-up.',
      features: [
        'Virtual experimentation',
        'Scale-up optimization',
        'Process simulation',
        'Development acceleration'
      ],
      link: '#'
    },
    {
      id: 'automated-pat',
      icon: automatedPatIcon,
      title: 'Automated PAT',
      description: 'Integrated analytics for continuous batch verification.',
      features: [
        'Process analytical technology',
        'Real-time monitoring',
        'Automated quality checks',
        'Batch verification'
      ],
      link: '#'
    }
  ];

  return (
    <section className="home_solutions_sec">
      <div className="home_solutions_top">
        <div className="container px-sm-0">
          <div className="row justify-content-center gx-0">
            <div className="col-xl-5">
              <div className="sec_heading_wrap">
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">Applications</span>
                  <AnimatedText
                    tag="h2"
                    className="h3_heading_text fw-medium"
                    text="Transform Your Operations with Quartic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_solutions_content">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="flex_card_group d-flex flex-wrap justify-content-center gap-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    className={`flex_card flex_card_is_hoverable ${hoveredCard === solution.id ? 'is_hovered' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredCard(solution.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      flex: '1 1 300px',
                      maxWidth: '350px',
                      minHeight: '400px',
                      position: 'relative',
                      background: 'linear-gradient(186.98deg, #ffffff 22.04%, #f0f0f0 98.17%)',
                      border: '1px solid rgba(0, 0, 0, 0.19)',
                      borderRadius: '12px',
                      padding: '30px',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="card_top_content">
                      <div className="icon_holder mb-3">
                        <img src={solution.icon} alt={solution.title} width="48" height="48" />
                      </div>
                      <h3 className="heading_text fw-medium mb-3">{solution.title}</h3>
                      <p className="dsc_text mb-4">{solution.description}</p>
                    </div>

                    <motion.div 
                      className="card_top_content_onhover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredCard === solution.id ? 1 : 0,
                        y: hoveredCard === solution.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '30px',
                        right: '30px'
                      }}
                    >
                      <div className="inner-box">
                        <ul className="feature_list mb-3">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="mb-2">
                              <svg width="16" height="16" className="me-2 text-success" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a href={solution.link} className="link_text">Learn more</a>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcaseSection;
