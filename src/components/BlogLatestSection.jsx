import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import podcastImg1 from '../assets/images/resources/resource-video-01.png';
import podcastImg2 from '../assets/images/resources/resource-video-02.png';
import podcastImg3 from '../assets/images/resources/resource-video-03.png';
import blogImg1 from '../assets/images/resources/resorce-blog-01.png';
import blogImg2 from '../assets/images/resources/resorce-blog-02.png';

const BlogLatestSection = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const blogPosts = [
    {
      id: 1,
      category: 'videos',
      type: 'podcast',
      title: 'AI and First Principles: A New Era in Process Optimization',
      subtitle: 'Global UNS, Local Complexity: Why Edge Context isn\'t enough',
      image: podcastImg1,
      date: 'Jan 22, 2024',
      readTime: '8 Minutes Read',
      author: 'Hosted by Rajiv Anand',
      hosts: [
        { name: 'Rajiv Anand', role: 'Founder & CEO, Quartic.ai' },
        { name: 'Chris Demers', role: 'Global Head of Operations and Manufacturing' }
      ]
    },
    {
      id: 2,
      category: 'videos',
      type: 'blog',
      title: 'Machine Learning and First Principle Models for Process Optimization',
      subtitle: 'Turning Variability into Agility – Why it Starts with MOM (Manufacturing Operations Management)',
      image: podcastImg2,
      date: 'Jan 22, 2024',
      readTime: '8 Minutes Read',
      author: 'By Quartic Team'
    },
    {
      id: 3,
      category: 'videos',
      type: 'podcast',
      title: 'Machine Learning and First Principle Models for Process Optimization',
      subtitle: 'Global UNS, Local Complexity: Why Edge Context isn\'t enough',
      image: podcastImg3,
      date: 'Jan 22, 2024',
      readTime: '8 Minutes Read',
      author: 'Hosted by Rajiv Anand',
      hosts: [
        { name: 'Rajiv Anand', role: 'Founder & CEO, Quartic.ai' },
        { name: 'Chris Demers', role: 'Global Head of Operations and Manufacturing' }
      ]
    },
    {
      id: 4,
      category: 'blog',
      type: 'blog',
      title: 'To achieve Agility in manufacturing – embrace Variability – Part 1',
      excerpt: 'Explore how embracing variability can lead to greater agility in manufacturing operations.',
      image: blogImg1,
      date: 'Posted 1538 days ago',
      readTime: '8 Minutes Read',
      author: 'By Quartic Team'
    },
    {
      id: 5,
      category: 'blog',
      type: 'blog',
      title: 'Advanced Analytics in Batch Manufacturing: A Practical Path to Improved Yield and Consistency',
      excerpt: 'Learn practical approaches to implementing advanced analytics in batch manufacturing for better yield and consistency.',
      image: blogImg2,
      date: 'Posted 576 days ago',
      readTime: '12 Minutes Read',
      author: 'By Industry Experts'
    },
    {
      id: 6,
      category: 'webinars',
      type: 'webinar',
      title: 'How to get started with AI and ML technologies in Life Sciences',
      excerpt: 'Event recording covering the fundamentals of implementing AI and ML in life sciences manufacturing.',
      image: podcastImg1,
      date: 'Event',
      readTime: '45 Minutes Watch',
      author: 'By Quartic Team'
    }
  ];

  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <section className="blog_latest_list_sec blog_latest_list_tab_sec w-100 bg-white comn_sec_py pt-0">
      <div className="container">
        <div className="blog_latest_tab_content_wrap w-100">
          {/* Header Section - Original Structure */}
          <div className="blog_latest_tab_top_content w-100 d-flex justify-content-between flex-lg-row flex-column">
            <div className="sec_heading_wrap">
              <div className="sec_heading_holder">
                <span className="tag_lightBlue lh-base tag-mb-20px">Resources</span>
                <AnimatedText
                  tag="h2"
                  className="h3_heading_text fw-medium split_text words_slide_from_right"
                  text="Insights, Tools, and Knowledge at Your Fingertips"
                />
              </div>
            </div>

            {/* Tab Navigation - Original Structure */}
            <div className="blog_latest_tab_nav_holder align-self-center align-self-lg-end">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('videos')}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'videos'}
                  >
                    Videos
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'blog' ? 'active' : ''}`}
                    onClick={() => setActiveTab('blog')}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'blog'}
                  >
                    Blog
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'webinars' ? 'active' : ''}`}
                    onClick={() => setActiveTab('webinars')}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'webinars'}
                  >
                    Webinars
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content - Original Structure */}
          <div className="blog_latest_tab_main_content w-100">
            <div className="tab-content">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="blog_latest_slider_holder w-100 position-relative">
                  <div className="row g-4">
                    {filteredPosts.slice(0, 3).map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="col-lg-4 col-md-6"
                      >
                        <div className="bloglisting_item has_link">
                          <motion.div
                            className="item_body h-100 d-flex flex-column position-relative"
                            whileHover={{ 
                              y: -5
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <a href="#" className="total_link" aria-label="Total Link"></a>
                            
                            {/* Image Section */}
                            <div className="img_wrap">
                              <div className="ratio">
                                <img src={post.image} alt={post.title} loading="lazy" />
                              </div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="dsc_text_holder d-flex flex-column">
                              <h3 className="headingText multi-2-line-ellipsis">
                                {post.title}
                              </h3>
                              
                              {post.subtitle && (
                                <p className="subtitle_text mb-2">{post.subtitle}</p>
                              )}
                              
                              <div className="sminfo_action_holder d-flex justify-content-between">
                                <div className="sm_infolist_holder mt-auto">
                                  <ul>
                                    <li>{post.date}</li>
                                    <li>{post.readTime}</li>
                                  </ul>
                                </div>
                              </div>

                              {/* Author Information */}
                              {post.author && (
                                <div className="author_info mt-2">
                                  <small>{post.author}</small>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogLatestSection;
