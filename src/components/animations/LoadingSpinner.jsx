import React from 'react';
import { useSpring, animated } from 'react-spring';

const LoadingSpinner = () => {
  const styles = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    loop: true,
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        ...styles,
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #3498db',
        borderRadius: '50%',
      }}
    />
  );
};

export default LoadingSpinner;


