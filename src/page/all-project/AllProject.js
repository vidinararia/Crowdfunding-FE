import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { Table } from "../../component/table/Table";

export default function Dashboard() {
  let navigate = useNavigate();

  const theadData = ["Name", "Target", "Total", "Deadline"];

  const tbodyData = [
    {
      id: "1",
      items: ["Project1", "100.000", "0", "01/01/2020"],
    },
    {
      id: "2",
      items: ["Project2", "50.000", "0", "01/01/2020"],
    },
    {
      id: "3",
      items: ["Project3", "1.200.000", "0", "01/01/2020"],
    },
    {
      id: "4",
      items: ["Project3", "1.200.000", "0", "01/01/2020"],
    },
    {
      id: "5",
      items: ["Project3", "1.200.000", "0", "01/01/2020"],
    },
  ];

  const handleCreate = () => {
    navigate("/create-project");
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <button
            className="bg-green-500 rounded hover:bg-green-600 text-white font-semibold md:py-2 md:px-6 px-4 py-2 mb-3 transition-all"
            onClick={handleCreate}
          >
            Create Project
          </button>
          <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
      </div>
    </>
  );
}
