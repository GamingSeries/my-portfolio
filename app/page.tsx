import React from 'react';
import Navbar from '../components/navbar';

const HomePage: React.FC = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex flex-auto justify-center text-3xl text-white text-center font-source-code-pro">
        <head>
          <title>My Portfolio</title>
        </head>
        Hi There!
        <div className='text-white indent-4 text-3xl font-source-code-pro'>
        <br /> I am Muneeb Farooq
        </div>
      </div>
    </div>
  );
};

export default HomePage;
