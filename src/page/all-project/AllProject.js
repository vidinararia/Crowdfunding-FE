import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { Table } from "../../component/table/Table";

export default function Dashboard() {
  let navigate = useNavigate();

  const [data, setData] = useState([
    {
      name: "project1",
      target: "100000",
      amount: "0",
      startdate: "2022-10-02",
      dateline: "2022-10-02",
    },
  ]);

  const handleCreate = () => {
    navigate("/create-project");
  };

  const column = [
    { field: "name", header: "Name" },
    { field: "target", header: "Target" },
    { field: "amount", header: "Amount" },
    { field: "startdate", header: "Start Date" },
    { field: "dateline", header: "Dateline" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <h1 className="text-xl font-bold mb-3">All Project</h1>
          <button
            className="bg-green-500 rounded hover:bg-green-600 text-white font-semibold md:py-2 md:px-6 px-4 py-2 mb-3 transition-all"
            onClick={handleCreate}
          >
            Create Project
          </button>
          <Table column={column} data={data} deleteHidden viewHidden />
        </div>
      </div>
    </>
  );
}
