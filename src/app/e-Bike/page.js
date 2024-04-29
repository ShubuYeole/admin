"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Wrapper from "../components/wrapper";

const Table = () => {
  const [data, setData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('Approved');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://51.79.225.217:5001/api/vehicles/ebike');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    alert(`Item with ID ${id} deleted`);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
  };

  const handlePageChange = (action) => {
    if (action === 'prev') {
      setCurrentPage(currentPage => Math.max(1, currentPage - 1));
    } else if (action === 'next') {
      setCurrentPage(currentPage => Math.min(Math.ceil(data.length / entriesPerPage), currentPage + 1));
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const filteredData = data.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  return (
    <Wrapper>
      <div className="container mx-auto mt-32">
        {/* Entry per page selector */}
        {/* Pagination controls */}
      </div>

      <div className="container mx-auto mt-4">
        <div className="relative">
          <table className="table w-full shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium">Owner Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Model</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Variant</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Request</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item._id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-3 py-2 text-left text-sm">{item._id}</td>
                  <td className="px-3 py-2 text-left text-sm">{item.ownerName}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.model}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.variant}</td>
                  <td className="px-4 py-2 text-left text-sm">
                    <div className="relative inline-block w-full">
                      <select
                        value={status}
                        onChange={handleStatusChange}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      >
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8 1.5-1.5L10 9l7.5-7.5L18 4z"/></svg>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-left text-sm">
                    <Link href={`/bike-detail/${item._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-1 rounded">
                        View
                      </button>
                    </Link>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-1 rounded" onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Table;
