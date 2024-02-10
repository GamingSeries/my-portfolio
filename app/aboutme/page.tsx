import React from 'react';
import MyComponent from '../../components/aboutme';
import Navbar from '@/components/navbar';

const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <MyComponent />
    </div>
  );
};

export default HomePage;
