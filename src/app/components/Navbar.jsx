"use client";
import Link from "next/link";
import React, { useState } from "react";
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

const navLinks = [
  {
    index: 1,
    title: "Home",
    path: "/",
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
    path: "#contact",
    icon: DevicePhoneMobileIcon,
  },
];

const Navbar = ({ showModal }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
                <NavLink href={link.path} title={link.title} icon={link.icon} />
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
