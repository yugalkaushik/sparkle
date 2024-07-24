import React, { useState, useEffect } from "react";
import axios from "axios";
import icons from '../assets/icons';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/navlinks');
        setNavLinks(response.data);
      } catch (error) {
        console.error('Error fetching navigation links:', error);
      }
    };

    fetchData();
  }, []);

  const handleHover = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="bg-white py-2 px-10 flex justify-end items-center text-sm mx-0 lg:mx-0">
        {isAuthenticated ? (
          <div className="flex items-center">
            <Link to="/profile" className="text-black-400 font-semibold lg:mr-6">Hello! View Profile</Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link to="/login" className="text-black-400 font-semibold mr-6">Login</Link>
            <Link to="/signup" className="text-black-400 font-semibold">Signup</Link>
          </div>
        )}
      </div>

      <div className="py-1 mx-4 lg:mx-0">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
          <a href="/">
            <img src={icons.navLogo} alt="logo" className="lg:ml-1 ml-4 w-10" />
          </a>
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-lg text-black-400 hover:text-cyan-500"
                >
                  {item.label}
                </Link>
                {/* {hoveredLink === item && (
                  <HoverDialog sublinks={item.sublinks} />
                )} */}
              </li>
            ))}
          </ul>
          <div className="flex gap-7 items-center cursor-pointer space-x-0.1 lg:space-x-6">
            {/* <img src={icons.search} alt="search" width={20} height={20} />
            <Link to="/wishlist">
              <img 
                src={icons.wishlist} 
                alt="wishlist" 
                width={20} 
                height={20} 
                className="cursor-pointer"
              />
            </Link>
            <Link to="/cart">
              <img 
                src={icons.cart}
                alt="cart"
                width={20} 
                height={20} 
              />
            </Link> */}
            <div className="block md:hidden">
              <img 
                src={icons.hamburger} 
                alt="Hamburger" 
                width={20} 
                height={20} 
                onClick={toggleMenu}
              />
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-14 left-0 w-full bg-white">
            <ul className="flex flex-col items-center py-2">
              {navLinks.map((item) => (
                <li key={item.label} className="w-full text-center">
                  <Link 
                    to={item.href} 
                    className="block py-2 px-4 text-black-400"
                    onClick={toggleMenu} 
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
