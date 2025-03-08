import React from 'react';

const Subscribe = () => {
  return (
    <div className='z-10'>
      <div className='w-[80%]  md:w-[60%] mx-auto'>
        
        
        <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between bg-white px-3 py-10 rounded-sm shadow-2xl'>
          {/* text */}
          <div>
            <h2 className='text-3xl font-bold'>Subscribe Now for <br />Get Special Features!</h2>

            <p className='text-gray-500'>Let's subscribe with us and find the fun.</p>
          </div>
          {/* Subscribe btn */}
          <div className='flex justify-center items-center pb-5 md:pb-0'> 
            <div className='px-4 py-2 rounded-lg bg-rose-600 shadow-xl shadow-black/50  '>Subscribe Now</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Subscribe;