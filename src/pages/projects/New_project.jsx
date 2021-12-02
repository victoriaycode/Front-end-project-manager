import React from 'react'

import { useState, useEffect } from 'react';
import New_date from 'components/New_date';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import SelectDate from 'components/SelectDate';
const New_project = () => {
    const [addObjective, setAddObjective] = useState(false)


    const [objectives_list, setObjectivesList] = useState([])
    const [newType, setnewType] = useState("GENERAL")
    const [newDescripObj, setNewDescripObj] = useState("")
    const [budget, setBudget] = useState(0);
    const [initialDate, setInitialDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());

    const [numRow, setNumberRow] = useState(0);

    useEffect(() => {
        setObjectivesList(objectives_list);
        console.log("nueva", objectives_list);
    }, [objectives_list])


    useEffect(() => {
        setNewDescripObj("");
    }, [addObjective])

    const AddNewObjective = () => {


        if (newDescripObj != "" && newType != "") {
            let newRow = numRow;
            let nuevo = { "tipo": newType, "descripcion": newDescripObj, "row": newRow };
            objectives_list.push(nuevo);
            setObjectivesList(objectives_list);
            setNumberRow(numRow + 1);
            setAddObjective(false);


        }
    }
    const RowObjective = ({ datarow, list, setObjectivesList }) => {
        const [descripcion, setDescripcion] = useState(datarow.descripcion);
        const [tipo, setTipo] = useState(datarow.tipo);
        const [editRow, setEditRow] = useState(false);

        const deleteObjective = () => {

            const listaNueva = list.filter((elem) => {
                return elem.row !== datarow.row;
            });

            setObjectivesList(listaNueva);
        }
        const editObjective = () => {

            setEditRow(false);

            const indice = objectives_list.findIndex((elemento) => {
                if (elemento.row === datarow.row) {
                    return true;
                }
            });
            if (descripcion !== "" && tipo != "") {
                const changeRow = { "tipo": tipo, "descripcion": descripcion, "row": datarow.row }

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


                        <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-50 border-2 border-gray-300"
                            placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        <button className="text-blue-400 hover:text-blue-800 focus" onClick={() => editObjective()}><i className="fas fa-check fa-2x"></i>Guardar</button>
                        <button className="text-gray-400 hover:text-gray-700 ml-10" onClick={() => setEditRow(false)}><i className="fas fa-trash fa-2x"></i>Cancelar</button></>)
                        : (<>

                            <span className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                            >{descripcion}</span>

                            <button className="text-blue-400 hover:text-blue-800 focus" onClick={() => setEditRow(true)} ><i className="fas fa-check fa-2x"></i>Editar</button>
                            <button className="text-gray-400 hover:text-gray-700 ml-10"><i className="fas fa-trash fa-2x" onClick={() => deleteObjective()}></i>Eliminar</button>
                        </>)}

                </div>
            </li>
        )
    }
    return (
        <div className="w-full h-full mb-6 ">
            <div className="sticky top-0 z-50 h-16 flex flex-row bg-gray-100 w-full  align-center justify-start pt-2 mt-4 border-b-2 ">
                <NavLink to="/proyectos/">
                    <button className="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center">
                        <i className="fas fa-angle-left fa-2x"></i>
                    </button>
                </NavLink>

                <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">
                    Nuevo Proyecto
                </span>
            </div>

            <div className="w-full   overflow-y-hidden ">

                <div className="w-full h-full px-20 ">

                    <div className="bg-white  w-full py-2 px-4 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">

                        <div className="w-full h-full flex flex-col">
                            <div className=" py-2 px-8 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium mt-4">
                                    Titulo Proyecto:
                                </span> <input type="text" className="text-blue-800 px-10 py-2 text-2xl font-bold  h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100"
                                    placeholder="Titulo proyecto" />
                            </div>
                            <div className="flex flex-col ">

                                <div className="w-full py-2 px-8 flex flex-row  text-lg">
                                    <span className="text-gray-500   font-medium ">
                                        Lider:
                                    </span>
                                    <span className="h-10 w-3/6 mx-20 px-10  rounded-2xl z-0 focus:outline-none bg-white  "
                                    >Nombre lider  - ID # - id</span>
                                    <span className="h-10 w-3/6 mx-20 px-10  rounded-2xl z-0 focus:outline-none bg-white  "
                                    > ID Lider # - id</span>
                                </div>
                                
                                <div className="w-full py-2 px-8 flex flex-row  justify-between gap-8 text-lg">
                                    <div className="h-full flex flex-row mt-2 ">
                                        <label className="text-gray-500   font-medium ">
                                            Fecha  inicial:
                                        </label>
                                        <div className="h-12  mx-6 px-10 py-2  rounded-xl z-0 focus:outline-none
                                     bg-white border-2 border-gray-300">
                                            <SelectDate name="date"
                                                value={initialDate} setSelectedDate={setInitialDate} />

                                        </div>        
                                        </div>
                                    <div className="h-full flex flex-row align-middle">

                                        <label className="text-gray-500   font-medium ">
                                            Fecha Terminación:
                                        </label>
                                        <div className="h-12  mx-5 px-10 py-2  rounded-xl z-0 focus:outline-none
                                     bg-white border-2 border-gray-300">
                                            <SelectDate name="date"
                                                value={finishDate} setSelectedDate={setFinishDate} />
                                        </div>

                                    </div>
                                    <div className="w-full py-2 px-8 flex flex-row  text-lg">
                                    <label htmlFor="Presupuesto" className="text-gray-500   font-medium ">
                                        Presupuesto:
                                    </label>
                                    <input type="number" className="h-10 w-3/5 mx-5 px-10  rounded-2xl z-0 focus:outline-none
                                     bg-white border-2 border-gray-300"
                                        value={budget} onChange={(e) => setBudget(e.target.value)} />

                                </div>
                                </div>
                            </div>
                        </div>  </div>
                    <div className=" w-full h-3/5   bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 
                    rounded-xl py-2">

                        <div className="w-full   py-2 px-4 flex flex-col h-full ">
                            <div className="w-full flex flex-row align-center">
                                <span className="text-blue-800 px-10 py-2 text-2xl font-bold ">      Objetivos      </span>
                                {!addObjective && 
                                <button className="p-1 ml-20  h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                hover:text-white  focus:border-4 "onClick={() => setAddObjective(!addObjective)}>Nuevo</button>}
                            </div>

                            {addObjective &&

                                <li className="text-gray-500 font-semibold list-none text-lg font-light  px-8 mt-2">
                                    <div className="w-full flex flex-col ">
                                        <div className="w-full flex flex-row gap-40  text-xl font-semibold text-blue-800">
                                            <span>Tipo</span>
                                            <span>Descripción</span></div>
                                        <div className="w-full flex flex-row mt-5 text-gray-600">
                                            <select className="h-10 w-50 pr-8 pl-5 text-lg text-blue-800 rounded-2xl z-0 focus:shadow focus:outline-none 
                      border-gray-400 border-2" defaultValue="GENERAL" defaultValue={newType} onChange={(e) => setnewType(e.target.value)}>
                                                <option className="" value="GENERAL" >GENERAL</option>
                                                <option className="" value="ESPECIFICO">ESPECIFICO </option>

                                            </select>
                                            <input type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100 border-2 border-gray-300"
                                                value={newDescripObj} onChange={(e) => setNewDescripObj(e.target.value)} />

                                            <button className="text-blue-400 hover:text-blue-800 focus" onClick={() => AddNewObjective()}><i className="fas fa-check fa-2x"></i>Añadir</button>
                                            <button className="text-gray-400 hover:text-gray-700 ml-10" onClick={() => setAddObjective(false)}><i className="fas fa-trash fa-2x"></i>Cancelar</button>
                                        </div>
                                    </div>
                                </li>

                            }
                            <ul className="list-decimal  h-full mt-5 py-2 px-6 border-t-2 
                            border-blue-200 pl-10 pr-8">

                                {objectives_list !== {} && objectives_list.map((objetivo) => {
                                    return (<RowObjective key={nanoid()} list={objectives_list} setObjectivesList={setObjectivesList} datarow={objetivo} />);
                                })}
                            </ul>
                        </div>



                    </div>

                    <div className=" w-full bg-white  mt-4 mb-10 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                        <div className="w-full py-2 px-4 flex flex-row ">
                            <span className="text-gray-500 text text-lg font-medium ">
                                Se creará un proyecto nuevo con estado :
                                <span className="px-5 text-blue-500 text-xl">Inactivo</span>  y  <span className="px-5 text-blue-500 text-xl">sin fase.</span> </span>

                        </div>
                        <div className="w-full py-2 px-10 flex flex-row justify-around">

<span className="pl-40  text-gray-500 text text-lg font-semibold mt-4 ml-2">
    Fecha de creación: <New_date></New_date>
</span>
<div className="flex flex-row gap-4  ">
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
