// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Estrategia Empresarial</h1>

        <nav className="hidden md:flex space-x-8">
          <a href="#introduccion" className="hover:text-teal-200 transition duration-300">Introducción</a>
          <a href="#dofa" className="hover:text-teal-200 transition duration-300">DOFA</a>
          <a href="#objetivos" className="hover:text-teal-200 transition duration-300">Objetivos</a>
          <a href="#contacto" className="hover:text-teal-200 transition duration-300">Contacto</a>
        </nav>

        <div className="md:hidden">
          <button className="text-white focus:outline-none hover:text-teal-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
