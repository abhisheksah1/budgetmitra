import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const Conclusion = () => {
  return (
    <Section title="Conclusion">
      <motion.p
       initial={{ scale:0.8, opacity:0 }}
       whileInView={{scale:1, opacity:1 }}
       transition={{ duration: 0.5 }}
      
        className="text-gray-700 mb-6"
      >
        Investing is a powerful tool for building wealth and achieving financial
        goals. By understanding basic principles, choosing the right
        investments, and avoiding common mistakes, beginners can set themselves
        up for long-term success. Start small, stay informed, and remain patient
        to reap the rewards of investing over time.
      </motion.p>
    </Section>
  );
};

export default Conclusion;
