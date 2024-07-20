import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CurrencySelector = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isCurrencyPopup, setIsCurrencyPopup] = useState(false);
  const [country, setCountry] = useState("");
  const [whereDidYouFindUs, setWhereDidYouFindUs] = useState("");
  const [otherSource, setOtherSource] = useState("");
  const [usedOtherPersonalFinanceManager, setUsedOtherPersonalFinanceManager] =
    useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const currencyList = data.map((country) => ({
          name: country.name.common,
          symbol: country.currencies
            ? Object.values(country.currencies)[0].symbol
            : "N/A",
        }));
        setCurrencies(currencyList);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        toast.error("Failed to fetch currencies. Please try again later.");
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchCurrencyPopupState = async () => {
      const userId = localStorage.getItem("userId");
      if (userId != null) {
        try {
          const response = await axios.get(
            `/api/currencyPopup/get?user=${userId}`
          );
          setIsCurrencyPopup(response.data.isCurrencyPopup);
        } catch (error) {
          console.error("Error fetching currency popup state:", error);
          toast.error("Failed to fetch popup state. Please try again later.");
        }
      }
    };

    fetchCurrencyPopupState();

    const handleCurrencyPopupUpdate = () => {
      fetchCurrencyPopupState();
    };

    window.addEventListener("currencyPopupUpdated", handleCurrencyPopupUpdate);

    return () => {
      window.removeEventListener(
        "currencyPopupUpdated",
        handleCurrencyPopupUpdate
      );
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!whereDidYouFindUs) {
      toast.error("Please select where you found us.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      const currencyPopupId = localStorage.getItem("currencyPopupId");

      if (!userId) {
        toast.error("User ID is missing.");
        return;
      }

      if (!currencyPopupId) {
        toast.error("Currency popup ID is missing.");
        return;
      }

      // Submit the form data
      await axios.post("/api/task/post", {
        country,
        whereDidYouFindUs:
          whereDidYouFindUs === "Other" ? otherSource : whereDidYouFindUs,
        usedOtherPersonalFinanceManager,
        user: userId,
      });

      toast.success("Form submitted successfully!", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
          color: "white",
        },
      });

      // Update the currency popup state to false
      await axios.put(`/api/currencyPopup/put/${currencyPopupId}`, {
        isCurrencyPopup: false,
      });

      setIsCurrencyPopup(false); // Close the popup
      localStorage.removeItem("currencyPopupId");

      // Reset form fields
      setCountry("");
      setWhereDidYouFindUs("");
      setOtherSource("");
      setUsedOtherPersonalFinanceManager(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="relative z-50">
      {isCurrencyPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl animate-slideDown"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-bold mb-4">
              Currency Selector & Feedback
            </h2>
            <label className="flex flex-col mb-4">
              <span className="font-semibold mb-2">Select a Currency:</span>
              <select
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                name="country"
              >
                <option value="">Select Currency</option>
                {currencies.map((currency) => (
                  <option key={currency.name} value={currency.symbol}>
                    {currency.name} ({currency.symbol})
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col mb-4">
              <span className="font-semibold mb-2">Where Did You Find Us?</span>
              <select
                name="whereDidYouFindUs"
                value={whereDidYouFindUs}
                onChange={(e) => setWhereDidYouFindUs(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">Select Option</option>
                <option value="Social Media">Social Media</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Referral">Referral</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {whereDidYouFindUs === "Other" && (
              <label className="flex flex-col mb-4">
                <span className="font-semibold mb-2">Please Specify:</span>
                <input
                  type="text"
                  name="otherSource"
                  value={otherSource}
                  onChange={(e) => setOtherSource(e.target.value)}
                  className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter details"
                />
              </label>
            )}

            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                name="usedOtherPersonalFinanceManager"
                checked={usedOtherPersonalFinanceManager}
                onChange={(e) =>
                  setUsedOtherPersonalFinanceManager(e.target.checked)
                }
                className="mr-2"
              />
              <span className="font-semibold">
                Used another personal finance manager?
              </span>
            </label>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
