import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../component/input-form/InputForm";
import { INSERT_DATA_PROJECT_BY_ID } from "../../graphql/mutation/Mutation";
import { GET_DATA_PROJECT } from "../../graphql/query/Query";

export default function CreateProject() {
  const formData = {
    name: "",
    creator: "",
    target: 0,
    startdate: "",
    dateline: "",
  };

  const [data, setData] = useState(formData);
  const [insertProject, { loading }] = useMutation(INSERT_DATA_PROJECT_BY_ID, {
    refetchQueries: [GET_DATA_PROJECT],
  });

  let navigate = useNavigate();

  if (loading) {
    return "Loading...";
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertProject({
      variables: {
        object: {
          name: data.name,
          creator: data.creator,
          startdate: data.startdate,
          dateline: data.dateline,
          target: data.target,
        },
      },
    });
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="p-6">
        <button
          className="text-5xl text-green-500 cursor-pointer hover:text-green-600 transition-all"
          onClick={handleBack}
        >
          <ion-icon name="arrow-back-circle"></ion-icon>
        </button>
      </div>
      <div className="flex items-center justify-center bg-gray-200 py-5">
        <div className="bg-white px-5 py-10 md:px-10 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-2">Create Project</h1>
          <p className="text-gray-400 mb-5">
            Fill this form to create project.
          </p>
          <InputForm
            label={"Project Name"}
            placeholder={"Project Name"}
            type={"text"}
            name={"name"}
            value={data.name}
            onChange={handleChange}
          />
          <InputForm
            label={"Creator Name"}
            placeholder={"Creator Name"}
            type={"text"}
            name={"creator"}
            value={data.creator}
            onChange={handleChange}
          />
          <InputForm
            label={"Target"}
            placeholder={"Rp. 1.000.000"}
            type={"number"}
            name={"target"}
            value={data.target}
            onChange={handleChange}
          />
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <InputForm
              label={"Start Date"}
              type={"date"}
              name={"startdate"}
              value={data.startdate}
              onChange={handleChange}
            />
            <InputForm
              label={"End Date"}
              type={"date"}
              name={"dateline"}
              value={data.dateline}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 py-2 text-lg text-white font-bold rounded-xl mt-3 hover:bg-green-400 transition-all"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
