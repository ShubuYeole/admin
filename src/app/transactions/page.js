'use client'
import React, { useState } from 'react';
import Wrapper from "../components/wrapper";
import { users } from '../data/data';

const Table = () => {
  const data = [
    {
      id: 1,
      name: "Aparna",
      account_no: 1234,
      payment_status: "Failed",
      transaction_date: '2-03-2024',
      amount: 56000000
    },
    {
      id: 2,
      name: "Shubham",
      account_no: 7257,
      payment_status: "Pending",
      transaction_date: '5-04-2024',
      amount: 9700000
    },
    // other data objects
  ];

  const [popupData, setPopupData] = useState(null); // State to manage popup data

  const handleDelete = (id) => {
    // Perform deletion logic here
    alert(`EV with ID ${id} deleted`);
  };

  const handleViewDetails = (id) => {
    // Find the data corresponding to the clicked ID
    const item = data.find(item => item.id === id);
    setPopupData(item); // Set the popup data
  };

  const handleClosePopup = () => {
    setPopupData(null); // Close the popup
  };

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
        <table className="table w-full shadow-md rounded-lg overflow-hidden ">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
              <th className="px-3 py-2 text-left text-sm font-medium">Invoice id</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Transaction id</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Payment method</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 border-b border-gray-200">
                <td className="px-3 py-2 text-left text-sm">{item.id}</td>
                <td className="px-3 py-2 text-left text-sm">{item.invoice_id}</td>
                <td className="px-4 py-2 text-left text-sm">{item.transaction_id}</td>
                <td className="px-4 py-2 text-left text-sm">{item.payment_method}</td>
                <td className="px-4 py-2 text-left text-sm">{item.transaction_date}</td>
                <td className="px-4 py-2 text-left text-sm">{item.amount}</td>
                <td className="px-4 py-2 text-left text-sm">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-1 rounded" onClick={() => handleDelete(item.id)}>
  <span className="mdi mdi-delete"></span>
</button>
                  
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleViewDetails(item.id)} // Modified to call handleViewDetails
                    
                  >

<span className="mdi mdi-eye"></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for transaction details */}
      {popupData && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Transaction Details</h2>
              <button onClick={handleClosePopup} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <p>ID: {popupData.id}</p>
              <p>Name: {popupData.name}</p>
              <p>Account No: {popupData.account_no}</p>
              <p>Payment Status: {popupData.payment_status}</p>
              <p>Transaction Date: {popupData.transaction_date}</p>
              <p>Amount: {popupData.amount}</p>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Table;
