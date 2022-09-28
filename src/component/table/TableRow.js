import React from "react";

export const TableRow = ({ data }) => {
  return (
    <tr className="bg-white border border-gray-300">
      {data.map((item) => {
        return (
          <td
            key={item}
            className="p-3 text-sm whitespace-nowrap text-gray-700 font-medium"
          >
            {item}
          </td>
        );
      })}
    </tr>
  );
};
