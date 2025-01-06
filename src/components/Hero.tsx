import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Abdulrahman Iskandar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer | Software Engineer | Problem Solver
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out bg-gradient-to-r from-purple-600 to-blue-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span className="absolute inset-0 flex justify-center items-center w-full h-full text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-out">
                <span className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">Explore →</span>
              </span>
              <span className="relative transform group-hover:-translate-y-9 transition-transform duration-300 text-white">View Projects</span>
            </a>
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out bg-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span className="absolute inset-0 flex justify-center items-center w-full h-full text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300 ease-out">
                <span className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">Let's Talk →</span>
              </span>
              <span className="relative transform group-hover:-translate-y-8 transition-transform duration-300">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Contact Me</span>
              </span>
              <span className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg -z-10"></span>
              <span className="absolute inset-[2px] bg-white rounded-[6px] -z-10"></span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
}