import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Hover effect added to ISK */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text transform hover:scale-110 transition-transform duration-300 ease-in-out">
            ISK
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">Home</a>
            <a href="#about" className="nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">About</a>
            <a href="#projects" className="nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">Projects</a>
            <a href="#contact" className="nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Abdulrahmanisk" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abdulrahman-isk/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">
              <Linkedin size={20} />
            </a>
            <a href="Abdulrahman-Iskandar@outlook.com"
               className="text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">
              <Mail size={20} />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="mobile-nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">Home</a>
            <a href="#about" className="mobile-nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">About</a>
            <a href="#projects" className="mobile-nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">Projects</a>
            <a href="#contact" className="mobile-nav-link text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
