import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const useHoverEffects = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });
  const springRotate = useSpring(rotate, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (event.clientX - centerX) * 0.1;
    const deltaY = (event.clientY - centerY) * 0.1;
    
    x.set(deltaX);
    y.set(deltaY);
    scale.set(1.05);
    rotate.set(deltaX * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    rotate.set(0);
  };

  const hoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05, 
      rotate: 2,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-5, 5, -5],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 0 rgba(255, 107, 53, 0)" },
    hover: { 
      boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return {
    ref,
    x: springX,
    y: springY,
    scale: springScale,
    rotate: springRotate,
    handleMouseMove,
    handleMouseLeave,
    hoverVariants,
    floatVariants,
    glowVariants
  };
};

export default useHoverEffects;
