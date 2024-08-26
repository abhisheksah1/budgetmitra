import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const GettingStarted = () => {
  return (
    <Section title="Getting Started with Investing">
      <motion.div 
        initial={{ scale:0.8, opacity:0 }}
        whileInView={{scale:1, opacity:1 }}
        transition={{ duration: 0.5 }}
       
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold mb-2">1. Set Your Financial Goals</h3>
        <p>Determine your financial goals and the time horizon for your investments. This will help you choose the right investment strategy.</p>

        <h3 className="text-xl font-semibold mb-2">2. Create a Budget</h3>
        <p>Review your income and expenses to find out how much you can afford to invest regularly.</p>

        <h3 className="text-xl font-semibold mb-2">3. Research Investment Options</h3>
        <p>Research various investment options and consider factors like risk, return, and liquidity.</p>

        <h3 className="text-xl font-semibold mb-2">4. Open an Investment Account</h3>
        <p>Choose a brokerage or investment platform that suits your needs and open an investment account.</p>

        <h3 className="text-xl font-semibold mb-2">5. Start Investing</h3>
        <p>Start investing regularly, monitor your investments, and adjust your strategy as needed to stay on track with your goals.</p>
      </motion.div>
    </Section>
  );
};

export default GettingStarted;
