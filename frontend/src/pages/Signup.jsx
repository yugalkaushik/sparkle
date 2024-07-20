import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.post('http://localhost:5100/signup', {name, email, password, gender});
        navigate('/login');
    } catch (error) {
        console.error('Failed to sign up:', error);
    }
  };
return(
    <div>
        <div className="flex justify-between ">
        <p className="font-orbitron ml-8 mt-8 text-4xl mb-6 text-left">SPARKLE</p>
        <div className='bg-black text-white h-10 w-28 mt-8 mr-8 flex justify-center items-center'>
          <Link to="/" className="font-orbitron text-xl bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Explore</Link>
        </div>
      </div>
    <div className="max-w-md mx-auto mt-2 p-6 ">
      <h2 className="font-orbitron text-4xl mb-6 text-center">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
          />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
            >
                <option value="" disabled>Select Gender</option>
                <option value="male" className='block text-sm font-medium text-gray-700'>Male</option>
                <option value="female" className='block text-sm font-medium text-gray-700'>Female</option>
                <option value="other" className='block text-sm font-medium text-gray-700'>Other</option>
            </select>
        </div>
        <button
          type="submit"
          className="w-full font-orbitron bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Signup
        </button>
      </form>
      <div className='flex mt-4 pl-16'>
          <p>Already have an account?</p>
          <Link to="/login" className="ml-2 text-decoration: underline text-black-400 font-semibold">Log In</Link>
        </div>
    </div>
  </div>
  );
};

export default Signup;