import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaCalendarAlt as SlCalender } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Investment = () => {
  const [investments, setInvestments] = useState([]);
  const [investmentCategory, setInvestmentCategory] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentDate, setInvestmentDate] = useState(new Date());
  const [investmentDuration, setInvestmentDuration] = useState("");
  const [expectedReturns, setExpectedReturns] = useState("");
  const [riskLevel, setRiskLevel] = useState("");

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("7 Days");

  //   useEffect(() => {
  //     fetchExpenses();
  //   }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Implement filter logic here if needed
  };

  const handleSubmit = async (e) => {
    // try {
    //   await axios.post("/api/expenses/post", {
    //     user: localStorage.getItem("userId"),
    //     category: expenseCategory,
    //     amount: expenseAmount,
    //     date: expenseDate,
    //     reason: expensesReason,
    //   });
    //   toast.success("Expenses Added Successfully", {
    //     position: "bottom-right",
    //     duration: 3000,
    //     style: { backgroundColor: "#1e40af", color: "white" },
    //   });
    //   resetForm();
    //   setLoading(false);
    //   setIsModalOpen(false);
    //   fetchExpenses();
    // } catch (error) {
    //   console.error(
    //     "Error adding expenses:",
    //     error.response ? error.response.data : error.message
    //   );
    //   toast.error("Failed to add expenses", {
    //     position: "bottom-right",
    //     duration: 3000,
    //     style: { backgroundColor: "#ff2626", color: "white" },
    //   });
    //   setLoading(false);
    // }
  };

  const resetForm = () => {
    setInvestmentAmount("");
    setInvestmentCategory("");
    setInvestmentDate(new Date());
    setRiskLevel("");
    setExpectedReturns("");
    setInvestmentDuration("");
  };

  //   const fetchExpenses = async () => {
  //     try {
  //       const response = await axios.get(
  //         `/api/expenses/get?user=${localStorage.getItem("userId")}`
  //       );
  //       setExpenses(response.data.data);
  //     } catch (error) {
  //       console.error(
  //         "Error fetching expenses:",
  //         error.response ? error.response.data : error.message
  //       );
  //     }
  //   };

  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen mt-12">
      <div className="flex justify-between items-center mb-4">
        <motion.section
          className="text-center flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Investments</h1>
        </motion.section>
        <motion.section
          className="text-center flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-100  py-2 flex items-center px-4 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline "
            data-tooltip-id="add-expense-tooltip"
            data-tooltip-content="Add New Investements"
          >
            <FaPlus />
          </button>
          <ReactTooltip
            id="add-expense-tooltip"
            place="top"
            type="dark"
            effect="solid"
          />
        </motion.section>
      </div>

      <motion.section
        className="text-center flex-col mb-4 md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex justify-between items-center w-full md:w-auto space-x-5">
          <div className="flex space-x-2">
            <FilterButton
              filter="7 Days"
              activeFilter={activeFilter}
              onClick={handleFilterChange}
            />
            <FilterButton
              filter="15 Days"
              activeFilter={activeFilter}
              onClick={handleFilterChange}
            />
            <FilterButton
              filter="30 Days"
              activeFilter={activeFilter}
              onClick={handleFilterChange}
            />
          </div>
          <button className="py-2 px-4 rounded bg-gray-200 text-black">
            <SlCalender />
          </button>
        </div>
      </motion.section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Add New <span className="text-blue-500">Investment</span></h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="input input-bordered flex items-center gap-2"
                >
                  Investment Type
                  <select
                    id="category"
                    name="category"
                    value={investmentCategory}
                    onChange={(e) => setInvestmentCategory(e.target.value)}
                    className="grow"
                  >
                    <option value="">Select an investment type</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Bonds">Bonds</option>
                    <option value="Mutual Funds">Mutual Funds</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Sharee">Share</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="input input-bordered flex items-center gap-2"
                >
                  Amount
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="grow"
                    placeholder="Enter Investment amount"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="duration"
                  className="input input-bordered flex items-center gap-2"
                >
                  Duration
                  <input
                    type="number"
                    id="duration"
                    name="amount"
                    value={investmentDuration}
                    onChange={(e) => setInvestmentDuration(e.target.value)}
                    className="grow"
                    placeholder="Enter Investment Duration"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="riskLevel"
                  className="input input-bordered flex items-center gap-2"
                >
                  Risk Level
                  <select
                    id="riskLevel"
                    name="riskLevel"
                    value={riskLevel}
                    onChange={(e) => setRiskLevel(e.target.value)}
                    className="grow"
                  >
                    <option value="">Select risk level</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="expectedReturns"
                  className="input input-bordered flex items-center gap-2"
                >
                  Expected Returns (%)
                  <input
                    type="number"
                    id="expectedReturns"
                    name="expectedReturns"
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(e.target.value)}
                    className="grow"
                    placeholder="Enter Investment amount"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="input input-bordered flex items-center gap-2"
                >
                  Investment Date
                <DatePicker
                  id="date"
                  selected={investmentDate}
                  onChange={(date) => setInvestmentDate(date)}
                  className="grow"
                  />
                  </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="border-2 px-4 rounded-lg py-2 hover:bg-red-600 hover:text-white"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <motion.section
        className="flex-col mb-4 md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="shadow-md w-full overflow-x-auto">
          {investments.length === 0 ? (
            <p className="text-center text-gray-600">No Investment to show.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>

                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Expected Returns(%)
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {investments.map((investment) => (
                  <tr>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900"></td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500"></td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500"></td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500"></td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500"></td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.section>
    </main>
  );
};

const FilterButton = ({ filter, activeFilter, onClick }) => {
  const isActive = filter === activeFilter;
  return (
    <button
      onClick={() => onClick(filter)}
      className={`py-2 px-4 rounded ${
        isActive ? "bg-blue-100 text-blue-500" : "bg-gray-200 text-black"
      } focus:outline-none focus:shadow-outline mb-2 md:mb-0`}
    >
      {filter}
    </button>
  );
};

export default Investment;
