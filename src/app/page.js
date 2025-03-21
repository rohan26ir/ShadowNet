import React from 'react';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Subscribe from './components/Subscribe';
import ChoosePlan from './components/ChoosePlan';
import Provide from './components/Provide';
import HomeCount from './components/HomeCount';
import Hero from './components/Home/Hero';
import Review from './components/Home/Review';

const page = () => {
  return (
    <div className='bg-gray-100 text-black'>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      
      <main className='min-h-screen'>
        <div>


          <div className='bg-white'>
            <Hero></Hero>
          </div>


          <div className=''>
            <HomeCount></HomeCount>
          </div>

          <div className='bg-white'>
            <Provide></Provide>
          </div>

          {/* Choose Your Plan */}
          <div className='bg-gray-100 py-10'>
            <ChoosePlan></ChoosePlan>
          </div>

          <div >
            <Review></Review>
          </div>

        </div>
      </main>

      <footer className=''>
        {/* Subscribe Now */}
        <div className='relative '>
         <Subscribe></Subscribe>
        </div>
        {/* Footer */}
        <div className='-mt-11'>
        <Footer></Footer>
        </div>
      </footer>
    </div>
  );
};

export default page;