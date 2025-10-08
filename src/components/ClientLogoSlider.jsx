import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import AnimatedDivider from './AnimatedDivider';
import SplideLogoSlider from './SplideLogoSlider';
import colgateIcon from '../assets/images/home/client-logos/colgate-icon.svg';
import merckIcon from '../assets/images/home/client-logos/merck-icon.svg';
import sanofiIcon from '../assets/images/home/client-logos/sanofi-icon.svg';
import tataSteelIcon from '../assets/images/home/client-logos/tata-steel-icon.svg';
import abinbevIcon from '../assets/images/home/client-logos/abinbev-icon.svg';
import nestePurinaIcon from '../assets/images/home/client-logos/neste-purina-icon.svg';

const ClientLogoSlider = ({ homepage }) => {
  // Helper function to get full image URL from Strapi
  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('/uploads/')) {
      return `https://cancerfax.unifiedinfotechonline.com${url}`;
    }
    return url;
  };

  // Use Strapi data if available, fallback to local logos
  const partnersData = homepage?.partnersSection || {};
  const clientLogos = [
    { src: colgateIcon, alt: 'Colgate', url: '#' },
    { src: merckIcon, alt: 'MERCK', url: '#' },
    { src: sanofiIcon, alt: 'sanofi', url: '#' },
    { src: tataSteelIcon, alt: 'TATA STEEL', url: '#' },
    { src: abinbevIcon, alt: 'ABInBev', url: '#' },
    { src: nestePurinaIcon, alt: 'Nestlé PURINA', url: '#' },
  ];

  // Get content from Strapi or use defaults
  const title = partnersData.title || 'Trusted by leading global manufacturers';
  const subtitle = partnersData.subtitle || 'Our partners across industries';

  return (
    <section className="client_logo_slider_sec">
      <div className="container one_side_full_container pe-0 ms-auto me-0 position-relative">
        <AnimatedDivider className="d-none d-md-block client_logo_divider_line" />
        <div className="row gx-0 align-items-center">
          <div className="client_logo_slider_left_col osfc_left_col pe-2 pe-md-3 align-self-center mb-4 mb-md-0">
            <AnimatedText
              tag="h2"
              className="client_logo_slider_heading_text text-black"
            >
              <motion.span variants={{ hidden: { opacity: 0, x: "1em" }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }}>
                {title}
              </motion.span>
            </AnimatedText>
            {subtitle && (
                <div className="subtitle-wrapper">
                  <AnimatedText
                    tag="div"
                    className="client_logo_slider_subtitle text-muted mt-2"
                  >
                    <motion.span variants={{ hidden: { opacity: 0, x: "1em" }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }}>
                      {subtitle}
                    </motion.span>
                  </AnimatedText>
                </div>
            )}
          </div>
          <div className="client_logo_slider_right_col osfc_right_col">
            <div className="logo_slider_holder">
              <SplideLogoSlider logos={clientLogos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
