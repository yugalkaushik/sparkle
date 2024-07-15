import React, { useState } from 'react';
import icons from '../assets/icons';

const SearchBox = ({ placeholder, handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  const handleIconClick = () => {
    handleSearch(query);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="search"
        className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 hover:border-gray-800 sm:text-sm"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <img 
        src={icons.search} 
        alt="search" 
        width={20} 
        height={20} 
        className='absolute left-2 cursor-pointer' 
        onClick={handleIconClick} 
      />
    </div>
  );
};

export default SearchBox;
