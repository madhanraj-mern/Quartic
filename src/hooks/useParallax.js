import { useEffect, useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const useParallax = (speed = 0.5, offset = 0) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset - (speed * 100)]);
  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return { ref, y: springY };
};

export default useParallax;
