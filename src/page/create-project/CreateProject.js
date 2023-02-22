import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";
import axios from "axios";
import { baseApi } from "../../utils/api/Api";
import { Select } from "../../component/select/Select";
import Swal from "sweetalert2";

export default function CreateProject() {
  const [selectId, setSelectId] = useState(0);
  const [fundingId, setFundingId] = useState(0);

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelect = (e) => {
    setSelectId(Number(e.target.value));
  };

  const handleFunding = (e) => {
    setFundingId(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fundingId <= 0) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Input Funding Id",
        showConfirmButton: true,
      });
      return;
    }
    if (selectId === 0) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Select Id",
        showConfirmButton: true,
      });
      return;
    }
    axios
      .post(baseApi + "send-fund", {
        user_id: selectId,
        funding_id: fundingId,
        amount: 0,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Funding has been made",
          showConfirmButton: true,
        }).then(() => {
          navigate("/");
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(baseApi + "all-chain")
      .then((res) => {
        let myMap = new Map([]);
        const data = res.data.data;
        data?.map((item) => {
          myMap.set(item.funding_id, "ada");
        });
        const result = myMap.has(fundingId);
        console.log(result);
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
      <div className="flex items-center justify-center bg-gray-200">
        <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">Create Funding</h1>
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <InputForm
              label={"Input Funding id"}
              type={"number"}
              onChange={handleFunding}
              value={fundingId}
            />
            <Select value={selectId} onChange={handleSelect} />
          </div>
          <button
            onClick={handleSubmit}
            className="md:w-full w-64 bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
