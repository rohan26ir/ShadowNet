import React from 'react';
import { SiMatternet } from "react-icons/si";

const Navbar = () => {
  return (
    <div className='bg-white text-black py-2'>
      <div className='w-11/12 mx-auto'>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <div className='text-red-600'><SiMatternet /></div>
          <h1 className='text-xl'>Shadow<span className='font-bold'>Net</span></h1>
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-5 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
        </div>
        {/* 3rd section */}
        <div className='flex gap-2 items-center'>
          <div className='hidden md:block'>
            <button className='px-3 py-1 rounded-3xl font-bold'>Sign In</button>
          </div>
          <div>
            <button className='border-2 border-red-600 text-red-600 font-bold px-3 py-1 rounded-3xl'>Sign Up</button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Navbar;