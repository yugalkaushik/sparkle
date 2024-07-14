import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Popular = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/popular');
        console.log('Response data:', response.data);
        setSlides(response.data);
      } catch (error) {
        console.error('Error fetching popular slides:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-8 mr-8 mt-20 ">
      <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Popular</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex transition-transform ease-in-out"> 
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-11/12 lg:w-1/3"> 
              <div className="pr-4">
                <img src={slide.imageUrl}
                 alt={slide.title}
                 className=" w-full h-full object-cover rounded-xl" 
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
