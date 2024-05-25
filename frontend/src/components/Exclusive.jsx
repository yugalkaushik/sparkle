import React from 'react';
import { exclusiveImage } from '../assets/images'; 
import { exclusiveText } from '../assets/constants'; 

const Exclusive = ({ imageUrl = exclusiveImage, text = exclusiveText.Text }) => {
  return (
    <div className="relative ml-7 mr-7 mt-24">
    <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Exclusive</h2>
      <img src={imageUrl} alt="Full Screen" className="" />
      <div className="mt-4 text-center">
        <h2 className="text-6xl font-horizon font-extrabold text-black">{exclusiveText.heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{exclusiveText.description}</p>
        <button className="mt-4 mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full">Shop</button>
      </div>
    </div>
  );
};

export default Exclusive;
