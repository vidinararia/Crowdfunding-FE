import React from "react";

export const ButtonSecondary = ({ title, onClick }) => {
  return (
    <button
      className="bg-teal-600 text-white hover:shadow-md py-2 px-6 rounded-md font-bold md:ml-4 ml-4 transition-all"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
