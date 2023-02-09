import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";
import axios from "axios";
import { baseApi } from "../../utils/api/Api";

export default function CreateProject() {
  const [amount, setAmount] = useState(0);

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handeAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(baseApi + "all-chain")
      .then((res) => {
        // setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div className="flex items-center justify-center bg-gray-200 py-5">
        <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">Create Funding</h1>
          <InputForm
            label={"Amount"}
            placeholder={"Rp. 1.000.000"}
            type={"number"}
            name={"amount"}
            value={amount}
            onChange={handeAmount}
          />
          <button
            onClick={handleSubmit}
            className="md:w-80 w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
