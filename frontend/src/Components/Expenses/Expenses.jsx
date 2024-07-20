import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaCalendarAlt as SlCalender } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [expensesReason, setExpensesReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("7 Days");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Implement filter logic here if needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/expenses/post", {
        user: localStorage.getItem("userId"),
        category: expenseCategory,
        amount: expenseAmount,
        date: expenseDate,
        reason: expensesReason,
      });
      toast.success("Expenses Added Successfully", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#1e40af", color: "white" },
      });
      resetForm();
      setLoading(false);
      setIsModalOpen(false);
      fetchExpenses();
    } catch (error) {
      console.error(
        "Error adding expenses:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to add expenses", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#ff2626", color: "white" },
      });
      setLoading(false);
    }
  };

  const resetForm = () => {
    setExpenseCategory("");
    setExpenseAmount("");
    setExpenseDate(new Date());
    setExpensesReason("");
  };

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/get?user=${localStorage.getItem("userId")}`
      );
      setExpenses(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching expenses:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <motion.section
          className="text-center flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Expenses</h1>
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
            data-tooltip-content="Add New Expense"
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
            <h2 className="text-2xl font-bold mb-4">Add New Expense</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expense Type
                </label>
                <select
                  id="category"
                  name="category"
                  value={expenseCategory}
                  onChange={(e) => setExpenseCategory(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select an expense type</option>
                  <option value="Variable Expenses">Variable Expenses</option>
                  <option value="Fixed Expenses">Fixed Expenses</option>
                  <option value="Utility Expenses">Utility Expenses</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expense Reason
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={expensesReason}
                  onChange={(e) => setExpensesReason(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter expense reason"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expense Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter expense amount"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expense Date
                </label>
                <DatePicker
                  id="date"
                  selected={expenseDate}
                  onChange={(date) => setExpenseDate(date)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? "Adding..." : "Add Expense"}
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
          {expenses.length === 0 ? (
            <p className="text-center text-gray-600">No expenses to show.</p>
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
                    Date
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense) => (
                  <tr key={expense._id}>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      {expense.category}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      {expense.amount}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      {new Date(expense.date).toLocaleDateString()}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      {expense.reason}
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

export default Expenses;
