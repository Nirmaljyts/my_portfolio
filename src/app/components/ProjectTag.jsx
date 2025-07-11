import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full "
    : "";
  return (
    <button
      className={`${buttonStyles} relative px-4 py-2 rounded-full `}
      onClick={() => onClick(name)}
    >
      <span className="relative block text-black dark:text-white">{name}</span>
    </button>
  );
};

export default ProjectTag;
