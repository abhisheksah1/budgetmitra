import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const TaxAdvantagedAccounts = () => {
  return (
    <Section title="Tax-Advantaged Accounts">
      <motion.div
       initial={{ scale:0.8, opacity:0 }}
       whileInView={{scale:1, opacity:1 }}
       transition={{ duration: 0.5 }}
       
      >
        <h3 className="text-xl font-semibold mb-2">1. 401(k) Plans</h3>
        <p className="text-gray-700 mb-6">
          Employer-sponsored retirement plans that offer tax advantages and
          often include employer matching contributions. Contributions are made
          with pre-tax dollars, reducing your taxable income.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2. Individual Retirement Accounts (IRAs)
        </h3>
        <p className="text-gray-700 mb-6">
          IRAs are personal retirement accounts that offer tax advantages.
          Traditional IRAs provide tax-deferred growth, while Roth IRAs offer
          tax-free growth and withdrawals.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          3. Health Savings Accounts (HSAs)
        </h3>
        <p className="text-gray-700 mb-6">
          HSAs offer triple tax advantages: contributions are tax-deductible,
          growth is tax-free, and withdrawals for qualified medical expenses are
          tax-free.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          4. 529 College Savings Plans
        </h3>
        <p className="text-gray-700 mb-6">
          These plans allow you to save for education expenses with tax-free
          growth and withdrawals, making them a great option for parents saving
          for their children's college tuition.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          5. Taxable Investment Accounts
        </h3>
        <p className="text-gray-700 mb-6">
          While not tax-advantaged, taxable investment accounts offer
          flexibility and no contribution limits. You can withdraw funds at any
          time without penalties.
        </p>
      </motion.div>
    </Section>
  );
};

export default TaxAdvantagedAccounts;
