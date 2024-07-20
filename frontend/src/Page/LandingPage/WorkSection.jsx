import React from "react";
import { motion } from "framer-motion";
import { SiSimplelogin } from "react-icons/si";


function WorkSection() {
  return (
    <div>
      <section className="bg-gray-100 px-16 py-12">
        <div className="container mx-auto px-6">
          <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            How It Works
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1: Create an Account */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center border shadow-sm rounded-lg px-10 py-5"
            >
              <div className="flex-shrink-0 text-6xl text-blue-500">
                <SiSimplelogin />
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
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex items-center border shadow-sm rounded-lg px-10 py-5"
            >
              <div className="flex-shrink-0 text-5xl text-blue-500 rounded-full p-4">
              <i className="fa fa-money" aria-hidden="true"></i>
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
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center border shadow-sm rounded-lg px-10 py-5"
            >
              <div className="flex-shrink-0 text-5xl text-blue-500 rounded-full p-4">
              <i className="fa fa-search" aria-hidden="true"></i>
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
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center border shadow-sm rounded-lg px-10 py-5"
            >
              <div className="flex-shrink-0 text-6xl text-blue-500 rounded-full p-4">
              <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
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
