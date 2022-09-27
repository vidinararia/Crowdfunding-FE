import React from "react";

export const InputForm = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="text-gray-500">{label}</label>
      <input
        className="w-full py-2 px-3 mt-1 outline-none mb-4 rounded-lg border-2 border-gray-200 hover:border-purple-300 focus:border-purple-300"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
