import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_DATA_PROJECT_BY_ID } from "../../graphql/query/Query";

export default function DetailProject() {
  let navigate = useNavigate();

  const IDRConvert = Intl.NumberFormat("id-ID");
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_DATA_PROJECT_BY_ID, {
    variables: { id },
  });

  const col = data?.project_by_pk;

  if (isNaN(id)) {
    return "Not Found";
  }

  if (loading) {
    return "Loading...";
  }

  if (error) {
    alert("Error");
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="p-6">
        <button
          className="text-5xl text-green-500 cursor-pointer hover:text-green-600 transition-all"
          onClick={handleBack}
        >
          <ion-icon name="arrow-back-circle"></ion-icon>
        </button>
      </div>
      <div className="flex items-center justify-center md:p-0 bg-gray-200 p-5">
        <div className="bg-white px-5 pt-10 pb-5 md:px-5 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">{col.name}</h1>
          <div className="grid grid-cols-3 gap-4">
            <h1 className="mb-1 col-span-2 md:col-span-1">
              <div className="font-semibold text-gray-400">Start Date:</div>
              {col.startdate}
            </h1>
            <h1 className="mb-1 md:col-span-2">
              <div className="font-semibold text-gray-400">Dateline:</div>
              {col.dateline}
            </h1>
            <h1 className="mb-1 col-span-2 md:col-span-1">
              <div className="font-semibold text-gray-400">Target:</div>
              {"Rp. " + IDRConvert.format(col.target)}
            </h1>
            <h1 className="mb-1 md:col-span-2">
              <div className="font-semibold text-gray-400">Total:</div>
              {"Rp. " + IDRConvert.format(col.total)}
            </h1>
            <div className="border rounded p-5 col-span-3">
              <div className="font-semibold text-gray-400">Creator Name</div>
              <span className="text-xl">{col.creator}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
