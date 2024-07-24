import React from "react";
import { motion } from "framer-motion";
import Abhi from "../../Assests/TeamWork.svg";
import Logo from "../../Assests/logo.png";

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
            <div className="flex flex-col md:flex-row justify-between items-center">
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
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src={Logo}
                  alt="About Us"
                  className=" w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
};

export default AboutUs;
