import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/Open Doodles - Loving.png'

// Success Page, when user registers

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={image} alt="Success Illustration" className="mb-4" />
      <h1 className="md:text-4xl font-bold mb-4 text-2xl">Submission Successful! 🥳</h1>
      <p className="text-xl mb-8 text-center">Thank you for your interest. <br />      We'll be in touch soon.</p>
      <Link to="/" className="bg-[#FBA013] text-white px-6 py-3 rounded-md hover:bg-[#E68A00]">
        Return to Home
      </Link>
    </div>
  );
};

export default SuccessPage;