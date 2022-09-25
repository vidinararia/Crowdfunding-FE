import React from "react";

export const ButtonPrimary = ({ title, onClick }) => {
  return (
    <button
      className="bg-transparent hover:bg-white border border-white hover:border-transparent text-white hover:text-black py-2 px-6 rounded-md font-bold md:ml-6 transition-all"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
