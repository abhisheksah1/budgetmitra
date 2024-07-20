import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../Context/useContext";
import img from "../../Assests/abhishek.jpg";
import { UserRoundCheck, UserRoundX, LogIn, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../Assests/logo.png";

const Navbar = () => {
  const { setShowLogin, setShowLogout } = useLoginContext();

  const token = localStorage.getItem("user-token");
  const fullName = localStorage.getItem("fullName");

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
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.nav
      className="bg-blue-800 sticky top-0 z-10 p-4"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto sm:justify-center flex items-center md:justify-start">
        <div className="text-white text-lg font-semibold md:hidden">
          <div className="navbar-end">
            <div className="dropdown mt-2">
              {token ? (
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
                >
                  <div className="rounded-full">
                    <img src={img} alt="Profile" />
                  </div>
                </div>
              ) : (
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
                >
                  <div className="rounded-full">
                    <img alt="PP" />
                  </div>
                </div>
              )}
              <motion.ul
                className="dropdown-content rounded-box mt-3 w-36 shadow"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
              >
                <li>
                  {token ? (
                    <Link
                      to="/updateProfile"
                      className="flex transform items-center rounded-lg gap-2 text-sm px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <UserRoundCheck />
                      {fullName}
                    </Link>
                  ) : (
                    <Link
                      className="flex transform items-center rounded-lg gap-2 text-sm px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      onClick={() => {
                        setShowLogin(true);
                        closeMenu();
                      }}
                    >
                      <UserRoundX />
                      Profile
                    </Link>
                  )}
                </li>
                <li>
                  {token ? (
                    <button
                      className="flex transform items-center rounded-lg gap-2 text-sm px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      onClick={() => {
                        logoutHandler();
                        closeMenu();
                      }}
                    >
                      <LogOut />
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        closeMenu();
                      }}
                      className="flex transform items-center gap-2 text-sm rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <LogIn />
                      Sign In
                    </button>
                  )}
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:flex-none md:text-left">
          <Link to="/" className="text-white lg:text-lg font-bold">
            Budget Mitra
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 flex-1 justify-center items-center md:justify-end">
          <div id="navbar" className="flex text-md font-semibold gap-6">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact us
            </Link>
          </div>
          <div>
            <div className="navbar-end ml-10">
              <div className="dropdown dropdown-end">
                {token ? (
                  <div
                    id="profile"
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
                  >
                    <div className="rounded-full">
                      <img src={img} alt="Profile" />
                    </div>
                  </div>
                ) : (
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
                  >
                    <div className="rounded-full">
                      <img alt="PP" />
                    </div>
                  </div>
                )}
                <motion.ul
                  className="menu lg:menu-sm dropdown-content sm:menu-lg bg-base-100 rounded-box z-[1] mt-3 w-52 sm:w-60 p-2 shadow"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <li>
                    {token ? (
                      <Link
                        to="/updateProfile"
                        className="flex transform items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <UserRoundCheck />
                        {fullName}
                      </Link>
                    ) : (
                      <Link
                        className="flex transform items-center rounded-lg px-3 py-10 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => {
                          setShowLogin(true);
                          closeMenu();
                        }}
                      >
                        <UserRoundX />
                        Profile
                      </Link>
                    )}
                  </li>
                  <li>
                    {token ? (
                      <button
                        className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => {
                          logoutHandler();
                          closeMenu();
                        }}
                      >
                        <LogOut />
                        Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setShowLogin(true);
                          closeMenu();
                        }}
                        className="flex transform items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <LogIn />
                        Sign In
                      </button>
                    )}
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
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
      </div>
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
            className="text-gray-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
