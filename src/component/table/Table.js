import React from "react";

export const Table = ({
  column,
  data,
  classDelete,
  handleDetail,
  handleDelete,
}) => {
  const IDRConvert = Intl.NumberFormat("id-ID");

  return (
    <div className="overflow-auto shadow">
      <table className="w-full">
        <thead>
          <tr className="border border-gray-300 bg-gray-50">
            {column.map((col, colIdx) => (
              <td
                key={colIdx}
                className="p-3 font-semibold tracking-wide text-left text-gray-400"
              >
                {col.header}
              </td>
            ))}
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map((col, colIdx) => (
            <tr key={colIdx} className="bg-white border border-gray-300 ">
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.name}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {IDRConvert.format(col.target)}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {IDRConvert.format(col.total)}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.startdate}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.dateline}
              </td>
              <td className="w-52 text-center p-2">
                <button
                  className="py-1 px-3 bg-blue-300 hover:bg-blue-500 hover:shadow text-white rounded transition-all"
                  onClick={handleDetail}
                >
                  View
                </button>
                <button className={classDelete} onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
