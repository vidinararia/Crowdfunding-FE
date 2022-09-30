import React from "react";
import { useNavigate } from "react-router-dom";

export const Table = ({ column, data, classDelete, classView }) => {
  const IDRConvert = Intl.NumberFormat("id-ID");

  let navigate = useNavigate();

  return (
    <div className="overflow-auto shadow">
      <table className="w-full">
        <thead>
          <tr className="border border-gray-300 bg-gray-50">
            {column.map((col) => (
              <td className="p-3 font-semibold tracking-wide text-left text-gray-400">
                {col.header}
              </td>
            ))}
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data?.project.map((col) => (
            <tr key={col.id} className="bg-white border border-gray-300 ">
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.name}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {"Rp. " + IDRConvert.format(col.target)}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {"Rp. " + IDRConvert.format(col.total)}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.startdate}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.dateline}
              </td>
              <td className="w-52 text-center p-2">
                <button
                  className={classView}
                  onClick={() => navigate(`/detail-project/${col.id}`)}
                >
                  View
                </button>
                <button className={classDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
