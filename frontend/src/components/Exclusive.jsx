import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Exclusive = () => {
  const [exclusiveData, setExclusiveData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchExclusiveData = async () => {
      try {
        const response = await api.get('/exclusive');
        console.log('Response data:', response.data);
        setExclusiveData(response.data);
      } catch (error) {
        console.error('Error fetching exclusive data:', error);
      }
    };

    fetchExclusiveData();
  }, []);

  if (!exclusiveData) {
    return <div>Loading...</div>;
  }

  const { imageUrl, heading, description, buttonText } = exclusiveData;

  return (
    <div className="relative ml-7 mr-7 mt-6 lg:mt-24 mb-12">
      <h2 className="text-lg lg:text-2xl font-horizon font-semibold text-left mb-2 lg:mb-6">Exclusive</h2>
      <img src={imageUrl} alt="Exclusive" className="w-full h-auto rounded-2xl lg:w-[1500px] lg:h-[750px]" />
      <div className="mt-2 text-center">
        <h2 className="text-4xl lg:text-6xl font-horizon font-extrabold text-black">{heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{description}</p>
        <button onClick={() => navigate('/new')} className="mt-4 mr-2 bg-black hover:bg-gray-500 text-white font-bold py-2 px-10 rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Exclusive;