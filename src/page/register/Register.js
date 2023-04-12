import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";

export default function Register() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowPassword = () => {
    setShow((prevValue) => !prevValue);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirm((prevValue) => !prevValue);
  };

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
      <div className="flex items-center justify-center bg-gray-200 p-5 md:pd-0">
        <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-2">Register</h1>
          <p className="text-gray-400 mb-5">
            Silahkan isi data berikut dengan benar.
          </p>
          <InputForm label={"E-mail"} placeholder={"E-mail"} />
          <div className="relative">
            <InputForm
              label={"Password"}
              type={show ? "text" : "password"}
              placeholder={"Password"}
            />
            <div
              className="cursor-pointer text-xl text-gray-300 absolute top-10 right-3"
              onClick={handleShowPassword}
            >
              <ion-icon name={show ? "eye-off" : "eye"}></ion-icon>
            </div>
          </div>
          <div className="relative">
            <InputForm
              label={"Confirm Password"}
              type={showConfirm ? "text" : "password"}
              placeholder={"Confirm Password"}
            />
            <div
              className="cursor-pointer text-xl text-gray-300 absolute top-10 right-3"
              onClick={handleShowConfirmPassword}
            >
              <ion-icon name={showConfirm ? "eye-off" : "eye"}></ion-icon>
            </div>
          </div>
          <button className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all">
            Register
          </button>
          <p className="text-gray-500 mt-3">
            Sudah memiliki akun?{" "}
            <a
              href="/login"
              className="cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
            >
              Login disini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
