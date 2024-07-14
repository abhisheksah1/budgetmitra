import React, { useState } from "react";

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [budgetCategory, setBudgetCategory] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const handleAddBudget = () => {
    const newBudget = {
      category: budgetCategory,
      amount: budgetAmount,
    };
    setBudgets([...budgets, newBudget]);
    setBudgetCategory("");
    setBudgetAmount("");
  };

  const handleDeleteBudget = (index) => {
    const updatedBudgets = [...budgets];
    updatedBudgets.splice(index, 1);
    setBudgets(updatedBudgets);
  };

  return (
    <div>
      <main className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Budget</h1>
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">Set Budget Goals</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="budgetCategory"
            >
              Budget Category
            </label>
            <input
              id="budgetCategory"
              type="text"
              value={budgetCategory}
              onChange={(e) => setBudgetCategory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter budget category"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="budgetAmount"
            >
              Budget Amount
            </label>
            <input
              id="budgetAmount"
              type="number"
              value={budgetAmount}
              onChange={(e) => setBudgetAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter budget amount"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleAddBudget}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Add Budget
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Budget Goals</h2>
          <ul className="divide-y divide-gray-200">
            {budgets.map((budget, index) => (
              <li key={index} className="py-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold">{budget.category}</span>: $
                    {budget.amount}
                  </div>
                  <button
                    onClick={() => handleDeleteBudget(index)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Budget;
