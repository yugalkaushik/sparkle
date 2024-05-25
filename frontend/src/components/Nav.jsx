import { navLogo } from "../assets/images/index.js";
import { hamburger, search, wishlist, cart } from "../assets/icons";
import { navLinks } from "../assets/constants/index.js";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="bg-gray-100 py-2 px-4 flex justify-end items-center text-sm">
        <a href="/signin" className="text-black-400 font-semibold mr-6">Sign In</a>
        <a href="/join" className="text-black-400 font-semibold">Join Us</a>
      </div>

      <div className="px-4 py">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
          <a href="/" className="px-0.1 ml-2">
            <img src={navLogo} alt="logo" className="w-10 sm:w-14"/>
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
            <img src={search} alt="search" width={20} height={20} />
            <img src={wishlist} alt="wishlist" width={20} height={20} />
            <img src={cart} alt="cart" width={20} height={20} />
            <div className="block md:hidden">
              <img src={hamburger} alt="Hamburger" width={20} height={20} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;