import React from 'react';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';

const page = () => {
  return (
    <div className='bg-white text-black'>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      
      <main className='min-h-screen'>
        <div>
          
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default page;