import React from 'react';

import { FaLocationDot, FaUser } from 'react-icons/fa6';
import { HiOutlineUser } from "react-icons/hi2";
import { GrServerCluster } from "react-icons/gr";


const HomeCount = () => {
  return (
    <div className='bg-white py-10'>
      <div>

        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between w-[80%] mx-auto p-5 md:p-10 rounded-lg bg-white shadow-2xl'>

          {/* 1st card */}
          <div className='w-[100%] flex justify-center items-center gap-2'>
            {/* icon */}
            <div className='bg-red-500/30 h-8 w-8 rounded-full flex justify-center items-center'>
             <p className='text-red-600'><FaUser /></p>
            </div>
            {/* text */}
            <div>
              <p className='font-bold'>90+</p>
              <p className='text-sm text-gray-600'>Users</p>
            </div>
          </div>
          {/* 2nd card */}
          <div className='w-[100%] flex justify-center items-center gap-2 border-0 md:border-x-2'>
            {/* icon */}
            <div className='bg-red-500/30 h-8 w-8 rounded-full flex justify-center items-center'>
              <p className='text-red-600'>
              <FaLocationDot />
              </p>
            </div>
            {/* text */}
            <div>
            <p className='font-bold'>30+</p>
            <p className='text-sm text-gray-600'>Locations</p>
            </div>
          </div>
          {/* 3rd card */}
          <div className='w-[100%] flex justify-center items-center gap-2'>
            {/* icon */}
            <div className='bg-red-500/30 h-8 w-8 rounded-full flex justify-center items-center'>
              <p className='text-red-600'>
              <GrServerCluster />
              </p>
            </div>
            {/* text */}
            <div>
            <p className='font-bold'>50+</p>
            <p className='text-sm text-gray-600'>Servers</p>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  );
};

export default HomeCount;<div>
</div>