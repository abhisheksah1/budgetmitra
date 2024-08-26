import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function BarChart() {
  const [data, setData] = useState({ income: 0, expenses: 0 });
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  const fetchData = async () => {
    if (!userId) {
      console.error("User ID not found");
      setLoading(false);
      return;
    }

    try {
      const incomeResponse = await axios.get(`/api/income/get?user=${userId}`);
      const expensesResponse = await axios.get(
        `/api/expenses/get?user=${userId}`
      );

      const fetchedIncomes = incomeResponse.data.data || [];
      const totalIncome = fetchedIncomes.reduce(
        (acc, income) => acc + Number(income.amount),
        0
      );

      const fetchedExpenses = expensesResponse.data.data || [];
      const totalExpenses = fetchedExpenses.reduce(
        (acc, expense) => acc + Number(expense.amount),
        0
      );

      setData({
        income: totalIncome,
        expenses: totalExpenses,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  

  const options = {
    chart: {
      id: "basic-bar",
      animations: {
        enabled: true,
        easing: "easeinout", // Change easing as needed
        dynamicAnimation: {
          enabled: true,
          speed: 1000, // Animation speed in milliseconds
        },
      },
    },
    xaxis: {
      categories: ["", ""],
      
      
    },
    plotOptions: {
      bar: {
        horizontal: false, // Change to `false` for vertical bars
        columnWidth: "50%",
      },
    },
    // Green for Income, Red for Expenses
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => `$${value}`, // Format tooltip values
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderColor: "#e0e0e0", // Grid line color
      strokeDashArray: 1, // Grid line dash style
    },
    colors: ["#28a745", "#dc3545"],
  };

  const series = [
    {
      name: "Income",
      data: [ data.income , ''],
      color: "#28a745", // Green color for income
    },
    {
      name: "Expenses",
      data: ['',data.expenses],
      color: "#dc3545", // Red color for expenses
    },
  ];

  return (
    <div className="container " style={{ width: "100%", height: "100%" }}>
      <div>
        <Chart
          type="bar"
          width="100%" // Make the chart responsive
          height="400" // Adjust height as needed
          series={series}
          options={options}
        />
      </div>
    </div>
  );
}

export default BarChart;
