import { motion } from 'framer-motion';

// Animation variants for scroll reveals
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideFromRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "power2.out" }
  }
};

export const slideFromLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "power2.out" }
  }
};

export const slideFromTopVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "power2.out" }
  }
};

// Staggered animations for multiple elements
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Text animation variants (for words_slide_from_right effect)
export const textSlideVariants = {
  hidden: { opacity: 0, x: "1em" },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "power2.out" }
  }
};

// Clip path animations (for divider lines)
export const clipDownVariants = {
  hidden: { 
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 1
  },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

// Blur animation variants
export const blurVariants = {
  hidden: { 
    filter: "blur(10px)",
    opacity: 0.7
  },
  visible: { 
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Hover animation variants
export const hoverScale = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const hoverLift = {
  hover: { 
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Button arrow animation
export const buttonArrowVariants = {
  rest: { x: 0 },
  hover: { 
    x: 5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Grid tile flip animation
export const tileFlipVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 }
};

// Viewport options for scroll-triggered animations
export const viewportOptions = {
  once: true,
  margin: "-100px 0px"
};

export const viewportOptionsDelayed = {
  once: true,
  margin: "-50px 0px"
};

// Animation wrapper component
export const AnimatedSection = ({ children, className = "", variants = scrollRevealVariants, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered container component
export const StaggeredContainer = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Text animation component
export const AnimatedText = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={textSlideVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Clip path animation component
export const ClipDownLine = ({ className = "", ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={clipDownVariants}
      className={className}
      {...props}
    />
  );
};

// Blur animation component
export const BlurAnimation = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={blurVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
