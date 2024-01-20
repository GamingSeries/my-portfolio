import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="bg-gradient-to-b to-purple-900 from-indigo-600">
      {/* Content */}
      <div className="flex justify-center items-start h-screen">
      <div className="w-[1512px] text-center text-white text-5xl font-normal font-Karma p-7">
        My Portfolio
      </div>

      </div>

      {/* Other sections with different background colors */}
      <div className=''>
        {/* Content with a transparent background */}
      </div>

      {/* Profile picture */}
      <img
        className="w-[70px] h-[70px] left-[20px] top-[16px] absolute rounded-full"
        src="/images/23bc50b4-9ba0-423a-a149-279afc732e98.JPG"
        alt="Profile"
      />
    </div>
  );
};

export default MyComponent;

