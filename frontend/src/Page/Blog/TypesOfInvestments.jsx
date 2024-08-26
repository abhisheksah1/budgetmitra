import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const TypesOfInvestments = () => {
  return (
    <Section title="Types of Investments">
      <motion.div 
        initial={{ scale:0.8, opacity:0 }}
        whileInView={{scale:1, opacity:1 }}
        transition={{ duration: 0.5 }}
        
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold mb-2">1. Stocks</h3>
        <p>Stocks represent ownership in a company. Investing in stocks can provide high returns, but also comes with higher risk compared to other investment types.</p>

        <h3 className="text-xl font-semibold mb-2">2. Bonds</h3>
        <p>Bonds are loans made to companies or governments. They provide regular interest payments and are generally considered lower risk than stocks.</p>

        <h3 className="text-xl font-semibold mb-2">3. Real Estate</h3>
        <p>Real estate investing involves buying, owning, and managing properties for rental income or capital appreciation.</p>

        <h3 className="text-xl font-semibold mb-2">4. Mutual Funds</h3>
        <p>Mutual funds pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.</p>

        <h3 className="text-xl font-semibold mb-2">5. Exchange-Traded Funds (ETFs)</h3>
        <p>ETFs are similar to mutual funds but trade on stock exchanges. They offer diversification and liquidity.</p>
      </motion.div>
    </Section>
  );
};

export default TypesOfInvestments;
