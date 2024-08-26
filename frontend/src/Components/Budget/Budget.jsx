import React, { useEffect, useState } from "react";
import "./style.css";
import Form from "./Form";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoginContext } from "../../Context/useContext";
import EditForm from "./EditForm";
import { confirmAlert } from "react-confirm-alert"; // Import the confirmAlert function
import "react-confirm-alert/src/react-confirm-alert.css"; // Import the CSS for the confirm alert

const Budget = () => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const { currency, setBudgetBalance } = useLoginContext();
  const [itemCounts, setItemCounts] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [totalExpensesAmountByCategory, setTotalExpensesAmountByCategory] =
    useState({});

  useEffect(() => {
    const updatedBudgetBalance = budgets.reduce((acc, budget) => {
      acc[budget.name] = budget.amount;
      return acc;
    }, {});
    setBudgetBalance(updatedBudgetBalance);
  }, [budgets]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/budget/post", {
        user: localStorage.getItem("userId"),
        name: budgetName,
        amount: budgetAmount,
      });

      setIsModalOpen(false);
      setBudgetName("");
      setBudgetAmount("");
      setLoading(false);
      fetchBudgets();
      toast.success("Budget Added Successfully", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
          color: "white",
        },
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await axios.get(
        `/api/budget/get?user=${localStorage.getItem("userId")}`
      );
      const fetchedBudgets = response.data.data;
      setBudgets(fetchedBudgets);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const itemCounts = {};
      for (const budget of budgets) {
        const response = await axios.get(
          `/api/expenses/getByCategoryAndFindLength?category=${budget.name}`
        );
        itemCounts[budget.name] = response.data;
      }
      setItemCounts(itemCounts);
    } catch (error) {
      console.error(
        "Error fetching expenses:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const fetchExpensesByCategory = async () => {
    const itemAmount = {};
    try {
      for (const budget of budgets) {
        await axios
          .get(`/api/expenses/getByCategory?category=${budget.name}`)
          .then((response) => {
            const totalExpenses = response.data.data.reduce(
              (acc, expense) => acc + Number(expense.amount),
              0
            );
            itemAmount[budget.name] = totalExpenses;
          })
          .catch((error) => {
            console.error(
              "Error fetching expenses:",
              error.response ? error.response.data : error.message
            );
          });
      }
      setTotalExpensesAmountByCategory(itemAmount);
    } catch (error) {
      console.error(
        "Error fetching expenses:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  useEffect(() => {
    if (budgets.length > 0) {
      fetchExpenses();
      fetchExpensesByCategory();
    }
  }, [budgets]);

  const handleCancel = () => {
    setIsModalOpen(false);
    setBudgetName("");
    setBudgetAmount("");
    setLoading(false);
  };

  const handleEdit = (id) => {
    setIsEditModalOpen(true);
    setId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/budget/delete/${id}`);
      // Update the state to remove the deleted budget
      setBudgets(budgets.filter((budget) => budget._id !== id));
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
    <main className="p-4 min-h-screen">
      <div className="mt-12 md:mt-16">
        <div>
          <p className="text-xl md:text-2xl font-bold">My Budgets</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          <button
            className="grid place-content-center border-2 px-4 py-8 rounded-lg shadow-md hover:scale-105 duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="text-4xl font-bold md:text-4xl text-[#333]">
              +
            </span>
            <span className="md:text-base text-[#333] font-bold text-xl">
              Create new Budget
            </span>
          </button>
          {budgets.map((budget) => (
            <div
              className="relative border-2 h-48 px-4 py-6 text-[#333] shadow-md hover:scale-105 duration-300 rounded-lg flex flex-col gap-4 md:gap-8 group"
              key={budget._id}
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(budget._id)}
                    className="border-2 px-2 rounded-lg border-blue-500 text-xs hover:bg-blue-500 hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(budget._id)}
                    className="border-2 px-2 rounded-lg border-red-500 text-xs hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  {/* Buttons now appear on hover */}
                </div>
                <div className="flex justify-between">
                  <h2 className="text-lg md:text-xl font-bold text-[#333]">
                    {budget.name}
                  </h2>
                  <h2 className="text-lg md:text-xl text-blue-500 font-bold">
                    {currency}
                    {budget.amount}
                  </h2>
                </div>
                <span className="text-[#575656] text-xs md:text-sm">
                  {itemCounts[budget.name] || 0} item
                </span>
              </div>
              <div className="">
                <span className="flex justify-between">
                  <span className="text-[#575656] text-xs md:text-sm">
                    {currency}
                    {totalExpensesAmountByCategory[budget.name] || 0} spend
                  </span>
                  <span className="text-[#575656] text-xs md:text-sm">
                    {currency}
                    {Number(budget.amount) -
                      Number(totalExpensesAmountByCategory[budget.name])}{" "}
                    Remaining
                  </span>
                </span>
                <progress
                  value={totalExpensesAmountByCategory[budget.name]}
                  max={budget.amount}
                  className="progress w-full mt-2"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form
        loading={loading}
        setBudgetAmount={setBudgetAmount}
        setBudgetName={setBudgetName}
        isModalOpen={isModalOpen}
        budgetAmount={budgetAmount}
        budgetName={budgetName}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
      <EditForm
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        id={id}
      />
    </main>
  );
};

export default Budget;
