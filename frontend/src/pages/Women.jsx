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
      <div className='bg-gray-400 shadow-sm z-50'>
      </div>
    </div>
  );
};

export default Women;
