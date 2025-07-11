import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  const handleNavLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            icon={link.icon}
            click={handleNavLinkClick}
            index={link.index}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
