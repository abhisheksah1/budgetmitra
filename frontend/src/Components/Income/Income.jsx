import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css"; // Import your custom styles
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaCalendarAlt as SlCalender } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Named import
import { useLoginContext } from "../../Context/useContext";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const { currency } = useLoginContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/income/post", {
        source: incomeSource,
        amount: incomeAmount,
        date: incomeDate,
        user: localStorage.getItem("userId"),
      });
      setIncomeAmount("");
      setIncomeDate(new Date());
      setIncomeSource("");
      toast.success("Income Added Successfully", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
          color: "white",
        },
      });
      setLoading(false);
      setIsModalOpen(false); // Close the modal on successful submission
      fetchIncomes(); // Fetch incomes after adding new income
    } catch (error) {
      console.error(error);
      toast.error("Failed to add income", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#ff2626",
          color: "white",
        },
      });
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIncomeSource("");
    setIncomeAmount("");
    setIncomeDate(new Date());
    setIsModalOpen(false); // Close the modal on cancel
  };

  const fetchIncomes = async () => {
    try {
      const response = await axios.get(
        `/api/income/get?user=${localStorage.getItem("userId")}`
      );
      const fetchedIncomes = response.data.data;
      setIncomes(fetchedIncomes);
      const totalIncome = fetchedIncomes.reduce(
        (acc, income) => acc + Number(income.amount),
        0
      );
      setIncomeBalance(totalIncome);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  //for motion framer
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [activeFilter, setActiveFilter] = useState("7 Days");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-4">
        <motion.section
          className="text-center  flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold ">Income</h1>
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
            className="bg-blue-800 text-white py-2 flex items-center px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            data-tooltip-id="add-income-tooltip"
            data-tooltip-content="Add New Income"
          >
            <FaPlus />
          </button>
          <ReactTooltip
            id="add-income-tooltip"
            place="top"
            type="dark"
            effect="solid"
          />
        </motion.section>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-between items-center mb-4"
      >
        <div className="p-4 flex items-center gap-3 rounded-lg shadow-md w-full md:w-auto">
          <div className="text-2xl text-blue-500">
            <i className="fa fa-credit-card" aria-hidden="true"></i>
          </div>
          <div>
            <p
              className="text-left cursor-pointer"
              onClick={() => setIsAmountVisible(!isAmountVisible)}
            >
              <span className="text-xl">{currency} </span>
              <span className="text-xl">
                {isAmountVisible ? incomeBalance.toFixed(2) : "XXX.XX"}
              </span>
            </p>
            <h2 className="text-sm text-wrap text-left">Balance</h2>
          </div>
        </div>
      </motion.div>

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

      <motion.section
        className="text-center  flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="shadow-md w-full overflow-x-auto">
          {incomes.length === 0 ? (
            <p className="text-center text-gray-600">No income to show.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 md:px-6 py-3  text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider text-left">
                    Source
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {incomes.map((income) => (
                  <tr key={income._id}>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-left text-xs md:text-sm font-medium text-gray-900">
                      {income.source}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-left text-xs md:text-sm text-gray-500">
                      {income.amount}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-left text-xs md:text-sm text-gray-500">
                      {new Date(income.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Add New Income</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="incomeSource"
                >
                  Income Source
                </label>
                <input
                  id="incomeSource"
                  type="text"
                  value={incomeSource}
                  onChange={(e) => setIncomeSource(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter income source"
                  name="source"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="incomeAmount"
                >
                  Income Amount
                </label>
                <input
                  id="incomeAmount"
                  type="number"
                  value={incomeAmount}
                  onChange={(e) => setIncomeAmount(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter income amount"
                  name="amount"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="incomeDate"
                >
                  Income Date
                </label>
                <DatePicker
                  id="incomeDate"
                  selected={incomeDate}
                  onChange={(date) => setIncomeDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className={`bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 focus:outline-none focus:shadow-outline"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

const FilterButton = ({ filter, activeFilter, onClick }) => {
  const isActive = filter === activeFilter;
  return (
    <button
      className={`py-2 px-4 rounded ${
        isActive ? "bg-blue-800 text-white" : "bg-gray-200 text-black"
      }`}
      onClick={() => onClick(filter)}
    >
      {filter}
    </button>
  );
};

export default Income;
