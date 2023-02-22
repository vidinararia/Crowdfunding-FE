import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseApi } from "../../utils/api/Api";
import NotFound from "../not-found/NotFound";
import { Card } from "../../component/card/Card";
import { InputForm } from "../../component/input-form/InputForm";
import Swal from "sweetalert2";
import { Select } from "../../component/select/Select";

export default function DetailProject() {
  let navigate = useNavigate();

  const params = useParams();
  const { funding_id } = params;
  const fund = parseInt(funding_id);
  const IDRConvert = Intl.NumberFormat("id-ID");

  const [amount, setAmount] = useState(0);
  const [selectId, setSelectId] = useState(0);
  const [dataRaised, setDataRaised] = useState([]);
  const [dataFunder, setDataFunder] = useState([]);

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

  const handleAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSelect = (e) => {
    setSelectId(Number(e.target.value));
  };

  const handleDonate = (e) => {
    e.preventDefault();
    if (amount < 500) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Minimun donate Rp. 500",
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
        funding_id: fund,
        amount: amount,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Thank for funding",
          showConfirmButton: true,
        }).then(() => {
          window.location.reload(false);
        });
      })
      .catch((err) => {
        console.log(err);
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
        <div className="bg-white px-5 pt-5 pb-5 md:px-5 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">{"Funding " + funding_id}</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded p-5 col-span-3">
              <div className="font-semibold text-gray-400">Total Donation:</div>
              <span className="text-xl">
                {"Rp. " + IDRConvert.format(dataRaised?.total_raised)}
              </span>
            </div>
          </div>
          <p className="text-gray-400 mt-3">
            Donate how much amount you want for this funding.
          </p>
          <InputForm
            type={"number"}
            name={"donate"}
            label={"Donate"}
            placeholder={"Rp. 10.000"}
            value={amount}
            onChange={handleAmount}
          />
          <Select value={selectId} onChange={handleSelect} />
          <button
            onClick={handleDonate}
            className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all"
          >
            Donate
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold px-5 md:px-16">Funder</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 p-5 md:px-16 bg-gray-200">
          {dataFunder.map((item) => (
            <Card
              key={item.user_id}
              user_id={item?.user_id}
              raise_by_funder={item?.raised_by_funder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
