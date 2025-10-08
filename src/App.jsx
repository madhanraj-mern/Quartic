import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fancybox } from '@fancyapps/ui';
import 'waypoints/lib/noframework.waypoints.js';
import svgPanZoom from 'svg-pan-zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Import CSS
import './App.css';

// Register GSAP plugins
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
    // Initialize AOS idempotently
    if (!window.__AOS_INITIALIZED__) {
      AOS.init({ 
        duration: 800, 
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
      window.__AOS_INITIALIZED__ = true;
    }

    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Global scroll trigger refresh
      ScrollTrigger.refresh();
    });

    // Initialize Fancybox for lightbox functionality
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

    // Initialize Waypoints for scroll-based triggers
    try {
      // eslint-disable-next-line no-undef
      new Waypoint({
        element: document.body,
        handler: function () {},
        offset: '100%'
      });
    } catch (error) {
      console.warn('Waypoints initialization failed:', error);
    }

    // Initialize SVG Pan Zoom for interactive SVGs
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

    // Note: Removed preloading to avoid console warnings
    // Images will be loaded naturally when needed by the components

    return () => {
      ctx.revert();
      // Cleanup Fancybox
      try { Fancybox.destroy(); } catch (_) {}
    };
  }, []);

  return (
    <Router>
      <div className="App">
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