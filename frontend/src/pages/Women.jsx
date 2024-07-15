import React from 'react';
import SearchBox from '../components/SearchBox';
import icons from '../assets/icons';
import { Link } from 'react-router-dom';

const Women = () => {
  const handleSearchChange = (e) => {
    // Add logic to handle search input change
    console.log('Search query:', e.target.value);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 h-16 w-full bg-white shadow-md shadow-slate-300 ">
      <div className="flex justify-between items-center py-1 cursor-pointer">
      <Link to="/" className="font-orbitron mt-2 ml-8 text-4xl mb-6">SPARKLE</Link>
      <div className="flex mb-2 justify-center items-center space-x-4 mr-10 gap-2 cursor-pointer">
      <SearchBox placeholder="Search..." handleChange={handleSearchChange} />
      <img src={icons.wishlist} alt="wishlist" width={20} height={20} />
      <img src={icons.cart} alt="cart" width={20} height={20} />
      </div>
      </div>
      </header>
      <div className='bg-gray-400 shadow-sm z-50'>
      </div>
    </div>
  );
};

export default Women;
