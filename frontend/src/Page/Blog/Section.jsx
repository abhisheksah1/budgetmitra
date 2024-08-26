import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => {
  return (
    <section className="p-4 md:p-8 bg-gray-50 rounded-lg shadow-md mb-8">
      <motion.h2 
        initial={{ scale:0.8, opacity:0 }}
        whileInView={{scale:1, opacity:1 }}
        transition={{ duration: 0.5 }}
       
        className="text-2xl font-bold mb-4 text-blue-800"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
};

export default Section;
