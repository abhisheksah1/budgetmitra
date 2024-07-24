import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const StepsToStartInvesting = () => {
  return (
    <Section title="Steps to Start Investing">
      <motion.div
     initial={{ scale:0.8, opacity:0 }}
     whileInView={{scale:1, opacity:1 }}
     transition={{ duration: 0.5 }}
   
      >
        <h3 className="text-xl font-semibold mb-2">1. Set Clear Goals</h3>
        <p className="text-gray-700 mb-6">
          Determine what you want to achieve with your investments. Are you
          saving for retirement, a down payment on a house, or your child's
          education? Clear goals will guide your investment strategy.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2. Understand Your Risk Tolerance
        </h3>
        <p className="text-gray-700 mb-6">
          Assess how much risk you’re willing to take. This will help you choose
          appropriate investments that match your comfort level and financial
          situation.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Create a Budget</h3>
        <p className="text-gray-700 mb-6">
          Before investing, ensure you have a solid financial foundation. Pay
          off high-interest debt and build an emergency fund to cover 3-6 months
          of expenses.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          4. Start with a Retirement Account
        </h3>
        <p className="text-gray-700 mb-6">
          If you have access to a 401(k) or similar employer-sponsored
          retirement plan, start there. These accounts offer tax advantages and
          sometimes employer matching contributions.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          5. Choose a Brokerage Account
        </h3>
        <p className="text-gray-700 mb-6">
          Select a brokerage platform to open an investment account. Many online
          brokers offer user-friendly interfaces, educational resources, and low
          fees.
        </p>

        <h3 className="text-xl font-semibold mb-2">6. Begin Investing</h3>
        <p className="text-gray-700 mb-6">
          Start with small, regular contributions to your investment accounts.
          Consider using dollar-cost averaging, which involves investing a fixed
          amount at regular intervals, regardless of market conditions.
        </p>
      </motion.div>
    </Section>
  );
};

export default StepsToStartInvesting;
