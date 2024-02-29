import React from 'react';
import Navbar from '../components/navbar';

const HomePage: React.FC = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='place-content-center grid h-48'>
        <section className='text-white'>
          Hi I am Muneeb Farooq
        </section>
      </div>

      <div className='box-border border-white'> 
      </div>
    </div>
  );
};

export default HomePage;
