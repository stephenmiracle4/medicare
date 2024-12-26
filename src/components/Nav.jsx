
import React, { useState } from 'react';

const Navbar  = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu links array
  const menuLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'DEPARTMENT', href: '#department' },
    { name: 'BLOG', href: '#Blog' },
    { name: 'APPOINTMENT', href: '#Appointment' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-around">
        {/* Logo */}
        <div className="m-2"> <img src="/images/logo.png" alt="" /></div>

        {/* Desktop Menu */}
     <div className="hidden md:flex space-x-8 items-center text-2x1">
     <div className="hidden md:flex space-x-8 text-2x1 font-bold">
          {menuLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.name}
    
            </a>
            
          ))}
        </div>
        <a href="#" className='text-center m-auto border-solid border-2 border-blue-500 font-bold px-6 py-4 text-3 w-fit hover:bg-blue-500'>APPOINTMENT</a>

     </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {menuLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
