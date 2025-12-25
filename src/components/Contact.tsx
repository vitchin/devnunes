import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center flex flex-col items-center">
          <i className="fas fa-phone text-3xl mb-3 text-[#0b1423]"></i>
          <p className="text-[#0b1423]">(81) 98379-0276</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <i className="fas fa-envelope text-3xl mb-3 text-[#0b1423]"></i>
          <a href="mailto:victoroliv2004@gmail.com" className="text-[#0b1423] hover:underline">
            victoroliv2004@gmail.com
          </a>
        </div>
        <div className="text-center flex flex-col items-center">
          <i className="fab fa-linkedin text-3xl mb-3 text-[#0b1423]"></i>
          <a href="https://www.linkedin.com/in/victornunesdev/" target="_blank" rel="noopener noreferrer" className="text-[#0b1423] hover:underline">
            linkedin.com/in/victornunesdev/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
