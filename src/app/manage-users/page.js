"use client";
import { useEffect, useState } from 'react';
import Wrapper from "../components/wrapper";
// import { users } from '../data/data';

const Table = () => {
  const [data, setData] = useState([]);
  const [editedUserId, setEditedUserId] = useState(null);
  const [editedData, setEditedData] = useState({});

  // Fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:5000/api/users');
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

  const handleEdit = (user) => {
    setEditedUserId(user._id);
    setEditedData(user);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`https://localhost:5000/api/user/${editedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        const updatedData = data.map(user => {
          if (user._id === updatedUser._id) {
            return updatedUser;
          }
          return user;
        });
        setData(updatedData);
        setEditedUserId(null);
        setEditedData({});
      } else {
        console.error('Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
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
              <button className="px-3 py-1">{/* Icon for search button (optional) */}</button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
              Add New
            </button>
            <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded mr-2">Prev</button>
            <button onClick={() => handlePageChange('next')} disabled={currentPage * entriesPerPage >= data.length} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded">Next</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 overflow-x-auto">
        <div className="relative">
          <table className="table w-full shadow-md rounded-lg overflow-hidden ">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Address</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Mobile No</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Account</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Edit</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100 border-b border-gray-200">
                  {editedUserId === user._id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={editedData.name}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="email"
                          value={editedData.email}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="customer_address"
                          value={editedData.customer_address}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="mobile_no"
                          value={editedData.mobile_no}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="account_type"
                          value={editedData.account_type}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={() => {
                          setEditedUserId(null);
                          setEditedData({});
                        }}>Close</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.customer_address}</td>
                      <td>{user.mobile_no}</td>
                      <td>{user.account_type}</td>
                      <td>
                        <div
                          id={`statusToggle_${user._id}`}
                          className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${user.status === "Active" ? "bg-green-600" : "bg-red-600"}`}
                        ></div>
                      </td>
                      <td>
                        <button onClick={() => handleEdit(user)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-1 rounded">
                          Edit
                        </button>
                      </td>
                    </>
                  )}
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
