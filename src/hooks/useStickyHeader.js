import { useEffect, useState } from 'react';

const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [shadowStrength, setShadowStrength] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNowSticky = currentScrollY > 20;

      if (isNowSticky !== isSticky) {
        setIsSticky(isNowSticky);
      }

      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      const normalizedShadow = Math.min(currentScrollY / 200, 1);
      if (normalizedShadow !== shadowStrength) {
        setShadowStrength(normalizedShadow);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky, scrollDirection, shadowStrength]);

  return { isSticky, scrollDirection, shadowStrength };
};

export default useStickyHeader;
