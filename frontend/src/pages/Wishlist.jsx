import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Wishlist = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return (
          <div className='mt-4 ml-4'>
            <Link 
              to="/" className="w-full bg-black text-white py-2 px-4 rounded-md text-center font-orbitron text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" >
              Home
            </Link>
          
          <div className="flex flex-col items-center bg-white p-6 mt-6 w-full">
            <div className="font-orbitron text-center text-2xl font-medium text-gray-700">
              YOU NEED TO LOGIN!
            </div>
            <p className="mt-4 text-center text-sm font-medium text-gray-700">
              Already have an account?
            </p>
            <Link 
              to="/login" 
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              Log In
            </Link>
            <p className="mt-4 text-center text-sm font-medium text-gray-700">
              Don't have an account?
            </p>
            <Link 
              to="/signup" 
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              Join Us
            </Link>
          </div>
        </div>
        );
    }
    else {
      <p>hi</p>
    }

    return (
        <div></div>
    )
};
export default Wishlist;