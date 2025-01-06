import React from 'react';
import { Code, Palette, Brain } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Development",
      description: "Proficient in modern web technologies including React, Node.js, and TypeScript"
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail"
    },
    {
      icon: <Brain size={24} />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to complex challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with a focus on creating beautiful and functional web applications. 
              With several years of experience in full-stack development, I enjoy turning complex problems 
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
              >
                <div className="text-purple-600 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
