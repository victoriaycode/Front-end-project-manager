import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLinks = () => {
    return (
      <ul class="flex flex-col space-y-2 w-full items-center pt-5 mt-10">
        
      <SidebarRoute1 to='' title='Inicio' icon="fas fa-home fa-lg"/>
      <SidebarRoute1 to='/proyectos' title='Proyectos' icon="fas fa-folder fa-lg"/>
      <SidebarRoute1 to='/usuarios' title='Usuarios' icon="fas fa-users fa-lg"/>
      <SidebarRoute1 to='/mi_perfil' title='Mi Perfil' icon="fas fa-user-cog fa-lg"/>
     
      </ul>
    );
  };
  
  const Logo = () => {
    return (
      <div className='py-3 w-full flex flex-col items-center justify-center'>
        <img src='logo1.png' alt='Logo' className='h-16' />
        <span className='my-2 text-xl font-bold text-center'>Gestión de Proyectos</span>
      </div>
    );
  };
  
  

const Sidebar1 = () => {
    return (

      <div className="flex flex-col justify-between  items-center flex-none w-20 bg-gray-100 mr-4">
        <div className="rounded-2xl ml-5 mt-3 mb-3   w-full h-full bg-white  ">
     
      <div className="flex flex-col space-y-2 w-full items-center pt-5 mt-10 " >
      <SidebarLinks/>
        
      </div>
      <div className="flex flex-col space-y-4 pb-5 pr-2 mt-24">
      <a className="block relative w-full h-16 w-16 flex justify-center items-center text-gray-400 
         hover:text-blue-400">
        <i className="fas fa-user-circle fa-lg"></i>
          
        </a>
        <a className="block relative flex flex-col w-full h-16 w-16 flex justify-center items-center text-gray-400 
         hover:text-blue-400 cursor-pointer">
        <i className="fas fa-power-off fa-lg"></i>
        <span className="text-xs mt-1">Salir</span> 
        </a>
      </div>
    </div>
    </div>
    )
};

const SidebarRoute1 = ({ to, title, icon }) => {
 
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-blue-500 bg-gray-100'
            : 'sidebar-route text-gray-400 '
        }>
          <div class=" relative flex flex-col w-full h-16 pl-2 pr-3 flex justify-center items-center   
         hover:text-blue-400  cursor-pointer">
        <i className={icon} />
        <span className="text-xs mt-1">{title}</span> 
        </div>
          
      </NavLink>
    </>
  );
};

export default Sidebar1
