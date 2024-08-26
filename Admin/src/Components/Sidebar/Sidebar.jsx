import { useState, useEffect, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import {
  LayoutDashboard,
  Cog,
  Menu,
  X,
  ChevronsLeft,
  ChevronsRight,
  TrendingUp,
  User,
} from "lucide-react";

import { motion } from "framer-motion";
import "./style.css"; // Import the CSS file

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  const location = useLocation();
  const [showText, setShowText] = useState(true);
  const container = useRef();
  const textRefs = useRef([]);

  useEffect(() => {
    const path = location.pathname.split("/")[2]; // Extract the last part of the path
    setIsActive(path || "dashboard"); // Default to dashboard if path is empty
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleText = () => {
    setShowText(!showText);
    if (!showText) {
      gsap.to(textRefs.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      });
      gsap.to(container.current, { width: "16rem", duration: 0.5 }); // 16rem is 64px
    } else {
      gsap.to(textRefs.current, {
        x: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
      gsap.to(container.current, { width: "7rem", duration: 0.5 }); // Collapse to smaller width
    }
  };

  return (
    <div className=" flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        ref={container}
        className={`fixed  md:static h-full top-0 lg:h-screen z-10 ${
          showText ? "lg:w-22" : "w-64"
        } bg-white   text-[#333] p-6 transition-transform transform ${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
        } md:translate-x-0`}
      >
        {showText ? (
          <div className="flex justify-around gap-10 items-center">
            <div className="flex text-center justify-center lg:text-left">
              <Link
                to="/"
                className="text-blue-500 lg:text-lg flex gap-1 font-bold"
              >
                Budgets
                <span className="border px-2 bg-blue-100 text-[#333] flex flex-col items-center rounded-md">
                  Mitra
                </span>
              </Link>
              <div className="flex pl-10 md:hidden">
                <button className="text-[#333] pl-36 " onClick={toggleSidebar}>
                  <X size={24} />
                </button>
              </div>
            </div>
            <ChevronsLeft
              onClick={toggleText}
              className={`hidden lg:block cursor-pointer top-0`}
            />
          </div>
        ) : (
          <div className="flex relative justify-center mb-10">
            <ChevronsRight
              onClick={toggleText}
              className={`hidden lg:block absolute cursor-pointer`}
            />
          </div>
        )}

        <ul className="mt-2 ">
          {[
            { to: "dashboard", icon: <LayoutDashboard />, text: "Dashboard" },
            { to: "user", icon: <User />, text: "User" },
            { to: "report", icon: <TrendingUp />, text: "Report" },
            {
              to: "setting",
              icon: <Cog />,
              text: "Setting",
            },
          ].map((item, index) => (
            <motion.li key={item.to} className="mb-4 flex tooltip-container">
              <Link
                to={`/sidebar/${item.to}`}
                className={`flex py-3 rounded-2xl px-5 border-2 ${
                  isActive === item.to ? "link-active" : "link-default"
                } gap-2`}
                onClick={() => {
                  setIsActive(item.to);
                  setIsSidebarOpen(false);
                }}
              >
                {item.icon}
                <span
                  ref={(el) => (textRefs.current[index] = el)}
                  style={{ display: showText ? "inline" : "none" }}
                >
                  {item.text}
                </span>
              </Link>
              {!showText && <div className="tooltip-text">{item.text}</div>}
            </motion.li>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <main
        className={`flex-1 p-5 bg-gray-100 transition-filter duration-500 ${
          isSidebarOpen ? "main-blur" : ""
        }`}
      >
        <div className="flex  md:hidden">
          <button className="text-blue-800" onClick={toggleSidebar}>
            {isSidebarOpen ? "" : <Menu size={24} />}
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
