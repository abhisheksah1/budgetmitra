import  { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Page/Home/Home";

import Dashboard from "./Components/Dashboard/Dashboard";
import Expenses from "./Components/Expenses/Expenses";
import Income from "./Components/Income/Income";
import Budget from "./Components/Budget/Budget";
import Report from "./Components/Reports/Report";
import Setting from "./Components/Setting/Setting";
import Getstarted from "./Page/GetStarted/Getstarted";
import Signin from "../src/Page/Login/Signin";
import Signup from "../src/Page/Signup/Signup";
import Logout from "./Page/Logout/Logout";
import { Toaster } from "react-hot-toast";
import Aboutus from "./Page/About/AboutUs";
import Spinner from "./Components/spinner/Spinner";
import InvestmentBeginner from "./Page/Blog/InvestmentBeginner";
import Tasks from "./Components/Tasks/Tasks";
import Loan from "./Components/Loan/Loan";
import Investment from "./Components/Investment/Investment";
import FeedbackForm from "./Page/LandingPage/feedBackForm/FeedbackFrom";
import UpgradePlan from "./Components/Upgrade/UpgradePlan";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    // Simulating a delay of 2 seconds to demonstrate loading state
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 2 seconds
    }, 2000);

    return () => clearTimeout(loadingTimer); // Cleanup timer on unmount
  }, [history]); // Run whenever location changes

  return (
    <div className="app">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Toaster />
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route
              path="/investmentBeginner"
              element={<InvestmentBeginner />}
            />

            <Route path="/getStarted/" element={<Getstarted />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="income" element={<Income />} />
              <Route path="loan" element={<Loan />} />
              <Route path="investment" element={<Investment />} />
              <Route path="budget" element={<Budget />} />
              <Route path="report" element={<Report />} />
              <Route path="setting" element={<Setting />} />
              <Route path="upgrade" element={<UpgradePlan />} />
            </Route>
          </Routes>

          <Signin />
          <Signup />
          <Logout />
          <Tasks />
          <FeedbackForm />
        </>
      )}
    </div>
  );
}

export default App;
