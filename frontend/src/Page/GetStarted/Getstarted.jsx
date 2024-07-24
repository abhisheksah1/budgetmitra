import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Cog,
  BarChartHorizontalBig,
  HandCoins,
  Calculator,
  Menu,
  X,
} from "lucide-react";
import Budget from "../../Assests/budget.png";
import { motion } from "framer-motion";
import AboutLoan from "./GetStartedComponents/AboutLoan";

const Getstarted = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
      className={`fixed mt-16 md:static  z-10  w-64 bg-white shadow-2xl lg:shadow-md text-[#333] p-6 transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0   `} // Added overflow-y-auto to make it scrollable
    >
      <div className="flex justify-between mb-4 md:hidden">
        <button className="text-[#333] pl-44" onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>
      <nav>
        <ul>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/dashboard"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <LayoutDashboard />
              Dashboard
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/income"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <HandCoins />
              Income
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/investment"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <HandCoins />
              Investment
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 0.6 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/expenses"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <img className="h-6 invert w-6" src={Budget} alt="Expenses" />
              Expenses
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 0.8 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/loan"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <img className="h-6 invert w-6" src={Budget} alt="Loan" />
              Loan
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/budget"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <Calculator />
              Budget
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 1.2 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/report"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <BarChartHorizontalBig />
              Reports
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, delay: 1.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              to="/getStarted/setting"
              className="hover:text-gray-400 flex gap-2"
              onClick={() => toggleSidebar(false)}
            >
              <Cog />
              Settings
            </Link>
          </motion.li>
        </ul>
      </nav>
    </aside>
      {/* Main Content */}
      <main className="flex-1 p-5 bg-gray-100">
        <div className="flex justify-end md:hidden mb-4 pt-10">
          <button className="text-blue-800" onClick={toggleSidebar}>
            {isSidebarOpen ? "" : <Menu size={24} />}
          </button>
        </div>
        <Outlet />
       
      </main>
    </div>
  );
};

export default Getstarted;
