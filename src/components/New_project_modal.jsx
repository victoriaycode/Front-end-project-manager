
import React from 'react'
import { useState } from 'react';
import New_date from 'components/New_date';
const New_project_modal = ({ setNewProject }) => {
    const [addgeneral, setaddgeneral] = useState(false)
    const [addspecific, setaddSpecific] = useState(false)
    const New_Project_box = () => {
        const general_obj_to_add = ["objetivo1","objetivo 2"]
        const specific_obj_to_add = []
        const fecha= <New_date></New_date> +""

        const RowObjective = ({ datarow }) => {
            return (
                <li className="text-gray-500 font-semibold text-lg font-light mt-2">
                 <div className="w-full flex flex-row mt-5 ">
                                <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none  border-solid border-2 border-gray-300"
                                    defaultValue={datarow}/>
                                <button className="text-green-500 hover:text-green-700 focus"><i className="fas fa-check fa-2x"></i></button>
                                <button className="text-gray-400 hover:text-gray-700 ml-10"><i class="fas fa-trash fa-2x"></i></button>
                            </div>
                </li>
            )
        }
        return (


            <div className="w-full h-full overflow-y-hidden">

                <div className="w-full h-full px-20 overflow-y-scroll">

                    <div className="bg-white  w-full py-2 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">
                        <div className="w-full py-2 px-4 flex flex-row ">
                            <span className="text-gray-500 text text-lg font-medium mt-4">
                                Titulo Proyecto:
                            </span> <input type="text" className="text-blue-800 px-10 py-2 text-2xl font-bold  h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100"
                                placeholder="Titulo proyecto" />
                        </div>
                    </div>
                    <div className="bg-white  w-full py-2 align-center rounded-2xl my-1 flex flex-col gap-2 border-solid border-2 border-gray-300">
                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium mt-4">
                                    Nombre Lider:
                                </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder="Alexa Rios" ></input>
                            </div>
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium mt-4">
                                    ID Lider:
                                </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder="wqe213242" />
                            </div>
                           
                        </div>
                        <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium mt-4">
                                    Fecha de creación:
                                </span>    <span className="h-10 text-gray-400  w-3/6 mx-5 px-10 py-2 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300">
                                    <New_date></New_date>
                                </span>
                            </div>
                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium ">
                                    Se creara un proyecto nuevo con estado :
                                    <span className="px-5 text-blue-500 text-xl">Inactivo</span>  y  <span className="px-5 text-blue-500 text-xl">sin fase.</span> </span>

                            </div>

                        </div>
                    </div>
                    <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">

                        <div className="w-full py-2 px-10 flex flex-col">
                            <div className="w-full flex flex-row align-center">
                                <span className="text-blue-500 px-10 py-2 text-2xl font-bold ">      Objetivos Generales     </span>
                                <button className="p-1 ml-20 h-10 bg-blue-500 border-2 border-blue-500  text-white text-lg rounded-lg hover:bg-blue-600 
                                hover:text-white  focus:border-4 "onClick={()=>setaddgeneral(!addgeneral)}>Nuevo objetivo</button>
                            </div>
                            {addgeneral &&
                            <div className="w-full flex flex-row mt-5">
                                <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100 border-2 border-gray-300"
                                    placeholder="Objetivo " />
                                <button className="text-green-500 hover:text-green-700 focus"><i className="fas fa-check fa-2x"></i></button>
                                <button className="text-gray-400 hover:text-gray-700 ml-10"><i class="fas fa-trash fa-2x"></i></button>
                            </div>}
                            <ul className="list-decimal mt-4">
                                {general_obj_to_add.map((objetivo) => {
                                    return (<RowObjective datarow={objetivo} />);
                                })}
                            </ul>
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
                    <h3 class="font-semibold text-2xl"><span className="text-blue-800 font-bold">Nuevo proyecto </span></h3>
                    <button class="text-black hover:text-blue-700" onClick={() => setNewProject(false)}><i class="far fa-times-circle fa-2x"></i></button>
                </div>

                <div class="p-3">
                    <New_Project_box></New_Project_box>
                </div>
                <div class="flex justify-end items-center w-100 border-t p-3">

                    <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Guardar</button>
                    <button class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-2" onClick={() => setNewProject(false)}>Cancelar</button>
                </div>
            </div>
        </div>

    )
}

export default New_project_modal
