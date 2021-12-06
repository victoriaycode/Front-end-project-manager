
import { TextareaAutosize } from '@material-ui/core';
import React from 'react'

import { useState, useEffect } from 'react';
const Edit_objective_modal = ({index,setOpenEditObj,tipo, descrip}) => {
  const [newType, setnewType] = useState(tipo)
    const [newDescripObj, setNewDescripObj] = useState(descrip)
    const editarObjective=()=>{
      console.log("tp", newType);
      console.log("desc",newDescripObj);
    }
    return (
    
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20">
       
        <div className="bg-white rounded-xl shadow-lg w-8/12   ">
      
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Editar Objetivo</h3>
            <button className="text-black hover:text-blue-700" onClick={()=>setOpenEditObj(false)}><i class="far fa-times-circle fa-2x"></i></button>
          </div>
        
          <div className="w-full flex flex-col px-4 py-2">
                                        <div className="w-full flex flex-row gap-40  text-lg font-semibold text-blue-800">
                                            <span>Tipo</span>
                                            <span>Descripción</span></div>
                                        <div className="w-full flex flex-row mt-5 text-gray-600">
                                            <select className="h-10 w-50 pr-8 pl-5 text-lg text-blue-800 rounded-2xl z-0 focus:shadow focus:outline-none 
                      border-gray-400 border-2" defaultValue="GENERAL" defaultValue={newType} onChange={(e) => setnewType(e.target.value)}>
                                                <option className="" value="GENERAL" >GENERAL</option>
                                                <option className="" value="ESPECIFICO">ESPECIFICO </option>

                                            </select>
                                            <TextareaAutosize minRows="2"type="text" className="h-10 w-5/6 mx-5 text-lg px-10 rounded-2xl z-0 focus:outline-none bg-gray-100 border-2 border-gray-300"
                                                defaultValue={newDescripObj} onChange={(e) => setNewDescripObj(e.target.value)} ></TextareaAutosize>

                                           
                                        </div>
                                    </div>
          <div class="flex justify-end items-center w-100 border-t p-3">
           
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 h-10 rounded-2xl text-white" onClick={()=>editarObjective()}>Confirmar</button>
            <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 h-10 rounded-2xl rounded text-white mr-1 close-modal ml-3" onClick={()=>setOpenEditObj(false)}>Cancelar</button>
          </div>
        </div>
      </div>
     
)
}

export default Edit_objective_modal
