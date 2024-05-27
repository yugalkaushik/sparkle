import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Trends = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/trend');
        const { imageUrl, text } = response.data;
        setImageUrl(imageUrl);
        setText(text);
      } catch (error) {
        console.error('Error fetching trends data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative ml-7 mr-7 mt-24">
    <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Latest Trend</h2>
      <img src={imageUrl} alt="Full Screen" className="" />
      <div className="mt-4 text-center">
        <h2 className="text-6xl font-horizon font-extrabold text-black">{text.heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{text.description}</p>
        <button className="mt-4 mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full">Buy It</button>
        <button className="ml-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full">View More</button>
      </div>
    </div>
  );
};

export default Trends;