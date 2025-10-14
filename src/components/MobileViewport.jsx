import React, { useEffect } from 'react';

const MobileViewport = () => {
  useEffect(() => {
    // Ensure viewport meta tag is properly set
    let viewport = document.querySelector('meta[name="viewport"]');
    
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    
    // Add mobile-specific classes to body
    const addMobileClasses = () => {
      const width = window.innerWidth;
      const body = document.body;
      
      // Remove existing responsive classes
      body.classList.remove('mobile', 'tablet', 'desktop', 'small-mobile', 'large-mobile');
      
      if (width <= 480) {
        body.classList.add('mobile', 'small-mobile');
      } else if (width <= 768) {
        body.classList.add('mobile', 'large-mobile');
      } else if (width <= 991) {
        body.classList.add('tablet');
      } else {
        body.classList.add('desktop');
      }
    };
    
    // Add classes on mount and resize
    addMobileClasses();
    window.addEventListener('resize', addMobileClasses);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', addMobileClasses);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MobileViewport;
