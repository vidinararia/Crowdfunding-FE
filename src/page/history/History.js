import React from "react";
import { Card } from "../../component/card/Card";
import Navbar from "../../component/navbar/Navbar";

export default function History() {
  const data = [
    { name: "Project1", donate: "10000" },
    { name: "Project2", donate: "5000" },
    { name: "Project3", donate: "5000" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <h1 className="text-xl font-bold mb-3">History</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            {data.map((item) => (
              <Card name={item.name} donate={item.donate} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
