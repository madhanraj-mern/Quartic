import React from 'react';
import { motion } from 'framer-motion';

const HoverButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
    >
      Hover Me!
    </motion.button>
  );
};

export default HoverButton;


