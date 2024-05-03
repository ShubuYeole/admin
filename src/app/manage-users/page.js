"use client";
import { useEffect, useState } from 'react';
import Wrapper from "../components/wrapper";
// import { users } from '../data/data';

const Table = () => {
  const [data, setData] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://51.79.225.217:5001/api/users');
        const jsonData = await response.json();
  
        // Update the status for each user in the fetched data
        const updatedData = jsonData.map(user => ({
          ...user,
          status: user.account_status === 'active' ? 'Active' : 'Inactive'
        }));
  
        setData(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  

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
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = currentPage * entriesPerPage;
  const filteredData = data.slice(startIndex, endIndex);


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
                  <td className="px-3 py-2 text-left text-sm">{item._id}</td>
                  <td className="px-3 py-2 text-left text-sm">{item.name}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.email}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.customer_address}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.mobile_no}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.account_type}</td>
                  <td className="px-4 py-2 text-left text-sm">
                  <div id={`statusToggle_${item._id}`} className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${item.status === "Active" ? "bg-green-600" : "bg-red-600"}`}></div>
                </td>
                  <td className="px-4 py-2 text-left text-sm">
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

