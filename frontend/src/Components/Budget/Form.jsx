import React from "react";

function Form({
  isModalOpen,
  handleCancel,
  handleSubmit,
  budgetAmount,
  budgetName,
  setBudgetAmount,
  setBudgetName,
  loading,
}) {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-4">
            Add New <span className="text-blue-500 font-sans">Budget</span>{" "}
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
                  placeholder="Enter Budget Name"
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
                  placeholder="Enter Budget amount"
                  name="amount"
                />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className=" hover:text-white py-2 px-4 rounded-lg border-2 hover:bg-red-500 "
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

export default Form;
