"use client";
import { useEffect, useState } from 'react';
import Wrapper from "../../components/wrapper";

const RentDetail = () => {
  const [rentData, setRentData] = useState(null);

  useEffect(() => {
    const fetchRentData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5000/api/view/rentev`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setRentData(jsonData[0]); // Assuming the API returns an array with one object, so selecting the first item
      } catch (error) {
        console.error('Error fetching rent details:', error);
      }
    };
  
    fetchRentData();
  }, []);

  return (
    <>
      <Wrapper>     
        <section className="relative md:pb-24 pb-16 mt-20 px-4">
          <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Rental Details</h1>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Image</label>
                {rentData && rentData.imageUrl && (
                  <img src={rentData.imageUrl} alt="Vehicle Image" className="w-full" />
                )}
              </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Brand</label>
                <input
                  type="text"
                  value={rentData ? rentData.brand : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Model</label>
                <input
                  type="text"
                  value={rentData ? rentData.model : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Vehicle Type</label>
                <input
                  type="text"
                  value={rentData ? rentData.bodyType : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">RTO code</label>
                <input
                  type="text"
                  value={rentData ? rentData.plateNo : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
                <input
                  type="text"
                  value={rentData ? rentData.batteryPower : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">kilometers Driven</label>
                <input
                  type="text"
                  value={rentData ? rentData.kilometresDriven : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
                <input
                  type="text"
                  value={rentData ? rentData.ownerName : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
                <input
                  type="text"
                  value={rentData ? rentData.ownerContact : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
                <input
                  type="text"
                  value={rentData ? rentData.ownerEmail : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Owner City</label>
                <input
                  type="text"
                  value={rentData ? rentData.ownerCity : ""}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                />
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default RentDetail;
