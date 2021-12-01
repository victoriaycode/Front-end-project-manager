import { ListSubheader } from '@material-ui/core';
import React from 'react'

const New_Commentary = ({setCancel}) => {
    const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let timeday = date.toLocaleDateString("es-US", options);
    const observacion={"lider": "Gabriela Diaz", "comentario":"hola, sigue trabajando en el objetivo 3. Revision next week.","fecha":"18 nov 2021, 1:00am"}
   
    return (
       

  <div className=" w-full bg-white p-2 pt-4 mb-6 rounded shadow-lg border-solid border-2 border-gray-300 ">
    <div className="flex ml-3">
      <div className="mr-3">
      <i className="fas fa-user-circle fa-2x"></i>
      </div>
      <div>
        <h1 className="font-semibold">{observacion.lider}</h1>
        <p className="text-xs text-gray-500">{timeday}</p>
      </div>

    </div>

    <div class="mt-3 p-3 w-full">
      <textarea rows="3" className="border p-2 rounded w-full" placeholder="Write something..."></textarea>
    </div>

    <div class="flex justify-between mx-3">
      <div><button className="px-4 py-1 bg-blue-700 text-white rounded font-light hover:bg-blue-800 ">Enviar</button>
      <button className="px-4 py-1 bg-gray-400 text-white rounded font-light hover:bg-gray-600 ml-4" onClick={()=>setCancel(false)}>Cancelar</button></div>
      <div>
        <div tabindex="0" className="dropdown">
      
         
        </div>
      </div>
    </div>

  </div>

    )
}

export default New_Commentary
