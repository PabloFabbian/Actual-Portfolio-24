import React from 'react';
import Logo from '../assets/Logo.webp';

function Navbar() {
  return (
    <>
      <nav className="bg-[#E6CCB2]">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center mx-6">
            <span className="font-black text-3xl text-[#9C6644]">PF Portfolio</span>
            <img src={Logo} alt="Logo" className="ml-2 mt-0.5 h-9 w-auto" />
          </div>
          <div className="flex bg-[#9C6644] py-3.5 px-32 rounded-full text-[#EDE0D4] space-x-32">
            <a href="#" className="hover:text-[#EDE0D4]">Home</a>
            <a href="#" className="hover:text-[#EDE0D4]">About</a>
            <a href="#" className="hover:text-[#EDE0D4]">Projects</a>
            <a href="#" className="hover:text-[#EDE0D4]">Contact</a>
          </div>
          <button
            type="button"
            className="bg-[#DB5A42] text-white px-12 py-2 rounded-xl hover:bg-red-500 hover:border-red-500 mx-6"
            style={{ boxShadow: '5px 5px 0px #2B2B2B', border: '2px solid #DB5A42' }}
          >
            Let's Talk
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;