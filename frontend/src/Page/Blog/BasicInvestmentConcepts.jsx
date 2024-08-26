import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const BasicInvestmentConcepts = () => {
  return (
    <Section title="Basic Investment Concepts">
      <motion.div
       initial={{ scale:0.8, opacity:0 }}
       whileInView={{scale:1, opacity:1 }}
       transition={{ duration: 0.5 }}
       
      >
        <h3 className="text-xl font-semibold mb-2">1. Risk and Return</h3>
        <p className="text-gray-700 mb-6">
          Every investment carries a certain level of risk. Generally, higher
          risks are associated with higher potential returns. It’s crucial to
          balance your risk tolerance with your investment goals.
        </p>

        <h3 className="text-xl font-semibold mb-2">2. Diversification</h3>
        <p className="text-gray-700 mb-6">
          Diversification involves spreading your investments across various
          asset classes (stocks, bonds, real estate, etc.) to reduce risk. This
          way, if one investment performs poorly, others can help offset the
          losses.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Asset Allocation</h3>
        <p className="text-gray-700 mb-6">
          Asset allocation refers to how you divide your investments among
          different asset categories. This strategy is crucial for managing risk
          and achieving a balanced portfolio.
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Time Horizon</h3>
        <p className="text-gray-700 mb-6">
          Your investment time horizon is the length of time you plan to hold an
          investment before taking the money out. Generally, longer time
          horizons allow for more aggressive investments since there's more time
          to recover from potential losses.
        </p>
      </motion.div>
    </Section>
  );
};

export default BasicInvestmentConcepts;
