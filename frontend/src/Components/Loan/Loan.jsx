import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaCalendarAlt as SlCalender } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";

const LoanComponent = () => {
  const [loans, setLoans] = useState([]);

  const [loanCategory, setLoanCategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDate, setLoanDate] = useState(new Date());
  const [loanProvider, setLoanProvider] = useState("");
  const [loanPercent, setLoanPercent] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("7 Days");
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Submitting the loan data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/loan/post", {
        user: localStorage.getItem("userId"),
        category: loanCategory,
        amount: loanAmount,
        date: loanDate,
        loanProvider: loanProvider,
        interestRate: loanPercent,
      });
      toast.success("Loan Added Successfully", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#1e40af", color: "white" },
      });
      resetForm();
      setIsModalOpen(false);
      fetchLoan();
      setLoading(false);
    } catch (error) {
      console.error(
        "Error adding loan:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to add loan", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#ff2626", color: "white" },
      });
      setLoading(false);
    }
  };

  //for motion framer
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  //reset or clear all the input field while click on cancle
  const resetForm = () => {
    setLoanCategory("");
    setLoanAmount("");
    setLoanDate(new Date());
    setLoanProvider("");
    setLoanPercent("");
  };

  //cancel functionality
  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
  };

  //filtered functionality
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Implement filter logic here if needed
  };

  //state to render in real-time
  useEffect(() => {
    fetchLoan();
  }, []);

  //fetch load data from the backend and show in the frontend
  const fetchLoan = async () => {
    try {
      const response = await axios.get(
        `/api/loan/get?user=${localStorage.getItem("userId")}`
      );
      setLoans(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching loan:",
        error.response ? error.response.data : error.message
      );
    }
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
          <h1 className="text-3xl font-bold">Loans</h1>
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
            className="bg-blue-800 text-white py-2 flex items-center px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline "
            data-tooltip-id="add-expense-tooltip"
            data-tooltip-content="Add New Loans"
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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Add New Loan</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Type
                </label>
                <select
                  id="category"
                  name="category"
                  value={loanCategory}
                  onChange={(e) => setLoanCategory(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select a loan type</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Education Loan">Education Loan</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="loanProvider"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Provider
                </label>
                <input
                  type="text"
                  id="loanProvider"
                  name="loanProvider"
                  value={loanProvider}
                  onChange={(e) => setLoanProvider(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Loan Provider"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter loan amount"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Date
                </label>
                <DatePicker
                  id="date"
                  selected={loanDate}
                  onChange={(date) => setLoanDate(date)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name="date"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="loanPercent"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interest Rate (%) per year
                </label>
                <input
                  type="number"
                  id="loanPercent"
                  name="interestRate"
                  value={loanPercent}
                  onChange={(e) => setLoanPercent(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter interest rate"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 focus:outline-none focus:shadow-outline"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
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
          {loans.length === 0 ? (
            <p className="text-center text-gray-600">No Loans to show.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 md:px-6 py-3  text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Loan Type
                  </th>
                  <th className="px-3 md:px-6 py-3  text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Loan Access(from Whome)
                  </th>
                  <th className="px-3 md:px-6 py-3  text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 md:px-6 py-3  text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 md:px-6 py-3  text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Interest Rate (%) per year
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loans.map((loan) => (
                  <tr key={loan._id}>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center text-xs md:text-sm font-medium text-gray-900">
                      {loan.category}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center text-xs md:text-sm text-gray-500">
                      {loan.loanProvider}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center text-xs md:text-sm text-gray-500">
                      {loan.amount}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center text-xs md:text-sm text-gray-500">
                      {new Date(loan.date).toLocaleDateString()}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center text-xs md:text-sm text-gray-500">
                      {loan.interestRate}
                    </td>
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
        isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
      } focus:outline-none focus:shadow-outline mb-2 md:mb-0`}
    >
      {filter}
    </button>
  );
};

export default LoanComponent;
