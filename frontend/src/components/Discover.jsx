import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Discover = () => {
  const [discoverslides, setDiscoverSlides] = useState([]);

  useEffect(() => {
    const fetchDiscoverSlides = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/discover');
        console.log('Response data:', response.data);
        setDiscoverSlides(response.data);
      } catch (error) {
        console.error('Error fetching discover slides:', error);
      }
    };

    fetchDiscoverSlides();
  }, []);

  if (discoverslides.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative ml-8 mr-8 mt-24">
      <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Discover</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex gap-1 transition-transform duration-500 ease-in-out">
          {discoverslides.map((discoverslide, index) => (
            <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/2 lg:w-1/5">
              <div className="pr-2">
                <img
                  src={discoverslide.image}
                  alt={discoverslide.title}
                  className="w-full object-cover"
                  style={{ height: '500px' }}
                />
                <p className="font-horizon text-center mt-2 mb-4 text-lg text-black ">{discoverslide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
