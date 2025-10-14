import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!isMobile) return null;

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      <nav className={`mobile-nav ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-nav-logo">
            <img src="/logo.svg" alt="Logo" />
          </div>
          <button className="mobile-nav-close" onClick={closeMenu}>
            <span>×</span>
          </button>
        </div>

        <div className="mobile-nav-content">
          <ul className="mobile-nav-menu">
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/about" onClick={closeMenu}>About</a></li>
            <li><a href="/solutions" onClick={closeMenu}>Solutions</a></li>
            <li><a href="/resources" onClick={closeMenu}>Resources</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="mobile-nav-actions">
            <a href="/demo" className="mobile-btn mobile-btn-primary">Request Demo</a>
            <a href="/contact" className="mobile-btn mobile-btn-secondary">Get Started</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .mobile-menu-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10001;
          background: #007bff;
          border: none;
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: white;
          margin: 3px 0;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100vh;
          background: white;
          z-index: 10000;
          transition: left 0.3s ease;
          overflow-y: auto;
        }

        .mobile-nav.active {
          left: 0;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e1e5e9;
        }

        .mobile-nav-logo img {
          height: 40px;
        }

        .mobile-nav-close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-nav-content {
          padding: 20px;
        }

        .mobile-nav-menu {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }

        .mobile-nav-menu li {
          margin-bottom: 20px;
        }

        .mobile-nav-menu a {
          text-decoration: none;
          color: #333;
          font-size: 18px;
          font-weight: 500;
          display: block;
          padding: 10px 0;
        }

        .mobile-nav-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-btn {
          display: inline-block;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-btn-primary {
          background: #007bff;
          color: white;
        }

        .mobile-btn-secondary {
          background: transparent;
          color: #007bff;
          border: 2px solid #007bff;
        }
      `}</style>
    </>
  );
};

export default MobileNavigation;