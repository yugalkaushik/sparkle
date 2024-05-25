import React, { useState } from 'react';

const Popular = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative ml-8 mr-8 mt-24 ">
      <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Popular</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex gap-1 transition-transform duration-500 ease-in-out"> 
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/2 lg:w-1/3"> 
              <div className="pr-2">
                <img src={slide.image}
                 alt={slide.title}
                 className="w-full h-full object-cover" 
                 style={{width:'500px', height:'500px'}}/>
                <p className="font-horizon text-center mt-2 mb-4 text-black text-lg font-semibold">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
