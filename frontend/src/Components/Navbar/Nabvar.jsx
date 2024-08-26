import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../Context/useContext";
import { LogIn, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { setShowLogin, setShowLogout } = useLoginContext();
  const token = localStorage.getItem("user-token");

  const logoutHandler = () => {
    setShowLogout(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <header className=" fixed top-0 left-0 w-full z-50 p-[20px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Logo */}
        <div className="flex text-center justify-center lg:text-left">
          <Link
            to="/"
            className="text-white lg:text-lg  flex gap-1 items-center font-bold"
          >
            Budgets{" "}
            <span className="text-[#0066cc] px-2  bg-[#00cc66] text-[#333] flex flex-col items-center  rounded-md ">
              Mitra
            </span>
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex flex-1 justify-end items-center mr-5">
          <div id="navbar" className="flex text-lg font-semibold gap-6">
            <Link to="/" className="text-white hover:text-[#00cc66]">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-[#00cc66]">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-[#00cc66]">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-[#00cc66]">
              Contact us
            </Link>
          </div>
        </div>

        {/* Sign In / Logout Button */}
        <div className="flex justify-end text-white items-center">
          {token ? (
            <button
              className="relative"
              onClick={() => {
                logoutHandler();
                closeMenu();
              }}
              data-tooltip-id="logout-tooltip"
              data-tooltip-content="Logout"
            >
              <LogOut />
              <ReactTooltip
                id="logout-tooltip"
                place="bottom"
                type="dark"
                effect="solid"
              />
            </button>
          ) : (
            <button
              onClick={() => {
                setShowLogin(true);
                closeMenu();
              }}
              className="relative"
              data-tooltip-id="signin-tooltip"
              data-tooltip-content="Sign In"
            >
              <LogIn />
              <ReactTooltip
                id="signin-tooltip"
                place="bottom"
                type="dark"
                effect="solid"
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobileNav"
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } text-md font-semibold mt-5`}
        variants={dropdownVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <div className="menu-items flex flex-col pl-5 gap-2">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white hover:text-[#ddd]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-white hover:text-[#ddd]"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="text-white hover:text-[#ddd]"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white hover:text-[#ddd]"
          >
            Contact us
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
