import React from "react";
import PersonalFinance from "../../Assests/PersonalPlanning.png";
import Strategic from "../../Assests/Strategic.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogSection() {
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-[#333] font-bold text-center mb-8"
          >
            Latest Blogs & News
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog/News Card 1 */}

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#"
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className=" flex justify-center h-80 overflow-hidden">
                  <img
                    src={PersonalFinance}
                    alt="Blog Cover"
                    className="lg:w-96  h-80 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[#333] font-semibold mb-2">
                    Understanding Personal Budgeting
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tips and strategies for managing personal finances
                    effectively.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Published on July 11, 2024
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Blog/News Card 2 */}

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#"
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className=" h-80 overflow-hidden">
                  <img
                    src="https://via.placeholder.com/400x250"
                    alt="Blog Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[#333] font-semibold mb-2">
                    Top 5 Finance Apps You Should Try
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore the best mobile apps for financial management.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Published on July 10, 2024
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Blog/News Card 3 */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              
            >
              <Link
                to="/investmentBeginner"
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className=" flex justify-center h-80 overflow-hidden">
                  <img
                    src={Strategic}
                    alt="Blog Cover"
                    className="lg:w-96  h-80  object-cover "
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[#333] font-semibold mb-2">
                    Investment Strategies for Beginners
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Essential tips for new investors to build a solid investment
                    portfolio.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Published on July 9, 2024
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogSection;
