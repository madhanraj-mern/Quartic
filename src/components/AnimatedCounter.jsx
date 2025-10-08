import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CountUp } from 'countup.js';

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  className = '',
  delay = 0,
  decimals = 0,
  separator = ','
}) => {
  const countRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && countRef.current) {
      const timer = setTimeout(() => {
        const countUp = new CountUp(countRef.current, end, {
          startVal: 0,
          duration: duration,
          suffix: suffix,
          prefix: prefix,
          decimals: decimals,
          separator: separator,
          useEasing: true,
          useGrouping: true,
        });

        if (!countUp.error) {
          countUp.start();
        } else {
          console.error('CountUp error:', countUp.error);
          // Fallback to simple number display
          countRef.current.textContent = prefix + end + suffix;
        }
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, end, duration, delay, suffix, prefix, decimals, separator]);

  return (
    <motion.span
      ref={(el) => {
        ref.current = el;
        countRef.current = el;
      }}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      0
    </motion.span>
  );
};

export default AnimatedCounter;
