import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Feel free to reach out to me through any of the following channels:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <i className="fas fa-phone text-3xl mb-3 text-gray-500"></i>
          <p className="text-gray-800">+1 (555) 123-4567</p>
        </div>
        <div className="text-center">
          <i className="fas fa-envelope text-3xl mb-3 text-gray-500"></i>
          <a href="mailto:contact@yourdomain.com" className="text-blue-500 hover:underline">
            contact@yourdomain.com
          </a>
        </div>
        <div className="text-center">
          <i className="fab fa-linkedin text-3xl mb-3 text-gray-500"></i>
          <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
