import React from "react";

const NavLink = ({ href, title, icon: Icon, click, index, isActive }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    // click();
  };

  return (
    <div className="flex items-center w-full">
      <a
        href={href}
        onClick={handleClick}
        className={`flex items-center py-2 pl-3 pr-4 ${
          isActive ? "text-white font-bold" : "text-[#a2a5a8]"
        } sm:text-xl rounded md:p-0 hover:text-white transition-colors`}
      >
        <div className="flex flex-row items-center gap-2">
          <Icon className={`h-5 w-5 mr-2 mt-[5px]`} />
          <span className="text-2xl">{title}</span>
        </div>
      </a>
    </div>
  );
};

export default NavLink;
