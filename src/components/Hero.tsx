import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-32 text-center">
      <div className="flex justify-center mb-8">
        <Image
          src="/logo-placeholder.svg"
          alt="Logo Placeholder"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-64 h-64 relative">
          <Image
            src="/profile-placeholder.svg"
            alt="Profile Placeholder"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <div className="md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">Hello, I'm [Your Name]</h1>
          <p className="mt-4 text-lg text-gray-600">
            [Your professional summary here. Briefly introduce yourself and your expertise.]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
