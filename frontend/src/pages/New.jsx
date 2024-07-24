import React, { useEffect, useState } from 'react';
import axios from 'axios';

const New = () => {
  const [products, setProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5100/api/products');
        setProducts(response.data);
        setMenProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className='bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 mt-24 md:mt-6 lg:mt-[3.5rem]'>
      <h1 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-3xl mb-4">New & Featured</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menProducts.length > 0 ? (
          menProducts.map((product) => (
            <div key={product._id} className="product-card p-2 sm:p-4 md:p-6 lg:p-4 border rounded shadow-lg bg-white h-auto md:h-64 lg:h-[34rem]">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 mb-2">${product.price}</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2">{product.description}</p>
              <div className="images">
                <img
                  src="/images/product.jpg"
                  alt="Product"
                  className="w-full h-40 sm:h-60 md:h-72 lg:h-80 object-cover mb-2"
                />
              </div>
              <div className='flex flex-col sm:flex-row justify-center sm:justify-around mt-4'>
                <button 
                  className="bg-white text-black px-4 py-2 rounded border-2 border-gray-500 border-solid mb-2 sm:mb-0"
                >
                  Add to Wishlist
                </button>
                <button className='bg-black text-white py-2 px-4 rounded'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default New;
