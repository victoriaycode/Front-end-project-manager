import React from 'react'
import { useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useProject } from 'context/projectContext';

const ProjectCardInfo = ({project_info,setOpenModalEnroll,setOpenModalEdit}) => {
   
   
  const {actualProject, setActualProject}= useProject();

   useEffect(() => { 
      console.log("actual: ",actualProject)
   }, [actualProject])
    //const [openModal, setOpenModal] = useState(false);
    const card = project_info;
    
    let colorState = "green";
    let colorFase = "yellow";
    if (project_info.estado==="INACTIVO"){
        colorState="gray"
        
    }
    if (project_info.fase==="TERMINADO"){
        colorFase="red"
      
    }
    let user= "ADMINISTRADOR";
    return (
        <>
        

         
            <div className="flex flex-col h-44 w-64 bg-white   shadow-xl p-4  rounded transform transition duration-300 hover:scale-105 ">


                <div className="flex flex-row pt-2">

                    <div className="flex pt-5 ">
                        <div className={`relative flex flex-col  h-16 flex justify-center items-center   
          text-${colorState}-500 `}>
                            <i className="far fa-calendar-check fa-2x"></i>
                            <span className="text-xs mt-1 font-semibold mb-1">{card.estado}</span>
                            <span className={` pt-2 text-center text-${colorFase}-500 font-semibold text-xs `}>{card.fase} </span>

                        </div>
                    </div>
                    <div className="flex flex-col pl-2">
                        <span className="text-lg text-blue-800 text-1xl mx-2 font-bold  ">{card.nombre}</span>
                        <span className=" text-ms text-gray-500 text-xs mx-2 font-light pt-2 ">Lider : <span className="text-blue-800 font-light">{card.lider.nombre} {card.lider.apellido}</span> </span>
                    </div>
                </div>

                <div className="flex flex-rows-2 w-full justify-end align-center mt-4 pr-6">
                    <NavLink
                        to={`/proyectos/proyecto/${card._id}`}  >

                        <button class="p-2 pl-4 pr-4 bg-transparent border-2 border-blue-200
                 text-gray-400 text-xs rounded-lg hover:text-blue-500 
                  hover:border-blue-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300  " onClick={()=>setActualProject({"_id":card._id,"nombre":card.nombre})}>Ver</button>
                    </NavLink>
                    {user==="ESTUDIANTE" &&
                    <button class="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-200
                 text-gray-400 text-xs rounded-lg  hover:text-blue-500 
                  hover:border-blue-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300" onClick={() => setOpenModalEnroll(true)}>Inscribirse</button>
                }
                {user==="ADMINISTRADOR" &&
                    <button class="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-200
                 text-gray-400 text-xs rounded-lg  hover:text-blue-500 
                  hover:border-blue-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300" onClick={() => setOpenModalEdit(true)}>Editar</button>
                }
                </div>
            </div>
            
           
        </>)
}



export default ProjectCardInfo
