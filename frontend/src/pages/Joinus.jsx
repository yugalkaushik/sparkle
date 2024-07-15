import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
      const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        age:'',
        gender:'male'
      });

      const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting Form...');
        try{
          const response = await axios.post('http://localhost:5000/api/auth/register', formData);
          alert(response.data.message);
        } catch (error) {
          console.error('Error during signup:', error);
          alert(error.response.data.msg || 'Error during signup');  
        }
      };

  return (
    <div>
      <div className="flex justify-between ">
        <p className="font-orbitron ml-8 mt-8 text-4xl mb-6 text-left">SPARKLE</p>
        <div className='bg-black text-white h-10 w-28 mt-8 mr-8 flex justify-center items-center'>
          <Link to="/" className="font-orbitron text-xl bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Explore</Link>
        </div>
      </div>
      <div className="max-w-md mx-auto mt-2 p-6">
        <h2 className="font-orbitron text-4xl mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name}  onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email}  onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" value={formData.password}  onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" id="age" name="age" value={formData.age}  onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" name="gender" value={formData.gender}  onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full font-orbitron bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
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
