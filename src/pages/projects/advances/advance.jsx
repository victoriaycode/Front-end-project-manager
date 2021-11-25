import { TextareaAutosize } from "@material-ui/core";
import Commentary from "components/Commentary";
import New_Commentary from "components/New_Commentary";
import New_date from "components/New_date";
import React from "react";
import { useState } from "react";
import { NavLink , useParams} from "react-router-dom";


const Advance = () => {
  
  const { _id } = useParams();
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

  const [editAdvance, setEditAdvance] = useState(false);
  const [newCommentary, setNewCommentary]= useState(false);
  return (
    <div className="w-full h-full overflow-y-hidden">
      <div className="relative h-16 flex flex-row bg-gray-100 w-full align-center justify-start mt-6 border-b-2 ">
        <NavLink to={`/proyectos/proyecto/avances/${_id}`}>
          <button class="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center">
            <i class="fas fa-angle-left fa-2x"></i>
          </button>
        </NavLink>

        <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">
          Proyecto1 / Avance # 1
        </span>
      </div>
      
      <div className="w-full  flex flex-col h-full overflow-y-scroll ">
      <div>
      <div className="w-full h-full overflow-y-hidden">
            
            <div className="w-full h-full px-20 py-4 ">

             

                <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                <div className="w-full py-2 px-4 flex flex-row "><span className="text-gray-500 text text-lg font-medium mt-4">
                        Titulo Avance:
                    </span> <input type="text"  className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100"
                        placeholder="Titulo avance" />
                    </div>
                    <div className="w-full py-2 px-10 flex flex-row">
                        <span className="text-gray-500 text text-lg font-medium mt-4">      Descripción     </span> 


                    <TextareaAutosize placeholder="Escribe tu avance"rows="5 "type="text"  className="h-10 w-5/6 mx-5 px-10 py-2 ml-10 rounded-2xl z-0 focus:outline-none bg-gray-100">
                        </TextareaAutosize>
                    </div>
                    <div className="w-full py-2 px-10 "><span className="text-gray-500 text text-lg font-medium mt-4">
                        Estudiante:
                    </span> 
                    <span className="text-gray-500 text text-lg font-medium mt-4 ml-20">
                        {avance.estudiante}
                    </span> 
                    <span className="pl-40  text-gray-500 text text-lg font-semibold mt-4 ml-2">
                    Fecha de creación:  <span className="font-light"><New_date></New_date></span>
                    </span>
                    </div>
                 
                    
                    </div>

            </div>





        </div>
      </div>

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
      </div>

     
      </div>
     
      )
}

export default Advance;