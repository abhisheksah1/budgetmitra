import axios from "axios";
import  { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaCalendarAlt as SlCalender } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useLoginContext } from "../../Context/useContext";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [expensesReason, setExpensesReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("7 Days");
  const [expensesBalance, setExpensesBalance] = useState(0);
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const { currency, allTotalBalance, budgetBalance } = useLoginContext();
  const [budgetsName, setBudgetsName] = useState([]);
  const [totalExpensesAmountByCategory, setTotalExpensesAmountByCategory] =
    useState(0);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (allTotalBalance < expenseAmount) {
      toast.error("Insufficient Balance", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#ff2626", color: "white" },
      });
      setLoading(false);
      return;
    }
    if (
      budgetBalance[expenseCategory] <
      totalExpensesAmountByCategory + Number(expenseAmount)
    ) {
      toast.error("Insufficient balance in budget", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#ff2626", color: "white" },
      });
      setLoading(false);
      return;
    }
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
      fetch7DaysExpences();
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
      const fetchedExpenses = response.data.data;
      const totalExpenses = fetchedExpenses.reduce(
        (acc, expense) => acc + Number(expense.amount),
        0
      );
      setExpensesBalance(totalExpenses);
    } catch (error) {
      console.error(
        "Error fetching expenses:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const fetch7DaysExpences = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/getSevenDays?user=${localStorage.getItem("userId")}`
      );
      const fetchedExpenses = response.data.data;
      setExpenses(fetchedExpenses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetch15DaysExpences = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/getFifteenDays?user=${localStorage.getItem("userId")}`
      );
      const fetchedExpenses = response.data.data;
      setExpenses(fetchedExpenses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetch1MonthExpences = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/getOneMonth?user=${localStorage.getItem("userId")}`
      );
      const fetchedExpenses = response.data.data;
      setExpenses(fetchedExpenses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await axios.get(
        `/api/budget/get?user=${localStorage.getItem("userId")}`
      );
      const fetchedBudgets = response.data.data;
      setBudgetsName(fetchedBudgets);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExpensesByCategory = async () => {
    try {
      await axios
        .get(`/api/expenses/getByCategory?category=${expenseCategory}`)
        .then((response) => {
          const totalExpenses = response.data.data.reduce(
            (acc, expense) => acc + Number(expense.amount),
            0
          );
          setTotalExpensesAmountByCategory(totalExpenses);
        })
        .catch((error) => {
          console.error(
            "Error fetching expenses:",
            error.response ? error.response.data : error.message
          );
        });
    } catch (error) {
      console.error(
        "Error fetching expenses:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchExpensesByCategory();
  }, [expenseCategory]);

  useEffect(() => {
    fetchExpenses();
    fetchBudgets();
    fetch7DaysExpences();
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Implement filter logic here if needed
    if (filter === "15 Days") {
      fetch15DaysExpences();
    } else if (filter === "30 Days") {
      fetch1MonthExpences();
    } else if (filter === "7 Days") {
      fetch7DaysExpences();
    }
  };

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
            onClick={() => {
              if (budgetsName.length === 0) {
                toast.error(
                  "You haven't any budgets yet! Please Set your budgets first."
                );
              } else {
                setIsModalOpen(true);
              }
            }}
            className="bg-blue-100 py-2 flex items-center px-4 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline "
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
                {isAmountVisible ? expensesBalance.toFixed(2) : "XXX.XX"}
              </span>
            </p>
            <h2 className="text-sm text-wrap text-left">Total Expenses</h2>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">
              Add New {""}
              <span className="text-blue-500 font-bold">Expenses</span>{" "}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-control w-full max-w-full  ">
                  <div className="label">
                    <span className="label-text">Expense Type</span>
                  </div>
                  <select
                    className="select select-bordered"
                    id="category"
                    name="category"
                    value={expenseCategory}
                    onChange={(e) => setExpenseCategory(e.target.value)}
                  >
                    <option value="" aria-readonly="true">
                      Select a budget type
                    </option>
                    {budgetsName.map((budget) => (
                      <option key={budget.name} value={budget.name}>
                        {budget.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  Expense Reason
                  <input
                    type="text"
                    id="reason"
                    name="reason"
                    value={expensesReason}
                    onChange={(e) => setExpensesReason(e.target.value)}
                    className="grow"
                    placeholder="Enter expense reason"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  Expense Amount
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    className="grow "
                    placeholder="Enter expense amount"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="input input-bordered flex items-center gap-2"
                >
                  Expense Date
                  <DatePicker
                    id="date"
                    selected={expenseDate}
                    onChange={(date) => setExpenseDate(date)}
                    dateFormat="yyyy-MM-dd"
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
        isActive ? "bg-blue-100 text-blue-500 " : "bg-gray-200 text-black"
      } focus:outline-none focus:shadow-outline mb-2 md:mb-0`}
    >
      {filter}
    </button>
  );
};

export default Expenses;
