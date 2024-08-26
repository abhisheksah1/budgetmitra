import axios from "axios";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../Context/useContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TrendChart() {
  const data = [
    { month: "January", income: 4000, expenses: 2400, budgets: 3 },
    { month: "February", income: 3000, expenses: 1398, budgets: 2 },
    { month: "March", income: 2000, expenses: 9800, budgets: 4 },
    { month: "April", income: 2780, expenses: 3908, budgets: 3 },
    { month: "May", income: 1890, expenses: 4800, budgets: 1 },
    { month: "June", income: 2390, expenses: 3800, budgets: 2 },
    { month: "July", income: 3490, expenses: 4300, budgets: 3 },
  ];
  const { currency } = useLoginContext();
  const [lastMonthTotalIncome, setLastMonthTotalIncome] = useState(0);
  const [lastMonthTotalExpenses, setLastMonthTotalExpenses] = useState(0);

  const handleLastMonthTotalIncome = async () => {
    try {
      // Assuming userId is stored in localStorage
      const response = await axios.get(
        `/api/income/getlastMonthAmount?user=${localStorage.getItem("userId")}`
      );

      setLastMonthTotalIncome(response.data.totalAmount);
    } catch (error) {
      console.error("Error fetching last month's income:", error);
    }
  };

  const handleLastMonthTotalExpenses = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/getLastMonthAmount?user=${localStorage.getItem(
          "userId"
        )}`
      );
      setLastMonthTotalExpenses(response.data.totalAmount);
    } catch (error) {
      console.error("Error getting last month total exoenses", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleLastMonthTotalIncome();
      await handleLastMonthTotalExpenses();
    };
    fetchData();
  }, []);

  return (
    <main className="mt-10 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 lg:flex-[2.7]   lg:h-[35rem] rounded-lg">
          <ResponsiveContainer x width="100%" height={500}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
              <Line type="monotone" dataKey="budgets" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>

          <div>
            <div className="border-2 flex w-fit justify-center rounded-lg border-[#0066cc] mb-5">
              <p className="text-center px-4 py-2 text-[1.5em] font-bold ">
                Recent <span className="text-[#0066cc]">Activity</span>{" "}
              </p>
            </div>
            <div>
              <table
                border={2}
                className="flex lg:py-5 rounded-md shadow-sm border-2 lg:w-fit lg:px-10 gap-20"
              >
                <th>S.N</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Activity</th>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-[1] gap-4">
          <div>
            <span className="text-2xl font-bold">Top Transaction</span>
          </div>

          <div className="relative border-2 shadow-md rounded-lg mt-2 overflow-hidden group h-[11.5rem] sm:h-[12rem] md:h-[13rem] lg:h-[14rem]">
            <div className="flex flex-col items-center gap-5 justify-center h-full p-4">
              <span className="text-lg font-bold">Last Month Incomes</span>
              <span>
                <span className="text-2xl font-bold">
                  {currency}
                  {lastMonthTotalIncome}
                </span>
              </span>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">
                  View more
                </button>
              </div>
            </div>
          </div>

          <div className="relative border-2 shadow-md rounded-lg mt-2 overflow-hidden group h-[11.5rem] sm:h-[12rem] md:h-[13rem] lg:h-[14rem]">
            <div className="flex flex-col items-center gap-5 justify-center h-full p-4">
              <span className="text-lg font-bold">Last Month Expenses</span>
              <span>
                <span className="text-2xl font-bold">
                  {currency}
                  {lastMonthTotalExpenses}
                </span>
              </span>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">
                  View more
                </button>
              </div>
            </div>
          </div>

          <div className="relative border-2 shadow-md rounded-lg mt-2 overflow-hidden group h-[11.5rem] sm:h-[12rem] md:h-[13rem] lg:h-[14rem]">
            <div className="flex flex-col items-center gap-5 justify-center h-full p-4">
              <span className="text-lg font-bold">Last Month Investment</span>
              <span>
                <span className="text-2xl font-bold">$300</span>
              </span>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">
                  View more
                </button>
              </div>
            </div>
          </div>

          <div className="relative border-2 shadow-md rounded-lg mt-2 overflow-hidden group h-[11.5rem] sm:h-[12rem] md:h-[13rem] lg:h-[14rem]">
            <div className="flex flex-col items-center gap-5 justify-center h-full p-4">
              <span className="text-lg font-bold">Last Month Saving</span>
              <span>
                <span className="text-2xl font-bold">$300</span>
              </span>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TrendChart;
