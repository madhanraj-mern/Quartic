import React, { useState } from 'react';
import { motion } from 'framer-motion';
import blogImg1 from '../assets/images/blog/blog-listing-img1.png';
import blogImg2 from '../assets/images/blog/blog-listing-img2.jpg';
import videoThumb from '../assets/images/menu/video-thumb.png';

const ResourceHubSection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  const [activeTab, setActiveTab] = useState('all');

  // Use Strapi data with fallbacks
  const resourceHubData = data || homepage?.resourceHub || {};
  const title = resourceHubData.title || 'Resource Hub';
  const subtitle = resourceHubData.subtitle || 'Latest Insights and Resources';
  const description = resourceHubData.description || 'Stay updated with the latest manufacturing insights, case studies, and resources.';
  
  // Debug logging
  console.log('ResourceHubSection - homepage:', homepage);
  console.log('ResourceHubSection - resourceHubData:', resourceHubData);

  const resources = resourceHubData.resources || [
    {
      id: 1,
      type: 'blog',
      category: 'blog',
      title: 'To achieve Agility in manufacturing – embrace Variability – Part 1',
      description: 'Explore how embracing variability can lead to greater agility in manufacturing operations.',
      image: blogImg1,
      date: 'Posted 1538 days ago',
      readTime: '8 Minutes Read',
      author: 'Quartic Team'
    },
    {
      id: 2,
      type: 'blog',
      category: 'blog',
      title: 'Advanced Analytics in Batch Manufacturing: A Practical Path to Improved Yield and Consistency',
      description: 'Learn practical approaches to implementing advanced analytics in batch manufacturing for better yield and consistency.',
      image: blogImg2,
      date: 'Posted 576 days ago',
      readTime: '12 Minutes Read',
      author: 'Industry Experts'
    },
    {
      id: 3,
      type: 'video',
      category: 'video',
      title: 'How to get started with AI and ML technologies in Life Sciences',
      description: 'Event recording covering the fundamentals of implementing AI and ML in life sciences manufacturing.',
      image: videoThumb,
      date: 'Event',
      readTime: '45 Minutes Watch',
      author: 'Quartic Team'
    },
    {
      id: 4,
      type: 'case-study',
      category: 'case-study',
      title: '15% More Production Capacity with Predictive Harvest Forecasting',
      description: 'Case study showing how predictive analytics improved production capacity in life sciences.',
      image: blogImg1,
      date: 'Customer Story',
      readTime: '5 Minutes Read',
      author: 'Customer Success Team'
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeTab);

  return (
    <section className="resource_hub_sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-5"
            >
              <span className="tag_lightBlue lh-base tag-mb-20px">Resources</span>
              <h2 className="h2_heading_text fw-medium text-black mb-3">
                Explore More on Intelligent Manufacturing
              </h2>
              <p className="lead text-muted">
                Access technical guides, case studies, and best practices to make faster, more confident manufacturing decisions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Resource Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="resource_tabs d-flex justify-content-center flex-wrap gap-3"
            >
              {['all', 'blog', 'video', 'case-study'].map((tab) => (
                <button
                  key={tab}
                  className={`resource_tab_btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'all' ? 'All Resources' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="row g-4">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="resource_card h-100"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="resource_image_holder">
                  <img src={resource.image} alt={resource.title} className="img-fluid" />
                  <div className="resource_type_badge">
                    <span className="badge bg-primary">{resource.type}</span>
                  </div>
                </div>
                
                <div className="resource_content p-3">
                  <div className="resource_meta mb-2">
                    <span className="resource_date small text-muted">{resource.date}</span>
                    <span className="resource_read_time small text-muted ms-2">• {resource.readTime}</span>
                  </div>
                  
                  <h3 className="resource_title fw-medium mb-2">{resource.title}</h3>
                  <p className="resource_description small text-muted mb-3">{resource.description}</p>
                  
                  <div className="resource_author small text-muted">
                    By {resource.author}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <motion.a
              href="#"
              className="btn btn_orange"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Access Full Resource Hub</span>
              <motion.span
                className="arrow"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHubSection;
