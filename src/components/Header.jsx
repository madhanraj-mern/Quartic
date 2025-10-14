import React, { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useStickyHeader from '../hooks/useStickyHeader';
import useMobileDetection from '../hooks/useMobileDetection';
import logo from '../assets/images/logo.svg';
import hMenu from '../assets/images/h-menu.svg';
import closeIcon from '../assets/images/close.svg';
import arrowDropDown from '../assets/images/arrow_drop_down.svg';

const Header = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isSticky, scrollDirection, shadowStrength } = useStickyHeader();
  const { isMobile, isTablet } = useMobileDetection();

  // Handle both static and dynamic data structures
  // In dynamic mode, data comes from the section data
  // In static mode, data comes from homepage.header
  const headerData = data || homepage?.header || {};
  const ctaButtonsData = headerData?.ctaButtons || {};
  const ctaText = ctaButtonsData.text || 'Watch Now';
  const ctaUrl = ctaButtonsData.url || '#';
  const ctaClass = ctaButtonsData.className || 'fw-800 lh-sm d-inline-block text-decoration-none';
  
  // Debug logging for Strapi data
  console.log('🔍 Header component data:', {
    hasHomepage: !!homepage,
    hasData: !!data,
    headerData,
    ctaButtonsData,
    ctaText,
    ctaUrl
  });

  const headerVariants = useMemo(() => ({
    initial: { y: 0 },
    hidden: { y: '-100%' },
    visible: { y: 0 }
  }), []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null); // Close any open dropdowns when toggling menu
  };

  const toggleMobileDropdown = (dropdownName) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdownName ? null : dropdownName);
  };

  const handleMobileNavClick = (url, label) => {
    console.log('Mobile nav link clicked:', label, 'URL:', url);
    
    // Close mobile menu
    toggleMobileMenu();
    
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

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Header Top Banner */}
      <div className="wraper-header-top">
        <div className="container-fluid">
          <div className="infoText text-md-center fw-semibold text-white d-flex align-items-center justify-content-center column-gap-1 column-gap-sm-2">
            <span className="tag_lightBlue lh-1">{headerData?.bannerTag || 'Podcast'}</span>
            <span className="lh-sm d-inline-block">
              {headerData?.bannerText || 'Global UNS, Local Complexity: Why Edge Context Isn\'t Enough'}{' '}
              <a href={ctaUrl} className={ctaClass}>{ctaText}</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className={`wraper-header w-100 z-index-9 ${isSticky ? 'i-am-sticky' : ''} ${scrollDirection === 'down' && isSticky ? 'headerHide' : 'headerShow'}`}
        variants={headerVariants}
        initial="initial"
        animate={scrollDirection === 'down' && isSticky ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: [0.165, 0.84, 0.44, 1] }}
        style={{
          boxShadow: `0 8px 40px rgba(0, 0, 0, ${0.12 * shadowStrength})`,
          backdropFilter: isSticky ? 'blur(12px)' : 'none'
        }}
      >
        <div className="wraper-header-main">
          <div className="container one_side_full_container ms-auto me-0 pe-0">
            <div className="navbar navbar-expand-xl header-main justify-content-between">
              <div className="d-flex flex-wrap align-items-center flex-shrink-0">
                <div className="brand-logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" width="150" height="40" className="colorLogo" />
                  </Link>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center flex-fill justify-content-end">
                {/* Mobile Menu Toggle Button */}
                <button
                  className="mobile-menu-toggle d-xl-none d-lg-block d-md-block d-sm-block d-block"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer',
                    zIndex: 10001
                  }}
                >
                  <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>

                <nav className="main-nav ml-auto mr-0 d-xl-flex d-lg-none d-md-none d-sm-none d-none align-items-center">
                  <ul id="menu-header-menu" className="menu">
                    {(headerData?.navigation || [
                      { label: 'Product', hasDropdown: true, url: '#' },
                      { label: 'Solutions', hasDropdown: true, url: '#' },
                      { label: 'Customers', hasDropdown: false, url: '#' },
                      { label: 'Resource Hub', hasDropdown: true, url: '#' },
                      { label: 'About Us', hasDropdown: true, url: '/about' }
                    ]).map((item, index) => (
                      <li key={index}>
                        <Link to={item.url}>
                          {item.label}
                          {item.hasDropdown && (
                            <span className="submenu-indicator">
                              <img src={arrowDropDown} alt="" width="12" height="12" />
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="header-right">
                  <div className="d-flex align-items-center">
                    <Link 
                      to="/contact" 
                      className={`btn btn-header btn_orange fw-medium d-none d-xl-block ${isActiveRoute('/contact') ? 'active' : ''}`}
                    >
                      <span>Contact</span>
                      <span className="arrow"></span>
                    </Link>
                    <button
                      className="header-mobilemenu-trigger toggle-mobile-menu float-right btn p-0 no-hover-effect d-xl-none d-lg-block d-md-block d-sm-block d-block"
                      type="button"
                      onClick={toggleMobileMenu}
                    >
                      <img src={hMenu} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Header */}
      <div className={`wraper-mobile-header ${isMobileMenuOpen ? 'open-mMenu' : ''}`}>
        <div className="mobile-header">
          {/* Mobile Header Top */}
          <div className="mobile-header-top">
            <div className="mobile-header-brand-wrap">
              <div className="mobile-header-logo">
                <Link to="/" onClick={toggleMobileMenu}>
                  <img src={logo} alt="Quartic Logo" width="120" height="32" />
                </Link>
              </div>
              <button
                type="button"
                className="mobile-menu-close"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <span>×</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="mobile-header-menu">
            <nav className="mobile-nav-menu">
              <ul className="mobile-nav-list">
                {(headerData?.navigation || [
                  { label: 'Products', hasDropdown: true, url: '/products' },
                  { label: 'Solutions', hasDropdown: true, url: '/solutions' },
                  { label: 'Customers', hasDropdown: false, url: '/customers' },
                  { label: 'Resource Hub', hasDropdown: true, url: '/resources' },
                  { label: 'About Us', hasDropdown: true, url: '/about' }
                ]).map((item, index) => (
                  <li key={index} className="mobile-nav-item">
                    <button 
                      className="mobile-nav-link"
                      onClick={() => handleMobileNavClick(item.url, item.label)}
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
                <li className="mobile-nav-item">
                  <button 
                    className="mobile-nav-link"
                    onClick={() => handleMobileNavClick('/contact', 'Contact')}
                  >
                    <span className="nav-text">Contact</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
