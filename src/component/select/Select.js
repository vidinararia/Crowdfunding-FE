import React from "react";

export const Select = ({ value, onChange }) => {
  const ids = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div>
      <div className="text-gray-500">Select Id</div>
      <select
        className="py-2 px-3 mt-1 rounded-lg border-2 border-gray-200 cursor-pointer"
        value={value}
        onChange={onChange}
      >
        <option className="text-gray-500">Select</option>
        {ids.map((item) => (
          <option className="text-gray-500" key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
    </div>
  );
};
