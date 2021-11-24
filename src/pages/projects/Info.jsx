import React from 'react'
import { useState } from 'react';


const Info = ({_id_project}) => {
    
const [general_obj_to_add, set_general_obj_list] =useState([]);
const [specific_obj_to_add ,set_specific_obj_list] =useState([]) 
    const RowObjective = ({ datarow }) => {
        return (
            <li className="text-gray-500 font-semibold text-lg font-light mt-2">
                <div className="w-full flex flex-row mt-5 ">
                    <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none  border-solid border-2 border-gray-300"
                        defaultValue={datarow} />
                    <button className="text-green-500 hover:text-green-700 focus"><i className="fas fa-check fa-2x"></i></button>
                    <button className="text-gray-400 hover:text-gray-700 ml-10"><i className="fas fa-trash fa-2x"></i></button>
                </div>
            </li>
        )
    }
    return (
       
        <div className="w-full h-5/6 px-20 overflow-y-scroll">

        <div className="bg-white  w-full py-2 px-4 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">
            <div className="w-full py-2 px-4 flex flex-row ">
                <span className="text-gray-500 text text-lg font-medium mt-4">
                    Titulo Proyecto:
                </span> <input type="text" className="text-blue-800 px-10 py-2 text-2xl font-bold  h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100"
                    placeholder="Titulo proyecto" />
            </div>
        </div>
        <div className="bg-white  w-full py-2 px-4 align-center rounded-2xl my-1 flex flex-col gap-2 border-solid border-2 border-gray-300">
            <div className="flex flex-row w-full">
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500   font-medium mt-4">
                        Nombre Lider:
                    </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="Alexa Rios" ></input>
                </div>
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500 text  font-medium mt-4">
                        ID Lider:
                    </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="wqe213242" />
                </div>
            
           
              

            </div>
            <div className="flex flex-col w-full">
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500   font-medium mt-4">
                        Presupuesto :
                    </span> <input  type="number" min="0"className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="Presupuesto" ></input>
                </div>
                <div className="flex flex-row">
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500   font-medium mt-4">
                        Fecha inicio:
                    </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="20/11/20" ></input>
                </div>
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500   font-medium mt-4">
                        Fecha fin:
                    </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="21/10/21" ></input>
                </div></div>
                <div className="flex flex-row">
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500   font-medium mt-4">
                       Estado:
                    </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="20/11/20" ></input>
                </div>
                <div className="w-full py-2 px-4 flex flex-row text-lg">
                    <span className="text-gray-500   font-medium mt-4">
                        Fase:
                    </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                        placeholder="21/10/21" ></input>
                </div></div>
            </div>

        </div>
        <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
        <span className="text-blue-500 px-10 py-2 text-2xl font-bold ">      Objetivo General      </span>
            <div className="w-full py-2 px-10 flex flex-col">
               
          
                <ul className="list-decimal mt-4 py-2">
                    {general_obj_to_add.map((objetivo) => {
                        return (<RowObjective  datarow={objetivo} />);
                    })}
                </ul>
            </div> 



        </div>
        <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">

        <span className="text-blue-500 px-10 py-2 text-2xl font-bold ">      Objetivo Especifico      </span>
                <ul className="list-decimal mt-4">
                    {specific_obj_to_add.map((objetivo) => {
                        return (<RowObjective  datarow={objetivo} />);
                    })}
                </ul>
            </div>

                    <span>{_id_project}</span>
        </div>
        
    )
}

export default Info
