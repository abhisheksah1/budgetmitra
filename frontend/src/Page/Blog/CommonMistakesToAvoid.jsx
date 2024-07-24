import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const CommonMistakesToAvoid = () => {
  return (
    <Section title="Common Mistakes to Avoid">
      <motion.div
        initial={{ scale:0.8, opacity:0 }}
        whileInView={{scale:1, opacity:1 }}
        transition={{ duration: 0.5 }}
       
      >
        <h3 className="text-xl font-semibold mb-2">1. Not Diversifying</h3>
        <p className="text-gray-700 mb-6">
          Putting all your money into one investment increases risk. Diversify
          across different asset classes and industries to reduce the impact of
          any single investment's poor performance.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2. Trying to Time the Market
        </h3>
        <p className="text-gray-700 mb-6">
          Attempting to predict market movements can lead to missed
          opportunities and losses. Focus on a long-term investment strategy
          rather than short-term market timing.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Ignoring Fees</h3>
        <p className="text-gray-700 mb-6">
          High fees can erode your investment returns over time. Opt for
          low-cost funds and be mindful of trading fees.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          4. Emotional Decision-Making
        </h3>
        <p className="text-gray-700 mb-6">
          Avoid making impulsive decisions based on market volatility or news
          headlines. Stick to your investment plan and maintain a long-term
          perspective.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          5. Neglecting to Rebalance
        </h3>
        <p className="text-gray-700 mb-6">
          Regularly review your portfolio and adjust your asset allocation to
          ensure it remains in line with your goals and risk tolerance.
        </p>
      </motion.div>
    </Section>
  );
};

export default CommonMistakesToAvoid;
