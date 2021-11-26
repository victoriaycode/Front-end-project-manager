import { TextareaAutosize } from "@material-ui/core";
import Commentary from "components/Commentary";
import New_Commentary from "components/New_Commentary";
import New_date from "components/New_date";
import React from "react";
import { useState, useEffect } from "react";
import { NavLink , useParams} from "react-router-dom";

import { GET_ADVANCE_BY_ID } from 'graphql/avances/queries'
import { useQuery } from '@apollo/client';

const Advance = () => {
  
  const { _id } = useParams();
  
  const { _idAvance } = useParams();
  const [advance, setAdvance]= useState({});
  const [createdBy, setCreatedBy]= useState("");
  
  const [editable, setEditable]= useState(false);
  const { data, error, loading } = useQuery(GET_ADVANCE_BY_ID,{variables:{
    _idAvance},});
  
  const [input_bg,setInputBg]= useState("bg-gray-50");
 

    useEffect(() => {
      if(loading){
  
      }else{
        let nombre= data.filtrarAvancePorId.creadoPor.nombre;
        let apellido= data.filtrarAvancePorId.creadoPor.apellido;
        setCreatedBy(nombre + " "+ apellido);
        setAdvance(data.filtrarAvancePorId);
        console.log('data avance', data);
      }
    }, [loading]);
    useEffect(() => {
      if(editable){
        
        setInputBg("bg-gray-100");
      }else{
        
        setInputBg("bg-indigo-50");
      }
    }, [editable])
  const avance = {
    _id: "2312321323",
    titulo: "titulo avance 1",
    fecha_creado: "nov 17 2021, 11:15 p.m",
    descripción:
      "avance sadasadasdasdasdasdasdasdsadasssssssssssssssssssssssssssssssssssssssssssssssssssssadasssssssssssssssssssssssssssssdasdasdassadasdasdasdasdasdasdsadsadasdasdasdasdasdasdsadsadassadasdasdasdasdasdasdsadsadasdasdasdasdasdasdsadsadasdasdasdasdasdasdsadsadasdasdasdasdasdasdsaddasdasdasdasdasdsadsadasdasdasdasdasdasdsaddasdasdsadasadasdasdasdasdasdasdsasadasadasdasdasdasdasdasdsadasadasadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsadasadasdasdasdasdasdasdsdasdasdasdasdasdsadasadasdasdasdasdasdasddasadasdasdasdasdasdasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasdsadasadasdasdasdasdasdasd,dasd,alsd,ñasldalsdasdasldasldlasdlasldladldlsasd ",
    estudiante: "Lorena Diaz",
    proyecto: { nombre: "proyecto1 acerca de ", _id: "sdq122q" },
    observaciones: [
      {
        lider: "Fabio Gonzalez",
        observacion: "sadalsdkaskdasdlasdlalsdlasdlpsadlpdllas",
      },
    ],
  };

  if (loading) return <div>Cargando....</div>;
  //if (loading) return <div>Cargando....</div>;

  //const [editAdvance, setEditAdvance] = useState(false);
  //const [newCommentary, setNewCommentary]= useState(false);
  return (
    <div className="w-full h-full overflow-y-hidden">
      <div className="relative h-16 flex flex-row bg-gray-100 w-full align-center justify-start mt-6 border-b-2 ">
        <NavLink to={`/proyectos/proyecto/avances/${_id}`}>
          <button class="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full 
          h-14 w-14 align-center justify-center">
            <i class="fas fa-angle-left fa-2x"></i>
          </button>
        </NavLink>

        <span className="text-lg text-blue-800 text-2xl ml-2 mr-5 pt-2 font-bold ">
           Avance # {_idAvance}
        </span>
        <div className="flex flex-row">
      
       {editable ? (<div>  <button className="p-2 pl-5 pr-5 ml-10 flex-end m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" >Guardar</button>
               <button className="p-2 pl-5 pr-5 ml-10 flex-end m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" onClick={()=>setEditable(false)}>Cancelar</button></div>)
             :(  <button className="p-2 pl-5 pr-5 ml-10 flex-end m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" onClick={()=>setEditable(true)}>Editar</button>)}  
        </div>
      
      </div>
      
      <div className="w-full  flex flex-col h-full overflow-y-scroll ">
      <div>
      <div className="w-full h-full overflow-y-hidden">
            
            <div className="w-full h-full px-20 py-1 ">

             
                <div className=" w-full bg-white   flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                <div className="w-full py-2 px-10 flex flex-row "><span className="text-gray-500 text text-lg font-medium mt-4">
                        Titulo Avance:
                    </span> 
                    <input type="text" disabled={!editable}  
                    className={`h-10 w-5/6 mx-5 px-10 mt-1  text-xl font-semibold text-blue-800 rounded-2xl z-0 focus:outline-none
                    ${input_bg}`}
                        defaultValue={advance.titulo} />
                        
     
                    </div>
                    <div className="w-full py-2 px-10 flex flex-row">
                        <span className="text-gray-500 text text-lg font-medium mt-4">      Descripción     </span> 


                    <TextareaAutosize disabled={!editable} defaultValue= {advance.descripcion} minRows="3 "type="text" 
                     className={`h-10 w-5/6 mx-5 px-10 py-2 ml-10 rounded-2xl z-0 focus:outline-none ${input_bg}`}>
                    
                        </TextareaAutosize>
                    </div>
                    <div className="w-full py-2 px-10 "><span className="text-gray-500 text text-lg font-medium mt-4">
                        Estudiante:
                    </span> 
                    
                    <input type="text" disabled={!editable}  
                   className={`text-gray-500 text ${input_bg}  text-lg p-2 pl-4 font-medium mt-4 ml-20 rounded-2xl z-0 focus:outline-none`}
                        defaultValue=  {createdBy} />
                    <span className="text-gray-500 text text-lg font-medium mt-4 ml-20">
                    Fecha de creación: 
                    <input type="text" disabled={!editable}  
                   className={`text-gray-500 text ${input_bg}  text-lg p-2 pl-4 font-medium mt-4 ml-20 rounded-2xl z-0 focus:outline-none`}

                        defaultValue=  {advance.fecha} />
                    </span>
                    </div>
                 
                    
                    </div>

            </div>





        </div>
      </div>
{/**
 * 
 
      <div className="w-full   my-5 px-4  py-5 mx-4 border-solid border-gray-300 border-t-2">
<div className="w-full flex flex-row justify-start py-2  mx-5">
<span className="text-lg text-blue-800 text-2xl font-bold  " >Observaciones</span>
<button className="p-1 ml-20 mr-10  bg-transparent border-2 border-blue-500  
text-blue-500 text-sm rounded-lg hover:bg-blue-600 
  hover:text-white  
focus:border-4 " onClick ={()=>setNewCommentary(!newCommentary)}>Añadir nueva</button>
</div>


<div className="w-full h-full mb-10">
 
<div className="mt-4 flex flex-col gap-1 h-3/4 px-5">
<div className="mx-5 sticky top-0 bg-gray-100 border-b- border-gray-50">

 
 </div>
 {newCommentary &&<New_Commentary setCancel={setNewCommentary}/> }
<Commentary></Commentary>
<Commentary></Commentary>
<Commentary></Commentary>
<Commentary></Commentary>
</div>
</div>
      </div>
      */}
      </div>

      </div>
     
      )
}

export default Advance;