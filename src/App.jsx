import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fancybox } from '@fancyapps/ui';
import svgPanZoom from 'svg-pan-zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initializeAllPlugins } from './utils/pluginInitializer';
import { reinitializeAccordions } from './utils/accordionInitializer';
import { addMobileClass, removeMobileClass } from './utils/mobileUtils';
import { initAllMobileUtilities, reinitMobileUtilities } from './utils/mobileAnimations'; // Mobile utilities
import MobileNavigation from './components/MobileNavigation';
import MobileViewport from './components/MobileViewport';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

import './App.css';
import './assets/css/fonts.css';
import './assets/scss/style.scss';
import './assets/css/quartic-style.css';
import './assets/css/dynamic-sections.css';
import './assets/css/real-results-grid-fixes.css';
import './assets/css/blog-section-fixes.css';
import './assets/css/customer-proofs-fixes.css';
import './assets/css/quartic-advantage-section.css';
import './assets/css/quartic-complete-styles.css';
import './assets/css/iws-section-fixes.css';
import './assets/css/iws-complete-styles.css';
import './assets/css/mobile-consolidated.css';
import './assets/css/responsive-utilities.css';
import './assets/css/iws-card-animation-fix.css'; // IWS card animation and flexbox fix
import './assets/css/mobile-enhancements.css'; // Mobile button CSS, animations, slideshow, hover, dropdown effects
import './assets/css/mobile-typography-fix.css'; // Mobile typography enhancements for better readability
import './assets/css/accordion-fix.css'; // Accordion dropdown functionality fixes
import './assets/css/footer-mobile-fix.css'; // Footer mobile responsive fixes
import './assets/css/mobile-responsive-design.css'; // Comprehensive mobile responsive design
import './assets/css/mobile-comprehensive-fix.css'; // Comprehensive mobile fixes for all issues

gsap.registerPlugin(ScrollTrigger);

// Loading component
const LoadingFallback = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  useEffect(() => {
    if (!window.__AOS_INITIALIZED__) {
      AOS.init({ 
        duration: 800, 
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
      window.__AOS_INITIALIZED__ = true;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    });

    try { 
      Fancybox.bind('[data-fancybox]', {
        autoFocus: false,
        trapFocus: false,
        placeFocusBack: false,
        showClass: "f-fadeIn",
        hideClass: "f-fadeOut",
        click: "close",
        wheel: "close",
        touch: {
          vertical: false,
          momentum: false
        }
      }); 
    } catch (error) {
      console.warn('Fancybox initialization failed:', error);
    }

    // Waypoints removed - using IntersectionObserver instead

    try {
      document.querySelectorAll('[data-svg-pan-zoom] svg').forEach((svgEl) => {
        svgPanZoom(svgEl, { 
          zoomEnabled: true, 
          controlIconsEnabled: true,
          minZoom: 0.5,
          maxZoom: 3
        });
      });
    } catch (error) {
      console.warn('SVG Pan Zoom initialization failed:', error);
    }

    try {
      initializeAllPlugins();
    } catch (error) {
      console.warn('Plugin initialization failed:', error);
    }

    // Reinitialize accordions after a short delay to ensure DOM is ready
    setTimeout(() => {
      try {
        reinitializeAccordions();
      } catch (error) {
        console.warn('Accordion reinitialization failed:', error);
      }
    }, 100);

    addMobileClass();

    // Initialize mobile utilities
    try {
      initAllMobileUtilities();
      reinitMobileUtilities();
    } catch (error) {
      console.warn('Mobile utilities initialization failed:', error);
    }

    return () => {
      ctx.revert();
      removeMobileClass();
      try { Fancybox.destroy(); } catch (_) {}
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <MobileViewport />
        <MobileNavigation />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;