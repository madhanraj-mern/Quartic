import React from 'react';
import { motion } from 'framer-motion';

const ScrollRevealCard = ({ text, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{
        margin: '50px',
        padding: '20px',
        border: '1px solid gray',
        backgroundColor: 'lightgray',
        minHeight: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default ScrollRevealCard;


