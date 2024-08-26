import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export function useLoginContext() {
  return useContext(LoginContext);
}

const LoginContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currency, setCurrency] = useState("");
  const [allTotalBalance, setAllTotalBalance] = useState(() => {
    const savedBalance = localStorage.getItem("allTotalBalance");
    return savedBalance !== null ? JSON.parse(savedBalance) : 0;
  });
  const [budgetBalance, setBudgetBalance] = useState(() => {
    const savedBalance = localStorage.getItem("budgetBalance");
    return savedBalance !== null ? JSON.parse(savedBalance) : {};
  });

  useEffect(() => {
    localStorage.setItem("allTotalBalance", JSON.stringify(allTotalBalance));
    localStorage.setItem("budgetBalance", JSON.stringify(budgetBalance));
  }, [allTotalBalance, budgetBalance]);

  const handleCurrencyChange = async () => {
    await axios
      .get(`/api/task/get?user=${localStorage.getItem("userId")}`)
      .then((response) => {
        setCurrency(response.data.data.country);
      })
      .catch((error) => {
        console.error("Error fetching currency:", error);
      });
  };
  useEffect(() => {
    handleCurrencyChange();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        showLogin,
        setShowLogin,
        showRegister,
        setShowRegister,
        showContact,
        setShowContact,
        showLogout,
        setShowLogout,
        showReset,
        setShowReset,
        showFeedback,
        setShowFeedback,
        currency,
        allTotalBalance,
        setAllTotalBalance,
        budgetBalance,
        setBudgetBalance,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
