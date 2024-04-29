"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";

const BikeDetail = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImageType, setCurrentImageType] = useState(null);
  const [status, setStatus] = useState('Active'); // Set default status

  // Sample fetched data, replace this with actual fetching logic
  const [bikeData, setBikeData] = useState(null);

  useEffect(() => {
    // Fetch bike details based on the ID from the API
    const fetchBikeData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${params.id}`);
        const jsonData = await response.json();
        setBikeData(jsonData);
      } catch (error) {
        console.error('Error fetching bike details:', error);
      }
    };

    fetchBikeData();
  }, [params.id]);

  if (!bikeData) {
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
    // Logic for going to previous image
  };

  const goToNext = () => {
    // Logic for going to next image
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Wrapper>
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
        <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Bike Details</h1>
          <div className="grid grid-cols-1 gap-4">
            {/* Interior Images */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Interior Images</label>
              <div className="flex space-x-2">
                {bikeData.interiorImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'interior')}>
                    <Image src={image} width={200} height={150} alt={`Interior Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Other bike details */}
            <div className="grid grid-cols-2 gap-5">
              {/* Iterate over bikeData and render input fields */}
              {Object.entries(bikeData).map(([key, value]) => (
                <div key={key} className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">{key}</label>
                  <input
                    type="text"
                    value={value}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox component */}
      {isOpen && (
        <Lightbox
          mainSrc={currentImageType === 'interior' ? bikeData.interiorImages[photoIndex] : ''}
          nextSrc={currentImageType === 'interior' ? bikeData.interiorImages[(photoIndex + 1) % bikeData.interiorImages.length] : ''}
          prevSrc={currentImageType === 'interior' ? bikeData.interiorImages[(photoIndex + bikeData.interiorImages.length - 1) % bikeData.interiorImages.length] : ''}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
        />
      )}
    </Wrapper>
  );
};

export default BikeDetail;
