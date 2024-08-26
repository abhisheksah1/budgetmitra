import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

function EditForm({ isEditModalOpen, setIsEditModalOpen, id }) {
  const [budgetName, setBudgetName] = React.useState("");
  const [budgetAmount, setBudgetAmount] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [operation, setOperation] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Update budget here
    try {
      await axios.put(`/api/budget/update/${id}`, {
        name: budgetName,
        amountChange: Number(budgetAmount),
        operation: operation,
      });
      setLoading(false);
      toast.success("Budget updated successfully", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
        },
      });
      setOperation("");
      setBudgetName("");
      setBudgetAmount("");
      setIsEditModalOpen(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Error updating budget:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
    setBudgetName("");
    setBudgetAmount("");
    setOperation("");
  };

  return (
    isEditModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-4">
            Edit <span className="text-blue-500 font-sans">Budget</span>{" "}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input
                  id="budgetName"
                  type="text"
                  value={budgetName}
                  onChange={(e) => setBudgetName(e.target.value)}
                  className="grow"
                  placeholder="Enter New Budget Name"
                  name="name"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Amount
                <input
                  id="budgetAmount"
                  type="number"
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                  className="grow"
                  placeholder="Enter New Budget amount"
                  name="amount"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2  ">
                <div className="label">
                  <span className="label-text">Increase or Decrease</span>
                </div>
                <select
                  className="grow"
                  id="category"
                  name="operation"
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                >
                  <option value="" aria-readonly="true">
                    Select Increase or Decrease
                  </option>
                  <option value="increase">Increase</option>
                  <option value="decrease">Decrease</option>
                </select>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className=" border-2 hover:text-white py-2 px-4 rounded-lg hover:bg-red-500 "
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
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
