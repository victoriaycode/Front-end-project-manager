import { TextareaAutosize } from '@material-ui/core';
import React from 'react'
import Edit_objective_modal from 'components/Edit_objective_modal';

import { Dialog } from '@material-ui/core';
import { useState, useEffect } from 'react';

const RowObjectiveInfo = ({ datarow, list, setObjectivesList }) => {
    const [descripcionRow, setDescripcionRow] = useState(datarow.descripcion);
    const [tipo, setTipo] = useState(datarow.tipo);
    const [editRow, setEditRow] = useState(false);
    const [editModal, setEditModal]=useState(false);
    const [deleteModal, setDeleteModal]=useState(false);
   
    const deleteObjective = () => {
        console.log("borrando objetivo");
    }
    const editObjective = () => {
        
        const indice = list.findIndex((elemento) => {
            if (elemento.row === datarow.row) {
                return true;
            }
        });
        if (descripcionRow !== "" && tipo != "" ) {
            const changeRow = { "tipo": tipo, "descripcion": descripcionRow, "row": datarow.row }

            let c = [...list]
            c[indice] = changeRow;


            setObjectivesList(c);

        }
       
    }

    return (


        <li className="text-gray-500 font-semibold text-lg 
        shadow-md font-light  border-solid border-2 mb-4 border-light-blue-500 ">

            <div className="w-full  flex flex-row  p-2 text-gray-600">

                <div className="flex flex-col flex-auto ">
                <span className=" w-30 pr-8 pl-5 text-lg   text-blue-800 rounded-2xl z-0
                 focus:shadow focus:outline-none font-mono font-semibold
                   " defaultValue={tipo} onChange={(e) => setTipo(e.target.value)}>
                  {tipo}
                </span>
                <TextareaAutosize minRows="1"   className="h-10 w-auto mx-5 p-4  flex-auto rounded-2xl z-0 focus:outline-none   "
                       value={descripcionRow}  >{descripcionRow}</TextareaAutosize>
                       </div>
                <div className="flex flex-col gap-1 justify-around">
                <button className="text-blue-600 hover:text-blue-800  py-1 px-2 hover:bg-gray-50 focus" onClick={() => setEditModal(true)} ><i className="fas fa-edit fa-lg"></i></button>
                        <button className="text-gray-500 hover:text-gray-700  py-1  px-2 hover:bg-gray-50"><i className="fas fa-trash fa-lg" onClick={() => setDeleteModal(true)}></i></button>
                </div>
                </div>
               
              
                {/* {editRow ? (<>


                    <input  type="text"   className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-50 border-2 border-gray-300"
                       value={descripcionRow} onChange={(e) => setDescripcionRow(e.target.value)} />
                    <button className="text-blue-600 hover:text-blue-800 focus py-1 hover:bg-gray-50" onClick={() => editObjective()}><i className="far fa-save fa-lg"></i>Guardar</button>
                    <button className="text-gray-500 hover:text-gray-700 ml-10 py-1 hover:bg-gray-50 " onClick={() => setEditRow(false)}><i className="fas fa-ban fa-lg"></i>Cancelar</button></>)
                    : (<>

                        <span className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        >{descripcionRow}</span>

                        <button className="text-blue-600 hover:text-blue-800  py-1 hover:bg-gray-50 focus" onClick={() => setEditRow(true)} ><i className="fas fa-edit fa-lg"></i>Editar</button>
                        <button className="text-gray-500 hover:text-gray-700 ml-10 py-1 hover:bg-gray-50"><i className="fas fa-trash fa-lg" onClick={() => deleteObjective()}></i>Eliminar</button>
                    </>)} */}

<Dialog open={editModal}>
                <Edit_objective_modal  setOpenEditObj={setEditModal} index= {datarow.row} tipo={tipo} descrip={descripcionRow}></Edit_objective_modal>
            </Dialog>
            
<Dialog open={deleteModal}>
                
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
       
       <div className="bg-white rounded shadow-lg w-1/3  ">
     
         <div className="border-b px-4 py-2 flex justify-between items-center">
           <h3 className="font-semibold text-xl"> ¿Desea eliminar este objetivo?</h3>
           <button className="text-black hover:text-blue-700" onClick={()=>setDeleteModal(false)}><i class="far fa-times-circle fa-2x"></i></button>
         </div>
       
         <div className="w-full flex flex-col px-4 py-2">
                                     
                                     <span className="text-lg"> Nota: Se borrará de forma permanente.</span>
                                   </div>
         <div class="flex justify-end items-center w-100 border-t p-3">
          
           <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 h-10 rounded-2xl text-white" onClick={()=>deleteObjective()}>Si, eliminar</button>
           <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 h-10 rounded-2xl rounded text-white mr-1 close-modal ml-5" onClick={()=>setDeleteModal(false)}>Cancelar</button>
         </div>
       </div>
     </div>
            </Dialog>
        </li>
    )
}

export default RowObjectiveInfo
