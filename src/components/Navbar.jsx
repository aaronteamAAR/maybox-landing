import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSvg from './NavbarSvg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg nav-contain border-gray-200  md:pt-5 ">
      <div className="container  flex flex-wrap items-left justify-between mx-auto p-4">
        <Link to="/" className="flex items-end justify-center space-x-3 rtl:space-x-reverse">
         <NavbarSvg />
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`items-center justify-center ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:mr-96`} id="navbar-menu">
          <ul className="flex flex-col  p-4 md:p-0 mt-4 font-normal md:bg-transparent   bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a href="#cta" className="block py-2 font-custom2 px-3 text-gray-600 md:text-gray-600 text-black hover:bg-gray-100 md:hover:bg-gray-0 rounded md:bg-transparent md:text-black md:p-0" aria-current="page">Join Us</a>
            </li>
            <li>
              <a href="#benefits" className="block py-2 font-custom2 px-3 text-gray-600 md:text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-100 md:p-0 hover-0  md:dark:hover:bg-transparent">Benefits</a>
            </li>
            <li>
              <a href="#steps" className="block py-2 font-custom2 px-3 text-gray-600 md:text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-100 md:p-0 hover-0  md:dark:hover:bg-transparent">Steps</a>
            </li>
            <li>
              <a href="#faqs" className="block py-2 font-custom2 px-3 text-gray-600 md:text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-100 md:p-0 hover-0  md:dark:hover:bg-transparent">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
