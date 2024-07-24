import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UsersIcon,
  CashIcon,
  CogIcon,
} from "heroicons/react/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <HomeIcon className="h-6 w-6" />, label: "Dashboard" },
    { icon: <UsersIcon className="h-6 w-6" />, label: "User Management" },
    { icon: <CashIcon className="h-6 w-6" />, label: "Transaction History" },
    { icon: <CogIcon className="h-6 w-6" />, label: "Settings" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-blue-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 md:w-64"
      >
        <div className="flex items-center justify-between px-4">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
          <button onClick={toggleSidebar} className="md:hidden">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
            </a>
          ))}
        </nav>
      </motion.div>
      <div className="flex-1 md:ml-64">
        <button onClick={toggleSidebar} className="m-4 md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
