
import React from 'react'
const Enroll_modal = ({name_project,setOpenModalEnroll}) => {
  
    return (
    
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20">
       
        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Solicitud de Inscripción</h3>
            <button className="text-black hover:text-blue-700" onClick={()=>setOpenModalEnroll(false)}><i class="far fa-times-circle fa-2x"></i></button>
          </div>
        
          <div className="p-3">
          Estudiante, <br/>Desea inscribirse al proyecto : {name_project} 
          </div>
          <div className="flex justify-end items-center w-100 border-t p-3">
           
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Confirmar</button>
            <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-2" onClick={()=>setOpenModalEnroll(false)}>Cancelar</button>
          </div>
        </div>
      </div>
     
)
}

export default Enroll_modal
