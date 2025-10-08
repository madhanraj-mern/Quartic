import React from 'react';
import { motion } from 'framer-motion';
import useClipDownAnimation from '../hooks/useClipDownAnimation';

const AnimatedDivider = ({ className = "", ...props }) => {
  const { ref, clipPath, initialStyle } = useClipDownAnimation();

  return (
    <motion.div
      ref={ref}
      className={`divider_line anim-item-clipDown-line ${className}`}
      style={{
        ...initialStyle,
        clipPath: clipPath
      }}
      {...props}
    />
  );
};

export default AnimatedDivider;
