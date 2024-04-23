'use client'
import React, { useState } from 'react';
import Wrapper from "../../components/wrapper";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const BikeDetails = [
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
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg"
    ],
    frontImages: [
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg"
    ],
    sideImages: [
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg"
    ],
    backImages: [
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg",
      "/images/property/BMW.jpeg"
    ],
    price: {
      currency: "INR",
      value: 45667
    },
  },
  // Add more vehicles as needed
];

export default function BikeDetail(props) {
  const Bike = BikeDetails.find((Bike) => Bike?.id === parseInt(props?.params?.id || 0));
  if (!Bike) {
    return <div>Bike not found</div>;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [status, setStatus] = useState(Bike.status);
  const [currentImageType, setCurrentImageType] = useState(null);

  const handleImageClick = (index, imageType) => {
    setPhotoIndex(index);
    setCurrentImageType(imageType);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + Bike.interiorImages.length - 1) % Bike.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + Bike.frontImages.length - 1) % Bike.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + Bike.sideImages.length - 1) % Bike.sideImages.length);
        break;
      default:
        break;
    }
  };

  const goToNext = () => {
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + 1) % Bike.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + 1) % Bike.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + 1) % Bike.sideImages.length);
        break;
      default:
        break;
    }
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };


    
  const [evCategory, setEvCategory] = useState('Top EVs'); 


  const handleEvCategoryChange = (event) => {
      setEvCategory(event.target.value);
      
    };

  return (
    <Wrapper>     
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
        <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Bike Details</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Interior Images</label>
              <div className="flex space-x-2">
                {Bike.interiorImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'interior')}>
                    <img src={image} width={200} height={150} alt={`Interior Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Front Images</label>
              <div className="flex space-x-2">
                {Bike.frontImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'front')}>
                    <img src={image} width={200} height={150} alt={`Front Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Side Images</label>
              <div className="flex space-x-2">
                {Bike.sideImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'side')}>
                    <img src={image} width={200} height={150} alt={`Side Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        


              <div className="grid grid-cols-2 gap-5">
              
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Brand</label>
    <input
      type="text"
      value={Bike.brand}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Model</label>
    <input
      type="text"
      value={Bike.model}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Variant</label>
    <input
      type="text"
      value={Bike.variant}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Location</label>
    <input
      type="text"
      value={Bike.location}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">RTO code</label>
    <input
      type="text"
      value={Bike.rtoCode}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
    <input
      type="text"
      value={Bike.batteryPower}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">kilometers Driven</label>
    <input
      type="text"
      value={Bike.kilometresDriven}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Color</label>
    <input
      type="text"
      value={Bike.color}
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
      value={Bike.registrationYear}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Transmission Type</label>
    <input
      type="text"
      value={Bike.transmissionType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
    <input
      type="text"
      value={Bike.ownerName}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
    <input
      type="text"
      value={Bike.ownerContact}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
    <input
      type="text"
      value={Bike.ownerEmail}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner City</label>
    <input
      type="text"
      value={Bike.ownerCity}
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
                <label className="block text-gray-700 font-bold mb-2">Vehicle Description</label>
                <textarea
                  value={Bike.vehicleDescription}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                  rows="4"
                 />
                </div>


                <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Price</label>
    <input
      type="text"
      value={Bike.price}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>


  <div className="mb-4 relative">
  <label className="block text-gray-700 font-bold mb-2">Status</label>
  <div className="relative">
    <select
      value={status}
      onChange={handleStatusChange}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 pr-8" // Added pr-8 for padding on the right to accommodate the icon
    >
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
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
      
        mainSrc={currentImageType === 'interior' ? Bike.interiorImages[photoIndex] : currentImageType === 'front' ? Bike.frontImages[photoIndex] : Bike.sideImages[photoIndex]}
          nextSrc={currentImageType === 'interior' ? Bike.interiorImages[(photoIndex + 1) % Bike.interiorImages.length] : currentImageType === 'front' ? Bike.frontImages[(photoIndex + 1) % Bike.frontImages.length] : Bike.sideImages[(photoIndex + 1) % Bike.sideImages.length]}
          prevSrc={currentImageType === 'interior' ? Bike.interiorImages[(photoIndex + Bike.interiorImages.length - 1) % Bike.interiorImages.length] : currentImageType === 'front' ? Bike.frontImages[(photoIndex + Bike.frontImages.length - 1) % Bike.frontImages.length] : Bike.sideImages[(photoIndex + Bike.sideImages.length - 1) % Bike.sideImages.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
      />


        
        )}
      </Wrapper>
      
  );
}