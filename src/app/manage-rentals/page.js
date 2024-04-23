"use client"
import React,{useState}from 'react';
import Wrapper from "../components/wrapper";
import { topProperties } from '../data/data';

const Table = () => {
  const data = [
    {
      id: 1,
      carAvailableForRent: "No",
      VehicleRented: 'BMW iX',
      UserName: 'Aparna',
      TotalHours: '20',
    },
    {
      id: 2,
      VehicleRented: 'Scott Strike',
      carAvailableForRent: "No",
      model: 'Strike',
      UserName: 'HighIQ',
      TotalHours: '10',
    },
    {
      id: 3,
      VehicleRented: 'Scooter',
      carAvailableForRent: "No",
      model: 'EM055',
      UserName: 'Tanmay',
      TotalHours: '25',
    },
    {
      id: 4,
      
      VehicleRented: 'AUDI',
      carAvailableForRent: "No",
      model: 'E-Tron',
      UserName: 'Yash',
      TotalHours: '15',
    },
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
          <div>
            <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded mr-2">Prev</button>
            <button onClick={() => handlePageChange('next')} disabled={currentPage * entriesPerPage >= data.length} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded">Next</button>
          </div>
        </div>
        </div>



    <div className="container mx-auto mt-32">
    <div className="flex justify-end mb-6 ">
    <div className="flex">
      {/* Empty flex item to push the button to the right */}
      <div className="flex-grow"></div>
      <a href="/add-property" >
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ">
            Add New
          </button>
          </a>
          
          
          </div>
          </div>
 <div>          <div className="relative">
               <div className="flex justify-end mb-6 ">
            <input
              type="text"
              className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-1 px-3"
              placeholder="Search..."
            />
            <button className="absolute right-0 top-0 bottom-0 px-3 py-1">
              {/* Icon for search button (optional) */}
            </button>
            </div>
           </div></div>

      <table className="table w-full shadow-md rounded-lg overflow-hidden ">

        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
            <th className="px-3 py-2 text-left text-sm font-medium">Car Available For Rent</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Vehicle Rented</th>
            <th className="px-4 py-2 text-left text-sm font-medium">User Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium">TotalHours</th>
            
          </tr>
        </thead>
        <tbody>
          
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 border-b border-gray-200">
              <td className="px-3 py-2 text-left text-sm">{item.id}</td>
              <td className="px-3 py-2 text-left text-sm">{item.carAvailableForRent}</td>
              <td className="px-4 py-2 text-left text-sm">{item.VehicleRented}</td>
              <td className="px-4 py-2 text-left text-sm">{item.UserName}</td>
              <td className="px-4 py-2 text-left text-sm">{item.TotalHours}</td>
              <td className="px-4 py-2 text-left text-sm">
              <div class="flex space-x-4 mb-6 text-sm font-medium">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">View</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Booked</button> 

               </div> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Wrapper>
  );
};

export default Table;
