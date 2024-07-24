import React from "react";
import BudgetTracking from "../../Assests/budgetTracking.png";
import ExpensesManagement from "../../Assests/ExpensesManagement.png"
import FinancialPlanning from "../../Assests/FinancialPlanning.png";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

function Features() {
  return (
    <section className="bg-blue-50 px-4 sm:px-8 md:px-16 min-h-full">
      <div className="container mx-auto ">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl py-10 lg:text-4xl font-bold text-blue-500 text-center"
        >
          Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {/* Feature Card 1 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">Budget Tracking</h3>
                <p className="text-gray-600 text-balance">
                  Track your budget with ease and stay on top of your finances.
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  src={BudgetTracking}
                  alt="Budget Tracking"
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
            <div className="flex lg:justify-end justify-center w-full mt-auto">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                View More <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">Expense Management</h3>
                <p className="text-gray-600 text-balance">
                  Effortlessly manage your expenses and analyze spending patterns.
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  src={ExpensesManagement}
                  alt="Expense Management"
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
            <div className="flex lg:justify-end justify-center w-full mt-auto">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                View More <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">Financial Planning</h3>
                <p className="text-gray-600 text-balance">
                  Plan for your future financial goals with powerful planning tools.
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  src={FinancialPlanning}
                  alt="Financial Planning"
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
            <div className="flex lg:justify-end justify-center w-full mt-auto">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                View More <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>


        {/* Impact Section */}
        <div className="flex flex-col lg:flex-row justify-between  mt-24">
          <div className="lg:w-1/4 mb-8">
            <p className="uppercase text-blue-500">Impact</p>
            <p className="text-2xl font-semibold mt-2">
              The impact of Budget Mitra in Numbers
            </p>
            <p className="text-gray-600 mt-2">
              Budget Mitra has revolutionized the way people manage their money,
              providing them with the tools and resources they need to make
              informed decisions about their finances.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border px-6 py-5 shadow-md rounded-lg flex flex-col"
            >
              <p className="text-4xl font-bold text-blue-500">21%</p>
              <p className="text-lg font-semibold mt-2">On average</p>
              <p className="text-gray-600 mt-2">
                Users who regularly use Budget Mitra save 21% more money than
                those who do not use it.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border px-6 py-5 shadow-md rounded-lg flex flex-col"
            >
              <p className="text-4xl font-bold text-blue-500">80%</p>
              <p className="text-lg font-semibold mt-2">User report</p>
              <p className="text-gray-600 mt-2">
                Feeling more confident about their financial future after using
                a personal finance web app for just three months.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border px-6 py-5 shadow-md rounded-lg flex flex-col"
            >
              <p className="text-4xl font-bold text-blue-500">90%</p>
              <p className="text-lg font-semibold mt-2">
                Understanding their finance
              </p>
              <p className="text-gray-600 mt-2">
                Users who regularly use Budget Mitra have a better understanding
                of their finances, allowing them to make more informed decisions
                about their money.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border px-6 py-5 shadow-md rounded-lg flex flex-col"
            >
              <p className="text-4xl font-bold text-blue-500">1M</p>
              <p className="text-lg font-semibold mt-2">Helped users</p>
              <p className="text-gray-600 mt-2">
                Budget Mitra has helped millions of people achieve their
                financial goals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
