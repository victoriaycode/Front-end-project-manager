import SidebarNav from 'components/SidebarNav';
import { Outlet } from 'react-router';
import React from 'react';

const PrivateLayout = () => {
  return (
    <div className='flex flex-row flex-no-wrap h-screen bg-gray-100 '>
      <SidebarNav />
      <div className='flex w-full h-full ml-1 '>
        <div className='w-full h-full  overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
