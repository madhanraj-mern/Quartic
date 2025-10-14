import React from 'react';
import useMobileDetection from '../hooks/useMobileDetection';

const ResponsiveWrapper = ({ 
  children, 
  mobileComponent, 
  tabletComponent, 
  desktopComponent,
  className = '',
  ...props 
}) => {
  const { isMobile, isTablet, isDesktop } = useMobileDetection();

  // Determine which component to render
  let ComponentToRender = children;
  
  if (isMobile && mobileComponent) {
    ComponentToRender = mobileComponent;
  } else if (isTablet && tabletComponent) {
    ComponentToRender = tabletComponent;
  } else if (isDesktop && desktopComponent) {
    ComponentToRender = desktopComponent;
  }

  // Add responsive classes
  const responsiveClasses = [
    className,
    isMobile ? 'mobile-only' : '',
    isTablet ? 'tablet-only' : '',
    isDesktop ? 'desktop-only' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={responsiveClasses} {...props}>
      {ComponentToRender}
    </div>
  );
};

export default ResponsiveWrapper;
