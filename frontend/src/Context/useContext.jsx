import { createContext, useContext, useState } from "react";

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
  const [showTasks, setShowTasks] = useState(false);

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
        showTasks,
        setShowTasks,
      }}
    >
      
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
