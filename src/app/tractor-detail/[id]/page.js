"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";


const TractorDetail = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [status, setStatus] = useState("Active"); // Initialize with a default value
  const [currentImageType, setCurrentImageType] = useState(null);
  const [evCategory, setEvCategory] = useState('Top EVs');
  const [tractorData, setTractorData] = useState(null);

  useEffect(() => {
    // Fetch bike details based on the ID from the API
    const fetchTractorData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${params.id}`);
        const jsonData = await response.json();
        setTractorData(jsonData);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchTractorData();
  }, [params.id]);

  if (!tractorData) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (index, imageType) => {
    setPhotoIndex(index);
    setCurrentImageType(imageType);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };



  

  const goToPrevious = () => {
    const images = tractorData[currentImageType + 'Images'];
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    const images = tractorData[currentImageType + 'Images'];
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleEvCategoryChange = (event) => {
    setEvCategory(event.target.value);
  };

  // Function to render images based on type
  const renderImages = (type) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">{`${type.charAt(0).toUpperCase() + type.slice(1)} Images`}</label>
        <div className="flex space-x-2">
          {tractorData[type + 'Images'].map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index, type)}>
              <img src={image} width={200} height={150} alt={`${type.charAt(0).toUpperCase() + type.slice(1)} Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Wrapper>
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
        <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Tractor Details</h1>
          <div className="grid grid-cols-1 gap-4">
            {['interior', 'front', 'side', 'back'].map((type) => renderImages(type))}
          </div>
        </div>




  
  
        
              <div className="grid grid-cols-2 gap-5">
              
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Brand</label>
    <input
      type="text"
      value={tractorData.brand}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Model</label>
    <input
      type="text"
      value={tractorData.model}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Vehicle Type</label>
    <input
      type="text"
      value={vehicle.vehicleType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Variant</label>
    <input
      type="text"
      value={tractorData.variant}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Location</label>
    <input
      type="text"
      value={tractorData.location}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">RTO code</label>
    <input
      type="text"
      value={tractorData.rtoCode}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
    <input
      type="text"
      value={tractorData.batteryPower}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">kilometers Driven</label>
    <input
      type="text"
      value={tractorData.kilometresDriven}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Color</label>
    <input
      type="text"
      value={tractorData.color}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">BodyType</label>
    <input
      type="text"
      value={vehicle.bodyType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Registration Year</label>
    <input
      type="text"
      value={tractorData.registrationYear}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Transmission Type</label>
    <input
      type="text"
      value={TractorData.transmissionType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
    <input
      type="text"
      value={tractorData.ownerName}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
    <input
      type="text"
      value={tractorData.ownerContact}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
    <input
      type="text"
      value={tractorData.ownerEmail}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner City</label>
    <input
      type="text"
      value={tractorData.ownerCity}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
</div>



  <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="text"
            value={`${tractorData.price.value} ${tractorData.price.currency}`}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            readOnly
          />
        </div>
<div className="mb-4 relative">
  <label className="block text-gray-700 font-bold mb-2">EV Category</label>
  <div className="relative">
    <select
      value={evCategory}
      onChange={handleEvCategoryChange}
      className="appearance-none bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
    >
      <option value="Top EVs">Top EVs</option>
      <option value="Featured EVs">Featured EVs</option>
      <option value="New Arrivals">New Arrivals</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5 7l5 5 5-5z" />
      </svg>
    </div>
  </div>
</div>

              

                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Vehicle Description</label>
                <textarea
                  value={tractorData.vehicleDescription}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                  rows="4"
                 />
                </div>




                <div className="mb-4 relative">
  <label className="block text-gray-700 font-bold mb-2">Request</label>
  <div className="relative">
    <select
      value={status}
      onChange={handleStatusChange}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 pr-8" // Added pr-8 for padding on the right to accommodate the icon
    >
              <option value="Approve">Approve</option>
              <option value="Disapprove">Disapprove</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5 7l5 5 5-5z" />
      </svg>
    </div>
  </div>
</div>
           </section>
           {isOpen && (
          <Lightbox
            mainSrc={
              currentImageType === 'interior' ? tractorData.interiorImages[photoIndex] :
              currentImageType === 'front' ? tractorData.frontImages[photoIndex] :
              currentImageType === 'side' ? tractorData.sideImages[photoIndex] :
              tractorData.backImages[photoIndex]
            }
            nextSrc={
              currentImageType === 'interior' ? tractorData.interiorImages[(photoIndex + 1) % tractorData.interiorImages.length] :
              currentImageType === 'front' ? tractorData.frontImages[(photoIndex + 1) % tractorData.frontImages.length] :
              currentImageType === 'side' ? tractorData.sideImages[(photoIndex + 1) % tractorData.sideImages.length] :
              tractorData.backImages[(photoIndex + 1) % tractorData.backImages.length]
            }
            prevSrc={
              currentImageType === 'interior' ? tractorData.interiorImages[(photoIndex + tractorData.interiorImages.length - 1) % tractorData.interiorImages.length] :
              currentImageType === 'front' ? tractorData.frontImages[(photoIndex + tractorData.frontImages.length - 1) % tractorData.frontImages.length] :
              currentImageType === 'side' ? tractorData.sideImages[(photoIndex + tractorData.sideImages.length - 1) % tractorData.sideImages.length] :
              tractorData.backImages[(photoIndex + tractorData.backImages.length - 1) %tractorData.backImages.length]
            }
            onCloseRequest={closeLightbox}
            onMovePrevRequest={goToPrevious}
            onMoveNextRequest={goToNext}

        />
      )}
      </Wrapper>
  
  );
}
export default TractorDetail;
