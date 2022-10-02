import React, { useState } from "react";
import { Table } from "../../component/table/Table";
import Navbar from "../../component/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DATA_PROJECT } from "../../graphql/query/Query";

export default function MyProject() {
  let navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_DATA_PROJECT);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    alert("Error");
    return null;
  }

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
          <Table column={column} data={data} donateHidden />
        </div>
      </div>
    </>
  );
}
