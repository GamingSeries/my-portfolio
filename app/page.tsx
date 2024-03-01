import React from 'react';
import Navbar from '../components/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"

const HomePage: React.FC = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='place-content-center grid h-48'>
        <section className='text-white'>
          Hi I am Muneeb Farooq
          <br />
          <br />
          (still working on this site)
        </section>
      </div>
      <div className='box-border bg-white mr-4'> 
      
      </div>
    </div>
  );
};

export default HomePage;
