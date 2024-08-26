"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar.jsx";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-screen">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
