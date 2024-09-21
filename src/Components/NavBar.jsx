import React from 'react';
import {LineChartOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <nav className="bg-[rgb(0,21,41)] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white"><LineChartOutlined/></div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-[#1677ff] transition duration-300">Home</a>
          <a href="#contact" className="text-gray-300 hover:text-[#1677ff] transition duration-300">About</a>
          <a href="#services" className="text-gray-300 hover:text-[#1677ff] transition duration-300">Services</a>
          <a href="#contact" className="text-gray-300 hover:text-[#1677ff] transition duration-300">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 hover:text-[#1677ff] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
