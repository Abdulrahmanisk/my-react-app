import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
<section id="contact" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
      <a href="mailto:Abdulrahman-Iskandar@outlook.com" 
         className="group flex items-center text-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105">
        <Mail size={20} className="mr-3 group-hover:text-purple-600" />
        <span className="text-lg bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600">
          Abdulrahman-Iskandar@outlook.com
        </span>
      </a>
      
      <a href="https://github.com/Abdulrahmanisk" 
         target="_blank"
         rel="noopener noreferrer"
         className="group flex items-center text-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105">
        <Github size={20} className="mr-3 group-hover:text-purple-600" />
        <span className="text-lg bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600">
          GitHub Profile
        </span>
      </a>
      
      <a href="https://www.linkedin.com/in/abdulrahman-iskandar"
         target="_blank"
         rel="noopener noreferrer"
         className="group flex items-center text-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105">
        <Linkedin size={20} className="mr-3 group-hover:text-purple-600" />
        <span className="text-lg bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600">
          LinkedIn Profile
        </span>
      </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
