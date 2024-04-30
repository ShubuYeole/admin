"use client";
 import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";

const RentDetail = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImageType, setCurrentImageType] = useState(null);
//   const [status, setStatus] = useState('Active'); // Set default status
  
  // Sample fetched data, replace this with actual fetching logic
  const [rentData, setRentData] = useState(null);

  useEffect(() => {
    const fetchRentData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5000/api/view/rentev`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setRentData(jsonData);
      } catch (error) {
        console.error('Error fetching rent details:', error);
        // Optionally, set an error state to display to the user
      }
    };
  
    fetchRentData();
  }, [params.id]);
  
  
  

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
        setPhotoIndex((photoIndex + rentData.interiorImages.length - 1) % rentData.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + rentData.frontImages.length - 1) % rentData.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + rentData.sideImages.length - 1) % rentData.sideImages.length);
        break;
      case 'back':
        setPhotoIndex((photoIndex + rentData.backImages.length - 1) % rentData.backImages.length);
        break;
      default:
        break;
    }
  };

  const goToNext = () => {
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + 1) % rentData.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + 1) % rentData.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + 1) % rentData.sideImages.length);
        break;
      case 'back':
        setPhotoIndex((photoIndex + 1) % rentData.backImages.length);
        break;
      default:
        break;
    }
  };






  // Render the vehicle details
  return (
    <>
      <Wrapper>     
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
          <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Rental Details</h1>
            <div className="grid grid-cols-1 gap-4">
              <div className="mb-4">
                {/* <label className="block text-gray-700 font-bold mb-2">Interior Images</label>
                <div className="flex space-x-2">
                  {rentData.interiorImages.map((image, index) => (
                    <div key={index} onClick={() => handleImageClick(index, 'interior')}>
                      <Image src={image} width={200} height={150} alt={`Interior Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Front Images</label>
                <div className="flex space-x-2">
                  {rentData.frontImages.map((image, index) => (
                    <div key={index} onClick={() => handleImageClick(index, 'front')}>
                      <Image src={image} width={200} height={150} alt={`Front Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Side Images</label>
                <div className="flex space-x-2">
                  {rentData.sideImages.map((image, index) => (
                    <div key={index} onClick={() => handleImageClick(index, 'side')}>
                      <Image src={image} width={200} height={150} alt={`Side Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Back Images</label>
                <div className="flex space-x-2">
                  {rentData.backImages.map((image, index) => (
                    <div key={index} onClick={() => handleImageClick(index, 'back')}>
                      <Image src={image} width={200} height={150} alt={`Back Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

          </div> */}
        </div>
        



              <div className="grid grid-cols-2 gap-5">
              
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Brand</label>
    <input
      type="text"
      value={rentData.brand}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Model</label>
    <input
      type="text"
      value={rentData.model}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Vehicle Type</label>
    <input
      type="text"
      value={rentData.bodyType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Variant</label>
    <input
      type="text"
      value={RentData.variant}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    /> */}
  {/* </div> */}
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Location</label>
    <input
      type="text"
      value={RentData.location}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    /> */}
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">RTO code</label>
    <input
      type="text"
      value={rentData.plateNo}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
    <input
      type="text"
      value={rentData.batteryPower}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">kilometers Driven</label>
    <input
      type="text"
      value={rentData.kilometresDriven}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Color</label>
    <input
      type="text"
      value={RentData.color}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">BodyType</label>
    <input
      type="text"
      value={RentData.bodyType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Registration Year</label>
    <input
      type="text"
      value={RentData.registrationYear}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  {/* <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Transmission Type</label>
    <input
      type="text"
      value={RentData.transmissionType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div> */}
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
    <input
      type="text"
      value={rentData.ownerName}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
    <input
      type="text"
      value={rentData.ownerContact}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
    <input
      type="text"
      value={rentData.ownerEmail}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner City</label>
    <input
      type="text"
      value={rentData.ownerCity}
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
</div>

</div>

                
        
        </section>
        {/* {isOpen && (
          <Lightbox
            mainSrc={
              currentImageType === 'interior' ? rentData.interiorImages[photoIndex] :
              currentImageType === 'front' ? rentData.frontImages[photoIndex] :
              currentImageType === 'side' ? rentData.sideImages[photoIndex] :
              rentData.backImages[photoIndex]
            }
            nextSrc={
              currentImageType === 'interior' ?     rentData.interiorImages[(photoIndex + 1) % rentData.interiorImages.length] :
              currentImageType === 'front' ? rentData.frontImages[(photoIndex + 1) % rentData.frontImages.length] :
              currentImageType === 'side' ? rentData.sideImages[(photoIndex + 1) % rentData.sideImages.length] :
              RentData.backImages[(photoIndex + 1) % rentData.backImages.length]
            }
            prevSrc={
              currentImageType === 'interior' ? rentData.interiorImages[(photoIndex + rentData.interiorImages.length - 1) % rentData.interiorImages.length] :
              currentImageType === 'front' ? rentData.frontImages[(photoIndex + rentData.frontImages.length - 1) % rentData.frontImages.length] :
              currentImageType === 'side' ? rentData.sideImages[(photoIndex + rentData.sideImages.length - 1) % rentData.sideImages.length] :
              rentData.backImages[(photoIndex + rentData.backImages.length - 1) % rentData.backImages.length]
            }
            onCloseRequest={closeLightbox}
            onMovePrevRequest={goToPrevious}
            onMoveNextRequest={goToNext}

        /> */}
    
      </Wrapper>
    </>
  );
}
export default RentDetail