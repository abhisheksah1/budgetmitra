import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function EditForm({ isEditModalOpen, setIsEditModalOpen, id }) {
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Update budget here
    try {
      await axios.put(`/api/income/update/${id}`, {
        source: incomeSource,
        newAmount: Number(incomeAmount),
      });
      setLoading(false);
      toast.success("Income updated successfully", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
          color: "white",
        },
      });

      setIncomeSource("");
      setIncomeAmount("");
      setIsEditModalOpen(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Error updating income:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
    setIncomeSource("");
    setIncomeAmount("");
  };

  return (
    isEditModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-6">
          <h2 className="text-2xl font-bold mb-4">
            Edit <span className="text-blue-500 font-sans">Budget</span>{" "}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Source
                <input
                  id="incomeSource"
                  type="text"
                  value={incomeSource}
                  onChange={(e) => setIncomeSource(e.target.value)}
                  className="grow"
                  placeholder="Enter New Budget Name"
                  name="source"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Amount
                <input
                  id="incomeAmount"
                  type="number"
                  value={incomeAmount}
                  onChange={(e) => setIncomeAmount(e.target.value)}
                  className="grow"
                  placeholder="Enter New Budget amount"
                  name="amount"
                />
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="border-2 px-4 rounded-lg py-2 hover:bg-red-600 hover:text-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default EditForm;
