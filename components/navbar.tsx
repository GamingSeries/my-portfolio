import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex items-start p-6">
      <div className='text-white font-Concord text-2xl'>
        <h1 className='text-red-500 font-source-code-pro'>
          <a href="../">
            MUNEEB
          </a>
        </h1>
      </div>
      <div className=' flex text-white text-xl font-[Karma] ml-auto whitespace-nowrap'>
        <div className='hover:bg-purple-900 font-source-code-pro'>
          <a href="../../aboutme">About me</a>
        </div>
        <div className='ml-5 hover:bg-purple-900 font-source-code-pro'>
          <a href="">button 3</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
