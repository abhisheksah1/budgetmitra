import React from "react";

const Report = () => {
  // Placeholder data for demonstration
  const expensesData = [
    { category: "Food", amount: 500 },
    { category: "Rent", amount: 1200 },
    { category: "Utilities", amount: 300 },
    { category: "Entertainment", amount: 200 },
  ];

  const incomeData = [
    { category: "Salary", amount: 2500 },
    { category: "Freelance", amount: 800 },
  ];

  const savingsGoal = 5000;
  const savingsProgress = 3000;

  const expenseCategories = ["Food", "Rent", "Utilities", "Entertainment"];
  const expenseAmounts = [500, 1200, 300, 200];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Report and Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expenses */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Expenses Summary</h2>
          <ul className="divide-y divide-gray-200">
            {expensesData.map((expense, index) => (
              <li
                key={index}
                className="py-2 flex justify-between items-center"
              >
                <span>{expense.category}</span>
                <span className="font-semibold">${expense.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Income */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Income Summary</h2>
          <ul className="divide-y divide-gray-200">
            {incomeData.map((income, index) => (
              <li
                key={index}
                className="py-2 flex justify-between items-center"
              >
                <span>{income.category}</span>
                <span className="font-semibold">${income.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Savings */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Savings Progress</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="mb-2">Goal: ${savingsGoal}</p>
              <p className="mb-2">Progress: ${savingsProgress}</p>
              <div className="bg-blue-200 h-4 rounded-full">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: `${(savingsProgress / savingsGoal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Analysis</h1>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Expense Analysis</h2>
          <div className="flex justify-center">
            {/* Placeholder for chart or detailed breakdown */}
            <div className="w-full max-w-md">
              <ul className="divide-y divide-gray-200">
                {expenseCategories.map((category, index) => (
                  <li
                    key={index}
                    className="py-2 flex justify-between items-center"
                  >
                    <span>{category}</span>
                    <span className="font-semibold">
                      ${expenseAmounts[index]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
