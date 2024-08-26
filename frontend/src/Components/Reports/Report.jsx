import React, { useState } from "react";
import BarBhart from "./Chart/BarChart";
import TrendChart from "./Chart/TrendChart";

const Report = () => {
  const [active, setActive] = useState("trendChart");

  return (
    <div className="p-4 bg-white px-5 border rounded-lg mt-14">
      <div className="flex justify-center  mb-4">
        <div className="flex items-center ">
          <div
            className={`flex flex-col text-center items-center cursor-pointer px-4 py-2 rounded-l-lg border transition-colors duration-300 ease-linear ${
              active === "trendChart"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActive("trendChart")}
          >
            <h3 className="font-bold">Trend Chart</h3>
          </div>

          <div
            className={`flex flex-col items-center text-center cursor-pointer px-4 py-2 rounded-r-lg border transition-colors duration-300 ease-linear ${
              active === "incomeExpenses"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActive("incomeExpenses")}
          >
            <h3 className="font-bold">Income vs Expenses</h3>
          </div>
        </div>
      </div>

      {/* Conditional Rendering */}
      {active === "trendChart" && <TrendChart />}
      {active === "incomeExpenses" && <BarBhart />}
    </div>
  );
};

export default Report;
