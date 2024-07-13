import React, { useState, useEffect} from "react";
import axios from "axios";
import icons from '../assets/icons'

const Nav = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/navlinks');
      console.log('Response data:', response.data);
      setNavLinks(response.data);
      } catch (error) {
        console.error('Error fetching navigation links:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="bg-gray-100 py-2 px-10 flex justify-end items-center text-sm">
        <a href="/signin" className="text-black-400 font-semibold mr-6">Sign In</a>
        <a href="/join" className="text-black-400 font-semibold">Join Us</a>
      </div>

      <div className="py-1">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
          <a href="/">
            <img src={icons.navLogo} alt="logo"/>
          </a>
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-black-400 "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-7 items-center cursor-pointer">
            <img src={icons.search} alt="search" width={20} height={20} />
            <img src={icons.wishlist} alt="wishlist" width={20} height={20} />
            <img src={icons.cart} alt="cart" width={20} height={20} />
            <div className="block md:hidden">
              <img src={icons.hamburger} alt="Hamburger" width={20} height={20} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;