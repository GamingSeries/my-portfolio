import React from 'react';
import MyComponent from '../components/mycomponents';
import AboutMeComponent from '@/components/aboutme';

const HomePage: React.FC = () => {
  return (
    <div>
      <MyComponent />
      <AboutMeComponent/>
    </div>
  );
};

export default HomePage;
