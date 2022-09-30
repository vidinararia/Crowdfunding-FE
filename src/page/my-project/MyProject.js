import React, { useState } from "react";
import { Table } from "../../component/table/Table";
import Navbar from "../../component/navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function MyProject() {
  let navigate = useNavigate();

  const [data, setData] = useState([
    {
      name: "project1",
      target: "100000",
      total: "0",
      startdate: "01/01/2020",
      dateline: "01/02/2020",
    },
  ]);

  const handleDetail = (id) => {
    navigate(`/detail-project/${id}`);
  };

  const column = [
    { field: "name", header: "Name" },
    { field: "target", header: "Target" },
    { field: "total", header: "Total" },
    { field: "startdate", header: "Start Date" },
    { field: "dateline", header: "Dateline" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <h1 className="text-xl font-bold mb-3">My Project</h1>
          <Table
            column={column}
            data={data}
            classDelete={
              "py-1 px-3 bg-red-400 hover:bg-red-500 hover:shadow text-white rounded ml-1 transition-all"
            }
            handleDetail={handleDetail}
          />
        </div>
      </div>
    </>
  );
}
