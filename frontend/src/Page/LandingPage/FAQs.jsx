import React from "react";
import { motion } from "framer-motion";

function FAQs() {
  return (
    <section className="bg-gray-100 mt-10 mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3 lg:pr-8"
          >
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What is Budget Mitra?
                </div>
                <div className="collapse-content">
                  <p>
                    Budget Mitra is a financial management tool that helps users
                    track expenses, set budgets, and plan finances effectively.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  How can I get started with Budget Mitra?
                </div>
                <div className="collapse-content">
                  <p>
                    To get started, simply sign up for an account on our website
                    or mobile app. It's free to join!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Is Budget Mitra secure?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, Budget Mitra employs robust security measures to
                    protect your financial data and personal information.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Can I use Budget Mitra on multiple devices?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, you can access Budget Mitra on multiple devices,
                    including desktops, laptops, tablets, and smartphones.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="bg-white p-6 border border-base-300 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Us for More Query
              </h2>
              <p>
                If you have more questions or need further assistance, feel free
                to contact us. Our team is here to help!
              </p>
              <form className="mt-6 max-w-lg mx-auto p-6 space-y-4">
                <label className="flex items-center gap-2 border border-gray-300 rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 text-blue-500"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="flex-grow p-2 border border-transparent rounded-md focus:outline-none  "
                    placeholder="Name"
                  />
                </label>

                <label className="flex items-center  border border-gray-300 rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-6 text-blue-500"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className=" flex-grow p-2 border border-transparent rounded-md focus:outline-none "
                    placeholder="Email"
                  />
                </label>

                <label className="block ">
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none  "
                    placeholder="Bio"
                    rows="4"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500  text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
