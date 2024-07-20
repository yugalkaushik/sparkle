import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
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

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md border border-gray-200">
            <h2 className="font-orbitron text-4xl mb-6 text-center">Profile</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email: </label>
                    <span className="block text-sm font-medium text-gray-700">{user.email}</span>
                </div>
            </div>
            <button
                onClick={logout}
                className="mt-6 w-full font-orbitron bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Logout
            </button>
            <div  className='mt-6 justify-center'>
          <Link to="/" className="mt-6 w-full font-orbitron bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Home</Link>
        </div>
        </div>
    );
};

export default Profile;
