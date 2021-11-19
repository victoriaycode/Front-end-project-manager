import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Enroll_modal from './Enroll_modal';
const ProjectCardInfo = ({openModal,setOpenModal}) => {

    //const [openModal, setOpenModal] = useState(false);
    const card = {
        "nombre": "Proyecto App Web Too",
        "estado": "Activo",
        "fase": "En desarrollo", "lider": "Federico Montoya Lopez",
        "objetivos_generales": "proyecto diseñado para la simulación y estudio del diseño de una aplicacion",
        "objetivos_especificos": ["OBje1,dksadasdas", "Objet2.sdadsasdasddqw", "Ondsadas"]
    };
    let colorState = "green";
    let colorFase = "yellow";
    return (
        <>
            <div className="flex flex-col h-44 w-64 bg-white   shadow-xl p-4 rounded transform transition duration-300 hover:scale-105 ">


                <div className="flex flex-row">

                    <div className="flex pt-5">
                        <div class={`relative flex flex-col  h-16 flex justify-center items-center   
          text-${colorState}-500 `}>
                            <i class="far fa-calendar-check fa-2x"></i>
                            <span className="text-xs mt-1">{card.estado}</span>
                            <span className={` pt-2 text-center text-${colorFase}-300 font-semibold text-xs `}>{card.fase} </span>

                        </div>
                    </div>
                    <div className="flex flex-col pl-2">
                        <span className="text-lg text-blue-800 text-1xl mx-2 font-bold  ">{card.nombre}</span>
                        <span className="text-ms text-gray-500 text-xs mx-2 font-light pt-2 ">Lider : <span className="text-blue-800 font-light">{card.lider}</span> </span>
                    </div>
                </div>

                <div className="flex flex-rows-2 w-full justify-end align-center mt-4 pr-6">
                    <NavLink
                        to={'/proyectos/proyecto/info'}  >

                        <button class="p-2 pl-4 pr-4 bg-transparent border-2 border-blue-200
                 text-gray-400 text-xs rounded-lg hover:text-blue-500 
                  hover:border-blue-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300  ">Ver</button>
                    </NavLink>
                    <button class="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-200
                 text-gray-400 text-xs rounded-lg  hover:text-blue-500 
                  hover:border-blue-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300" onClick={() => setOpenModal(true)}>Inscribirse</button>
                </div>
            </div>
            
            
        </>)
}



export default ProjectCardInfo
