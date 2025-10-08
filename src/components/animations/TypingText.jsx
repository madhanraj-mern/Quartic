import React from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text }) => {
  const words = (text || '').split(' ');
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: i / 10 }}
          key={`${el}-${i}`}
          style={{ marginRight: '5px' }}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingText;


