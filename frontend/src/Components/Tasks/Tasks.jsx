import React, { useEffect, useState } from "react";
import { useLoginContext } from "../../Context/useContext";

const CurrencySelector = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const { showTasks } = useLoginContext();
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
      }
    };

    fetchCurrencies();
  }, []);

  const handleSelect = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  return (
    <div className="relative z-50">
      {showTasks && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75 ">
          <form
            className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-xl animate-slideDown`}
            onSubmit={handleSubmit}
          >

            {
              <label className="flex justify-between gap-4 pt-10">
                <div>
                  <span>Select a Currency:</span>
                </div>
                <div>
                  <select
                    className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={selectedCurrency}
                    onChange={handleSelect}
                  >
                    <option value="">Select Currency</option>
                    {currencies.map((currency) => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name} ({currency.symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            }
          </form>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
