import React from "react";
import { motion } from "framer-motion";
import Abhi from "../../Assests/TeamWork.svg";

const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4 md:p-8">
        {/* About Us Section */}
        <motion.section
          className="text-center my-8 md:my-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
              About Us
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src={Abhi}
                  alt="About Us"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                  Welcome to Budget Mitra, your trusted partner in financial
                  management. We are committed to helping you take control of
                  your finances with ease and confidence.
                </p>
                <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                  Our mission is to provide you with the tools and insights you
                  need to make informed financial decisions, save money, and
                  achieve your financial goals. Whether you're looking to create
                  a budget, track your expenses, or plan for the future, Budget
                  Mitra is here to support you every step of the way.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Join us on a journey to financial freedom and peace of mind.
                  Together, we can make your financial dreams a reality.
                </p>
                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-4 mb-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.875 12c0-5.42-4.405-9.875-9.875-9.875S1.125 6.58 1.125 12c0 4.877 3.598 8.896 8.28 9.688v-6.868H7.125v-3.698h2.28V9.48c0-2.257 1.346-3.508 3.4-3.508.985 0 2.046.176 2.046.176v2.25h-1.15c-1.13 0-1.484.702-1.484 1.424v1.704h2.516l-.4 3.698h-2.116V21.68C17.277 21.682 20.875 17.62 20.875 12"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1.25C5.784 1.25 0 6.034 0 12.25c0 4.92 3.581 9.002 8.268 9.77-.097-.842-.18-2.123.038-3.034.195-.84 1.26-5.352 1.26-5.352s-.254-.51-.254-1.266c0-1.184.688-2.067 1.54-2.067.723 0 1.074.543 1.074 1.194 0 .728-.463 1.816-.703 2.827-.203.902.382 1.64 1.263 1.64 1.517 0 2.678-1.598 2.678-3.898 0-2.037-1.46-3.478-3.532-3.478-2.406 0-3.826 1.803-3.826 3.662 0 .727.254 1.226.652 1.61.064.077.072.144.054.231-.056.23-.176.728-.2.833-.034.154-.122.186-.282.124-1.04-.464-1.695-1.786-1.695-2.918 0-2.366 1.724-4.483 4.945-4.483 2.597 0 4.631 1.87 4.631 4.353 0 2.612-1.642 4.712-3.92 4.712-.766 0-1.485-.397-1.731-.866 0 0-.371 1.405-.456 1.74-.167.623-.611 1.404-.914 1.883.689.212 1.415.327 2.166.327 6.216 0 11.2-5.034 11.2-11.25S18.216 1.25 12 1.25z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1.25C5.784 1.25 0 6.034 0 12.25c0 6.216 5.784 11.25 12 11.25 6.216 0 12-5.034 12-11.25C24 6.034 18.216 1.25 12 1.25zm0 20.073c-4.854 0-8.795-3.94-8.795-8.823 0-1.87.583-3.605 1.577-5.033l.18-.3.268-.233c.95-.816 1.763-1.18 2.875-1.18 1.042 0 1.798.581 1.798 1.36 0 .823-.332 1.716-.6 2.09-.58.635-.764 1.514-.456 2.33.478 1.287 1.256 2.705 3.503 2.705 2.342 0 4.097-1.793 4.097-4.332 0-2.278-1.955-3.994-4.85-3.994-1.226 0-2.339.52-3.052 1.22l-.58.52-.68-.188c-.562-.16-1.068-.274-1.562-.274-2.547 0-4.62 2.02-4.62 4.595 0 2.55 2.073 4.57 4.62 4.57 2.775 0 4.297-1.995 4.297-3.905 0-.282-.03-.507-.09-.72-.345-1.435-1.352-2.365-2.895-2.365-.82 0-1.548.407-1.976.954l-.42.484-.496-.4c-.416-.335-.975-.65-1.504-.65-1.208 0-2.202 1.01-2.202 2.238 0 .675.284 1.266.734 1.62.45.353.904.58 1.598.58 1.228 0 1.9-1.18 2.247-2.178.186-.545.392-.847.69-.923.294-.077.564.048.806.32.23.26.523.84.523 1.662 0 1.428-.717 2.964-2.254 3.775-1.44.764-3.31.858-4.945-.008-.54-.288-.97-.59-1.336-.92a10.953 10.953 0 01-1.364-1.383c-1.208-1.368-1.898-3.136-1.898-5.004 0-4.883 3.94-8.823 8.795-8.823 4.854 0 8.795 3.94 8.795 8.823 0 4.883-3.94 8.823-8.795 8.823z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className="text-center my-8 md:my-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-gray-700 text-base md:text-lg mb-4">
            <p className="font-semibold">Timeline:</p>
            <ul className="list-disc ml-6 text-left">
              <li>Year 1: Launched Budget Mitra</li>
              <li>Year 2: Reached 10,000 users</li>
              <li>Year 3: Expanded to international markets</li>
            </ul>
          </div>
        </motion.section>

        {/* Team Member Section */}
        <motion.section
          className="text-center my-8 md:my-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img
                src={Abhi}
                alt="Team Member Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-gray-700 text-lg mb-2">
              Abhishek Kumar Sah
            </p>
            <p className="text-center text-gray-600 mb-4">CEO</p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.875 12c0-5.42-4.405-9.875-9.875-9.875S1.125 6.58 1.125 12c0 4.877 3.598 8.896 8.28 9.688v-6.868H7.125v-3.698h2.28V9.48c0-2.257 1.346-3.508 3.4-3.508.985 0 2.046.176 2.046.176v2.25h-1.15c-1.13 0-1.484.702-1.484 1.424v1.704h2.516l-.4 3.698h-2.116V21.68C17.277 21.682 20.875 17.62 20.875 12"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C5.784 1.25 0 6.034 0 12.25c0 4.92 3.581 9.002 8.268 9.77-.097-.842-.18-2.123.038-3.034.195-.84 1.26-5.352 1.26-5.352s-.254-.51-.254-1.266c0-1.184.688-2.067 1.54-2.067.723 0 1.074.543 1.074 1.194 0 .728-.463 1.816-.703 2.827-.203.902.382 1.64 1.263 1.64 1.517 0 2.678-1.598 2.678-3.898 0-2.037-1.46-3.478-3.532-3.478-2.406 0-3.826 1.803-3.826 3.662 0 .727.254 1.226.652 1.61.064.077.072.144.054.231-.056.23-.176.728-.2.833-.034.154-.122.186-.282.124-1.04-.464-1.695-1.786-1.695-2.918 0-2.366 1.724-4.483 4.945-4.483 2.597 0 4.631 1.87 4.631 4.353 0 2.612-1.642 4.712-3.92 4.712-.766 0-1.485-.397-1.731-.866 0 0-.371 1.405-.456 1.74-.167.623-.611 1.404-.914 1.883.689.212 1.415.327 2.166.327 6.216 0 11.2-5.034 11.2-11.25S18.216 1.25 12 1.25z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C5.784 1.25 0 6.034 0 12.25c0 6.216 5.784 11.25 12 11.25 6.216 0 12-5.034 12-11.25C24 6.034 18.216 1.25 12 1.25zm0 20.073c-4.854 0-8.795-3.94-8.795-8.823 0-1.87.583-3.605 1.577-5.033l.18-.3.268-.233c.95-.816 1.763-1.18 2.875-1.18 1.042 0 1.798.581 1.798 1.36 0 .823-.332 1.716-.6 2.09-.58.635-.764 1.514-.456 2.33.478 1.287 1.256 2.705 3.503 2.705 2.342 0 4.097-1.793 4.097-4.332 0-2.278-1.955-3.994-4.85-3.994-1.226 0-2.339.52-3.052 1.22l-.58.52-.68-.188c-.562-.16-1.068-.274-1.562-.274-2.547 0-4.62 2.02-4.62 4.595 0 2.55 2.073 4.57 4.62 4.57 2.775 0 4.297-1.995 4.297-3.905 0-.282-.03-.507-.09-.72-.345-1.435-1.352-1.876-2.24-1.876-1.144 0-2.006 1.064-2.006 2.507 0 1.353.446 2.04 1.368 2.04.404 0 .752-.102.992-.273.322-.22.484-.595.584-.896.05-.147.086-.254.124-.31.064-.08.166-.13.29-.13.165 0 .292.03.404.14.122.112.194.285.194.51 0 .346-.144.745-.392 1.18-.44.8-1.336 1.562-2.96 1.562-2.478 0-4.264-1.948-4.264-4.34 0-3.216 2.826-5.827 6.314-5.827 2.797 0 5.147 1.905 5.147 4.512 0 2.82-2.267 5.032-5.262 5.032-1.074 0-2.075-.18-2.86-.53-.657-.295-1.126-.723-1.664-1.364-.253-.296-.48-.627-.692-.986-.432-.747-.644-1.66-.644-2.607 0-2.42 1.79-4.335 4.015-4.335 1.063 0 2.053.39 2.754 1.096.704.708 1.088 1.672 1.088 2.761 0 1.455-.536 2.64-1.258 3.282-.662.589-1.562.94-2.374.94-1.248 0-2.48-.644-2.975-1.696a.694.694 0 00-.627-.382c-.352 0-.637.285-.637.636 0 .124.035.228.064.294.388.875 1.512 2.107 3.372 2.107 1.357 0 2.72-.59 3.635-1.515 1.113-1.118 1.758-2.637 1.758-4.16 0-3.54-3.072-6.49-6.845-6.49-3.754 0-6.814 2.94-6.814 6.468 0 1.346.356 2.63.982 3.778.178.317.364.65.6.988.492.712 1.064 1.37 1.68 1.964 1.56 1.48 3.42 2.175 5.348 2.175 4.293 0 7.795-3.523 7.795-7.823 0-4.296-3.502-7.823-7.795-7.823S4.205 7.703 4.205 12c0 4.3 3.502 7.823 7.795 7.823S19.795 16.3 19.795 12"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
}

export default AboutUs;

