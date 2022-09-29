import React from "react";
import { Table } from "../../component/table/Table";
import Navbar from "../../component/navbar/Navbar";

export default function MyProject() {
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

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 h-screen md:px-16">
        <div className="mt-16">
          <h1 className="text-xl font-bold mb-3">My Project</h1>
          <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
      </div>
    </>
  );
}
