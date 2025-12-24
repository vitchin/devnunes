"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">Your Name</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="#home" className="block py-2 text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#about" className="block py-2 text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#projects" className="block py-2 text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#contact" className="block py-2 text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
