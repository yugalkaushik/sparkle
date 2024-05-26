import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Classic = () => {
  const [classicslides, setClassicSlides] = useState([]);
  useEffect(() => {
    const fetchClassicSlides = async () => {
      try {
        const response = await axios.get('/api/classicslides');
        setClassicSlides(response.data);
      } catch (error) {
        console.error('Error fetching classic slides:', error);
      }
    };

    
    fetchClassicSlides();
  }, []);


  return (
    <div className="relative ml-8 mr-8 mt-24 ">
      <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Classic Spotlight</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex gap-1 transition-transform duration-500 ease-in-out"> 
          {classicslides.map((classicslide, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"> 
              <div className="pr-2">
                <img src={classicslide.image}
                 alt={classicslide.title}
                  className="w-full h-full object-cover" 
                  style={{width:'350px', height:'300px'}}/>
                <p className="font-gliker text-center text-lg mb-4 mt-2 text-black">{classicslide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classic;
