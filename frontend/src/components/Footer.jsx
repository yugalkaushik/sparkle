import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mr-8 lg:mb-24 mb-6 ml-8 mt-24 relative rounded-2xl">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="flex lg:flex-row flex-col justify-center sm:w-2/3 lg:w-1/3 mt-4 mx-6 ">
          <div className="lg:w-1/2 mb-2 lg:mb-4">
            <h2 className="text-sm text-black font-semibold mb-2 lg:mb-5">Social Links</h2> 
            <a href="https://www.facebook.com" className="text-gray-500 hover:text-blue-600 mr-4 block mb-1 lg:mb-2">Facebook</a>
            <a href="https://www.instagram.com" className="text-gray-500 hover:text-purple-600 mr-4 block mb-1 lg:mb-2">Instagram</a>
            <a href="https://x.com/home" className="text-gray-500 hover:text-black mr-4 block mb-1 lg:mb-2">X</a>
          </div>
          
          <div className=" mb-2 lg:mb-4 lg:w-1/2">
            <h2 className="text-sm font-semibold mb-2 lg:mb-5">Others</h2>
            <a href="#" className="text-gray-500 hover:text-green-600 mr-4 block mb-1 lg:mb-2 ">Order Status</a>
            <a href="#" className="text-gray-500 hover:text-yellow-600 mr-4 block mb-1 lg:mb-2">Delivery</a>
            <a href="#" className="text-gray-500 hover:text-red-600 mr-4 block mb-1 lg:mb-2">Returns</a>
            <a href="#" className="text-gray-500 hover:text-cyan-600 mr-4 block mb-1 lg:mb-2">Contact Us</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 mr-4 block mb-1 lg:mb-2">Give Feedback</a>
          </div>
        </div>
        <div className="absolute mx-2 lg:mx-6 top-0 right-0 mt-4 flex items-center">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-700 mr-1" />
          <span className="text-sm font-semibold">India</span>
        </div>
      </div>
      <div className="text-center pb-6 mt-4">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Sparkle. All rights reserved.</p>
        <a href="#" className="hover:text-gray-500 mr-4">Help</a>
        <a href="#" className="hover:text-gray-500 mr-4">About</a>
        <a href="#" className="hover:text-gray-500 mr-4">Terms & Policies</a>
      </div>
    </footer>
  );
};

export default Footer;
