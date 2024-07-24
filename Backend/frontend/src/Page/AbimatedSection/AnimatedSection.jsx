
import FramerHooks from "../Hooks/FramerHooks";
import React from 'react';
import { motion } from 'framer-motion';


const AnimatedSection = ({ children }) => {
  const [ref, isIntersecting] = FramerHooks({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 100 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
