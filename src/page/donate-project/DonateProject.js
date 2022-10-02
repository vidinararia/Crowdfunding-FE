import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";
import { UPDATE_DATA_PROJECT_BY_ID } from "../../graphql/mutation/Mutation";
import {
  GET_DATA_PROJECT,
  GET_DATA_PROJECT_BY_ID,
} from "../../graphql/query/Query";

export default function DonateProject() {
  let navigate = useNavigate();

  const [donate, setDonate] = useState({ total: 0 });
  const IDRConvert = Intl.NumberFormat("id-ID");
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_DATA_PROJECT_BY_ID, {
    variables: { id },
  });
  const [updateTotal, { loading: loadingUpdate }] = useMutation(
    UPDATE_DATA_PROJECT_BY_ID,
    { refetchQueries: [GET_DATA_PROJECT] }
  );

  const col = data?.project_by_pk;

  if (isNaN(id)) {
    return "Not Found";
  }

  if (loading || loadingUpdate) {
    return "Loading...";
  }

  if (error) {
    alert("Error");
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setDonate(e.target.value);
  };

  const handleDonate = (e) => {
    e.preventDefault();
    updateTotal({
      variables: {
        id: col.id,
        total: donate.total,
      },
    });
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
          <div className="md:grid md:grid-cols-3 md:gap-4 gap-0">
            <h1 className="mb-1">
              <div className="font-semibold text-gray-400">Start Date:</div>
              {col.startdate}
            </h1>
            <h1 className="mb-1 md:col-span-2 col-span-1">
              <div className="font-semibold text-gray-400">Dateline:</div>
              {col.dateline}
            </h1>
            <h1 className="mb-1">
              <div className="font-semibold text-gray-400">Target:</div>
              {"Rp. " + IDRConvert.format(col.target)}
            </h1>
            <h1 className="mb-1 md:col-span-2 col-span-1">
              <div className="font-semibold text-gray-400">Total:</div>
              {"Rp. " + IDRConvert.format(col.total)}
            </h1>
            <div className="border rounded p-5 md:col-span-3 col-span-1">
              <div className="font-semibold text-gray-400">Creator Name</div>
              <span className="text-xl">{col.creator}</span>
            </div>
          </div>
          <p className="text-gray-400 mt-3 mb-2">
            Donate how much do you want for this project.
          </p>
          <InputForm
            type={"text"}
            name={"total"}
            label={"Donate"}
            placeholder={"Rp. 10.000"}
            value={donate.total}
            onChange={handleChange}
          />
          <button
            onClick={handleDonate}
            className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
