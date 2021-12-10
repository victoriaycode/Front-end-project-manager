import React from 'react'

import { useState, useEffect } from 'react';

const RowObjective = ({ datarow, list, setObjectivesList }) => {
    const [descripcionRow, setDescripcionRow] = useState(datarow.descripcion);
    const [tipo, setTipo] = useState(datarow.tipo);
    const [editRow, setEditRow] = useState(false);

    const deleteObjective = () => {

        const listaNueva = list.filter((elem) => {
            return elem.row !== datarow.row;
        });

        setObjectivesList(listaNueva);
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


        <li className="text-gray-500 font-semibold text-lg font-light mt-2">

            <div className="w-full flex flex-row mt-5 px-2 text-gray-600">

                <select disabled={!editRow} className="h-10 w-50 pr-8 pl-5 text-lg text-blue-800 rounded-2xl z-0 focus:shadow focus:outline-none 
                    border-gray-400 border-2" defaultValue={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option className="" value="GENERAL" >GENERAL</option>
                    <option className="" value="ESPECIFICO">ESPECIFICO </option>

                </select>
              
                {editRow ? (<>


                    <input  type="text"   className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-50 border-2 border-gray-300"
                       value={descripcionRow} onChange={(e) => setDescripcionRow(e.target.value)} />
                    <button className="text-blue-600 hover:text-blue-800 focus py-1 hover:bg-gray-50" onClick={() => editObjective()}><i className="far fa-save fa-lg"></i>Guardar</button>
                    <button className="text-gray-500 hover:text-gray-700 ml-10 py-1 hover:bg-gray-50 " onClick={() => setEditRow(false)}><i className="fas fa-ban fa-lg"></i>Cancelar</button></>)
                    : (<>

                        <span className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        >{descripcionRow}</span>

                        <button className="text-blue-600 hover:text-blue-800  py-1 hover:bg-gray-50 focus" onClick={() => setEditRow(true)} ><i className="fas fa-edit fa-lg"></i>Editar</button>
                        <button className="text-gray-500 hover:text-gray-700 ml-10 py-1 hover:bg-gray-50"><i className="fas fa-trash fa-lg" onClick={() => deleteObjective()}></i>Eliminar</button>
                    </>)}

            </div>
        </li>
    )
}

export default RowObjective
