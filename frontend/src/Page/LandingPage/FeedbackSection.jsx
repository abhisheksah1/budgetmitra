import React, { useState, useEffect } from "react";
import Abhi from "../../Assests/abhishek.jpg";
import Shivam from "../../Assests/shivam.jpg";
import Sushil from "../../Assests/sushil.jpg";
import { motion } from "framer-motion";

const FeedbackSection = () => {
  return (
    <section className="bg-gray-100   py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="testimonial-card bg-white  rounded-lg shadow-lg overflow-hidden md:block"
            >
              <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={Shivam}
                    alt="User Avatar"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Shivam Sah
                    </p>
                    <p className="text-sm text-gray-600">
                      CEO, Example Company
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  Budget Mitra has transformed the way we manage our finances.
                  It's intuitive, powerful, and essential for any business.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="testimonial-card bg-white  rounded-lg shadow-lg overflow-hidden md:block"
            >
              <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={Abhi}
                    alt="User Avatar"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Abhishek Kumar Sah
                    </p>
                    <p className="text-sm text-gray-600">
                      CEO, Example Company
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  Budget Mitra has transformed the way we manage our finances.
                  It's intuitive, powerful, and essential for any business.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="testimonial-card bg-white  rounded-lg shadow-lg overflow-hidden md:block"
            >
              <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={Sushil}
                    alt="User Avatar"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Sushil Sharma
                    </p>
                    <p className="text-sm text-gray-600">
                      CEO, Example Company
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  Budget Mitra has transformed the way we manage our finances.
                  It's intuitive, powerful, and essential for any business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
