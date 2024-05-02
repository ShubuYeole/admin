'use client'
import React, { useState } from 'react';
import Wrapper from "../components/wrapper";
import Link from "next/link";

const Table = () => {
  const data = [
    {
      id: 1,
      ownerName: "Tanmay Pawar",
      ownerContact: "0901 117 7249",
      ownerEmail: "tanmayrp97@gmail.com",
      ownerCity: "Kharalwadi",
      vehicleType: "ebike",
      brand: "haja",
      model: "hsns",
      variant: "bav",
      location: "Pune",
      rtoCode: "mh122",
      batteryPower: "4566",
      kilometresDriven: "45677",
      bodyType: "",
      color: "Red",
      registrationYear: "2024",
      vehicleDescription: "babanan",
      transmissionType: "Manual",
  interiorImages: [
    "uploads\\interiorImages-1712900943165",
    "uploads\\interiorImages-1712900943165",
    "uploads\\interiorImages-1712900943166"
  ],
  frontImages: [
    "uploads\\frontImages-1712900943154",
    "uploads\\frontImages-1712900943157"
  ],
  sideImages: [
    "uploads\\sideImages-1712900943158",
    "uploads\\sideImages-1712900943158",
    "uploads\\sideImages-1712900943159"
  ],
  backImages: [
    "uploads\\backImages-1712900943159",
    "uploads\\backImages-1712900943160",
    "uploads\\backImages-1712900943165"
  ],
  price: {
    "currency": "USD",
    "value": 45555555
  },
},
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('Approved'); // Initialize status state

  const handleDelete = (id) => {
    // Perform deletion logic here
    alert(`Item with ID ${id} deleted`);
  };



  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset current page when changing entries per page
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const totalPages = Math.ceil(data.length / entriesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const filteredData = data.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  return (
    <Wrapper>
      <div className="container mx-auto mt-32">
        <div className="flex justify-between mb-6">
          <div>
            <select value={entriesPerPage} onChange={handleEntriesPerPageChange} className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-1 px-3">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            &nbsp;
          </div>
          <div className="flex items-center">
            <div className="mr-2">
              <input
                type="text"
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-1 px-3"
                placeholder="Search..."
              />
              <button className="px-3 py-1"> {/* Icon for search button (optional) */}</button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
              Add New
            </button>

          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="relative">
          <table className="table w-full shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Model</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Range</th>
                {/* <th className="px-4 py-2 text-left text-sm font-medium">T</th> */}
                <th className="px-4 py-2 text-left text-sm font-medium">Request</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-3 py-2 text-left text-sm">{item.id}</td>
                  <td className="px-3 py-2 text-left text-sm">{item.brand}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.model}</td>
                  <td className="px-4 py-2 text-left text-sm">{item. kilometresDriven}</td>
                  {/* <td className="px-4 py-2 text-left text-sm">{item.type}</td> */}
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
                  <td className="px-2 py-2 text-left text-sm">
                    <Link 
              href={`/ecycle-detail/${item.id}`} 
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 mr-1 rounded" 
              onClick={() => handleView(item.id)}
               >
              <span className="mdi mdi-eye"></span> 
              </Link>

                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-1 rounded" onClick={() => handleDelete(item.id)}>
                      <span className="mdi mdi-delete"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto mt-4 flex justify-end">
        <div className="flex justify-end">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded mr-2"
          >
            Prev
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
              } font-bold py-1 px-2 rounded mx-1`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded ml-2"
          >
            Next
          </button>
        </div>
      </div>






    </Wrapper>
  );
};

export default Table;
