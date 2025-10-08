import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GridContainer from '../components/GridContainer';
import { 
  AnimatedText, 
  ClipDownLine, 
  slideFromRightVariants,
  viewportOptions 
} from '../utils/animations.jsx';
import contactBanner from '../assets/images/contact/contact-banner.png';
import quoteIcon from '../assets/images/icons/quote-gray-icon.svg';
import ContactFormChoicesInit from '../components/ContactFormChoicesInit';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    inquiryType: '',
    message: '',
    agreeToTerms: false
  });

  const contactImageList = [
    "assets/images/contact/contact-banner.png",
    "assets/images/contact/contact-banner.png", // You can add more images here
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const inquiryTypes = [
    'General Inquiry',
    'Product Demo',
    'Sales Inquiry',
    'Support Request',
    'Partnership',
    'Media Inquiry'
  ];

  return (
    <div className="contact-page">
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
                      <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="osfc_right_col break_on_md">
                <div className="w-100 right_content">
                  <div className="row gx-0 align-items-center">
                    <div className="hero-img-col order-lg-2">
                      <div className="grid-img-holder w-100 position-relative">
                        <GridContainer
                          imageList={contactImageList}
                          gridType="contact"
                          id="contact-banner-grid-container"
                          overlayClass="light-blue-overlay"
                        />
                      </div>
                    </div>
                    <div className="hero-content-col order-lg-1">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                        variants={slideFromRightVariants}
                        className="hero-content"
                      >
                        <AnimatedText className="fw-semibold hero-main-headingtext text-black">
                          Unlock the Full Potential of Your Industrial Data
                        </AnimatedText>
                        <motion.div 
                          className="dsc_text"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewportOptions}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <p>
                            Whether you're ready to transform your industrial data strategy or just getting started, we're
                            here to help.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact_form_sec" id="contact_form_sec_id">
        <div className="container position-relative one_side_full_container pe-md-0 ms-auto me-0">
          <ClipDownLine className="divider_line d-none d-md-block" />
          <div className="row gx-0">
            <div className="osfc_left_col">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="left_content pe-md-3 pe-xl-4"
              >
                <div className="sec_heading_wrap">
                  <div className="sec_heading_holder">
                    <h2 className="h3_heading_text fw-medium split_text words_slide_from_right">
                      Have an analytics need or want to know more about our services?
                    </h2>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="osfc_right_col">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="contact_form_holder comn_form"
              >
                <ContactFormChoicesInit selectId="inquiryType" />
                <form onSubmit={handleSubmit}>
                  <div className="row gx-4 gy-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="firstName">First Name <span className="required_star">*</span></label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="lastName">Last Name <span className="required_star">*</span></label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Work Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="email">Work Email <span className="required_star">*</span></label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="phone">Phone <span className="required_star">*</span></label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="company">Company Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="jobTitle"
                          name="jobTitle"
                          placeholder="Job Title"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="jobTitle">Job Title</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="floating-label-group">
                        <select
                          className="comn_form_select"
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>Select Inquiry Type</option>
                          {inquiryTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                        <label htmlFor="inquiryType">Inquiry Type</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control single_line_textarea"
                          placeholder="Message"
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="agreeToTerms">
                          By clicking the "Submit" button, you are agreeing to the Quartic.ai{' '}
                          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn_orange" aria-label="Submit">
                        <span>Submit</span>
                        <span className="arrow"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="contact_quote_sec w-100">
        <div className="container">
          <div className="contact_quote_content_box w-100">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact_quote_content d-flex w-100"
            >
              <div className="quote_icon_holder flex-shrink-0">
                <img src={quoteIcon} alt="Quote" />
              </div>
              <div className="dsc_text">
                <p>
                  "Quartic has the most intuitive User Experience and simplicity of machine learning analytics of all the
                  platforms we evaluated"
                </p>
                <p className="author_name">Global Digital Director, Fortune 50 Food & Bev</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact_info_sec comn_sec_py">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sec_heading_wrap text-center mb-5"
          >
            <h2 className="h3_heading_text fw-medium">Get in Touch</h2>
            <p className="text_18_box color_black">
              We're here to help you transform your manufacturing operations. Reach out to us today.
            </p>
          </motion.div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact_info_card text-center">
                <div className="icon_holder mb-3">
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <h4 className="card_title fw-medium mb-3">Email Us</h4>
                <p className="contact_info">sales@quartic.ai</p>
                <p className="contact_info">support@quartic.ai</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact_info_card text-center">
                <div className="icon_holder mb-3">
                  <i className="fas fa-phone fa-2x text-primary"></i>
                </div>
                <h4 className="card_title fw-medium mb-3">Call Us</h4>
                <p className="contact_info">+1 (555) 123-4567</p>
                <p className="contact_info">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact_info_card text-center">
                <div className="icon_holder mb-3">
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <h4 className="card_title fw-medium mb-3">Visit Us</h4>
                <p className="contact_info">San Jose, California</p>
                <p className="contact_info">United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
