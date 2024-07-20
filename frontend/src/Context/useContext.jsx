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
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
