import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mainimage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImageData, setMainImageData] = useState(null);

  useEffect(() => {
    const fetchMainImageData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/mainimage');
        setMainImageData(response.data);
      } catch (error) {
        console.error('Error fetching main image data:', error);
      }
    };

    fetchMainImageData();
  }, []);

  useEffect(() => {
    if (mainImageData && mainImageData.images && mainImageData.images.length > 0) {
      const intervalId = setInterval(goToNextSlide, 4000);
      return () => clearInterval(intervalId);
    }
  }, [mainImageData]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mainImageData.images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!mainImageData || !mainImageData.images || mainImageData.images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-8 mr-8 carousel">
      <div className="flex justify-center items-center flex-col">
        <img
          src={mainImage.images[currentIndex].url}
          alt={mainImage.images[currentIndex].caption}
          className="w-full h-full relative top-0 left-0"
        />
        <div className="mt-4 text-center flex flex-col sm:flex-row items-center justify-center">
          <h2 className="text-6xl font-horizon font-extrabold">{mainImageData.heading}</h2>
          <p className="mt-2 text-xl text-black-600">{mainImageData.description}</p>
          <div className="mt-4 flex flex-row">
            <button className="mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-8 rounded-full">Shop Men</button>
            <button className="ml-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full">Shop Women</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainimage;
