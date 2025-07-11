import React from "react";

const NavLink = ({ href, title, icon: Icon, click, index }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (href === "/") {
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
    click();
  };

  return (
    <div className="flex items-center w-full">
      <a
        href={href}
        onClick={handleClick}
        className="flex items-center py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-colors"
      >
        <div className="flex flex-row gap-2 max-sm:mt-[5px]">
          <Icon
            className={`h-5 w-5 mr-2 mt-[5px]  ${
              index === 3 ? "ml-[14px]" : ""
            }`}
          />
          <span className="text-2xl">{title}</span>
        </div>
      </a>
    </div>
  );
};

export default NavLink;
