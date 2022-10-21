import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen md:p-16 bg-gray-200 p-3 ">
      <div className="grid grid-cols-1 gap-2">
        <img src="/assets/not-found2.png" alt="notFound" />
        <p className="font-semibold text-center">Page Not Found</p>
        <button
          onClick={handleBack}
          className="bg-green-500 rounded-lg hover:bg-green-600 text-white font-semibold py-2 transition-all text-lg mx-24 md:mx-28"
        >
          Back
        </button>
      </div>
    </div>
  );
}
