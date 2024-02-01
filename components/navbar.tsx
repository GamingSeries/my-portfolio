import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <Image
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] absolute rounded-full"
          src="/images/23bc50b4-9ba0-423a-a149-279afc732e98.JPG"
          alt="Profile Picture"
          width={60}
          height={60}
          style={{ left: '20px', top: '16px' }}
        />
      </div>

      <div className="text-white lg:text-2xl font-normal font-[Karma] p-4 md:p-7 lg:p-8 text-left" style={{ marginTop: '20px', marginRight: 'auto' }}>
        About Me:
      </div>

      <div className="text-white border rounded-xl p-4" style={{ margin: 0, width: '60%', textAlign: 'justify', marginRight: '10em' }}>
        Hey there! 🚀 I'm a 3rd-year Computer Science student on a mission to become a software developer, and let me tell you, it's been one heck of an adventure! 🌟
        Debugging is like being a tech detective solving virtual mysteries, and overcoming challenges feels like reaching the summit of a digital mountain. 
        With every new concept, it's like unlocking a secret level in my own coding game, bringing me one step closer to being a coding maestro.
      </div>

      <div className='text-white p-9 lg:text-2xl underline'>
        Projects On Github
      </div>

      <div className='text-white border rounded-xl p-2 text-center'>
        <Link href="https://github.com/GamingSeries/Neptune">
          <div className="block my-4 cursor-pointer">Neptune</div>
        </Link>
        <Link href="https://github.com/GamingSeries/Face_Recognition_System">
          <div className="block my-4 cursor-pointer">Face Recognition System</div>
        </Link>
        <Link href="https://github.com/GamingSeries/weekly_report_system">
          <div className="block my-4 cursor-pointer">Weekly Report System</div>
        </Link>
        <Link href="https://github.com/GamingSeries/Hospital_Management">
          <div className="block my-4 cursor-pointer">Hospital Management System</div>
        </Link>
        <Link href="https://github.com/GamingSeries/Bank_System">
          <div className="block my-4 cursor-pointer">Bank Report System</div>
        </Link>
      </div>


    </div>
  );
};

export default MyComponent;
