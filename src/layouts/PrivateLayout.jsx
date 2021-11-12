import Sidebar1 from 'components/Sidebar1';
import { Outlet } from 'react-router';
import React from 'react';

const PrivateLayout = () => {
  return (
    <div className='flex flex-row flex-no-wrap h-screen bg-gray-100'>
      <Sidebar1 />
      <div className='flex w-full h-full '>
        <div className='w-full h-full  overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
