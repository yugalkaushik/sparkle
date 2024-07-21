import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('gender', gender);
        formData.append('category', category);

        for(let i=0;i<images.length;i++){
            formData.append('images',images[i]);
        }

        try {
            const res = await axios.post('http://localhost:5100/api/products/add', formData,{
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });
            console.log('Product added successfully:', res.data);
            // Clear form fields after successful submission
            setName('');
            setPrice('');
            setDescription('');
            setGender('');
            setCategory('');
            setImages([]);
        } catch (err) {
            console.error('Error adding product:', err.response ? err.response.data : err.message);
        }
    };

    return (
        
        <div className="mt-10 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
            <h1 className="font-orbitron text-2xl font-bold mb-6 text-center">Add a Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
                    >
                        <option value="">Select Category</option>
                        <option value="Shirts">Shirts</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Top">Top</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Bottoms">Bottoms</option>
                        <option value="Sneakers">Sneakers</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Jerseys">Jerseys</option>
                        <option value="Watches">Watches</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Images</label>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => setImages(e.target.files)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-800 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="font-orbitron w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Add Product
                </button>
            </form>
            <div  className='mt-6 justify-center'>
          <Link to="/" className="mt-6 w-full font-orbitron bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Home</Link>
        </div>
        </div>
    );
};

export default Admin;
