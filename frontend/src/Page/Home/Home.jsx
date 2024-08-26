import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Features from "../LandingPage/Features";
import WorkSection from "../LandingPage/WorkSection";
import FeedbackSection from "../LandingPage/FeedbackSection";
import CTASection from "../LandingPage/CTASection";
import FAQs from "../LandingPage/FAQs";
import BlogSection from "../LandingPage/BlogSection";

import { useLoginContext } from "../../Context/useContext";

import { Facebook, Linkedin, Github, Mail } from "lucide-react";
import HomeSVG from "../../Assests/Home.png";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Nabvar";

const Home = () => {
  const { setShowLogin, setShowFeedback } = useLoginContext();
  const token = localStorage.getItem("user-token");

  const feedHandler = (e) => {
    setShowFeedback(true);
  };

  return (
    <div className="min-h-screen    mt-14 ">
      <Navbar />
      <main>
        <section className="text-center h-screen hero-section flex flex-col md:flex-row items-center justify-center p-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0"
          >
            <div className="flex justify-center items-center ">
              <FaRegMoneyBillAlt className="text-[#ffffff] text-6xl" />
            </div>
            <h1 className="text-3xl md:text-4xl   mb-2">
              <span className="text-[#333] font-medium lg:text-3xl text-xl">
                Take Charge of Your{" "}
              </span>
              <span className="text-[#ffffff] font-bold lg:text-3xl text-xl text-balance">
                Personal Finances
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Budget better, save more, and achieve your financial goals with
              ease.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
              {token ? (
                <Link
                  to="/getStarted/dashboard"
                  className="ctaButton py-2 px-4 rounded hover:bg-blue-700 mb-4 md:mb-0 md:mr-4"
                >
                  Get Started
                </Link>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4 md:mb-0 md:mr-4"
                >
                  Get Started
                </button>
              )}
              <Link to="/learnMore" className="ctaButton1 py-2 px-4 rounded">
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 lg:w-1/3"
          >
            <img src={HomeSVG} alt="Finance Illustration" className="w-full" />
          </motion.div>
        </section>

        <Features />

        <WorkSection />

        <FeedbackSection />

        <CTASection />

        <BlogSection />

        <FAQs />

        <div className="relative">
          <button
            className="text-xl btn fixed right-0 w-auto bottom-5 sm:bottom-12 md:bottom-20 lg:bottom-22 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
            onClick={feedHandler}
          >
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
          </button>
        </div>
      </main>

      <footer className=" p-7">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-center">
          <p>&copy; 2024 Personal Finance. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/Abheesah12"
              className="hover:underline hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sah-153792281/"
              className="hover:underline hover:text-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/abhisheksah1"
              className="hover:underline hover:text-gray-500 transition-colors duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:abhisah308@gmail.com"
              className="hover:underline hover:text-red-500 transition-colors duration-300"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
