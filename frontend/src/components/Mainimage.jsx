import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Mainimage = () => {
  const [mainImageData, setmainImageData] = useState(null);

  useEffect(() => {
    const fetchmainImageData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/mainimage');
        console.log('Response data:', response.data);
        setmainImageData(response.data);
      } catch (error) {
        console.error('Error fetching trends data:', error);
      }
    };

    fetchmainImageData();
  }, []);

  if (!mainImageData) {
    return <div>Loading...</div>;
  }

  const { imageUrl, heading, description } = mainImageData;

  return (
    <div className="relative ml-7 mr-7 mx-10">
      <img src={imageUrl} alt="Full Screen" className="rounded-2xl" />
      <div className="mt-4 text-center">
        <h2 className="text-6xl font-horizon font-extrabold text-black">{heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default Mainimage;