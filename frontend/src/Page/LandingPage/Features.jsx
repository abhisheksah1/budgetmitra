import React from "react";
import BudgetTracking from "../../Assests/budgetTracking.png";
import ExpensesManagement from "../../Assests/ExpensesManagement.png";
import FinancialPlanning from "../../Assests/FinancialPlanning.png";
import { motion } from "framer-motion";

function Features() {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center"
            >
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">
                  Budget Tracking
                </h3>
                <p className="text-gray-600">
                  Track your budget with ease and stay on top of your finances.
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  src={BudgetTracking}
                  alt="Budget Tracking"
                  className="max-w-56"
                />
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center"
            >
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">
                  Expense Management
                </h3>
                <p className="text-gray-600">
                  Effortlessly manage your expenses and analyze spending
                  patterns.
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  src={ExpensesManagement}
                  alt="Expense Management"
                  className="mx-auto max-w-56"
                />
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center"
            >
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">
                  Financial Planning
                </h3>
                <p className="text-gray-600">
                  Plan for your future financial goals with powerful planning
                  tools.
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  src={FinancialPlanning}
                  alt="Financial Planning"
                  className="max-w-52"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
