import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Trends = () => {
  const [trendData, setTrendData] = useState(null);
  const navigate = useNavigate();
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
    <div className="relative ml-7 mr-7 mt-14 lg:mt-20">
    <h2 className=" text-lg lg:text-2xl font-horizon font-semibold text-left mb-3 lg:mb-6">Latest Trend</h2>
      <img src={imageUrl} alt="Full Screen" className="rounded-xl lg:w-[1500px] lg:h-[750px]" />
      <div className="mt-4 text-center">
        <h2 className="text-3xl lg:text-6xl font-horizon font-extrabold text-black">{heading}</h2>
        <p className="mt-2 text-md text-gray-500">{description}</p>
        <button onClick={() => navigate('/new')} className="mt-4 mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full">Buy It</button>
        <button onClick={() => navigate('/new')} className=" lg:ml-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full">View More</button>
      </div>
    </div>
  );
};

export default Trends;