import React from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";

export default function CreateProject() {
  let navigate = useNavigate();

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
      <div className="flex items-center justify-center md:p-0 bg-gray-200">
        <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">Create Project</h1>
          <p className="text-gray-400 mb-5">
            Fill this form to create project.
          </p>
          <InputForm label={"Name"} placeholder={"Name"} type={"text"} />
          <InputForm
            label={"Target"}
            placeholder={"Rp. 1.000.000"}
            type={"text"}
          />
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <InputForm label={"Start Date"} type={"date"} />
            <InputForm label={"End Date"} type={"date"} />
          </div>
          <button className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
