import React from "react";

export const TableHead = ({ item }) => {
  return (
    <td
      title={item}
      className="p-3 font-semibold tracking-wide text-left text-gray-400"
    >
      {item}
    </td>
  );
};
