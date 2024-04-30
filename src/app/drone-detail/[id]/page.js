"use client";
 import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";



const DroneDetail = ({ params }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [currentImageType, setCurrentImageType] = useState(null);
    const [status, setStatus] = useState('Active'); // Set default status
    const [evCategory, setEvCategory] = useState('Top EVs'); 
    // Sample fetched data, replace this with actual fetching logic
    const [droneData, setDroneData] = useState(null);
  
    useEffect(() => {
    
      const fetchDroneData = async () => {
        try {
          const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${params.id}`);
          const jsonData = await response.json();
          setDroneData(jsonData);
        } catch (error) {
          console.error('Error fetching car details:', error);
        }
      };
  
      fetchDroneData();
    }, [params.id]);
  
    if (!droneData) {
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
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + DroneData.interiorImages.length - 1) % droneData.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + DroneData.frontImages.length - 1) % droneData.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + DroneData.sideImages.length - 1) % droneData.sideImages.length);
        break;
      case 'back':
        setPhotoIndex((photoIndex + DroneData.backImages.length - 1) % droneData.backImages.length);
        break;
      default:
        break;
    }
  };

  // Function to move to the next image
  const goToNext = () => {
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + 1) % droneData.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + 1) % droneData.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + 1) % droneData.sideImages.length);
        break;
      case 'back':
        setPhotoIndex((photoIndex + 1) % droneData.backImages.length);
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
                {droneData.interiorImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'interior')}>
                    <Image src={image} width={200} height={150} alt={`Interior Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Front Images</label>
              <div className="flex space-x-2">
                {droneData.frontImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'front')}>
                    <Image src={image} width={200} height={150} alt={`Front Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Side Images</label>
              <div className="flex space-x-2">
                {droneData.sideImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'side')}>
                    <Image src={image} width={200} height={150} alt={`Side Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Back Images</label>
              <div className="flex space-x-2">
                {droneData.backImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'back')}>
                    <Image src={image} width={200} height={150} alt={`Back Image ${index + 1}`} />
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
      value={droneData.brand}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Model</label>
    <input
      type="text"
      value={droneData.model}
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
      value={droneData.variant}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Location</label>
    <input
      type="text"
      value={droneData.location}
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
      value={droneData.batteryPower}
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
      value={droneData.color}
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
      value={droneData.registrationYear}
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
      value={droneData.ownerName}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
    <input
      type="text"
      value={droneData.ownerContact}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
    <input
      type="text"
      value={droneData.ownerEmail}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  
</div>
<div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner City</label>
    <input
      type="text"
      value={droneData.ownerCity}
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
                  value={droneData.vehicleDescription}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                  rows="4"
                 />
                </div>


                <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Price</label>
    <input
      type="text"
      value={droneData.price}
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
          mainSrc={
            currentImageType === 'interior' ? droneData.interiorImages[photoIndex] :
            currentImageType === 'front' ? droneData.frontImages[photoIndex] :
            currentImageType === 'side' ? droneData.sideImages[photoIndex] :
            droneData.backImages[photoIndex]
          }
          nextSrc={
            currentImageType === 'interior' ? droneData.interiorImages[(photoIndex + 1) % droneData.interiorImages.length] :
            currentImageType === 'front' ? droneData.frontImages[(photoIndex + 1) % droneData.frontImages.length] :
            currentImageType === 'side' ? droneData.sideImages[(photoIndex + 1) % droneData.sideImages.length] :
            droneData.backImages[(photoIndex + 1) % droneData.backImages.length]
          }
          prevSrc={
            currentImageType === 'interior' ? droneData.interiorImages[(photoIndex + droneData.interiorImages.length - 1) % droneData.interiorImages.length] :
            currentImageType === 'front' ? droneData.frontImages[(photoIndex + droneData.frontImages.length - 1) % droneData.frontImages.length] :
            currentImageType === 'side' ? droneData.sideImages[(photoIndex + droneData.sideImages.length - 1) % droneData.sideImages.length] :
            droneData.backImages[(photoIndex + droneData.backImages.length - 1) % droneData.backImages.length]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}

        />
      )}
      </Wrapper>
    </>
  );
}
export default DroneDetail

