import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex justify-between ">
      <p className="font-orbitron ml-8 mt-8 text-4xl  mb-6 ">SPARKLE</p>
      <div className='bg-black text-white h-10 w-28 mt-8 mr-8 flex justify-center items-center'>
       <Link to="/" className="font-orbitron text-xl bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ">Explore</Link>
      </div>
      </div>

    <div className="max-w-md mx-auto mt-20 p-6">
      <h2 className="font-orbitron text-4xl mb-6 text-center ">Log In</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm" />
        </div>
        <button type="submit" className="w-full font-orbitron bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign In</button>
      </form>
      <div className='flex mt-4 pl-16' >
        <p>Don't have an account?</p>
        <Link to="/joinus" className="ml-2 text-decoration: underline text-black-400 font-semibold">Join Us</Link>
      </div>
    </div>
    </div>
  );
};

export default Login;