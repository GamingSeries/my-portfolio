import React from 'react';
import Navbar from '../components/navbar';

const HomePage: React.FC = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex flex-auto center items-center justify-center text-3xl text-white text-center font-source-code-pro">
        Hi There!
        <div className='text-white justify-center text-center text-3xl font-source-code-pro'>
        <br /> Muneeb Farooq
        </div>
      </div>
    </div>
  );
};

export default HomePage;
