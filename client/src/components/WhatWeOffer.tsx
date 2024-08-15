import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhatWeOffer: React.FC = () => {
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  const handlehack = () => {
    navigate('/hackathons'); // Navigate to the home page
  };

  const handleteam = () => {
    navigate('/buildteam'); // Navigate to the build team page
  };
  return (
    <div className="text-center text-white p-6 md:p-10 bg-black">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">What We Offer</h1>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="border-2 border-yellow-400 p-4 w-full md:w-[600px] bg-gray-900">
          <img src="./public/Hackupdate.jpg" alt="Hackathon Updates" className="w-full h-auto mb-4" />
          <h2 className="text-yellow-400 text-xl md:text-2xl mb-2">Hackathon Updates</h2>
          <button onClick={handlehack} className="bg-black text-xl text-white border-2 border-white px-4 py-2 hover:bg-yellow-400 hover:text-black hover:font-bold">
            Check In
          </button>
        </div>
        <div className="border-2 border-yellow-400 p-4 w-full md:w-[600px] bg-gray-900">
          <img src="./public/buildteam.jpg" alt="Build a Team" className="w-full h-auto mb-4" />
          <h2 className="text-yellow-400 text-xl md:text-2xl mb-2">Build a Team</h2>
          <button onClick={handleteam} className="bg-black text-white border-2 border-white px-4 py-2 hover:bg-yellow-400 text-xl hover:font-bold hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
