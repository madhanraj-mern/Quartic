import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutBanner from '../assets/images/about/about-banner.jpg';
import ourStoryImg from '../assets/images/about/our_story_block_img.jpg';
import aboutValueImg from '../assets/images/about/about-value-img.jpg';
import aboutValueIcon1 from '../assets/images/about/about_value_icon1.svg';
import aboutValueIcon2 from '../assets/images/about/about_value_icon2.svg';
import aboutValueIcon3 from '../assets/images/about/about_value_icon3.svg';
import ceoImg from '../assets/images/about/ceo_img.jpg';
import quoteIcon from '../assets/images/icons/quote-orange.svg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Banner */}
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
                      <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="osfc_right_col break_on_md">
                <div className="w-100 right_content">
                  <div className="row gx-0 align-items-center">
                    <div className="hero-img-col order-lg-2">
                      <div className="grid-img-holder w-100 position-relative">
                        <div className="grid-container" id="mom-banner-grid-container">
                          <div className="tile light-blue-overlay" data-index="0">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile light-blue-overlay" data-index="1">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile" data-index="2">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile light-blue-overlay" data-index="3">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile" data-index="4">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile" data-index="5">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile" data-index="6">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile" data-index="7">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                          <div className="tile light-blue-overlay" data-index="8">
                            <div className="inner">
                              <div className="front"></div>
                              <div className="back"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-content-col order-lg-1">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                      >
                        <h1 className="fw-semibold hero-main-headingtext text-black">
                          We Engineer Industrial Intelligence
                        </h1>
                        <div className="dsc_text">
                          <p>
                            We are on a mission to transform how industrial data powers decisions, sustainability, and
                            performance.
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

      {/* Our Story Section */}
      <section className="our_story_sec">
        <div className="container-fluid px-0 comn_sec_py position-relative">
          <div className="row gx-0">
            <div className="col-md-7">
              <div className="our_story_img_holder w-100 overflow-hidden">
                <div className="ratio anim-item-blur">
                  <img 
                    className="object-fit-cover" 
                    src={ourStoryImg} 
                    alt="Our Story Image"
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 align-self-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="right_dsc_content"
              >
                <div className="sec_heading_wrap">
                  <div className="sec_heading_holder">
                    <span className="tag_lightBlue lh-base tag-mb-20px">Our Story</span>
                    <h2 className="h3_heading_text fw-medium split_text words_slide_from_right">
                      Accelerating outcomes where it matters most
                    </h2>
                  </div>
                  <div className="heading_dsc_text text-black mt-3 lh-base">
                    <p>
                      Quartic enables manufacturers to reduce yield variability, optimize cycle times, and automate quality
                      decisions—at scale. Our platform improves how teams monitor, predict, and control batch and process
                      operations in highly regulated, data-rich environments.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Values Section */}
      <section className="about_values_sec">
        <div className="container one_side_full_container pe-md-0 ms-auto me-0 position-relative">
          <div className="row gx-0">
            <div className="osfc_left_col pe-sm-3 pe-md-4 about_values_left_col">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sec_heading_wrap"
              >
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">Our values</span>
                  <h2 className="h3_heading_text fw-medium split_text words_slide_from_right text-white">
                    Mission & Vision
                  </h2>
                </div>
                <div className="heading_dsc_text text-white mt-3">
                  <p>
                    We believe data only becomes actionable when it's contextualized, connected, and trusted across the
                    enterprise.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="osfc_right_col about_values_right_col">
              <div className="about_values_right_content">
                <div className="row gx-0">
                  <div className="col-md-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="about_values_item"
                    >
                      <div className="item_body position-relative">
                        <div className="background_img_holder">
                          <img src={aboutValueImg} alt="" loading="lazy" />
                        </div>
                        <div className="body_content d-flex flex-column justify-content-between">
                          <div className="w-100 reveal">
                            <div className="icon_holder">
                              <img src={aboutValueIcon1} alt="" />
                            </div>
                            <p className="heading_text fw-medium multi-2-line-ellipsis">
                              Industrial-First Intelligence
                            </p>
                          </div>
                          <div className="text_18_box reveal">
                            <p>
                              purpose built for real-time contextual data processing, streaming AI/ML, and complex
                              event at the edge and in the cloud
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-md-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="about_values_item"
                    >
                      <div className="item_body position-relative">
                        <div className="background_img_holder">
                          <img src={aboutValueImg} alt="" loading="lazy" />
                        </div>
                        <div className="body_content d-flex flex-column justify-content-between">
                          <div className="w-100 reveal">
                            <div className="icon_holder">
                              <img src={aboutValueIcon2} alt="" />
                            </div>
                            <p className="heading_text fw-medium multi-2-line-ellipsis">
                              Context is Power
                            </p>
                          </div>
                          <div className="text_18_box reveal">
                            <p>
                              We believe data only becomes actionable when it's contextualized, connected, and trusted
                              across the enterprise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-md-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="about_values_item"
                    >
                      <div className="item_body position-relative">
                        <div className="background_img_holder">
                          <img src={aboutValueImg} alt="" loading="lazy" />
                        </div>
                        <div className="body_content d-flex flex-column justify-content-between">
                          <div className="w-100 reveal">
                            <div className="icon_holder">
                              <img src={aboutValueIcon3} alt="" />
                            </div>
                            <p className="heading_text fw-medium multi-2-line-ellipsis">
                              Openness and Integrity
                            </p>
                          </div>
                          <div className="text_18_box reveal">
                            <p>
                              We champion transparency, collaboration, and interoperability—within our teams, and with
                              every partner and client.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="ceo_sec bg_light_fa">
        <div className="container one_side_full_container pe-0 ms-auto me-0 position-relative comn_sec_py">
          <div className="divider_line d-none d-md-block anim-item-clipDown-line"></div>
          <div className="row gx-0">
            <div className="osfc_left_col pe-sm-3 pe-md-4 pb-md-0 pb-4 d-flex flex-column justify-content-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sec_heading_wrap"
              >
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">Our Team</span>
                  <h2 className="h4_heading_text fw-medium split_text words_slide_from_right">
                    At the heart of <span>Quartic.ai</span> is a diverse team of industrial innovators, data pioneers
                  </h2>
                </div>
              </motion.div>
              <div className="text_16_box mt-2">
                <p>
                  A lifelong industrial technologist, Rajiv founded Quartic.ai with a mission to make industrial data
                  actionable and intelligent.
                </p>
              </div>
            </div>
            <div className="osfc_right_col ps-md-4 pr_50">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-100 ceo_content_wrap row gx-0 align-items-center overflow-hidden"
              >
                <div className="ceo_img_wrap">
                  <div className="ratio reveal">
                    <img src={ceoImg} alt="" loading="lazy" />
                  </div>
                </div>
                <div className="ceo_content_wrap">
                  <div className="ceo_review_dsc">
                    <span className="quote-icon">
                      <img src={quoteIcon} alt="" />
                    </span>
                    <p>
                      Industrial transformation isn't about replacing people with machines—it's about empowering people with
                      better data, faster decisions, and systems that adapt to reality.
                    </p>
                  </div>
                  <div className="ceo_info_text_holder">
                    <div className="ceo_info_text text_18_box color_black">
                      <p className="name_text m-0">Rajiv Anand,</p>
                      <p className="d_text mt-1 mb-0">Founder & CEO, Quartic.ai</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
