'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";

export default function EcycleDetail({ params }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [status, setStatus] = useState("Active"); // Initialize with a default value
  const [currentImageType, setCurrentImageType] = useState(null);
  const [evCategory, setEvCategory] = useState('Top EVs');
  const [ecycleData, setEcycleData] = useState(null);

  useEffect(() => {
    const fetchEcycleData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${params.id}`);
        const data = await response.json();
        setEcycleData(data);
      } catch (error) {
        console.error('Error fetching ecycle data:', error);
      }
    };

    fetchEcycleData();
  }, [params.id]);

  // If ecycle data is not loaded yet, display a loading message
  if (!ecycleData) {
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
    const images = ecycleData[currentImageType + 'Images'];
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    const images = ecycleData[currentImageType + 'Images'];
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
          {ecycleData[type + 'Images'].map((image, index) => (
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
          <h1 className="text-2xl font-bold mb-4">Ecycle Details</h1>
          <div className="grid grid-cols-1 gap-4">
            {['interior', 'front', 'side', 'back'].map((type) => renderImages(type))}
          </div>
        </div>





        <div className="grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Brand</label>
            <input
              type="text"
              value={ecycleData.brand}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Model</label>
            <input
              type="text"
              value={ecycleData.model}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Variant</label>
            <input
              type="text"
              value={ecycleData.variant}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Location</label>
            <input
              type="text"
              value={ecycleData.location}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
            <input
              type="text"
              value={ecycleData.batteryPower}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Color</label>
            <input
              type="text"
              value={ecycleData.color}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Registration Year</label>
            <input
              type="text"
              value={ecycleData.registrationYear}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
            <input
              type="text"
              value={ecycleData.ownerName}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
            <input
              type="text"
              value={ecycleData.ownerContact}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
            <input
              type="text"
              value={ecycleData.ownerEmail}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>
          
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Owner City</label>
            <input
              type="text"
              value={ecycleData.ownerCity}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
          </div>

        <div class>
  <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="text"
            value={`${ecycleData.price.value} ${ecycleData.price.currency}`}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            readOnly
          />
        </div>


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
          <label className="block text-gray-700 font-bold mb-2"> Description</label>
          <textarea
            value={ecycleData.vehicleDescription}
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
            currentImageType === 'interior'
              ? ecycleData.interiorImages[photoIndex]
              : currentImageType === 'front'
              ? ecycleData.frontImages[photoIndex]
              : currentImageType === 'side'
              ? ecycleData.sideImages[photoIndex]
              : ecycleData.backImages[photoIndex]
          }
          nextSrc={
            currentImageType === 'interior'
              ? ecycleData.interiorImages[(photoIndex + 1) % ecycleData.interiorImages.length]
              : currentImageType === 'front'
              ? ecycleData.frontImages[(photoIndex + 1) % ecycleData.frontImages.length]
              : currentImageType === 'side'
              ? ecycleData.sideImages[(photoIndex + 1) % ecycleData.sideImages.length]
              : ecycleData.backImages[(photoIndex + 1) % ecycleData.backImages.length]
          }
          prevSrc={
            currentImageType === 'interior'
              ? ecycleData.interiorImages[(photoIndex + ecycleData.interiorImages.length - 1) % ecycleData.interiorImages.length]
              : currentImageType === 'front'
              ? ecycleData.frontImages[(photoIndex + ecycleData.frontImages.length - 1) % ecycleData.frontImages.length]
              : currentImageType === 'side'
              ? ecycleData.sideImages[(photoIndex + ecycleData.sideImages.length - 1) % ecycleData.sideImages.length]
              :ecycleData.backImages[(photoIndex + ecycleData.backImages.length - 1) % ecycleData.backImages.length]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
        />
      )}
      </Wrapper>
    
  );
}
