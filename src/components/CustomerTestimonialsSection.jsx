import React, { useState } from 'react';
import { motion } from 'framer-motion';
import quoteIcon from '../assets/images/icons/quote-gray-icon.svg';
import testimonialImg from '../assets/images/home/testimonial-slide-img.jpg';
import authorImg from '../assets/images/home/author-img.png';

const CustomerTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(4); // Show the 5th testimonial (UX one)
  
  const testimonials = [
    {
      quote: "With Quartic PD Optimizer, we reduced the number of wet-lab experiments by 33%.",
      description: "Quartic's platform helped accelerate process development by reducing time spent in wet-lab testing and speeding up decision-making cycles.",
      author: "Senior Director",
      company: "Process Development, Top 5 Global Biopharma CDMO",
      image: testimonialImg
    },
    {
      quote: "We completed our process design, characterization, and scale-up with QbD in a single GxP data and analytics platform with Quartic. It improved our time to market by 434%.",
      description: "Quartic unified all product lifecycle stages into a single intelligent MOM environment, dramatically shortening launch timelines.",
      author: "CTO",
      company: "Emerging US Pharma Manufacturer",
      image: testimonialImg
    },
    {
      quote: "We were able to prove 17% increase in yield from our chromatography purification process using the Quartic optimizer — and will be implementing it as a closed-loop optimizer.",
      description: "Quartic's optimization tools helped unlock measurable process gains and laid the groundwork for autonomous operation.",
      author: "Global Head of Manufacturing Science & Technology",
      company: "F500 Global Biotechnology Company",
      image: testimonialImg
    },
    {
      quote: "With Quartic, our operators have a real-time understanding of how a batch will end and are able to take corrective action.",
      description: "Quartic reduced batch-to-batch variability by giving real-time insight and guidance directly to frontline teams.",
      author: "Director of Process Analytics",
      company: "Top 20 Global Big Pharma",
      image: testimonialImg
    },
    {
      quote: "Quartic has the most intuitive User Experience and simplicity of machine learning analytics of all the platforms we evaluated.",
      description: "Seamless UX and real-time AI made Quartic stand out across multiple evaluations by global digital teams.",
      author: "Global Digital Director, Fortune 50 Food & Beverage",
      company: "",
      image: testimonialImg
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="customer_testimonials_sec bg-white" key="testimonials-updated">
      <div className="container">
        <div className="row align-items-center g-0">
          {/* Left Column - Image */}
          <div className="col-lg-6 pe-lg-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="testimonial_image_holder"
            >
              <div className="testimonial_image_wrap">
                <img 
                  src={currentTestimonial.image} 
                  alt="Customer testimonial" 
                  className="w-100 h-100 object-fit-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 ps-lg-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="testimonial_content_holder"
            >
              {/* Tag */}
              <span className="tag_lightBlue lh-base tag-mb-20px">Customer Proof</span>
              
              {/* Heading */}
              <h2 className="h2_heading_text fw-bold text-black mb-5">
                How Our Customers Use Quartic
              </h2>

              {/* Quote Icon */}
              <div className="quote_icon_holder">
                <img src={quoteIcon} alt="Quote" />
              </div>

              {/* Main Quote */}
              <motion.blockquote 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="testimonial_main_quote"
              >
                <p>"{currentTestimonial.quote}"</p>
              </motion.blockquote>

              {/* Description */}
              <motion.div 
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="testimonial-review-dsc mb-4"
              >
                <p className="testimonial_description">{currentTestimonial.description}</p>
              </motion.div>

              {/* Author Info */}
              <motion.div 
                key={`author-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="testimonial-author-holder mb-5"
              >
                <div className="testimonial-author d-flex align-items-center column-gap-2">
                  <img src={authorImg} alt="Author" className="author-img" />
                  <div className="author_info_text">
                    <p className="d_text">{currentTestimonial.author}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="testimonial_navigation d-flex align-items-center justify-content-between">
                <div className="nav_arrows d-flex gap-4">
                  <button 
                    onClick={prevSlide}
                    className="nav_arrow prev_arrow"
                    aria-label="Previous testimonial"
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="#f15a29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="nav_arrow next_arrow"
                    aria-label="Next testimonial"
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="#f15a29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Slide Counter */}
                <div className="testimonial-slide-number">
                  <span className="current_slide">{currentSlide + 1}</span>
                  <span className="total">/{testimonials.length}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
