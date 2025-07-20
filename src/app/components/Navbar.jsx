"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    index: 1,
    title: "Home",
    path: "#home",
    icon: HomeModernIcon,
  },
  {
    index: 2,
    title: "About",
    path: "#about",
    icon: IdentificationIcon,
  },
  {
    index: 3,
    title: "Projects",
    path: "#projects",
    icon: SquaresPlusIcon,
  },
  {
    index: 4,
    title: "Contact",
    path: "#contacts",
    icon: DevicePhoneMobileIcon,
  },
];

const Navbar = ({ showModal }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#home";
      const scrollPosition = window.scrollY + window.innerHeight;

      navLinks.forEach((link) => {
        if (link.path !== "#home") {
          const section = document.querySelector(link.path);
          if (section) {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
              currentSection = link.path;
            }
          }
        } else if (window.scrollY < 100) {
          currentSection = "#home";
        }
      });

      // Handle bottom of page — activate last section
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight - 50) {
        currentSection = navLinks[navLinks.length - 1].path;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed mx-auto  border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212]  shadow-2xl backdrop-blur-md bg-opacity-80 sm:mt-[-8px]"
      style={{ zIndex: "999" }}
    >
      <div
        className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 md:justify-center"
        style={{ pointerEvents: showModal && "none" }}
      >
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        ></Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={link.title}>
                {console.log(link.path)}
                <NavLink
                  href={link.path}
                  title={link.title}
                  icon={link.icon}
                  index={index}
                  isActive={activeSection === link.path}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
      ) : null}
    </nav>
  );
};

export default Navbar;
