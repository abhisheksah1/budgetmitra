import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FAQs() {
  return (
    <section className="bg-[#f9fafb] mt-10 mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What is Budget Mitra?
                </div>
                <div className="collapse-content">
                  <p>
                    Budget Mitra is a financial management tool that helps users track
                    expenses, set budgets, and plan finances effectively.
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
                    To get started, simply sign up for an account on our website or
                    mobile app. It's free to join!
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
                    Yes, Budget Mitra employs robust security measures to protect your
                    financial data and personal information.
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
                    Yes, you can access Budget Mitra on multiple devices, including
                    desktops, laptops, tablets, and smartphones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-white p-6 border border-base-300 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Contact Us for More FAQs</h2>
              <p>If you have more questions or need further assistance, feel free to contact us. Our team is here to help!</p>
              <form className="mt-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
