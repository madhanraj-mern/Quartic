import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: ${props => props.borderRadius || '8px'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit || 'cover'};
    object-position: ${props => props.objectPosition || 'center'};
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: ${props => props.hoverEffect ? 'scale(1.05)' : 'none'};
  }
  
  /* Mobile optimizations */
  @media (max-width: 768px) {
    img {
      height: ${props => props.mobileHeight || '250px'};
    }
  }
  
  @media (min-width: 769px) and (max-width: 1199px) {
    img {
      height: ${props => props.tabletHeight || '400px'};
    }
  }
  
  @media (min-width: 1200px) {
    img {
      height: ${props => props.desktopHeight || '500px'};
    }
  }
`;

const ResponsiveImage = ({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  mobileHeight = '250px',
  tabletHeight = '400px',
  desktopHeight = '500px',
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius = '8px',
  hoverEffect = false,
  className = '',
  loading = 'lazy',
  ...props
}) => {
  return (
    <ImageContainer
      className={className}
      mobileHeight={mobileHeight}
      tabletHeight={tabletHeight}
      desktopHeight={desktopHeight}
      objectFit={objectFit}
      objectPosition={objectPosition}
      borderRadius={borderRadius}
      hoverEffect={hoverEffect}
      {...props}
    >
      <picture>
        {/* Mobile image */}
        {mobileSrc && (
          <source
            media="(max-width: 768px)"
            srcSet={mobileSrc}
          />
        )}
        
        {/* Tablet image */}
        {tabletSrc && (
          <source
            media="(min-width: 769px) and (max-width: 1199px)"
            srcSet={tabletSrc}
          />
        )}
        
        {/* Desktop image */}
        {desktopSrc && (
          <source
            media="(min-width: 1200px)"
            srcSet={desktopSrc}
          />
        )}
        
        {/* Fallback image */}
        <img
          src={src}
          alt={alt}
          loading={loading}
        />
      </picture>
    </ImageContainer>
  );
};

export default ResponsiveImage;

