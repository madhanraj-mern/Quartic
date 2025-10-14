import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useParallax from '../hooks/useParallax';
import useHoverEffects from '../hooks/useHoverEffects';
import useMobileDetection from '../hooks/useMobileDetection';
import GridContainer from './GridContainer';
import { getStrapiImageUrl, getStrapiImageUrls } from '../utils/dataMapping';
import heroImg1 from '../assets/images/home/hero-banner-img1.jpg';
import heroImg2 from '../assets/images/home/home_banner_img2.jpg';
import heroImg3 from '../assets/images/home/home_banner_img3.jpg';
import heroImg4 from '../assets/images/home/home_banner_img4.jpg';

const HeroSection = ({ homepage, data }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const { ref: parallaxRef, y: parallaxY } = useParallax(0.5, 0);
  const { hoverVariants, floatVariants } = useHoverEffects();
  const { isMobile, isTablet } = useMobileDetection();
  
  // Get content from section data or homepage fallback
  const heroData = data || homepage?.heroSection || {};
  
  // Get dynamic images from Strapi or use fallback local images
  let imageList = [heroImg1, heroImg2, heroImg3, heroImg4]; // Fallback images
  
  if (heroData.backgroundImage) {
    // Use Strapi background image if available
    const strapiImageUrl = getStrapiImageUrl(heroData.backgroundImage);
    if (strapiImageUrl) {
      imageList = [strapiImageUrl, heroImg2, heroImg3, heroImg4];
    }
  } else if (heroData.images && Array.isArray(heroData.images)) {
    // Use multiple Strapi images if available
    const strapiImages = getStrapiImageUrls(heroData.images);
    if (strapiImages.length > 0) {
      imageList = [...strapiImages];
      // Pad with fallback images if needed
      while (imageList.length < 4) {
        imageList.push(heroImg1, heroImg2, heroImg3, heroImg4);
      }
      imageList = imageList.slice(0, 4);
    }
  }
  
  // Debug: Log the image URLs being used
  console.log('🖼️ HeroSection - Image URLs:', {
    hasStrapiImage: !!heroData.backgroundImage,
    strapiImageUrl: heroData.backgroundImage?.url,
    fullImageUrl: heroData.backgroundImage ? getStrapiImageUrl(heroData.backgroundImage) : null,
    hasImagesArray: !!heroData.images,
    imagesArrayLength: heroData.images?.length || 0,
    imageList,
    heroData: heroData
  });

  // Get content from Strapi or use defaults
  const title = heroData.title || 'Decision Intelligence for Manufacturing Operations Management';
  const description = heroData.subtitle || heroData.description || 'Deliver responsive, agile operations with smart manufacturing solutions powered by AI and DataOps for real-time context.';
  const primaryCtaText = heroData.primaryCtaText || 'Request a Demo';
  const primaryCtaUrl = heroData.primaryCtaUrl || 'https://www.quartic.ai/demo/';
  const secondaryCtaText = heroData.secondaryCtaText || 'Watch Video';
  const secondaryCtaUrl = heroData.secondaryCtaUrl || '#';


  return (
    <section className="hero-banner d-flex align-items-center">
      <div className="container one_side_full_container ms-0 me-auto px-0">
        <div className="d-flex g-0 align-items-end hero-content-wrapper flex-column flex-lg-row">
          {/* Left: Image */}
          <motion.div 
            ref={parallaxRef}
            className="hero-img-col" 
            id="home_hero_img"
            style={{ y: parallaxY, opacity }}
            variants={floatVariants}
            initial="initial"
            animate="animate"
          >
            <div className="w-100">
              <GridContainer
                imageList={imageList}
                gridType="home"
                id="home-banner-grid-container"
                overlayClass="white-overlay"
                overlayTiles={[0, 1, 4, 7, 11]}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="hero-content-col">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-content"
            >
              <motion.h1 
                className="fw-semibold hero-main-headingtext text-black"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {title}
              </motion.h1>
              <div className="dsc_text">
                <p>
                  {description}
                </p>
              </div>
              <motion.div 
                className="hero-actions d-flex align-items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                    <motion.a 
                      href={primaryCtaUrl} 
                      className="btn btn_orange"
                      variants={hoverVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      animate="animate"
                    >
                  <span>{primaryCtaText}</span>
                  <motion.span 
                    className="arrow"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a 
                  href={secondaryCtaUrl} 
                  className="btn btn_watch_video"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#ff6b35"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="play-icon">▶</span>
                  <span>{secondaryCtaText}</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
