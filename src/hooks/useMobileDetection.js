import { useState, useEffect } from 'react';

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      if (width <= 767) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
        setScreenSize('mobile');
      } else if (width <= 991) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
        setScreenSize('tablet');
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        setScreenSize('desktop');
      }
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenSize,
    isMobileOrTablet: isMobile || isTablet,
    isDesktopOrTablet: isDesktop || isTablet
  };
};

export default useMobileDetection;
