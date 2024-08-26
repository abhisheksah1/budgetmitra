import  { useEffect, useState } from "react";
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
import EditForm from "./EditForm";
import { confirmAlert } from "react-confirm-alert";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [id, setId] = useState("");
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
      fetch7DaysIncome();
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
      const totalIncome = fetchedIncomes.reduce(
        (acc, income) => acc + Number(income.amount),
        0
      );
      setIncomeBalance(totalIncome);
    } catch (error) {
      console.error(error);
    }
  };

  const fetch7DaysIncome = async () => {
    try {
      const response = await axios.get(
        `/api/income/getSevenDays?user=${localStorage.getItem("userId")}`
      );
      const fetchedIncomes = response.data.data;
      setIncomes(fetchedIncomes);
    } catch (error) {
      console.error(error);
    }
  };
  const fetch15DaysIncome = async () => {
    try {
      const response = await axios.get(
        `/api/income/getFifteenDays?user=${localStorage.getItem("userId")}`
      );
      const fetchedIncomes = response.data.data;
      setIncomes(fetchedIncomes);
    } catch (error) {
      console.error(error);
    }
  };
  const fetch1MonthIncome = async () => {
    try {
      const response = await axios.get(
        `/api/income/getOneMonth?user=${localStorage.getItem("userId")}`
      );
      const fetchedIncomes = response.data.data;
      setIncomes(fetchedIncomes);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (id) => {
    setIsEditModalOpen(true);
    setId(id);
  };

  useEffect(() => {
    fetchIncomes();
    fetch7DaysIncome();
  }, []);

  //for motion framer
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [activeFilter, setActiveFilter] = useState("7 Days");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "15 Days") {
      fetch15DaysIncome();
    } else if (filter === "30 Days") {
      fetch1MonthIncome();
    } else if (filter === "7 Days") {
      fetch7DaysIncome();
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/income/delete/${id}`);
      // Update the state to remove the deleted budget
      setIncomes(incomes.filter((income) => income._id !== id));
      toast.success("Budget deleted successfully", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
          color: "white",
        },
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#ff2626",
          color: "white",
        },
      });
      console.error("Error deleting budget:", error.message);
    }
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this budget?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(id),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
      overlayClassName: "confirm-overlay",
    });
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen mt-12">
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
            className="bg-blue-100 text-[#333] py-2 flex items-center px-4 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline"
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
          <button className="py-2 px-4 rounded bg-gray-200 text-[#333]">
            <SlCalender />
          </button>
        </div>
      </motion.section>
      {/* 
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
                  <th className="px-3 md:px-6 py-3 text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider text-left">
                    Source
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
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
                      {new Date(income.date).toLocaleDateString()}{" "}
                      {new Date(income.date).toLocaleTimeString()}
                    </td>
                    <td className="px-3 md:px-6 py-4 whitespace-nowrap text-left text-xs md:text-sm">
                      <button className="text-blue-500 hover:text-blue-700 mr-4">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.section> */}
      <motion.div
        className="text-center flex-col mb-4 md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {incomes.length === 0 ? (
          <p className="text-center text-gray-600">No income to show.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            {incomes.map((income) => (
              <div
                className="relative border-2 border-gray-200 h-38 px-4 py-6  text-[#333] shadow-md hover:scale-105 duration-300 rounded-lg flex flex-col justify-between group"
                key={income._id}
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(income._id)}
                      className="border-2 px-2 py-1 rounded-lg border-blue-500 text-xs hover:bg-blue-500 hover:text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(income._id)}
                      className="border-2 px-2 py-1 rounded-lg border-red-500 text-xs hover:bg-red-500 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between items-center  mb-2">
                    <h2 className="text-lg md:text-xl text-wrap  font-bold text-[#333]">
                      {income.source}
                    </h2>
                    <h2 className="text-lg md:text-xl text-blue-500 font-bold">
                      {currency}
                      {income.amount}
                    </h2>
                  </div>
                </div>
                <div className="">
                  <span className="flex justify-between text-[#575656] text-xs md:text-sm">
                    <span>{new Date(income.date).toLocaleTimeString()}</span>
                    <span>{new Date(income.date).toLocaleDateString()}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">
              Add New <span className="text-blue-500 font-bold">Income</span>{" "}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  Source
                  <input
                    id="incomeSource"
                    type="text"
                    value={incomeSource}
                    onChange={(e) => setIncomeSource(e.target.value)}
                    className="grow"
                    placeholder="Enter income source"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  Amount
                  <input
                    id="incomeAmount"
                    type="number"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                    className="grow"
                    placeholder="Enter income amount"
                    name="amount"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="incomeDate"
                  className="input input-bordered flex items-center gap-2"
                >
                  Date
                  <DatePicker
                    id="incomeDate"
                    selected={incomeDate}
                    onChange={(date) => setIncomeDate(date)}
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

      <EditForm
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        id={id}
      />
    </main>
  );
};

const FilterButton = ({ filter, activeFilter, onClick}) => {
  const isActive = filter === activeFilter;
  return (
    <button
      className={`py-2 px-4 rounded ${
        isActive ? "bg-blue-100 text-blue-500" : "bg-gray-200 text-[#333]"
      }`}
      onClick={() => onClick(filter)}
    >
      {filter}
    </button>
  );
};

export default Income;
