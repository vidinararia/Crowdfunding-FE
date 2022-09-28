import React from "react";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

export const Table = ({ theadData, tbodyData }) => {
  return (
    <div className="overflow-auto shadow">
      <table className="w-full">
        <thead>
          <tr className="border border-gray-300 bg-gray-50">
            {theadData.map((h) => {
              return <TableHead key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
