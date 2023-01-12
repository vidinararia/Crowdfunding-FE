import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseApi } from "../../utils/api/Api";
import NotFound from "../not-found/NotFound";
import { Card } from "../../component/card/Card";

export default function DetailProject() {
  let navigate = useNavigate();

  const [dataRaised, setDataRaised] = useState([]);
  const [dataFunder, setDataFunder] = useState([]);
  const IDRConvert = Intl.NumberFormat("id-ID");
  const params = useParams();
  const { funding_id } = params;

  useEffect(() => {
    axios
      .get(baseApi + `crowd-funding/${funding_id}/total-fund`)
      .then((res) => {
        setDataRaised(res.data.data);
        setDataFunder(res.data.data.funders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isNaN(funding_id)) {
    return <NotFound />;
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
          <h1 className="text-3xl font-bold mb-2">name</h1>
          <div className="grid grid-cols-3 gap-4">
            <h1 className="mb-1 col-span-2 md:col-span-1">
              <div className="font-semibold text-gray-400">Start Date:</div>
              2022-10-02
            </h1>
            <h1 className="mb-1 md:col-span-2">
              <div className="font-semibold text-gray-400">Dateline:</div>
              2022-10-02
            </h1>
            <h1 className="mb-1 col-span-2 md:col-span-1">
              <div className="font-semibold text-gray-400">Total:</div>
              {"Rp. " + IDRConvert.format(dataRaised?.total_raised)}
            </h1>
            <div className="border rounded p-5 col-span-3">
              <div className="font-semibold text-gray-400">Creator Name</div>
              <span className="text-xl">creator name</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-xl font-bold mb-3 px-5 md:px-16">My Project</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 p-5 md:px-16 bg-gray-200">
        {dataFunder.map((item) => (
          <Card
            user_id={item?.user_id}
            raise_by_funder={item?.raised_by_funder}
          />
        ))}
      </div>
    </div>
  );
}
