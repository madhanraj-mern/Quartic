import { isMobile, isTablet, isDesktop } from 'react-device-detect';

export const getDeviceType = () => {
  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  if (isDesktop) return 'desktop';
  return 'unknown';
};

export const isTouchDevice = () => {
  return isMobile || isTablet;
};

export const getViewportSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

export const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  if (width < 1440) return 'desktop';
  return 'large';
};

export const addMobileClass = () => {
  const deviceType = getDeviceType();
  document.body.classList.add(`device-${deviceType}`);
  document.body.classList.add(isTouchDevice() ? 'touch-device' : 'no-touch');
};

export const removeMobileClass = () => {
  document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop', 'touch-device', 'no-touch');
};

