
import React from 'react'
const Enroll_modal = ({name_project,setOpenModal}) => {
  
    return (
    
        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
       
        <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      
          <div class="border-b px-4 py-2 flex justify-between items-center">
            <h3 class="font-semibold text-lg">Solicitud de Inscripción</h3>
            <button class="text-black hover:text-blue-700" onClick={()=>setOpenModal(false)}><i class="far fa-times-circle fa-2x"></i></button>
          </div>
        
          <div class="p-3">
          Estudiante, <br/>Desea inscribirse al proyecto : {name_project} 
          </div>
          <div class="flex justify-end items-center w-100 border-t p-3">
           
            <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Confirmar</button>
            <button class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-2" onClick={()=>setOpenModal(false)}>Cancelar</button>
          </div>
        </div>
      </div>
     
)
}

export default Enroll_modal
