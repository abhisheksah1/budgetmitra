// ./src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../Context/useContext";
import img from "../../Assests/abhishek.jpg";
import { UserRoundCheck, UserRoundX, LogIn, LogOut } from "lucide-react";

const Navbar = () => {
  const { setShowLogin, setShowLogout } = useLoginContext();

  const token = localStorage.getItem("user-token");
  const fullName = localStorage.getItem("fullName");

  const logoutHandler = () => {
    setShowLogout(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-10  p-4">
      <div className="container mx-auto sm:justify-center flex items-center md:justify-start">
        <div className="text-white text-lg font-semibold md:hidden">
          <div className="navbar-end ">
            <div className="dropdown mt-2 ">
              {token ? (
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
                >
                  <div className="rounded-full">
                    <img src={img} />
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
              <ul className="  dropdown-content   rounded-box  mt-3 w-36   shadow">
                <li>
                  {token ? (
                    <Link
                      to="/updateProfile"
                      className="flex transform items-center rounded-lg gap-2 text-sm  px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <UserRoundCheck />
                      {fullName}
                    </Link>
                  ) : (
                    <Link
                      className="flex transform items-center rounded-lg gap-2 text-sm  px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      onClick={() => setShowLogin(true)}
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
                      onClick={logoutHandler}
                    >
                      <LogOut />
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowLogin(true)}
                      className="flex transform items-center gap-2 text-sm  rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <LogIn />
                      Sign In
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:flex-none md:text-left">
          <Link to="/" className="text-white text-lg font-bold">
            Budget Mitra
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 flex-1 justify-center items-center md:justify-end">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact us
          </a>
          <div>
            <div className="navbar-end ml-10">
              <div className="dropdown dropdown-end">
                {token ? (
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
                  >
                    <div className="rounded-full">
                      <img src={img} />
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
                <ul className="menu lg:menu-sm dropdown-content sm:menu-lg bg-base-100 rounded-box z-[1] mt-3 w-52 sm:w-60 p-2 shadow">
                  <li>
                    {token ? (
                      <Link
                        to="/updateProfile"
                        className="flex transform items-center gap-2 rounded-lg  px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <UserRoundCheck />
                        {fullName}
                      </Link>
                    ) : (
                      <Link
                        className="flex transform items-center rounded-lg  px-3 py-10 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => setShowLogin(true)}
                      >
                        <UserRoundX />
                        Profile
                      </Link>
                    )}
                  </li>
                  <li>
                    {token ? (
                      <button
                        className="flex transform items-center rounded-lg  px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        onClick={logoutHandler}
                      >
                        <LogOut />
                        Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowLogin(true)}
                        className="flex transform items-center gap-2  rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <LogIn />
                        Sign In
                      </button>
                    )}
                  </li>
                </ul>
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
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" className="block text-gray-300 hover:text-white px-4 py-2">
          Home
        </Link>
        <Link
          to="/about"
          className="block text-gray-300 hover:text-white px-4 py-2"
        >
          About
        </Link>
        <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">
          Services
        </a>
        <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
