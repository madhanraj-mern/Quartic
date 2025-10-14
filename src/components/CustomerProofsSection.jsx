import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import testimonialImg from '../assets/images/home/testimonial-slide-img.jpg';
import labImage from '../assets/images/home/solutions/solution-img1.jpg';
import dataService from '../services/dataService';
import { mapTestimonials, getSectionData } from '../utils/dataMapping';

const CustomerProofsSection = ({ homepage, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with first testimonial
  const [dynamicTestimonials, setDynamicTestimonials] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Load dynamic testimonials data
  useEffect(() => {
    const loadTestimonials = async () => {
      setLoading(true);
      const testimonialsData = await dataService.getTestimonials();
      if (testimonialsData?.data) {
        setDynamicTestimonials(testimonialsData.data);
      }
      setLoading(false);
    };

    loadTestimonials();
  }, []);
  
  // Fallback data when Strapi is not available - matching the reference design
  const fallbackData = {
    title: "Customer Proof",
    subtitle: "What our customers say",
    description: "Hear from leading manufacturers about their success with Quartic.",
    testimonials: [
      {
        id: 1,
        name: "Senior Director",
        title: "Process Development",
        company: "Top 5 Global Biopharma CDMO",
        quote: "With Quartic PD Optimizer, we reduced the number of wet-lab experiments by 33%.",
        description: "Quartic's platform helped accelerate process development by reducing time spent in wet-lab testing and speeding up decision-making cycles.",
        image: labImage, // Lab/manufacturing image
        rating: 5
      },
      {
        id: 2,
        name: "David Kim",
        title: "Digital Director",
        company: "Fortune 50 Food & Beverage",
        quote: "Quartic has the most intuitive User Experience and simplicity of machine learning analytics of all the platforms we evaluated.",
        description: "Seamless UX and real-time AI made Quartic stand out across multiple evaluations by global digital teams.",
        image: testimonialImg,
        rating: 5
      },
      {
        id: 3,
        name: "John Smith",
        title: "Plant Manager",
        company: "Global Manufacturing Co.",
        quote: "Quartic has transformed our manufacturing operations with real-time insights and predictive analytics. We've seen a 35% improvement in operational efficiency.",
        description: "Quartic's intelligent manufacturing solutions have revolutionized how we approach process optimization and quality control.",
        image: testimonialImg,
        rating: 5
      },
      {
        id: 4,
        name: "Sarah Johnson",
        title: "Process Engineer",
        company: "Pharma Solutions Inc.",
        quote: "The DataOps approach has revolutionized how we handle process data and make decisions. Our quality metrics have improved significantly.",
        description: "Quartic's platform helped us integrate data from multiple sources and apply advanced analytics for better decision making.",
        image: testimonialImg,
        rating: 5
      },
      {
        id: 5,
        name: "Michael Chen",
        title: "Operations Director",
        company: "Chemical Manufacturing Ltd.",
        quote: "Quartic's intelligent manufacturing solutions have helped us reduce waste by 25% and increase throughput by 40%.",
        description: "The predictive maintenance capabilities and real-time monitoring have transformed our operational efficiency.",
        image: testimonialImg,
        rating: 5
      }
    ]
  };

  // Use dynamic data if available, otherwise use section data or fallback
  const sectionData = getSectionData(data, homepage, fallbackData, 'customerProofs');
  
  // Process dynamic testimonials if available
  let testimonials = fallbackData.testimonials;
  if (dynamicTestimonials && Array.isArray(dynamicTestimonials)) {
    testimonials = mapTestimonials(dynamicTestimonials, testimonialImg);
  } else if (sectionData.testimonials && Array.isArray(sectionData.testimonials)) {
    testimonials = sectionData.testimonials;
  }
  

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
            <div className="row align-items-start g-0">
              {/* Left Panel - Image Viewer */}
              <div className="col-lg-4">
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

              {/* Middle Panel - Testimonial Content */}
              <div className="col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="testimonial_content_holder"
                >
                  <div className="testimonial_block">
                    {/* Large Quotation Marks */}
                    <div className="quote_marks">
                      <span>"</span>
                    </div>

                    {/* Main Quote */}
                    <motion.blockquote 
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="testimonial_main_quote"
                    >
                      <p>{currentTestimonial.quote}</p>
                    </motion.blockquote>

                    {/* Description */}
                    <motion.div 
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="testimonial-review-dsc"
                    >
                      <p>{currentTestimonial.description}</p>
                    </motion.div>

                    {/* Separator Line */}
                    <div className="testimonial-separator"></div>

                    {/* Author Info */}
                    <motion.div 
                      key={`author-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="testimonial-author-holder"
                    >
                      <div className="author_info_text">
                        <p className="author-role">{currentTestimonial.name}</p>
                        <p className="author-company">{currentTestimonial.title}, {currentTestimonial.company}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right Panel - Heading + Navigation */}
              <div className="col-lg-4">
                {/* Heading Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="heading_section"
                >
                  {/* Tag */}
                  <div className="tag-container">
                    <span className="tag_lightBlue">
                      {sectionData.title || "Customer Proof"}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="h2_heading_text">
                    {sectionData.subtitle || "What our customers say"}
                  </h2>
                </motion.div>

                {/* Navigation Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="navigation_section"
                >
                  <div className="nav_row">
                    {/* Navigation */}
                    <div className="testimonial_navigation">
                      <div className="nav_arrows">
                        <button 
                          onClick={prevSlide}
                          className="nav_arrow prev_arrow"
                          aria-label="Previous testimonial"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="nav_arrow next_arrow"
                          aria-label="Next testimonial"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Slide Counter */}
                    <div className="slide_counter">
                      <div className="testimonial-slide-number">
                        <span className="current_slide">{currentSlide + 1}</span>
                        <span className="total">/{testimonials.length}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </section>
      );
};

export default CustomerProofsSection;

