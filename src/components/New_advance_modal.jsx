
import React from 'react'
import { TextareaAutosize } from '@material-ui/core';
import New_date from 'components/New_date';
const New_advance_modal = ({setOpenModal}) => {

  const New_Advance_box = () => {
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
    return (
        
       
        <div className="w-full h-full overflow-y-hidden">
            
            <div className="w-full h-full px-20 overflow-y-scroll">

                <div className="bg-white  w-full py-2 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">
                <div className="w-full py-2 px-4 flex flex-row "><span className="text-gray-500 text text-lg font-medium mt-4">
                        Titulo Avance:
                    </span> <input type="text"  className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100"
                        placeholder="Titulo avance" />
                    </div>
                </div>

                <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                   
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
                    
                    </div>
                    <div className="w-full py-2 px-10 ">
                   
                  
                    <span className="pl-40  text-gray-500 text text-lg font-light mt-4 ml-2">
                    Fecha de creación: <New_date></New_date>
                    </span> 
                    
                    </div>
                   
                    </div>

            </div>





        </div>
   
    )
}
  
  
    return (
    
        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
       
        <div class="bg-white rounded shadow-lg w-10/12 ">
      
          <div class="border-b px-4 py-2 flex justify-between items-center">
            <h3 class="font-semibold text-lg">Nuevo Avance En <span className="text-blue-800 font-bold"> Proyecto # 1</span></h3>
            <button class="text-black hover:text-blue-700" onClick={()=>setOpenModal(false)}><i class="far fa-times-circle fa-2x"></i></button>
          </div>
        
          <div class="p-3">
          <New_Advance_box></New_Advance_box>
          </div>
          <div class="flex justify-end items-center w-100 border-t p-3">
           
            <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Guardar</button>
            <button class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-2" onClick={()=>setOpenModal(false)}>Cancelar</button>
          </div>
        </div>
      </div>
     
)
}

export default New_advance_modal
