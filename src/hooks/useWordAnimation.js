import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const useWordAnimation = (text, options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-15% 0px -15% 0px" // Triggers when element is 85% down viewport (matching original)
  });
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (text) {
      // Split text into words, preserving HTML tags
      const wordArray = text.split(/(\s+)/).filter(word => word.trim() !== '');
      setWords(wordArray);
    }
  }, [text]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // 0.3s total stagger / 5 words ≈ 0.06s per word
        delayChildren: 0
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: "1em", // 1em to the right (matching original)
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, // 0.8 second duration (matching original)
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out equivalent
      }
    }
  };

  return {
    ref,
    isInView,
    words,
    containerVariants,
    wordVariants
  };
};

export default useWordAnimation;
