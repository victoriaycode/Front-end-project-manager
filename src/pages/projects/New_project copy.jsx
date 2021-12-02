import React from 'react'

import { useState,useEffect } from 'react';
import New_date from 'components/New_date';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
const New_project = () => {
    const [addgeneral, setaddgeneral] = useState(false)
    const [addspecific, setaddSpecific] = useState(false)
    const [newObjetEsp, setNewObjetEsp]= useState("")
    const [newObjetGen, setNewObjetGen]= useState("")
    const [checkObjEsp, setCheckObjEsp] = useState(false)
    const [checkObjGen, setCheckObjGen] = useState(false)
    const [general_obj_to_add, set_general_obj_list] =useState([]);
    const [specific_obj_to_add ,set_specific_obj_list] =useState([]) 

    useEffect(() => {
       setNewObjetEsp(newObjetEsp)
       console.log(newObjetEsp);
    }, [newObjetEsp]);
    
    useEffect(() => {
        setNewObjetGen(newObjetGen)
         console.log(newObjetGen);
     }, [newObjetGen]);

    useEffect(() => {
        if(newObjetGen !==""){
            set_general_obj_list(general_obj_to_add.push(newObjetGen));
        }
         console.log("gen",general_obj_to_add)
         setCheckObjGen(false);
     }, [setCheckObjGen]);

     useEffect(() => {
        if(newObjetEsp !==""){
            set_specific_obj_list(specific_obj_to_add.push(newObjetEsp));
        }
         console.log("esp",specific_obj_to_add);
         setCheckObjEsp(false);
     }, [setCheckObjEsp]);

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
        <div className="w-full h-full overflow-y-hidden">
            <div className="relative h-16 flex flex-row bg-gray-100 w-full align-center justify-start mt-6 border-b-2 ">
                <NavLink to="/proyectos/">
                    <button className="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center">
                        <i className="fas fa-angle-left fa-2x"></i>
                    </button>
                </NavLink>

                <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">
                    Nuevo Proyecto
                </span>
            </div>

            <div className="w-full h-full overflow-y-hidden">

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
                            <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Presupuesto :
                                </span> <input  type="number" min="0"className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder="Presupuesto a asignar" ></input>
                            </div>
                        </div>

                       
                          

                        </div>
                        {/*  <div className="w-full py-2 px-4 flex flex-row ">
                            <span className="text-gray-500 text text-lg font-medium mt-4">
                                Fecha de creación:
                            </span>    <span className="h-10 text-gray-400  w-3/6 mx-5 px-10 py-2 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300">
                                <New_date></New_date>
                            </span>
    </div>*/}
                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium ">
                                    Se creará un proyecto nuevo con estado :
                                    <span className="px-5 text-blue-500 text-xl">Inactivo</span>  y  <span className="px-5 text-blue-500 text-xl">sin fase.</span> </span>

                            </div>

                        </div>
                    </div>
                    <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">

                        <div className="w-full py-2 px-10 flex flex-col">
                            <div className="w-full flex flex-row align-center">
                                <span className="text-blue-500 px-10 py-2 text-2xl font-bold ">      Objetivo General      </span>
                                <button className="p-1 ml-20 mt-2 h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                hover:text-white  focus:border-4 "onClick={() => setaddgeneral(!addgeneral)}>Nuevo </button>
                            </div>
                            {addgeneral &&
                             
                                        
                                <div className="w-full flex flex-row mt-5">
                     
                                    <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100 border-2 border-gray-300"
                                       defaultValue= {newObjetGen} placeholder="Objetivo general" onChange={(e)=>setNewObjetGen(e.target.value)}/>
                                    <button className="text-green-500 hover:text-green-700 focus" onClick={() => setCheckObjGen(true)}><i className="fas fa-check fa-2x"></i></button>
                                    <button className="text-gray-400 hover:text-gray-700 ml-10"><i className="fas fa-trash fa-2x"></i></button>
                                </div>}
                            <ul className="list-decimal mt-4 py-2">
                                {general_obj_to_add.map((objetivo) => {
                                    return (<RowObjective  key={nanoid()} datarow={objetivo} />);
                                })}
                            </ul>
                        </div> 



                    </div>
                    <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">

                        <div className="w-full py-2 px-10 flex flex-col">
                            <div className="w-full flex flex-row align-center">
                                <span className="text-blue-500 px-10 py-2 text-2xl font-bold ">      Objetivos Especificos     </span>
                                <button className="p-1 mt-2 ml-20 h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
        hover:text-white  focus:border-4 "onClick={() => setaddSpecific(!addspecific)}>Nuevo </button>
                            </div>
                            {addspecific &&
                                <div className="w-full flex flex-row mt-5">
                                    <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100 border-2 border-gray-300"
                                        placeholder="Objetivo especifico"   defaultValue= {newObjetEsp} onChange={(e)=>setNewObjetEsp(e.target.value)}/>
                                    <button className="text-green-500 hover:text-green-700 focus" onClick={()=>setCheckObjEsp(true)}><i className="fas fa-check fa-2x"></i></button>
                                    <button className="text-gray-400 hover:text-gray-700 ml-10"><i class="fas fa-trash fa-2x"></i></button>
                                </div>}
                            <ul className="list-decimal mt-4">
                                {specific_obj_to_add.map((objetivo) => {
                                    return (<RowObjective key={nanoid()} datarow={objetivo} />);
                                })}
                            </ul>
                        </div>


                    </div>
                    <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                        <div className="w-full py-2 px-10 flex flex-row justify-around">

                            <span className="pl-40  text-gray-500 text text-lg font-semibold mt-4 ml-2">
                                Fecha de creación: <New_date></New_date>
                            </span>
                            <div className="flex flex-row gap-4">
                                <button className="p-1 pl-4 pr-4  bg-transparent border-2 border-blue-500 font-bold text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                 hover:text-white  
             focus:border-4 " >Guardar</button>
                                <button className="p-1 pl-4 pr-4   bg-transparent border-2 border-blue-500 font-bold text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                 hover:text-white  
             focus:border-4 " >Cancelar</button>
                            </div>

                        </div> </div>
                </div>





            </div>
        </div>
    )
}

export default New_project
