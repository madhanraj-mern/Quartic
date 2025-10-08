import React, { useEffect, useRef } from 'react';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const SplideLogoSlider = ({ logos, className = '' }) => {
  const splideRef = useRef(null);

  useEffect(() => {
    // Safety: ensure slider starts from first slide after mount/HMR
    if (splideRef.current) {
      try {
        splideRef.current.go(0);
      } catch (e) {
        // no-op
      }
    }
  }, [logos]);

  const splideOptions = {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 1, // overridden by autoWidth
    autoWidth: true,
    arrows: false,
    pagination: false,
    gap: '50px',
    // AutoScroll extension
    autoScroll: {
      speed: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      576: { gap: '40px' },
      768: { gap: '50px' },
      1200: { gap: '64px' },
    },
  };

  return (
    <Splide
      options={splideOptions}
      extensions={{ AutoScroll }}
      hasTrack={false}
      ref={splideRef}
      className={`splide-logo-slider ${className}`}
      aria-label="Client logos"
    >
      <SplideTrack>
        {logos.map((logo, index) => (
          <div className="splide__slide" key={index}>
            <div className="imgHolder">
              <img
                loading="lazy"
                className="object-fit-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          </div>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default SplideLogoSlider;
