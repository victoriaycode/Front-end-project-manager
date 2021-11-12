import React from 'react'
import { NavLink } from 'react-router-dom';
const ProjectCard = () => {
    const card={"estado":"Activo",
                "fase":"En desarrollo","lider":"Federico Montoya"};
    let colorState= "green";
    let colorFase="yellow";
        return (

        <div className="flex flex-col h-60 w-60 bg-white rounded-2xl shadow-xl p-4 transform transition duration-300 hover:scale-105 ">
            <span className="text-lg text-blue-800 text-2xl mx-2 font-bold mb-2 font-mono">Nombre Proyecto</span>

            
            <div className="h20 flex flex-col bg-white ">
                <div className="flex flex-row text-lg  text-1xl mx-2 font-light ">
            <span className="text-gray-400">Estado : </span>

            <span className={` pl-2 text-${colorState}-300 font-semibold `}>{card.estado} </span>

          </div>
          
            </div>
        
            <div className="h20 flex flex-col bg-white ">
                <div className="flex flex-row text-ms text-ms  mx-2 font-light ">
            <span className="  text-gray-400">Fase : </span>
            
            <span className={`  pl-2 text-${colorFase}-300 font-semibold`}>{card.fase} </span>
            
             
          </div>
         
            </div>
        
            <div className=" flex flex-col bg-white mt-2">
            <span className="text-ms text-gray-400 text-1xl mx-2 font-light ">Lider : <span className="text-blue-800 font-light">{card.lider}</span> </span>
            </div>
            <div className=" flex flex-cols-2 bg-white mt-2">
            
            <span className="text-lg text-gray-400 text-1xl mx-2 font-light">  </span>
            </div>
            <div className="flex flex-rows-2 w-full justify-end align-center mr-20 text-center">
            <NavLink
                to={'/proyectos/proyecto'}  >
               
                <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-blue-100
                 text-gray-400 text-sm rounded-lg hover:bg-yellow-300 hover:text-gray-500 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300">Explorar</button>
                 </NavLink>
                 <button class="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-100
                 text-gray-400 text-sm rounded-lg hover:bg-yellow-300 hover:text-gray-500 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300">Editar</button>
                 </div>
        </div>
    )
}

export default ProjectCard
