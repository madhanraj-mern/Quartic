import React, { useState } from 'react';

const MobileOptimizedSection = ({ 
  title, 
  subtitle, 
  description, 
  background = 'light', 
  children, 
  className = '' 
}) => {
  const sectionClass = `mobile-section ${background === 'dark' ? 'mobile-section-dark' : 'mobile-section-light'} ${className}`;
  
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="mobile-section-content">
          {subtitle && (
            <div className="mobile-tag">
              <span>{subtitle}</span>
            </div>
          )}
          {title && (
            <h2 className="mobile-section-title">{title}</h2>
          )}
          {description && (
            <p className="mobile-section-description">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

// Mobile Service Card Component
export const MobileServiceCard = ({ icon, title, description, buttonText, buttonUrl }) => {
  return (
    <div className="service-card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={buttonUrl} className="btn btn-primary">
        {buttonText}
      </a>
    </div>
  );
};

// Mobile Process Step Component
export const MobileProcessStep = ({ number, title, description }) => {
  return (
    <div className="process-step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Mobile Testimonial Card Component
export const MobileTestimonialCard = ({ quote, author, title, rating = 5 }) => {
  return (
    <div className="testimonial-card">
      <div className="quote">"{quote}"</div>
      <div className="author">{author}</div>
      <div className="author-title">{title}</div>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

// Mobile Pricing Card Component
export const MobilePricingCard = ({ 
  title, 
  price, 
  features, 
  buttonText, 
  featured = false 
}) => {
  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      <h3>{title}</h3>
      <div className="price">{price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn btn-primary">
        {buttonText}
      </button>
    </div>
  );
};

// Mobile FAQ Item Component
export const MobileFAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="arrow">▼</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'active' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Mobile Contact Form Component
export const MobileContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  
  return (
    <form className="mobile-contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          placeholder="Your message here..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

// Mobile Navigation Component
export const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="mobile-nav">
      <a href="/" className="nav-brand">Quartic</a>
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Mobile Footer Component
export const MobileFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/planning">Resource Planning</a></li>
              <li><a href="/services/analytics">Data Analytics</a></li>
              <li><a href="/services/compliance">Compliance</a></li>
              <li><a href="/services/support">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>Email: info@quartic.ai</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Main St, City, State</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          © 2023 Quartic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default MobileOptimizedSection;

