import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

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
    <nav className="sticky top-0 z-50 md:h-[72px] h-[65px] md:px-[35px] px-[15px] bg-[#20344B] dark:bg-[#21242bc5] shadow-lg backdrop-blur-lg flex justify-start">
      <Link
        to="/"
        className="p-3 rounded-full font-semibold flex items-center justify-center  transition duration-300"
        aria-label="Home"
      >
        <div className="logo text-center flex items-center justify-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </Link>
    </nav>
  );
}
