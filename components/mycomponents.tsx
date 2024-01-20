import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-950 to-black shadow">
      {/* Content */}
      <div className="flex justify-center items-start h-screen">
        <div className="w-full md:w-1/2 lg:w-1/3 text-center text-white text-2xl md:text-3xl lg:text-4xl font-normal font-[Karma] p-4 md:p-7 lg:p-8">
          My Portfolio
        </div>
      </div>

      {/* Other sections with different background colors */}
      <div className=''>
        {/* Content with a transparent background */}
      </div>

      {/* Profile picture */}
      <img
        className="w-[35px] h-[35px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] left-[20px] top-[16px] absolute rounded-full"
        src="/images/23bc50b4-9ba0-423a-a149-279afc732e98.JPG"
        alt="Profile"
      />
    </div>
  );
};

export default MyComponent;


