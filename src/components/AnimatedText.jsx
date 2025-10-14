import React from 'react';
import { motion } from 'framer-motion';
import useWordAnimation from '../hooks/useWordAnimation';

const AnimatedText = ({ 
  text, 
  className = "", 
  tag: Tag = "h2",
  children,
  ...props 
}) => {
  const { ref, isInView, words, containerVariants, wordVariants } = useWordAnimation(text);

  // If children are provided, use them instead of text
  if (children) {
    return (
      <Tag ref={ref} className={`split_text words_slide_from_right ${className}`} {...props}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={`split_text words_slide_from_right ${className}`} {...props}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className={word.trim() === '' ? 'word-space' : 'word'}
            style={{ display: 'inline' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Tag>
  );
};

export default AnimatedText;
