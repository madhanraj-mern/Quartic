import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogImg1 from '../assets/images/blog/blog-listing-img1.png';
import blogImg2 from '../assets/images/blog/blog-listing-img2.jpg';
import caseStudyImg1 from '../assets/images/casestudy/casestudy_list_img1.jpg';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    {
      id: 1,
      type: 'blog',
      category: 'blog',
      title: 'AI and First Principles: A New Era in Process Optimization',
      description: 'Explore how artificial intelligence combined with first principles modeling is revolutionizing process optimization in manufacturing.',
      image: blogImg1,
      date: 'Jan 22, 2024',
      readTime: '8 Minutes Read',
      author: 'Quartic Team'
    },
    {
      id: 2,
      type: 'whitepaper',
      category: 'whitepaper',
      title: 'Manufacturing Intelligence: A Complete Guide',
      description: 'A comprehensive guide to implementing manufacturing intelligence solutions in your organization.',
      image: blogImg2,
      date: 'Jan 15, 2024',
      readTime: '15 Minutes Read',
      author: 'Industry Experts'
    },
    {
      id: 3,
      type: 'case-study',
      category: 'case-study',
      title: 'Case Study: 30% Efficiency Improvement with Process Optimization',
      description: 'Learn how a leading manufacturer achieved 30% efficiency improvement using our process optimization solutions.',
      image: caseStudyImg1,
      date: 'Jan 10, 2024',
      readTime: '12 Minutes Read',
      author: 'Customer Success Team'
    },
    {
      id: 4,
      type: 'webinar',
      category: 'webinar',
      title: 'The Future of Manufacturing: AI-Driven Operations',
      description: 'Join our experts as they discuss the future of manufacturing and how AI is transforming operations.',
      image: blogImg1,
      date: 'Jan 8, 2024',
      readTime: '45 Minutes Watch',
      author: 'Quartic Experts'
    },
    {
      id: 5,
      type: 'blog',
      category: 'blog',
      title: 'Machine Learning and First Principle Models for Process Optimization',
      description: 'Understanding the synergy between machine learning and first principle models in manufacturing optimization.',
      image: blogImg2,
      date: 'Jan 5, 2024',
      readTime: '10 Minutes Read',
      author: 'Data Science Team'
    },
    {
      id: 6,
      type: 'whitepaper',
      category: 'whitepaper',
      title: 'Digital Transformation in Manufacturing: Best Practices',
      description: 'Key strategies and best practices for successful digital transformation in manufacturing organizations.',
      image: blogImg1,
      date: 'Jan 1, 2024',
      readTime: '20 Minutes Read',
      author: 'Industry Analysts'
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'blog', label: 'Blog Posts' },
    { id: 'whitepaper', label: 'Whitepapers' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'webinar', label: 'Webinars' }
  ];

  return (
    <div className="resources-page">
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
                      <li className="breadcrumb-item active" aria-current="page">Resources</li>
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
                          Resources & Insights
                        </h1>
                        <div className="dsc_text">
                          <p>
                            Access the latest insights, best practices, and thought leadership in manufacturing 
                            intelligence and industrial operations.
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

      {/* Resources Tabs */}
      <section className="resources_tabs_sec comn_sec_py">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sec_heading_wrap text-center mb-5"
          >
            <div className="sec_heading_holder">
              <span className="tag_lightBlue lh-base tag-mb-20px">Resources</span>
              <h2 className="h3_heading_text fw-medium">
                Insights, Tools, and Knowledge at Your Fingertips
              </h2>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="resources_tab_nav_holder mb-5">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              {tabs.map((tab) => (
                <li key={tab.id} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Grid */}
          <div className="resources_grid">
            <div className="row g-4">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="col-lg-4 col-md-6"
                >
                  <div className="resource_card h-100">
                    <div className="card_body">
                      <div className="img_wrap mb-3">
                        <div className="ratio">
                          <img src={resource.image} alt={resource.title} loading="lazy" />
                        </div>
                        <div className="resource_type_badge">
                          <span className={`badge badge-${resource.type}`}>
                            {resource.type.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="content_wrap">
                        <h3 className="card_title fw-medium mb-3">
                          {resource.title}
                        </h3>
                        <p className="card_description mb-3">
                          {resource.description}
                        </p>
                        <div className="resource_meta d-flex justify-content-between align-items-center mb-3">
                          <div className="meta_info">
                            <span className="date">{resource.date}</span>
                            <span className="read_time">{resource.readTime}</span>
                          </div>
                          <div className="author">
                            <span className="author_name">{resource.author}</span>
                          </div>
                        </div>
                        <div className="card_action">
                          <a href="#" className="btn btn_outline_orange">
                            <span>Read More</span>
                            <span className="arrow"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter_sec bg_light_fa comn_sec_py">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="h3_heading_text fw-medium mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text_18_box color_black mb-4">
              Subscribe to our newsletter and get the latest manufacturing intelligence insights delivered to your inbox.
            </p>
            <div className="newsletter_form">
              <form className="d-flex justify-content-center gap-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  style={{ maxWidth: '400px' }}
                />
                <button type="submit" className="btn btn_orange">
                  <span>Subscribe</span>
                  <span className="arrow"></span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
