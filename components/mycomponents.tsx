import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="w-[1512px] h-[1843px] relative bg-gradient-to-b from-rose-700 to-black shadow">
      {/* Content */}
      <div className="flex justify-center items-start h-screen">
        <div className="w-[1512px] text-center text-white text-5xl font-normal font-Karma">
          My Portfolio
        </div>
      </div>

      {/* Other sections with different background colors */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
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
