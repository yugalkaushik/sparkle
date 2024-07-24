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

  const { imageUrl } = mainImageData;

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-20 ml-4 mt-4 lg:mt-20 lg:ml-20 mr-4 lg:mr-20 mb-10 lg:mb-24"> 
    <div className="mb-8 mt-4 lg:m-20">
      <div className="relative inline-flex justify-center w-full">
        <div className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 absolute inset-0"></div>
        <p className="relative text-5xl lg:text-8xl text-center font-bold leading-tight text-gray-900 font-pj">SPARKLE</p>
      </div>
      <p className="mt-4 lg:mt-8 text-gray-500 text-center text-sm lg:text-lg"> 
        We believe in timeless elegance and unparalleled quality. Discover our curated collections that elevate everyday living.
      </p>
    </div>
    <div className="relative mt-2 lg:mt-6 ">
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#7d7979] to-[#000000] blur-md filter opacity-90 rounded-2xl"
        style={{
          transform: 'scale(1.01)',
          transformOrigin: 'center',
          zIndex: -1,
          width: 'calc(100%)',
          height: 'calc(100%)' 
        }}
      ></div>
      <video
  src={imageUrl}
  className="object-cover rounded-2xl w-full h-full shadow-xl"
  autoPlay
  loop
  muted
>
  Your browser does not support the video tag.
</video>
    </div>
  </div>
  
  );
};


export default Mainimage;


