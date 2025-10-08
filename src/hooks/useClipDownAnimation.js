import { useRef } from 'react';
import { useInView, useScroll, useTransform } from 'framer-motion';

const useClipDownAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering
    margin: "0px 0px -100% 0px" // Start when element enters viewport
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to clip-path value
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"] // From hidden (bottom) to visible
  );

  const initialStyle = {
    clipPath: "inset(0% 0% 100% 0%)", // Initially hidden (bottom)
    opacity: 1
  };

  return {
    ref,
    isInView,
    clipPath,
    initialStyle
  };
};

export default useClipDownAnimation;
