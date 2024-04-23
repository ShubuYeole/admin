"use client";
import React, { useState } from 'react';
import Wrapper from "../components/wrapper";
// import { users } from '../data/data';

const Table = () => {
  const data = [

    {
      id: 1,
      name: "Aparna",
      email: "aparna@gmail.com",
      customer_address: "Pune",
      mobile_no: "893642628",
      account_type: "user",
      
    },
    {
      id: 2,
      name: "Shubham",
      email: "shubu@gmail.com",
      customer_address: "Pune",
      mobile_no: "8936466666",
      account_type: "user",
      
    },
    {
      id: 3,
      name: "Tanmay",
      email: "tanmay@gmail.com",
      customer_address: "Mumbai",
      mobile_no: "878642628",
      account_type: "user",

    },
    {
      id: 4,
      name: "Rutuja",
      email: "rutuja@gmail.com",
      customer_address: "Pune",
      mobile_no: "893642488",
      account_type: "user",

    },
    {
      id: 5,
      name: "Vaishnavi",
      email: "vaish@gmail.com",
      customer_address: "Delhi",
      mobile_no: "893646453",
      account_type: "user",
      
    },
    {
      id: 6,
      name: "Pallavi",
      email: "pal@gmail.com",
      customer_address: "Bangalore",
      mobile_no: "893691128",
      account_type: "user",

    },
    {
      id: 7,
      name: "HighIQ",
      email: "IQ@gmail.com",
      customer_address: "Wadia college",
      mobile_no: "893642656",
      account_type: "user",
      
    }

  ];
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    // Perform deletion logic here
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

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === "Active" ? "Inactive" : "Active"));
  };


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
            &nbsp;entries per page
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
            <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded mr-2">Prev</button>
            <button onClick={() => handlePageChange('next')} disabled={currentPage * entriesPerPage >= data.length} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded">Next</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="relative">
          <table className="table w-full shadow-md rounded-lg overflow-hidden ">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">email</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Address</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Mobile_no</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Account</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>

              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-3 py-2 text-left text-sm">{item.id}</td>
                  <td className="px-3 py-2 text-left text-sm">{item.name}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.email}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.customer_address}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.mobile_no}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.account_type}</td>
                  <td className="px-4 py-2 text-left text-sm">
                  <div className="mb-4 flex items-center">

                     
               <div className="mb-4 flex items-center">

                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={status === "Active"}
                    onChange={toggleStatus}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {status}
                  </span>
                </label>
              </div>
              </div>
            
            
                  </td>
                  <td className="px-4 py-2 text-left text-sm">


                    
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-1 rounded" onClick={() => handleDelete(item.id)}>
  <span className="mdi mdi-delete"></span>
</button>


<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-1 rounded">
                      <span className="mdi mdi-eye"></span>
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
