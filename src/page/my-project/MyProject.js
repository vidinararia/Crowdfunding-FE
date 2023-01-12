import React, { useState, useEffect } from "react";
import { Table } from "../../component/table/Table";
import Navbar from "../../component/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseApi } from "../../utils/api/Api";

export default function MyProject() {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  // const [data, setData] = useState([
  //   {
  //     name: "project1",
  //     target: "100000",
  //     amount: "0",
  //     startdate: "2022-10-02",
  //     dateline: "2022-10-02",
  //   },
  // ]);

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
          <h1 className="text-xl font-bold mb-3">My Project</h1>
          <Table column={column} data={data} deleteHidden donateHidden />
        </div>
      </div>
    </>
  );
}
