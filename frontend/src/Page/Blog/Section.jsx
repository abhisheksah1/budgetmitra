import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => {
  return (
    <section className="p-4 md:p-8 bg-gray-50 rounded-lg shadow-md mb-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        viewport={{ once: true }}
        className="text-2xl font-bold mb-4 text-blue-800"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
};

export default Section;
