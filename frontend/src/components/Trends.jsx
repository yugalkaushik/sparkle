import React from 'react';
import { trendImage } from '../assets/images'; 
import { trendText } from '../assets/constants'; 

const Trends = ({ imageUrl = trendImage, text = trendText.Text }) => {
  return (
    <div className="relative ml-7 mr-7 mt-24">
    <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Latest Trend</h2>
      <img src={imageUrl} alt="Full Screen" className="" />
      <div className="mt-4 text-center">
        <h2 className="text-6xl font-horizon font-extrabold text-black">{trendText.heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{trendText.description}</p>
        <button className="mt-4 mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full">Buy It</button>
        <button className="ml-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full">View More</button>
      </div>
    </div>
  );
};

export default Trends;