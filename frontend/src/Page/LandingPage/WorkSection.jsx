import React from "react";
import { motion } from "framer-motion";
function WorkSection() {
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1: Create an Account */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center"
            >
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-4">
                <svg
                  className="text-white w-8 h-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a2 2 0 00-2 2v6a2 2 0 104 0V2a2 2 0 00-2-2zm1 13a1 1 0 01-2 0v-3a1 1 0 012 0v3z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.464 5.636a8 8 0 1011.314 11.314l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657a6 6 0 11-8.485-8.485l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Create an Account</h3>
                <p className="text-gray-600">
                  Sign up for Budget Mitra using your email address or social
                  media accounts.
                </p>
              </div>
            </motion.div>

            {/* Step 2: Set Your Budget */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center"
            >
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-4">
                <svg
                  className="text-white w-8 h-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a2 2 0 00-2 2v6a2 2 0 104 0V2a2 2 0 00-2-2zm1 13a1 1 0 01-2 0v-3a1 1 0 012 0v3z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.464 5.636a8 8 0 1011.314 11.314l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657a6 6 0 11-8.485-8.485l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Set Your Budget</h3>
                <p className="text-gray-600">
                  Define your monthly budget goals and categories for tracking
                  expenses.
                </p>
              </div>
            </motion.div>

            {/* Step 3: Track Expenses */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center"
            >
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-4">
                <svg
                  className="text-white w-8 h-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a2 2 0 00-2 2v6a2 2 0 104 0V2a2 2 0 00-2-2zm1 13a1 1 0 01-2 0v-3a1 1 0 012 0v3z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.464 5.636a8 8 0 1011.314 11.314l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657a6 6 0 11-8.485-8.485l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Track Expenses</h3>
                <p className="text-gray-600">
                  Record and categorize your expenses to monitor your spending
                  habits.
                </p>
              </div>
            </motion.div>

            {/* Step 4: Plan for Future */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center"
            >
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-4">
                <svg
                  className="text-white w-8 h-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a2 2 0 00-2 2v6a2 2 0 104 0V2a2 2 0 00-2-2zm1 13a1 1 0 01-2 0v-3a1 1 0 012 0v3z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.464 5.636a8 8 0 1011.314 11.314l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657a6 6 0 11-8.485-8.485l5.657-5.657a1 1 0 10-1.414-1.414l-5.657 5.657z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Plan for Future</h3>
                <p className="text-gray-600">
                  Use our financial planning tools to set savings goals and
                  investment plans.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkSection;
