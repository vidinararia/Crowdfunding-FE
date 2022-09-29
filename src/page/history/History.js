import React from "react";
import Navbar from "../../component/navbar/Navbar";

export default function History() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <h1 className="text-xl font-bold mb-3">History</h1>
        </div>
      </div>
    </>
  );
}
