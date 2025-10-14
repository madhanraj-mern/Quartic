import React from 'react';
import { motion } from 'framer-motion';
import heroImg1 from '../assets/images/home/hero-banner-img1.jpg';
import heroImg2 from '../assets/images/home/home_banner_img2.jpg';
import heroImg3 from '../assets/images/home/home_banner_img3.jpg';
import heroImg4 from '../assets/images/home/home_banner_img4.jpg';

const SimpleHeroSection = ({ homepage, data }) => {
  const heroData = data || homepage?.heroSection || {};
  
  // Get content from Strapi or use defaults
  const title = heroData.title || 'Decision Intelligence for Manufacturing Operations Management';
  const description = heroData.subtitle || heroData.description || 'Deliver responsive, agile operations with smart manufacturing solutions powered by AI and DataOps for real-time context.';
  const primaryCtaText = heroData.primaryCtaText || 'Request a Demo';
  const primaryCtaUrl = heroData.primaryCtaUrl || 'https://www.quartic.ai/demo/';
  const secondaryCtaText = heroData.secondaryCtaText || 'Watch Video';
  const secondaryCtaUrl = heroData.secondaryCtaUrl || '#';

  return (
    <section className="hero-banner d-flex align-items-center" style={{ minHeight: '600px' }}>
      <div className="container one_side_full_container ms-0 me-auto px-0">
        <div className="d-flex g-0 align-items-end hero-content-wrapper flex-column flex-lg-row">
          {/* Left: Image Grid */}
          <div className="hero-img-col" style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '10px',
              height: '400px'
            }}>
              <img 
                src={heroImg1} 
                alt="Hero 1" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                onLoad={() => console.log('Hero image 1 loaded')}
                onError={(e) => console.error('Hero image 1 failed to load:', e)}
              />
              <img 
                src={heroImg2} 
                alt="Hero 2" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                onLoad={() => console.log('Hero image 2 loaded')}
                onError={(e) => console.error('Hero image 2 failed to load:', e)}
              />
              <img 
                src={heroImg3} 
                alt="Hero 3" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                onLoad={() => console.log('Hero image 3 loaded')}
                onError={(e) => console.error('Hero image 3 failed to load:', e)}
              />
              <img 
                src={heroImg4} 
                alt="Hero 4" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                onLoad={() => console.log('Hero image 4 loaded')}
                onError={(e) => console.error('Hero image 4 failed to load:', e)}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="hero-content-col" style={{ flex: '0 0 50%', maxWidth: '50%', padding: '40px' }}>
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
                style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px' }}
              >
                {title}
              </motion.h1>
              
              <motion.p 
                className="hero-description text-black"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}
              >
                {description}
              </motion.p>

              <motion.div 
                className="hero-cta-buttons d-flex gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a 
                  href={primaryCtaUrl}
                  className="btn btn-primary"
                  style={{ 
                    backgroundColor: '#ff6b35', 
                    border: 'none', 
                    padding: '12px 24px',
                    borderRadius: '6px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  {primaryCtaText} →
                </a>
                <a 
                  href={secondaryCtaUrl}
                  className="btn btn-link"
                  style={{ 
                    color: '#ff6b35', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    fontWeight: '500'
                  }}
                >
                  ▶ {secondaryCtaText}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;
