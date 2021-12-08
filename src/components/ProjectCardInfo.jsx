import { useMutation } from '@apollo/client';
import {  Dialog, Zoom } from '@material-ui/core';
import { EDIT_PROJECT_BY_ADMIN } from 'graphql/proyectos/queries';
import React from 'react'
import { useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import Edit_project_admin_modal from './Edit_project_admin';

const ProjectCardInfo = ({project_info,setOpenModalEnroll}) => {
   
    const [aprobarModal, setAprobarModal]= useState(false);
    
    const [editModal, setEditModal]= useState(false);

    var dateNow = new Date().toISOString().slice(0, 14);
  const [editarProjectAdmin, { data: mutationData, loading: mutationLoading, error: mutationError }] =
  useMutation(EDIT_PROJECT_BY_ADMIN);

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
    
    
    
    const aprobarProyecto=async()=>{
        console.log("aprobar");
        let idProyecto=card._id;
        console.log("idProyecto", idProyecto);
  
        const edit = editarProjectAdmin({
            variables: { idProyecto, "estado":"ACTIVO","fase":"INICIADO", "fechaInicio":dateNow },
          });
         setAprobarModal(false);
          console.log("edita",edit);
        }
       
   
    return (
        <>
        

         
            <div className="flex flex-col h-44 w-64 bg-white   shadow-xl p-4  rounded transform transition duration-300 hover:scale-105 ">


                <div className="flex flex-row pt-2 ">

                    <div className="flex pt-5 ">
                        <div className={`relative flex flex-col  h-16 flex justify-center items-center   
          text-${colorState}-500 `}>
                            <i className="far fa-calendar-check fa-2x"></i>
                            <span className="text-xs mt-1 font-semibold mb-1">{card.estado}</span>
                            <span className={` pt-2 text-center text-${colorFase}-500 font-semibold text-xs `}>{card.fase} </span>

                        </div>
                    </div>
                    <div className="flex flex-col pl-2 ">
                        <p className="text-lg text-blue-800 w-30 break-all     overflow-ellipsis   px-2 text-1xl font-bold  ">{card.nombre}</p>
                        <span className=" text-ms text-gray-500 text-xs mx-2 font-light pt-2 ">Lider : <span className="text-blue-800 font-light">{card.lider.nombre} {card.lider.apellido}</span> </span>
                    </div>
                </div>

                <div className="flex flex-rows-2 w-full justify-end align-center mt-4 pr-6">
                    <NavLink
                        to={`/proyectos/proyecto/${card._id}`}  >

<button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                    text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                    focus:border-4 focus:border-blue-300 font-mono text-sm"  >Ver</button>
                    </NavLink>
                    {user==="ESTUDIANTE" &&
                    <button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                    text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                    focus:border-4 focus:border-blue-300 font-mono text-sm" onClick={() => setOpenModalEnroll(true)}>Inscribirse</button>
               
            }
                {user==="ADMINISTRADOR" &&
                <>
                 { (card.estado==="INACTIVO" && card.fase==="NULO") 
                   ? (<button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                   text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                   focus:border-4 focus:border-blue-300 font-mono text-sm"  onClick={() => setAprobarModal(true)}>APROBAR</button>
                   ):(

                    <button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                    text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                    focus:border-4 focus:border-blue-300 font-mono text-sm" onClick={() => setEditModal(true)}>EDITAR</button>
                   )
                 }
                  
            </>
            }
                </div>
            
            
<Dialog open={aprobarModal} >
                
                <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20">
               
               <div className="bg-white rounded shadow-lg w-1/3  ">
             
                 <div className="border-b px-4 py-2 flex justify-between items-center">
                   <h3 className="font-semibold text-blue-800 text-xl"> Proyecto: {card.nombre}</h3>
                   <button className="text-black hover:text-blue-700" onClick={()=>setAprobarModal(false)}><i class="far fa-times-circle fa-2x"></i></button>
                 </div>
               
                 <div className="w-full flex flex-col px-4 py-2">
                 <h3 className="font-semibold text-blue-800 text-xl mb-2"> ¿Desea aprobar este proyecto?</h3>
                                             <span className="text-base "> Su estado será 
                                             <span className="text-gray-800  font-semibold"> ACTIVO</span> y su fase será 
                                             <span className="text-gray-800  font-semibold"> INICIADO</span></span>
                                           </div>
                 <div class="flex justify-end items-center w-100 border-t p-3">
                  
                   <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 h-10 rounded-2xl text-white" onClick={()=>aprobarProyecto()}>Si, aprobar</button>
                   <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 h-10 rounded-2xl rounded text-white mr-1 close-modal ml-5" onClick={()=>setAprobarModal(false)}>Cancelar</button>
                 </div>
               </div>
             </div>
        
                    </Dialog>
                    
                    <Dialog open={editModal}>
                        <Edit_project_admin_modal  idProyecto= {card._id} initialState={card.estado}
                        nombreProyecto={card.nombre} fechaInicio={card.fechaInicio} fechaFin={card.fechaFin} initialFase={card.fase} setOpenModalEdit={setEditModal}/>

                        
                    </Dialog>
           
            </div>
            
           
        </>)
}



export default ProjectCardInfo
