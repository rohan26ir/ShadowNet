import Image from 'next/image';
import React from 'react';

const Review = () => {
  const userReview = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      description: "“Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. ShadowNet is always the best.”",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 4.8,
      description: "“Amazing service! The speed is incredible, and the security is top-notch. Highly recommended.”",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Michael Lee",
      location: "Sydney, Australia",
      rating: 4.6,
      description: "“A reliable VPN that I can count on. The connection is stable, and the support team is very helpful.”",
    },
  ];

  return (
    <div className='py-10'>
      {/* Header Section */}
      <div className='flex flex-col justify-center w-[90%] md:w-[30%] mx-auto text-center mb-8'>
        <h2 className='text-3xl font-bold'>Trusted by Thousands of Happy Customers</h2>
        <p className='text-gray-600'>These are the stories of our customers who have joined us with great pleasure when using this service.</p>
      </div>

      {/* Review Cards */}
      <div className='flex flex-col md:flex-row gap-6 justify-center items-center '>
        {userReview.map((review) => (
          <div key={review.id} className='p-6 border rounded-lg shadow-lg w-[90%] md:w-[30%] text-center h-60 md:h-52 '>
            
            <div className='flex justify-between items-center'>
              <div className='flex justify-start items-center gap-1'>
                <div>
                <img src={review.image} alt="" 
                className='h-12 rounded-full' 
                />
                </div>
                <div className='flex flex-col'>
              <h2 className='text-lg font-bold'>{review.name}</h2>
              <p className='text-gray-500 text-sm'>{review.location}</p>
              </div>
                </div>
              
              <div>
              <p className='font-semibold text-yellow-500'>⭐ {review.rating}</p>
              </div>
            </div>
            
            <p className='mt-5 text-gray-700'>{review.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
