import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import ctaVideo from '../assets/images/home/cta-sec-video.mp4';
import useVideoAutoPlayOnView from '../hooks/useVideoAutoPlayOnView';

const VideoCTASection = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  const videoRef = useRef(null);
  useVideoAutoPlayOnView(videoRef);
  
  // Use Strapi data with fallbacks
  const videoCtaData = data || homepage?.videoCta || {};
  const title = videoCtaData.title || 'See what real-time, intelligent manufacturing looks like';
  const subtitle = videoCtaData.subtitle || 'Request a Demo';
  const description = videoCtaData.description || 'Experience the power of intelligent manufacturing operations management.';
  const ctaText = videoCtaData.ctaText || 'Request a Demo';
  const ctaUrl = videoCtaData.ctaUrl || 'https://www.quartic.ai/demo/';
  const videoUrl = videoCtaData.videoUrl || ctaVideo;
  
  // Debug logging
  console.log('VideoCTASection - homepage:', homepage);
  console.log('VideoCTASection - videoCtaData:', videoCtaData);

  return (
    <section className="partner_cta_sec position-relative bg-black overflow-hidden">
      {/* Corner gradient boxes to match reference */}
      <div className="bg_graphic_gbox_top" aria-hidden="true"></div>
      <div className="bg_graphic_gbox_bottom" aria-hidden="true"></div>
      <div className="home_cta_bg_video_holder position-absolute">
        <video 
          ref={videoRef}
          className="object-fit-cover w-100 h-100" 
          preload="metadata" 
          loop 
          muted 
          playsInline 
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="partner_cta_content mx-auto">
          <div className="sec_heading_wrap text-center">
            <div className="sec_heading_holder">
              <AnimatedText
                tag="h2"
                className="h2_heading_text fw-semibold text-white"
                text={title}
              />
            </div>
            <motion.div 
              className="btn_holder text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href={ctaUrl} 
                className="btn btn_orange"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={ctaText}
              >
                <span>{ctaText}</span>
                <span className="arrow"></span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCTASection;
