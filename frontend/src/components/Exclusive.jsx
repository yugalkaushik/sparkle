import React from 'react';
import axios from 'axios';



const Exclusive = () => {
  const [exclusiveData, setExclusiveData] = useState(null);

  
  useEffect(() => {
    const fetchExclusiveData = async () => {
      try {
        const response = await axios.get('/api/exclusive');
        setExclusiveData(response.data);
      } catch (error) {
        console.error('Error fetching Exclusive data:', error);
      }
    };

    fetchExclusiveData();
  }, []);

  return (
    <div className="relative ml-7 mr-7 mt-24">
    <h2 className="text-2xl font-horizon font-semibold text-left mb-6">Exclusive</h2>
      <img src={imageUrl} alt="Full Screen" />
      <div className="mt-4 text-center">
        <h2 className="text-6xl font-horizon font-extrabold text-black">{heading}</h2>
        <p className="mt-2 text-xl text-gray-900">{description}</p>
        <button className="mt-4 mr-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full">{buttonText}</button>
      </div>
    </div>
  );
};

export default Exclusive;
