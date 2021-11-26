import { ListSubheader, TextareaAutosize } from '@material-ui/core';
import React from 'react'

const New_Commentary = ({setCancel}) => {
    const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let timeday = date.toLocaleDateString("es-US", options);
    const observacion={"lider": "Gabriela Diaz", "comentario":"hola, sigue trabajando en el objetivo 3. Revision next week.","fecha":"18 nov 2021, 1:00am"}
   
    return (
       

  <div className=" w-full flex  flex-row bg-white p-2 pt-4 mb-6 rounded shadow-lg border-solid border-2 border-gray-300 ">
    <div className="flex  flex-col mx-2 py-2  flex-center align-center justify-items ">
     
     <i className="fas fa-user-circle fa-2x"></i>
     <h1 className="font-semibold mt-2">{observacion.lider}</h1>
     
     <div>
     

     </div>

   </div>
   <div className="mt-3 flex flex-col px-3  w-full">
      <TextareaAutosize  minRows="2" className="border break-all px-4 py-4 rounded w-full text-gray-700" 
      placeholder="Escribe tu observación ..."></TextareaAutosize>
       
      <div className="flex mt-2 justify-between mx-3">
      <p className="text-xs text-gray-500 mt-2 ml-2 ">{timeday}</p>
      <div>
        <button className="px-4 py-1 bg-blue-700 text-white rounded font-light hover:bg-blue-800 ">Enviar</button>
      <button className="px-4 py-1 bg-gray-400 text-white rounded font-light hover:bg-gray-600 ml-4" onClick={()=>setCancel(false)}>Cancelar</button></div>
     
    </div>
    </div>

   

  </div>

    )
}

export default New_Commentary
