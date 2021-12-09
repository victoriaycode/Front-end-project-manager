import React from 'react'

import { NavLink } from 'react-router-dom'

const ProjectNavbar = ({_idActual,rutaRetorno,nombreProject}) => {
  const _id= _idActual;
  
  return (
    <div className="z-20 sticky top-0 h-14 flex flex-row bg-gray-100 w-full align-center justify-start mt-5 ">
     
      <NavLink to={rutaRetorno}
      >
        <button className="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center ">
          <i className="fas fa-angle-left fa-2x"></i> </button>
      </NavLink>

      <span className="text-lg text-blue-800 text-sm ml-2 mr-5 pt-4 font-bold "> Proyecto  
        <span className="text-lg text-blue-800 text-2xl ml-2 mr-5 pt-2 font-bold ">{nombreProject}</span></span>


      <nav className="flex flex-col sm:flex-row ml-5 text-lg gap-3 ml-30">
        <NavLink to={`/proyectos/proyecto/${_id}`}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-800 border-blue-800 focus:outline-none border-b-4 '
              : 'text-gray-600 border-b-4 '
          }>
      
          <button className=" py-4 px-6 block hover:text-blue-800 focus:outline-none  font-medium ">
            <i className="fas fa-info-circle"></i> Información
          </button>
        </NavLink>
        <NavLink to={`/proyectos/proyecto/avances/${_id}`}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-800 border-blue-800 focus:outline-none border-b-4 '
              : 'text-gray-600 border-b-4 '
          } >
          <button className="py-4 px-6 mx-2 block hover:text-blue-800 focus:outline-none   font-medium ">
            <i className="far fa-file-alt"></i>   Avances
          </button>
        </NavLink>

        <NavLink to={`/proyectos/proyecto/estudiantes/${_id}`}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-800 border-blue-800 focus:outline-none border-b-4 '
              : 'text-gray-600 border-b-4 '
          }>
          <button className="py-4 px-6  mx-2 block hover:text-blue-800 focus:outline-none  font-medium">
            <i class="far fa-address-card"></i>  Estudiantes
          </button>
        </NavLink>
      </nav>
    </div>
  )
}

export default ProjectNavbar
