import React from "react";

export const Card = ({ name, donate }) => {
  const IDRConvert = Intl.NumberFormat("id-ID");

  return (
    <div className="bg-white py-3 px-5 rounded shadow">
      <div className="p-3 border-b font-medium">
        <div className="text-sm text-gray-400">Project Name</div>
        {name}
      </div>
      <div className="p-3">
        <div className="text-sm text-gray-400 font-medium">Donation Amount</div>
        {"Rp. " + IDRConvert.format(donate)}
      </div>
    </div>
  );
};
