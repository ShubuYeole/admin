'use client'
import Image from "next/link";
import { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";



// Static data for vehicles
const DroneDetails = [
  { 
    id: 1,
    ownerName: "Tanmay Pawa",
    ownerContact: "0724962619",
    ownerEmail: "tanmayrp97@gmail.com",
    ownerCity: "Pune",
    vehicleType: "edrone",
    brand: "ION",
    model: "LE",
    variant: "ER",
    location: "Pune",
    rtoCode: null,
    batteryPower: "34555",
    kilometresDriven: null,
    bodyType: "",
    color: "red",
    registrationYear: "2024",
    vehicleDescription: "sdsfsd",
    transmissionType: "",
    interiorImages: [
      "uploads\\interiorImages-1713073931244",
      "uploads\\interiorImages-1713073931244"
    ],
    frontImages: [
      "uploads\\frontImages-1713073931135",
      "uploads\\frontImages-1713073931152",
      "uploads\\frontImages-1713073931154"
    ],
    sideImages: [
      "uploads\\sideImages-1713073931154",
      "uploads\\sideImages-1713073931204",
      "uploads\\sideImages-1713073931230"
    ],
    backImages: [
      "uploads\\backImages-1713073931241",
      "uploads\\backImages-1713073931242",
      "uploads\\backImages-1713073931242"
    ],
    price: {
      currency: "USD",
      value: 2344556
    },

  },
  // Add more vehicles as needed
];

export default function DroneDetail(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [status, setStatus] = useState("Active"); // Initialize with a default value
  const [currentImageType, setCurrentImageType] = useState(null);
  const [evCategory, setEvCategory] = useState('Top EVs'); 


  // Find the vehicle based on the provided ID
  const Drone = DroneDetails.find((Drone) => Drone?.id === parseInt(props?.params?.id || 0));

  // If vehicle is not found, display a message
  if (!Drone) {
    return <div>Drone not found</div>;
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
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + Drone.interiorImages.length - 1)% Drone.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + Drone.frontImages.length - 1) % Drone.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + Drone.sideImages.length - 1) % Drone.sideImages.length);
        break;
      default:
        break;
    }
  };

  const goToNext = () => {
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + 1) % Drone.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + 1) % Drone.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + 1) % Drone.sideImages.length);
        break;
      default:
        break;
    }
  };




  // Function to handle status change
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };



  const handleEvCategoryChange = (event) => {
      setEvCategory(event.target.value);
      
    };  



  // Render the vehicle details
  return (
    <>
      <Wrapper>     
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
        <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Drone Details</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Interior Images</label>
              <div className="flex space-x-2">
                {Drone.interiorImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'interior')}>
                    <Image src={image} width={200} height={150} alt={`Interior Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Front Images</label>
              <div className="flex space-x-2">
                {Drone.frontImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'front')}>
                    <Image src={image} width={200} height={150} alt={`Front Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Side Images</label>
              <div className="flex space-x-2">
                {Drone.sideImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'side')}>
                    <Image src={image} width={200} height={150} alt={`Side Image ${index + 1}`} />
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
      value={Drone.brand}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Model</label>
    <input
      type="text"
      value={Drone.model}
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
      value={Drone.variant}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Location</label>
    <input
      type="text"
      value={Drone.location}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">RTO code</label>
    <input
      type="text"
      value={Drone.rtoCode}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
    <input
      type="text"
      value={Drone.batteryPower}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">kilometers Driven</label>
    <input
      type="text"
      value={Drone.kilometresDriven}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Color</label>
    <input
      type="text"
      value={Drone.color}
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
      value={Drone.registrationYear}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Transmission Type</label>
    <input
      type="text"
      value={Drone.transmissionType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
    <input
      type="text"
      value={Drone.ownerName}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
    <input
      type="text"
      value={Drone.ownerContact}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
    <input
      type="text"
      value={Drone.ownerEmail}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  
</div>
<div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner City</label>
    <input
      type="text"
      value={Drone.ownerCity}
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
                  value={Drone.vehicleDescription}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                  rows="4"
                 />
                </div>


                <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Price</label>
    <input
      type="text"
      value={Drone.price}
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
          mainSrc={currentImageType === 'interior' ? Tractor.interiorImages[photoIndex] : currentImageType === 'front' ? Drone.frontImages[photoIndex] : Drone.sideImages[photoIndex]}
          nextSrc={currentImageType === 'interior' ? Tractor.interiorImages[(photoIndex + 1) % Drone.interiorImages.length] : currentImageType === 'front' ? Drone.frontImages[(photoIndex + 1) % Drone.frontImages.length] : Tractor.sideImages[(photoIndex + 1) % Drone.sideImages.length]}
          prevSrc={currentImageType === 'interior' ? Tractor.interiorImages[(photoIndex + Drone.interiorImages.length - 1) % Drone.interiorImages.length] : currentImageType === 'front' ? Drone.frontImages[(photoIndex + Tractor.frontImages.length - 1) % Drone.frontImages.length] : Drone.sideImages[(photoIndex + Drone.sideImages.length - 1) % Drone.sideImages.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
        />
      )}
      </Wrapper>
    </>
  );
}