import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Title */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-center text-white text-2xl md:text-3xl lg:text-4xl font-normal font-[Karma] p-4 md:p-7 lg:p-8">
        My Portfolio
      </div>
      
      {/* Profile picture and About Me Section */}
      <div className="flex items-start">
        {/* Profile picture */}
        <img
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] absolute rounded-full"
          src="/images/23bc50b4-9ba0-423a-a149-279afc732e98.JPG"
          alt="Profile"
          style={{ left: '20px', top: '16px' }}
        />
      </div>

      <div className='text-white text-2xl md:text-3xl lg:text-4xl font-normal font-[Karma] p-4 md:p-7 lg:p-8 text-left' style={{ marginTop: '20px', marginRight: 'auto' }}>
        About Me:
      </div>

        <div className='text-white'>
          Hey there! 🚀 I'm a 3rd-year Computer Science student on a mission to become a software developer, and let me tell you, it's been one heck of an adventure! 🌟
          <br />
          Every day, I'm diving into the fascinating world of coding, and it feels like I'm crafting my own digital masterpiece. It's not just about learning languages and algorithms; it's about unleashing creativity and problem-solving skills. I'm not just coding; I'm painting with pixels and building the future, one line at a time.
          Debugging is like being a tech detective solving virtual mysteries, and overcoming challenges feels like reaching the summit of a digital mountain. With every new concept, it's like unlocking a secret level in my own coding game, bringing me one step closer to being a coding maestro.
        </div>
      </div>
  );
};

export default MyComponent;
