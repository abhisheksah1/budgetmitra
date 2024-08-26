import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const AdvancedInvestmentStrategies = () => {
  return (
    <Section title="Advanced Investment Strategies">
      <motion.div
        initial={{ scale:0.8, opacity:0 }}
        whileInView={{scale:1, opacity:1 }}
        transition={{ duration: 0.5 }}
      
      >
        <h3 className="text-xl font-semibold mb-2">1. Dollar-Cost Averaging</h3>
        <p className="text-gray-700 mb-6">
          Dollar-cost averaging involves investing a fixed amount of money at
          regular intervals, regardless of market conditions. This strategy
          reduces the risk of making poor investment decisions based on market
          timing.
        </p>

        <h3 className="text-xl font-semibold mb-2">2. Dividend Reinvestment</h3>
        <p className="text-gray-700 mb-6">
          Reinvesting dividends can significantly boost your investment returns
          over time by purchasing additional shares, which in turn generate more
          dividends.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Value Investing</h3>
        <p className="text-gray-700 mb-6">
          Value investing involves selecting stocks that appear to be
          undervalued by the market. Investors who use this strategy believe
          that the market will eventually recognize the true value of these
          stocks, leading to potential gains.
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Growth Investing</h3>
        <p className="text-gray-700 mb-6">
          Growth investing focuses on companies expected to grow at an
          above-average rate compared to other companies. These stocks often
          have higher price-to-earnings ratios and can be more volatile.
        </p>

        <h3 className="text-xl font-semibold mb-2">5. Index Investing</h3>
        <p className="text-gray-700 mb-6">
          Index investing involves investing in a market index, such as the S&P
          500, which provides broad market exposure and typically lower fees
          compared to actively managed funds.
        </p>
      </motion.div>
    </Section>
  );
};

export default AdvancedInvestmentStrategies;
