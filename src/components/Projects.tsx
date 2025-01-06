import React from 'react';
import { Github, ExternalLink, Play } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Defuse Together",
      description: "Navigate through four vibrant rooms, solving intricate puzzles to uncover hidden codes. Use these codes to defuse a ticking bomb before time runs out!",
      image: "src/components/Images/DefuseTogether.png",
      github: "https://github.com/Abdulrahmanisk/Defuse-Together",
      demo: "https://sidequestvr.com/app/39790/kaboom",
      // video: "https://youtube.com"
    },
    {
      title: "Food Recipes Application",
      description: "I created a SwiftUI recipe app packed with advanced search, interactive guides, and social sharing. Optimized with OOP and caching, it delivers seamless performance and engaging community features.",
      image: "src/components/Images/Food Recipes.png",
      github: "https://github.com/Abdulrahmanisk/FoodRecipe",
      // demo: "https://demo-link.com",
      // video: "https://youtube.com"
    },
    {
      title: "Slime",
      description: "Another amazing project description. Highlight your key achievements and technical challenges.",
      image: "src/components/Images/Slime.png",
      // github: "https://github.com",
      // demo: "https://demo-link.com",
      video: "https://drive.google.com/file/d/1H7ebfA7AyAhq5HMYaQvImPWNf42YcyDl/view"
    },

    {
      title: "Class X",
      description: "An educational and engaging game designed for future game developers. Players, as students from Tuwaiq Academy, navigate through a class named X by completing coding challenges they’ve previously learned.",
      image: "src/components/Images/X.png",
      github: "https://github.com/Abdulrahmanisk/ClassX",
      // demo: "https://demo-link.com",
      // video: "https://youtube.com"
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">
                      <ExternalLink size={20} className="mr-1" />
                      Demo
                    </a>
                  )}
                  {project.video && (
                    <a href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out transform hover:scale-105">
                      <Play size={20} className="mr-1" />
                      Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
