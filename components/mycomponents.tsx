import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className={`bg-rgba(var(--foreground-rgb), 0.7)`}>
      <div className="flex justify-center items-start h-screen">
        <div className="w-[1512px] text-center text-white text-[40px] font-normal font-Karma">
            Muneeb's Portfolio
        </div>
      </div>

      {/* Other sections with different background colors */}
      <div className="bg-rgba(var(--foreground-rgb), 0.5)">
        {/* Content with a transparent background */}
      </div>
    </div>
  );
};

export default MyComponent;