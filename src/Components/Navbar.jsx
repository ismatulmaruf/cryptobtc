import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(() => {
  //   // Get the theme from localStorage or default to dark
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme ? savedTheme === "dark" : true; // Default to dark if not set
  // });
  // const [darkMode, setDarkMode] = useState(

  // const [darkMode, setDarkMode] = useState(() => {
  // Get the theme from localStorage or default to dark
  //   const savedTheme = localStorage.getItem("theme");
  //    return savedTheme ? savedTheme === "dark" : true; // Default to dark if not set
  //  });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("light", "dark");
    if (darkMode) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 md:h-[72px] h-[65px] md:px-[35px] px-[15px] bg-[#B3E5FCb0] dark:bg-[#21242bc5] shadow-lg backdrop-blur-lg flex justify-end">
      {/* <button className="p-5 rounded-full text-lg font-semibold">
      {darkMode ? (
        <FaSun size={26} className="text-white" onClick={toggleDarkMode} />
      ) : (
        <FaMoon
          size={26}
          className="text-gray-900"
          onClick={toggleDarkMode}
        />
      )}
    </button> */}
    </nav>
  );
}
