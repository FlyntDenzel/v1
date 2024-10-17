"use client";
import { FaMoon, FaSun } from "react-icons/fa6";

import { useEffect, useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(false);
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
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-[#f3f0f0]" size={22} />
      <div
        className="absolute bg-white dark:bg-[#293245] w-6 h-6 rounded-full shadow-md transform transition-all ease-in-out duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <FaSun className="ml-auto text-[#152731ec]" size={23}/>
    </div>
  );
};

export default Toggle;
