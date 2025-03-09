import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='py-10'>
      <div className='w-11/12 mx-auto'>
        
        <div className='flex flex-col-reverse justify-between md:flex-row gap-2'>
          {/* text */}
          <div className='w-[100%] md:w-[40%] space-y-3'>
            <h2 className='text-4xl font-bold'>Want anything to be easy with LaslesVPN.</h2>

            <p className='text-gray-600'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>

            <button className='bg-red-500 px-5 py-2 rounded-lg cursor-pointer text-white font-bold'>Get Started</button>

          </div>
          {/* image */}
          <div>
            <Image src="/hero.gif" height={400} width={400} alt='Hero image' ></Image>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Hero;