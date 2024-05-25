import React, { useState, useEffect } from 'react';
import { mainImage1, mainImage2, mainImage3 } from "../assets/images";
import { mainImageText } from '../assets/constants';

const Mainimage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const imageArray = [mainImage1, mainImage2, mainImage3];
  
    useEffect(() => {
      const intervalId = setInterval(goToNextSlide, 4000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex]);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1));
    };
  

    return (
      <div className=" ml-8 mr-8 carousel">
        <div className="flex justify-center items-center flex-col">
          <img src={imageArray[currentIndex]} alt={`Slide ${currentIndex}`} className='w-full h-full relative top-0 left-0' />
          <div className="mt-4 text-center flex flex-col sm:flex-row items-center justify-center">
          <h2 className="text-6xl font-horizon font-extrabold">{mainImageText.heading}</h2>
          <p className="mt-2 text-xl text-black-600">{mainImageText.description}</p>
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
