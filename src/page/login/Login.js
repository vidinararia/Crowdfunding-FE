import React from "react";
import { InputForm } from "../../component/input-form/InputForm";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-2">Login Akun</h1>
        <p className="text-gray-400 mb-5">
          Silahkan Login jika sudah terdaftar.
        </p>
        <InputForm label={"E-mail"} placeholder={"E-mail"} />
        <InputForm
          label={"Password"}
          type={"password"}
          placeholder={"Password"}
        />
        <button className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all">
          Login
        </button>
      </div>
    </div>
  );
}
