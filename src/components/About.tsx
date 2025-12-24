import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">
          [A brief paragraph about yourself. Your background, your passion for coding, etc.]
        </p>
        <h3 className="text-2xl font-bold mb-4">My Specializations</h3>
        <p className="text-gray-600 mb-8">[Your specializations, e.g., Frontend Development, Backend Development, Data Science, etc.]</p>
        <h3 className="text-2xl font-bold mb-4">My Tech Stack</h3>
        <p className="text-gray-600">[List of technologies you work with, e.g., React, Next.js, Node.js, Python, etc.]</p>
      </div>
    </div>
  );
};

export default About;
