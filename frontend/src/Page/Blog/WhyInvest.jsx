import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const WhyInvest = () => {
  return (
    <Section title="Why Invest?">
      <motion.ul
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
       
        className="list-disc list-inside mb-6"
      >
        <li>
          <strong>Grow Your Wealth:</strong> Investing allows your money to grow
          over time through the power of compound interest.
        </li>
        <li>
          <strong>Beat Inflation:</strong> Investments can help you outpace
          inflation, ensuring your purchasing power remains strong in the
          future.
        </li>
        <li>
          <strong>Achieve Financial Goals:</strong> Whether it's buying a home,
          funding education, or planning for retirement, investing can help you
          reach your financial milestones.
        </li>
      </motion.ul>
    </Section>
  );
};

export default WhyInvest;
