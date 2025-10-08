import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import useStickyHeader from '../hooks/useStickyHeader';
import logo from '../assets/images/logo.svg';
import hMenu from '../assets/images/h-menu.svg';
import closeIcon from '../assets/images/close.svg';
import arrowDropDown from '../assets/images/arrow_drop_down.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isSticky, scrollDirection, shadowStrength } = useStickyHeader();

  const headerVariants = useMemo(() => ({
    initial: { y: 0 },
    hidden: { y: '-100%' },
    visible: { y: 0 }
  }), []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Header Top Banner */}
      <motion.div 
        className="wraper-header-top"
        style={{
          background: 'linear-gradient(-90deg, #000000 74%, #f15a29 100%)'
        }}
        animate={{
          background: [
            'linear-gradient(-90deg, #000000 74%, #f15a29 100%)',
            'linear-gradient(-90deg, #000000 89%, #f15a29 100%)',
            'linear-gradient(-90deg, #000000 59%, #f15a29 100%)',
            'linear-gradient(-90deg, #000000 74%, #f15a29 100%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="container-fluid">
          <div className="infoText text-md-center fw-semibold text-white d-flex align-items-center justify-content-center column-gap-1 column-gap-sm-2">
            <span className="tag_lightBlue lh-1">Podcast</span>
            <span className="lh-sm d-inline-block">
              Global UNS, Local Complexity: Why Edge Context Isn't Enough{' '}
              <a href="#" className="fw-800 lh-sm d-inline-block text-decoration-none">Watch Now</a>
            </span>
          </div>
        </div>
      </motion.div>

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
                <nav className="main-nav ml-auto mr-0 d-xl-flex d-lg-none d-md-none d-sm-none d-none align-items-center">
                  <ul id="menu-header-menu" className="menu">
                    <li><a href="#">Product <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                    <li><a href="#">Solutions <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Resource Hub <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                    <li><a href="#">Company <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
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

      {/* Mobile Header */}
      <div className={`wraper-mobile-header ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-header d-flex">
          <div className="mobile-header-top w-100">
            <div className="mobile-header-brand-wrap">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-8 text-left">
                  <div className="brand-logo d-inline-block">
                    <Link to="/">
                      <img src={logo} alt="Logo" width="150" height="40" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4 text-end">
                  <button
                    type="button"
                    className="toggle-mobile-menu mobile-menu-close d-inline-block"
                    onClick={toggleMobileMenu}
                  >
                    <img src={closeIcon} alt="close" width="18" height="18" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mobile-header-menu">
              <ul id="menu-header-menu" className="menu">
                <li><a href="#">Product <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                <li><a href="#">Solutions <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Resource Hub <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                <li><a href="#">Company <span className="submenu-indicator"><img src={arrowDropDown} alt="" width="12" height="12" /></span></a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
