import { useEffect, useState } from "react";
import axios from "axios";
import { FaWallet } from "react-icons/fa";

import { useLoginContext } from "../../Context/useContext";
import { Bitcoin, NotepadTextDashed, TrendingDown } from "lucide-react";
import TrendChart from "./TrendChart";

import "./dashboard.style.css";

const Dashboard = () => {
  const { currency, setAllTotalBalance } = useLoginContext();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalBudgetAmount, setTotalBudgetAmount] = useState(0);
  const [totalBudget, setTotalBudget] = useState([]);
  const [totalLoan, setTotalLoan] = useState(0);
  

  const handleTotalIncome = async () => {
    try {
      const response = await axios.get(
        `/api/income/getCurrentMonthAmount?user=${localStorage.getItem("userId")}`
      );
      
      setTotalIncome(response.data.totalAmount);
    } catch (error) {
      console.error("Error fetching total income:", error);
    }
  };

  const handleTotalExpenses = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/getCurrentMonthAmount?user=${localStorage.getItem("userId")}`
      );
      
      setTotalExpenses(response.data.totalAmount);
    } catch (error) {
      console.error("Error fetching total expenses:", error);
    }
  };

  const handleTotalBudget = async () => {
    try {
      const response = await axios.get(
        `/api/budget/getTotal?user=${localStorage.getItem("userId")}`
      );
      const total = response.data.totalAmount;
      setTotalBudgetAmount(total);
    } catch (error) {
      console.error("Error fetching total Budget:", error);
    }
  };
  const handleNoBudget = async () => {
    try {
      const response = await axios.get(
        `/api/budget/get?user=${localStorage.getItem("userId")}`
      );
      const total = response.data.data;
      setTotalBudget(total);
    } catch (error) {
      console.error("Error fetching total Budget:", error);
    }
  };

  const handleTotalLoan = async () => {
    try {
      const response = await axios.get(
        `/api/loan/get?user=${localStorage.getItem("userId")}`
      );
      const total = response.data.data.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      setTotalLoan(total);
    } catch (error) {
      console.error("Error fetching total loan:", error);
    }
  };
 

  useEffect(() => {
    const fetchData = async () => {
      await handleTotalIncome();
      await handleTotalExpenses();
      await handleTotalBudget();
      await handleNoBudget();
      await handleTotalLoan();
      
    };
    fetchData();
  }, []);

  useEffect(() => {
    const balance = totalIncome - totalExpenses;
    console.log("Setting total balance:", balance); // Debug log
    setTotalBalance(balance);
    setAllTotalBalance(balance);
  }, [totalIncome, totalExpenses]);

  return (
    <main className="mt-10 h-screen">
      <div className="container grid grid-col  gap-3 mx-auto">
        <span className="dashboard-title font-bold  px-2 py-1 border-blue-500 rounded-lg mx-auto  border-2">
          Dash<span className="text-blue-500">board</span>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" p-4 rounded-2xl cursor-pointer  flex justify-around items-center border-2 transition duration-300 ease-in-out transform hover:scale-105 ">
            <span className=" flex flex-col ">
              {" "}
              <p className="text-[1.2em] mb-[10px]"> Main Balance</p>
              <p className="text-[1.5em] font-bold">
                {currency} {totalBalance}
              </p>
            </span>

            <span className="text-2xl border-2 p-3 rounded-full bg-blue-500">
              <FaWallet className=" text-white" />
            </span>
          </div>

          <div className=" p-4 rounded-2xl cursor-pointer  flex justify-around items-center border-2 transition duration-300 ease-in-out transform hover:scale-105 ">
            <span className=" flex flex-col ">
              {" "}
              <p className="text-[1.2em] mb-[10px]">Expenses</p>
              <p className="text-[1.5em] font-bold">
                {currency} {totalExpenses}
              </p>
            </span>

            <span className="border-2 p-3 rounded-full bg-blue-500">
              <TrendingDown size={28} className=" text-white" />
            </span>
          </div>
          <div className=" p-4 rounded-2xl cursor-pointer flex justify-around items-center border-2 transition duration-300 ease-in-out transform hover:scale-105 ">
            <span className=" flex flex-col ">
              {" "}
              <p className="text-[1.2em] mb-[10px]">Total Budget</p>
              <p className="text-[1.5em] font-bold">
                {currency} {totalBudgetAmount}
              </p>
            </span>

            <span className="border-2 p-3 rounded-full bg-blue-500">
              <Bitcoin size={28} className=" text-white" />
            </span>
          </div>
          <div className=" p-4 rounded-2xl cursor-pointer flex justify-around items-center border-2 transition duration-300 ease-in-out transform hover:scale-105 ">
            <span className=" flex flex-col ">
              {" "}
              <p className="text-[1.2em] mb-[10px]">No. of Budget</p>
              <p className="text-[1.5em] font-bold">{totalBudget.length}</p>
            </span>

            <span className="border-2 p-3 rounded-full bg-blue-500">
              <NotepadTextDashed size={28} className=" text-white" />
            </span>
          </div>
          <div className=" p-4 rounded-2xl cursor-pointer flex justify-around items-center border-2 transition duration-300 ease-in-out transform hover:scale-105 ">
            <span className=" flex flex-col ">
              {" "}
              <p className="text-[1.2em] mb-[10px]">Loan</p>
              <p className="text-[1.5em] font-bold">
                {currency}
                {totalLoan}
              </p>
            </span>

            <span className="border-2 p-3 rounded-full bg-blue-500">
              <NotepadTextDashed size={28} className=" text-white" />
            </span>
          </div>
        </div>
      </div>
      <TrendChart />
    </main>
  );
};

export default Dashboard;
