"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible
          ? "fixed bottom-10 right-10 transition-colors max-lg:hidden"
          : "hidden"
      } bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out z-50 mr-[2rem]`}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;
