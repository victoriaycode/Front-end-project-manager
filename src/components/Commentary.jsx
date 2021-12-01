import { ListSubheader, TextareaAutosize } from '@material-ui/core';
import React from 'react'

const Commentary = () => {
    const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let timeday = date.toLocaleDateString("es-US", options);
    const observacion={"lider": "Gabriela Diaz", "comentario":"hola, sigue trabajando en el objetivo 3. Revision next week.","fecha":"18 nov 2021, 1:00am"}
   
    return (
       

  <div className="w-full bg-white p-2  pt-4 mt-2  rounded shadow-lg  border-solid border-2 border-gray-300">
    <div className="flex ml-3">
      <div className="mr-3">
      <i className="fas fa-user-circle fa-2x"></i>
      </div>
      <div>
        <h1 className="font-semibold">{observacion.lider}</h1>
        <p className="text-xs text-gray-500">{timeday}</p>
      </div>

    </div>

    <div className="mt-3 p-3 w-full">
      <TextareaAutosize  rows="3" class="border p-2 rounded w-full text-gray-700" >{observacion.comentario}</TextareaAutosize>
    </div>

    
        

  </div>

    )
}

export default Commentary
