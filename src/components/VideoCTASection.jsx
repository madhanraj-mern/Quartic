import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import ctaVideo from '../assets/images/home/cta-sec-video.mp4';
import useVideoAutoPlayOnView from '../hooks/useVideoAutoPlayOnView';

const VideoCTASection = () => {
  const videoRef = useRef(null);
  useVideoAutoPlayOnView(videoRef);
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
          <source src={ctaVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="partner_cta_content mx-auto">
          <div className="sec_heading_wrap text-center">
            <div className="sec_heading_holder">
              <AnimatedText
                tag="h2"
                className="h2_heading_text fw-semibold text-white"
                text="See what real-time, intelligent manufacturing looks like"
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
                href="#" 
                className="btn btn_orange"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request a Demo"
              >
                <span>Request a Demo</span>
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
