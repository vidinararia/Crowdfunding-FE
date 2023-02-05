import React, { useState, useEffect } from "react";
import { Table } from "../../component/table/Table";
import Navbar from "../../component/navbar/Navbar";
import axios from "axios";
import { baseApi } from "../../utils/api/Api";
import { useNavigate } from "react-router-dom";

export default function MyProject() {
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  const handlePageCreate = () => {
    navigate("/create-project");
  };

  useEffect(() => {
    axios
      .get(baseApi + "all-chain")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const column = [
    { field: "user_id", header: "User Id" },
    { field: "funding_id", header: "Funding Id" },
    { field: "amount", header: "Amount" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <h1 className="text-xl font-bold mb-3">All Funding</h1>
          <button
            className="bg-green-500 rounded hover:bg-green-600 text-white font-semibold md:py-2 md:px-6 px-4 py-2 mb-3 transition-all"
            onClick={handlePageCreate}
          >
            Create Project
          </button>
          <Table column={column} data={data} deleteHidden donateHidden />
        </div>
      </div>
    </>
  );
}
