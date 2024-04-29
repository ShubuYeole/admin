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
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + ecycleData.interiorImages.length - 1) % ecycleData.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + ecycleData.frontImages.length - 1) % ecycleData.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + ecycleData.sideImages.length - 1) % ecycleData.sideImages.length);
        break;
      default:
        break;
    }
  };

  const goToNext = () => {
    switch (currentImageType) {
      case 'interior':
        setPhotoIndex((photoIndex + 1) % ecycleData.interiorImages.length);
        break;
      case 'front':
        setPhotoIndex((photoIndex + 1) % ecycleData.frontImages.length);
        break;
      case 'side':
        setPhotoIndex((photoIndex + 1) % ecycleData.sideImages.length);
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

  return (
    <Wrapper>     
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
        <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Ecycle Details</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Interior Images</label>
              <div className="flex space-x-2">
                {ecycleData.interiorImages.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(index, 'interior')}>
                    <Image src={image} width={200} height={150} alt={`Interior Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Render other details here */}
        <div className="grid grid-cols-2 gap-5">
              {/* Iterate over bikeData and render input fields */}
              {Object.entries(ecycleData).map(([key, value]) => (
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
        {/* Lightbox for viewing images */}
        {isOpen && (
          <Lightbox
            mainSrc={currentImageType === 'interior' ? ecycleData.interiorImages[photoIndex] : currentImageType === 'front' ? ecycleData.frontImages[photoIndex] : ecycleData.sideImages[photoIndex]}
            nextSrc={currentImageType === 'interior' ? ecycleData.interiorImages[(photoIndex + 1) % ecycleData.interiorImages.length] : currentImageType === 'front' ? ecycleData.frontImages[(photoIndex + 1) % ecycleData.frontImages.length] : ecycleData.sideImages[(photoIndex + 1) % ecycleData.sideImages.length]}
            prevSrc={currentImageType === 'interior' ? ecycleData.interiorImages[(photoIndex + ecycleData.interiorImages.length - 1) % ecycleData.interiorImages.length] : currentImageType === 'front' ? ecycleData.frontImages[(photoIndex + ecycleData.frontImages.length - 1) % ecycleData.frontImages.length] : ecycleData.sideImages[(photoIndex + ecycleData.sideImages.length - 1) % ecycleData.sideImages.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={goToPrevious}
            onMoveNextRequest={goToNext}
          />
        )}
      </section>
    </Wrapper>
  );
}
