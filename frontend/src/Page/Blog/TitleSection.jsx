import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Introduction = () => {
  return (
    <Section title="Introduction to Investing">
      <motion.div 
       initial={{ scale:0.8, opacity:0 }}
       whileInView={{scale:1, opacity:1 }}
       transition={{ duration: 0.5 }}
      
        className="space-y-4"
      >
        <p>Investing is a powerful tool for building wealth and achieving financial goals. Understanding the basics of investing can help you make informed decisions and grow your money over time.</p>
        <p>Whether you're looking to invest in stocks, bonds, real estate, or other assets, having a clear strategy and understanding the risks involved is crucial.</p>
      </motion.div>
    </Section>
  );
};

export default Introduction;
