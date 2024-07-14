// ./src/components/LandingPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Features from "../LandingPage/Features";
import WorkSection from "../LandingPage/WorkSection";
import FeedbackSection from "../LandingPage/FeedbackSection";
import CTASection from "../LandingPage/CTASection";
import FAQs from "../LandingPage/FAQs";
import BlogSection from "../LandingPage/BlogSection";
import ContactUs from "../LandingPage/ContactUs";


import { useLoginContext } from "../../Context/useContext";

import { Facebook, Linkedin, Github, Mail } from "lucide-react";
import HomeSVG from "../../Assests/Home.svg";

import AnimatedSection from "../AbimatedSection/AnimatedSection";

const Home = () => {
  const buttonRef = React.useRef(null);
  const isInView = useInView(buttonRef, { once: true });

  const { setShowLogin } = useLoginContext();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("user-token"));
  }, [localStorage.getItem("user-token")]);

  ////

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="text-center my-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-4">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Manage Your Finances Effortlessly
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-700 mb-6"
            >
              Track your income, expenses, and budget all in one place.
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {token ? (
                <Link
                  to="/getStarted/dashboard"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              ) : (
                <button
                  onClick={setShowLogin}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Sign Up
                </button>
              )}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 px-4 mt-6 md:mt-0"
          >
            <img
              src={HomeSVG}
              alt="Finance Illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        {/* 
        //Feature section */}

        <AnimatedSection>
          <Features />
        </AnimatedSection>

        {/* working Section */}

        <AnimatedSection>
          <WorkSection />
        </AnimatedSection>

        <AnimatedSection>
          <FeedbackSection />
        </AnimatedSection>

        <AnimatedSection>
          <CTASection />
        </AnimatedSection>

        <AnimatedSection>
          <FAQs />
        </AnimatedSection>

        <AnimatedSection>
          <BlogSection />
        </AnimatedSection>

        <AnimatedSection>
          <ContactUs />
        </AnimatedSection>
      </main>

      <footer className="bg-gray-800  text-white p-7">
        <div className="container mx-auto flex justify-between text-center">
          <p>&copy; 2024 Personal Finance. All rights reserved.</p>
          <div className="flex justify-center space-x-4 ">
            <a
              href="https://www.facebook.com/Abheesah12"
              className="hover:underline hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
              target="_blank"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sah-153792281/"
              className="hover:underline hover:text-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/abhisheksah1"
              className="hover:underline hover:text-gray-500 transition-colors duration-300"
              aria-label="GitHub"
              target="_blank"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:abhisah308@gmail.com"
              className="hover:underline hover:text-red-500 transition-colors duration-300"
              aria-label="Email"
              target="_blank"
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
