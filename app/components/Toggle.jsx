"use client";

import { useState, useEffect } from "react";

import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="flex items-center dark:bg-[#111B21] rounded-full shadow-md p-2 cursor-pointer w-[15]px h-8"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaSun className="text-gray-200" />
      <FaMoon className="text-[#111B21]" />
      <div className="bg-white dark:bg-[#111B21] w-full h-6 rounded-full shadow-md transform transition-colors duration-200"></div>
    </div>
  );
};

export default Toggle;
