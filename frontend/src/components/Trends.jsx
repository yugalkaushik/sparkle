import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Trends = () => {
  const [trendData, setTrendData] = useState(null);

  useEffect(() => {
    const fetchtrendData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/trend');
        console.log('Response data:', response.data);
        setTrendData(response.data);
      } catch (error) {
        console.error('Error fetching trends data:', error);
      }
    };

    fetchtrendData();
  }, []);

  if (!trendData) {
    return <div>Loading...</div>;
  }

  const { imageUrl, heading, description } = trendData;

  return (
    <div className="relative ml-7 mr-7 mt-20">
    <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Latest Trend</h2>
      <img src={imageUrl} alt="Full Screen" className="rounded-2xl" />
      <div className="mt-4 text-center">
        <h2 className="text-6xl font-horizon font-extrabold text-black">{heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{description}</p>
        <button className="mt-4 mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full">Buy It</button>
        <button className="ml-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full">View More</button>
      </div>
    </div>
  );
};

export default Trends;