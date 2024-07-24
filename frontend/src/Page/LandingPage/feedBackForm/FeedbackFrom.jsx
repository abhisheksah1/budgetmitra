import React, { useState } from "react";
import Toast from "react-hot-toast";
import { useLoginContext } from "../../../Context/useContext";

const FeedbackForm = () => {
  const { showFeedback, setShowFeedback } = useLoginContext();

  const [formData, setFormData] = useState({
    photo: null,
    name: "",
    position: "",
    company: "",
    thought: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data
    data.append("photo", formData.photo);
    data.append("name", formData.name);
    data.append("position", formData.position);
    data.append("company", formData.company);
    data.append("thought", formData.thought);

    try {
      const response = await fetch("/api/feedback/post", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally, reset form or show success message
      setFormData({
        photo: null,
        name: "",
        position: "",
        company: "",
        thought: "",
      });
      Toast.success("Feedback Successfully", {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#1e40af",
          color: "white",
        },
      });
      setShowFeedback(false);
    } catch (error) {
      console.error("Error:", error);
      Toast.error("Failed to submit feedback", {
        position: "bottom-right",
        duration: 3000,
        style: { backgroundColor: "#ff2626", color: "white" },
      });
    }
  };

  return (
    <div className="relative z-20">
      {showFeedback && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75 p-4 sm:p-8">
          <form
            className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl animate-slideDown"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-end gap-5 font-semibold">
              <button
                type="button"
                className="hover:bg-red-300 rounded-full p-2 py-1  hover:text-white font-bold mb-5"
                onClick={() => {
                  setShowFeedback(false);
                }}
              >
                ✖
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-xl mb-2 lg:text-3xl  font-semibold text-gray-900">
                Submit Your{" "}
                <span className="text-blue-500 font-sans font-bold">
                  Feedback
                </span>
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block">
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="file-input border border-gray-300  file-input-primary lg:w-full w-full"
                    />
                  </label>
                </div>

                <label className="flex text-sm sm:text-md items-center gap-2 border border-gray-300 hover:border-blue-500 rounded-md p-2">
                  <i
                    className="fa text-blue-500 fa-user"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="flex-grow p-2 border border-transparent bg-transparent rounded-md focus:outline-none"
                    placeholder="Your name"
                  />
                </label>

                <label className="flex text-sm sm:text-md items-center gap-2 border border-gray-300 hover:border-blue-500 rounded-md p-2">
                  <i
                    className="fa text-blue-500 fa-level-up"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="flex-grow p-2 border border-transparent bg-transparent rounded-md focus:outline-none"
                    placeholder="Your position"
                  />
                </label>

                <label className="flex text-sm sm:text-md items-center gap-2 border border-gray-300 hover:border-blue-500 rounded-md p-2">
                  <i
                    className="fa text-blue-500 fa-building"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="flex-grow p-2 border border-transparent bg-transparent rounded-md focus:outline-none"
                    placeholder="Your company"
                  />
                </label>

                <label className="flex text-sm sm:text-md gap-2 border border-gray-300 hover:border-blue-500 rounded-md p-2">
                  <i
                    className="fa mt-1 text-blue-500 fa-paragraph"
                    aria-hidden="true"
                  ></i>
                  <textarea
                    id="thought"
                    name="thought"
                    rows="2"
                    required
                    value={formData.thought}
                    onChange={handleChange}
                    className="w-full ml-2 bg-transparent focus:outline-none"
                    placeholder="Your thoughts"
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
