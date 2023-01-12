import React from "react";

export const Card = ({ user_id, raise_by_funder }) => {
  const IDRConvert = Intl.NumberFormat("id-ID");

  return (
    <div className="bg-white py-3 px-5 rounded shadow">
      <div className="p-3 border-b font-medium">
        <div className="text-sm text-gray-400">Funder</div>
        {user_id}
      </div>
      <div className="p-3">
        <div className="text-sm text-gray-400 font-medium">
          Raised by Funder
        </div>
        {"Rp. " + IDRConvert.format(raise_by_funder)}
      </div>
    </div>
  );
};
