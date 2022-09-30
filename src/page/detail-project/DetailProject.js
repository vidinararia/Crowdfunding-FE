import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";

export default function DetailProject() {
  const formData = {
    total: 0,
  };

  const [data, setData] = useState(formData);
  const IDRConvert = Intl.NumberFormat("id-ID");

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
      <div className="flex items-center justify-center md:p-0 bg-gray-200">
        <div className="bg-white px-5 pt-10 pb-5 md:px-5 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">Project Title</h1>
          <div className="md:grid md:grid-cols-2 md:gap-3 gap-0">
            <h1 className="mb-1">
              <div className="font-semibold text-gray-400">Start Date:</div>
              01/01/2020
            </h1>
            <h1 className="mb-1">
              <div className="font-semibold text-gray-400">Dateline:</div>
              01/02/2020
            </h1>
            <h1 className="mb-1">
              <div className="font-semibold text-gray-400">Target:</div>
              {IDRConvert.format("100000")}
            </h1>
            <h1 className="mb-1">
              <div className="font-semibold text-gray-400">Total:</div>
              {IDRConvert.format("0")}
            </h1>
          </div>
          <p className="text-gray-400 mt-3 mb-2">
            Donate how much do you want for this project.
          </p>
          <InputForm
            type={"text"}
            name={"total"}
            label={"Donate"}
            placeholder={"Rp. 10.000"}
            value={data.total}
            onChange={handleChange}
          />
          <button className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
