"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#070c14] shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="#home" className="text-xl font-bold text-gray-50">DEV<span className="text-blue-200">NUNES</span></Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-50 hover:text-blue-200">Início</Link>
            <Link href="#about" className="text-gray-50 hover:text-blue-200">Sobre</Link>
            <Link href="#projects" className="text-gray-50 hover:text-blue-200">Projetos</Link>
            <Link href="#contact" className="text-gray-50 hover:text-blue-200">Contato</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="#" stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 transition duration-300 space-y-2">
            <Link href="#home" className="text-center w-full block py-2 text-gray-50 hover:text-blue-100 hover:bg-black transition duration-150 rounded-[15px]" onClick={() => setIsOpen(false)}>Início</Link>
            <Link href="#about" className="text-center w-full block py-2 text-gray-50 hover:text-blue-100 hover:bg-black transition duration-150 rounded-[15px]" onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link href="#projects" className="text-center w-full block py-2 text-gray-50 hover:text-blue-100 hover:bg-black transition duration-150 rounded-[15px]" onClick={() => setIsOpen(false)}>Projetos</Link>
            <Link href="#contact" className="text-center w-full block py-2 text-gray-50 hover:text-blue-100 hover:bg-black transition duration-150 rounded-[15px]" onClick={() => setIsOpen(false)}>Contato</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
