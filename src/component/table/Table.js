import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DELETE_DATA_PROJECT_BY_ID } from "../../graphql/mutation/Mutation";
import { GET_DATA_PROJECT } from "../../graphql/query/Query";

export const Table = ({
  column,
  data,
  viewHidden,
  deleteHidden,
  donateHidden,
}) => {
  let navigate = useNavigate();

  const IDRConvert = Intl.NumberFormat("id-ID");

  const [deleteProject, { loading }] = useMutation(DELETE_DATA_PROJECT_BY_ID, {
    refetchQueries: [GET_DATA_PROJECT],
  });

  if (loading) {
    return "Loading...";
  }

  return (
    <div className="overflow-auto shadow">
      <table className="w-full">
        <thead>
          <tr className="border border-gray-300 bg-gray-50">
            {column.map((col) => (
              <td className="p-3 font-semibold tracking-wide text-left text-gray-400">
                {col.header}
              </td>
            ))}
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data?.project.map((col) => (
            <tr key={col.id} className="bg-white border border-gray-300 ">
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.name}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {"Rp. " + IDRConvert.format(col.target)}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {"Rp. " + IDRConvert.format(col.total)}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.startdate}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.dateline}
              </td>
              <td className="w-52 text-center p-2">
                <button
                  hidden={viewHidden}
                  className="py-1 px-3 bg-blue-300 hover:bg-blue-500 hover:shadow text-white rounded transition-all"
                  onClick={() =>
                    navigate(`/my-project/detail-project/${col.id}`)
                  }
                >
                  View
                </button>
                <button
                  hidden={deleteHidden}
                  className="py-1 px-3 bg-red-400 hover:bg-red-500 hover:shadow text-white rounded ml-1 transition-all"
                  onClick={() => {
                    deleteProject({
                      variables: {
                        id: col.id,
                      },
                    });
                  }}
                >
                  Delete
                </button>
                <button
                  hidden={donateHidden}
                  className="py-1 px-3 bg-green-400 hover:bg-green-500 hover:shadow text-white rounded ml-1 transition-all"
                  onClick={() => navigate(`/donate-project/${col.id}`)}
                >
                  Donate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
