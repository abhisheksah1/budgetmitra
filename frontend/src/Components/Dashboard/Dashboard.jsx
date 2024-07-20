import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWallet } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { MdSource } from "react-icons/md";
import { motion } from "framer-motion";
import AnimatedSection from "../../Page/AbimatedSection/AnimatedSection";
import { useLoginContext } from "../../Context/useContext";

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const { currency } = useLoginContext();

  const handleTotalIncome = async () => {
    try {
      const response = await axios.get(
        `/api/income/get?user=${localStorage.getItem("userId")}`
      );
      const total = response.data.data.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      setTotalIncome(total);
    } catch (error) {
      console.error("Error fetching total income:", error);
    }
  };

  const handleTotalExpenses = async () => {
    try {
      const response = await axios.get(
        `/api/expenses/get?user=${localStorage.getItem("userId")}`
      );
      const total = response.data.data.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      setTotalExpenses(total);
    } catch (error) {
      console.error("Error fetching total expenses:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleTotalIncome();
      await handleTotalExpenses();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTotalBalance(totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses]);

  useEffect(() => {
    if (totalExpenses > totalBalance) {
      setAlertMessage("Your saving amount is less than expenses amount");
    } else {
      setAlertMessage("");
    }
  }, [totalBalance, totalExpenses]);

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <AnimatedSection>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold gap-2 items-center flex mb-2">
                {" "}
                <FaWallet /> Main Balance
              </h2>
              <p className="text-2xl">
                {currency} {totalBalance}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold flex gap-2 items-center mb-2">
                {" "}
                <MdSource />
                Income
              </h2>
              <p className="text-2xl">
                {currency} {totalIncome}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold flex items-center  gap-2 mb-2">
                <GiExpense className="text-red-600" /> Expenses
              </h2>
              <p className="text-2xl">
                {currency} {totalExpenses}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold flex gap-2 items-center mb-2">
                {" "}
                <MdSavings /> Savings
              </h2>
              <p className="text-2xl">
                {currency} {totalIncome - totalExpenses}
              </p>
            </motion.div>
          </div>
          {alertMessage && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative transition duration-300 ease-in-out">
              {alertMessage}
            </div>
          )}
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Dashboard;
