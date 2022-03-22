import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router';
import PrivateComponent from './PrivateComponent';
import { useUser } from 'context/userContext';
import { Tooltip } from '@material-ui/core';

const SidebarLinks = () => {

    return (
      <ul className="flex flex-col space-y-2 w-full items-center  pt-5 ">
        


      <PrivateComponent roleList={['ADMINISTRADOR','LIDER','ESTUDIANTE']} stateUser={['AUTORIZADO']}>
          <SidebarRoute1 to='/inicio' title='Inicio' icon="fas fa-home fa-lg"/>
          <SidebarRoute1 to='/proyectos' title='Proyectos' icon="fas fa-folder fa-lg"/>

        <PrivateComponent roleList={["LIDER","ESTUDIANTE"]}>
          <SidebarRoute1 to='/inscripciones' title='Inscripciones' icon="fas fa-clipboard-check fa-lg"/>
        </PrivateComponent>

          <PrivateComponent roleList={['ADMINISTRADOR','LIDER']}>
            <SidebarRoute1 to='/usuarios' title='Usuarios' icon="fas fa-users fa-lg"/>
          </PrivateComponent>

          <SidebarRoute1 to='/mi_perfil' title='Mi Perfil' icon="fas fa-user-cog fa-lg"/>
      </PrivateComponent>
     
      </ul>
    );
  };
  
  const Logo = () => {
    return (
      <div className='py-3 w-full flex flex-col items-center justify-center  '>
        <img src='logo1.png' alt='Logo' className='h-16' />
        <span className='my-2 text-xl font-bold text-center'>Gestión de Proyectos</span>
      </div>
    );
  };
  

const SidebarNav = () => {

  const { userData } = useUser();
  const { setToken } = useAuth();
  const usuario= userData.rol +": "+ userData.nombre +": "+userData.apellido;  
  const navigate = useNavigate();

    return (

      <div className="flex flex-col   items-center   w-24  bg-gray-100 mr-2">
        <div className="rounded-2xl ml-5 my-1   w-full h-full bg-white  shadow-2xl ">
     
      <div className="flex flex-col space-y-2 w-full items-center pt-5  " >
      <SidebarLinks/>
        
      </div>
      <div className="flex flex-col space-y-4 pb-5 pr-2 mt-8">
      
        <a className=" relative flex flex-col w-full h-16 mb-2 justify-center items-center 
         text-blue-400 hover:text-blue-500">
            
            {/* <span>{userData.rol} :</span> */}
            <Tooltip title={usuario} arrow placement="left">
            
            <i className="fas fa-user-circle fa-lg"></i>
            
           </Tooltip>
           <span className="text-sm mt-1 font-semibold text-center">{userData.nombre}</span> 
           {userData.rol=="ESTUDIANTE" && <span className="text-xs mt-1 text-blue-800">{userData.rol}</span> }
           {userData.rol=="ADMINISTRADOR" && <span className="text-xs mt-1 text-blue-800">ADMIN</span> }
           {userData.rol=="LIDER" && <span className="text-sm mt-1 text-blue-800">{userData.rol}</span> }
 
           </a>
  
          <a className="block relative flex flex-col w-full h-16  justify-center items-center text-gray-500 
          hover:text-blue-400 cursor-pointer">
          <i className="fas fa-power-off fa-lg" 
          onClick={
            () => {
            navigate('/login')
            setToken(null)}
            }>
            </i>
            <span className="text-xs mt-1 cursor-none">Logout</span>
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
            ? 'sidebar-route text-blue-500  font-bold   border-b-4 border-blue-400'
            : 'sidebar-route text-gray-500  border-b-2 border-gray-100'
        }>
          <div className=" relative flex flex-col text-center w-full h-16 flex justify-center items-center   
         hover:text-blue-400  cursor-pointer transform transition duration-50 ">
        <i className={icon} />
        <span className="text-sm mt-1">{title}</span> 
        </div>
          
      </NavLink>
    </>
  );
};

export default SidebarNav
