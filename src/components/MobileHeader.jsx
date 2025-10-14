import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MobileHeader = ({ homepage, data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get header data from props
  const headerData = data || homepage?.header || {};

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (url, label) => {
    console.log('Mobile nav link clicked:', label, 'URL:', url);
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // Navigate to the URL
    if (url && url !== '#') {
      if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:')) {
        // External links - open in new tab
        window.open(url, '_blank');
      } else {
        // Internal links - use React Router navigation
        navigate(url);
      }
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="header-sec mobile-header">
        <div className="container">
          {/* Header Top Banner - Hidden on Mobile */}
          {headerData.bannerText && (
            <div className="header-top-banner d-none d-lg-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <p className="banner-text text-center mb-0">
                      {headerData.bannerText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Header */}
          <div className="header-main">
            {/* Logo */}
            <div className="header-logo">
              <Link to="/">
                <img 
                  src={headerData.logo || "/images/logo.png"} 
                  alt="Quartic" 
                  className="img-fluid"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="main-nav d-none d-lg-flex">
              <ul className="nav-list">
                {(headerData.navigation || []).map((item, index) => (
                  <li key={index} className="nav-item">
                    <Link 
                      to={item.url || '#'} 
                      className="nav-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Header Right - Hidden on Mobile */}
            <div className="header-right d-none d-lg-flex">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {/* Mobile Logo */}
          <div className="mobile-nav-logo">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src={headerData.logo || "/images/logo.png"} 
                alt="Quartic" 
                className="img-fluid"
              />
            </Link>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="mobile-nav-list">
            {(headerData.navigation || [
              { label: 'Home', url: '/' },
              { label: 'About', url: '/about' },
              { label: 'Services', url: '/services' },
              { label: 'Solutions', url: '/solutions' },
              { label: 'Contact', url: '/contact' }
            ]).map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => handleNavClick(item.url, item.label)}
                >
                  <span className="nav-text">{item.label}</span>
                  {item.hasDropdown && (
                    <span className="nav-arrow">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          <div className="mobile-nav-cta">
            <button
              className="btn btn-primary w-100"
              onClick={() => handleNavClick('/contact', 'Contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Contact Info */}
          {headerData.contactInfo && (
            <div className="mobile-nav-contact">
              <h4>Contact Info</h4>
              <p>{headerData.contactInfo.phone}</p>
              <p>{headerData.contactInfo.email}</p>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default MobileHeader;
