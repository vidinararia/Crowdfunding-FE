import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

export const Table = ({
  column,
  data,
  viewHidden,
  deleteHidden,
  donateHidden,
}) => {
  let navigate = useNavigate();

  const IDRConvert = Intl.NumberFormat("id-ID");
  const [currenItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="overflow-auto">
      <table className="w-full shadow">
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
          {currenItems.map((col) => (
            <tr className="bg-white border border-gray-300 ">
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.user_id}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {col.funding_id}
              </td>
              <td className="p-3 text-sm whitespace-nowrap font-medium text-gray-700">
                {"Rp. " + IDRConvert.format(col.amount)}
              </td>
              <td className="w-52 text-center p-2">
                <button
                  hidden={viewHidden}
                  className="py-1 px-3 bg-blue-300 hover:bg-blue-500 hover:shadow text-white rounded transition-all"
                  onClick={() => navigate(`/detail-project/${col.funding_id}`)}
                >
                  View
                </button>
                <button
                  hidden={deleteHidden}
                  className="py-1 px-3 bg-red-400 hover:bg-red-500 hover:shadow text-white rounded ml-1 transition-all"
                  onClick={() => {}}
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
      {data.length === 0 && (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1">
            <img
              src="/assets/siemayer-doodle-trans.png"
              alt="notFound"
              className="object-contain h-[179px] w-[179px]"
            />
            <p className="font-bold text-center text-2xl">Data empty</p>
          </div>
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel={"next >"}
        previousLabel={"< previous"}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          "flex justify-end items-center list-none gap-[5px] pt-3 text-center "
        }
        pageClassName={
          "font-semibold rounded-full w-[30px] border hover:border-green-500 p-[4px] cursor-pointer text-sm"
        }
        previousLinkClassName={
          "font-semibold cursor-pointer p-[4px] hover:text-green-500"
        }
        nextLinkClassName={
          "font-semibold cursor-pointer p-[4px] hover:text-green-500"
        }
        activeClassName={
          "rounded border border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600 text-white p-[4px]"
        }
      />
    </div>
  );
};
