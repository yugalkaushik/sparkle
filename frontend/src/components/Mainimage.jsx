import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mainimage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImageData, setMainImageData] = useState({ images: [] });

  useEffect(() => {
    const fetchMainImageData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/mainimage');
        console.log('Response data:', response.data);
        setMainImageData(response.data);
      } catch (error) {
        console.error('Error fetching main image data:', error);
      }
    };

    fetchMainImageData();
  }, []);

  useEffect(() => {
    if (mainImageData.images && mainImageData.images.length > 0) {
      const intervalId = setInterval(goToNextSlide, 4000);
      return () => clearInterval(intervalId);
    }
  }, [mainImageData]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mainImageData.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="ml-8 mr-8 carousel h-full flex justify-center items-center">
      <div className="w-full h-full relative">
        {mainImageData.images && mainImageData.images.length > 0 && (
          <>
            <img
              src={mainImageData.images[currentIndex].imageUrl}
              alt={mainImageData.images[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full text-center bg-opacity-50 bg-black p-4">
              <h2 className="text-6xl font-extrabold text-white">{mainImageData.heading}</h2>
              <p className="mt-2 text-xl text-gray-300">{mainImageData.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-8 rounded-full">Shop Men</button>
                <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-8 rounded-full">Shop Women</button>
              </div>
            </div>
          </>
        )}
      </div>  
    </div>
  );
};

export default Mainimage;
