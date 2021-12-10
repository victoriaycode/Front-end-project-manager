import React from 'react'

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import useFormData from 'hooks/useFormData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RowObjective from 'components/RowObjective';
import { useMutation } from '@apollo/client';
import { CREATE_NEW_PROJECT } from 'graphql/proyectos/queries';
import { TextareaAutosize } from '@material-ui/core';

const New_project = () => {
    const [addObjective, setAddObjective] = useState(false)
    const [objectives_list, setObjectivesList] = useState([])
    const [newType, setnewType] = useState("GENERAL")
    const [newDescripObj, setNewDescripObj] = useState("")
    const [budget, setBudget] = useState(0);

    var date = new Date().toISOString().slice(0, 10);
    const lider = "61a955cf355428fe4ece9225";
    const id_lider = "3212312"
    const nombre_lider = "Victoria Yuan";
    const [numRow, setNumberRow] = useState(0);

    const [createProject, { data: createdata, loading, error }] =
        useMutation(CREATE_NEW_PROJECT);


    const { form, formData, updateFormData } = useFormData(null);
    const submitForm = async (e) => {
        e.preventDefault();

        const objetivos = objectives_list.map(function (ele) {
            return { "descripcion": ele.descripcion, "tipo": ele.tipo };
        });
        formData.objetivos = [objetivos];
        formData.objetivos = Object.values(objetivos);

        formData.lider = lider;
        let presup = parseFloat(formData.presupuesto);
        formData.presupuesto = presup;
        console.log("formdata", formData);
         createProject({
            variables: { ...formData },
        });


    };

    useEffect(() => {
        if (createdata) {
            toast.success('Proyecto agregado co éxito');
            console.log("proyecto agregado", createdata);
        }
    }, [createdata]);

    useEffect(() => {
        if (!loading) {
        }
        console.log("Error", error);
    }, [error]);

    if (loading) return <div>Cargando....</div>;





    const AddNewObjective = () => {


        if (newDescripObj != "" && newType != "") {
            let newRow = numRow;
            let nuevo = { "tipo": newType, "descripcion": newDescripObj, "row": newRow };
            objectives_list.push(nuevo);
            setObjectivesList(objectives_list);
            setNumberRow(numRow + 1);

        }
    }

    return (
        <div className="w-full h-full  ">
            <div className="sticky top-0 z-50 h-16 flex flex-row bg-gray-100 w-full  align-center justify-start pt-2 mt-4 border-b-2 ">
                <NavLink to="/proyectos/">
                    <button className="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center">
                        <i className="fas fa-angle-left fa-lg"></i>
                    </button>
                </NavLink>

                <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">
                    Nuevo Proyecto
                </span>
            </div>

            <div className="w-full  overflow-y-hidden mt-2">

                <div className="w-full h-full px-5 flex flex-row  ">
                    <form  className=" w-3/6  flex flex-col  "
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}>
                        <div className=" w-full bg-white   mb-2 px-2 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                            <div className="flex flex-row gap-4 justify-between  ">
                                <span className="px-10 py-3 text-blue-800 text text-xl font-medium  ">
                                   GUARDAR PROYECTO NUEVO:</span>
                                <div className="flex flex-row gap-4 justify-end  py-4 px-10">
                                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-xl h-10 text-lg text-white" >Guardar</button>
                                    <NavLink to={`/proyectos/`}>
                                        <button type="button" className="bg-gray-500 hover:bg-gray-700 px-3 py-1 rounded-xl h-10 text-white mr-1 close-modal ml-2">Cancelar</button></NavLink>
                                </div></div>



                        </div>
                        <div className="bg-white  w-full py-2 px-4 align-center rounded-2xl flex flex-row gap-2 border-solid border-2 border-gray-300">

                            <div className="w-full h-full flex flex-col pb-10">
                                <div className=" py-2 px-8 flex flex-row ">
                                    <span className="text-blue-800 font-semibold  text text-lg font-medium mt-4 mr-2">
                                        NOMBRE 
                                    </span> <TextareaAutosize minRows="1" type="text" required name="nombre" className="text-blue-800 px-6 py-2 text-2xl font-bold  h-10  w-full mx-4  mt-1 rounded-2xl z-0 focus:outline-none bg-blue-50"
                                        placeholder="Nombre del proyecto" ></TextareaAutosize>
                                </div>
                                <div className="flex flex-col ">

                                    <div className="flex flex-row justify-start my-2"><div>
                                        <span className="text-blue-500 font-semibold text-lg ml-8"> LIDER</span>
                                        <div className="flex flex-row">
                                        <input disabled type="text" className="h-10  ml-10 px-10  rounded-xl z-0 focus:outline-none
                                     bg-white border-b-2 border-gray-300" defaultValue={nombre_lider}></input>
                                      <input disabled type="text" name="lider" className="h-10  mx-2 px-5  rounded-xl z-0 focus:outline-none
                                     bg-white border-b-2 border-gray-300" defaultValue={id_lider}></input>
                                     </div>
                                    </div> 


                                    </div>
                                    <div className="w-full py-2 px-6 flex flex-row  justify-between gap-8 text-lg">

<div className="w-full py-2  flex flex-row ml-3 text-lg">
    <label htmlFor="Presupuesto" className="text-gray-500  font-semibold  font-medium ">
        PRESUPUESTO:
    </label>
    <input type="number" required min="1" name="presupuesto" className="h-10 bg-blue-50 w-44 ml-16 px-6  
rounded-xl z-0 focus:outline-none
bg-gray-100 border-2 border-gray-300"
        value={budget} onChange={(e) => setBudget(e.target.value)} />

</div>


</div>
                                    <div className="flex flex-col justify-around mt-4 pr-8 gap-1">
                                        <div>
                                            <span className="px-2 text-blue-500 font-semibold text-base ml-3">ESTADO</span>
                                            <input readOnly type="text" name="estado" className="h-10  ml-10 px-10  rounded-xl z-0 focus:outline-none
                                     bg-white border-b-2 border-gray-300" defaultValue="INACTIVO"></input>
                                        </div>
                                        <div>
                                            <span className="px-2 ml-3  text-blue-500 font-semibold text-base">FASE</span>
                                            <input readOnly type="text" name="fase" className="h-10  ml-10 px-5  rounded-xl z-0 focus:outline-none
                                     bg-white border-b-2 border-gray-300" defaultValue="NULO"></input>
                                        </div>
                                        <div>
                                            <span className="px-2 ml-3 text-blue-500 font-semibold text-base">Fecha Creación</span>
                                            <input readOnly type="text" className="h-10  ml-10 px-5  rounded-xl z-0 focus:outline-none
                                     bg-white border-b-2 border-gray-300" defaultValue={date}></input>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>  </div>

                    </form>

                    <div className=" w-full h-3/5 flex-auto mb-20 bg-white  ml-2 flex flex-col align-center justify-center border-solid border-2 border-gray-300 
                    rounded-xl py-2">

                        <div className="w-full   py-2 px-2 flex flex-col h-full ">
                            <div className="w-full flex flex-row align-center">
                                <span className="text-blue-800 px-6 py-2 text-2xl font-bold ">      Objetivos      </span>
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
                                            <select className="h-10 w-44 pr-8 pl-5 text-base text-blue-800 rounded-2xl z-0 focus:shadow focus:outline-none 
                      border-gray-400 border-2" defaultValue="GENERAL" defaultValue={newType} onChange={(e) => setnewType(e.target.value)}>
                                                <option className="" value="GENERAL" >GENERAL</option>
                                                <option className="" value="ESPECIFICO">ESPECIFICO </option>

                                            </select>
                                            <TextareaAutosize type="text" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100 border-2 border-gray-300"
                                                defaultValue={newDescripObj} onChange={(e) => setNewDescripObj(e.target.value)} />

                                            <button className="text-blue-600 hover:text-blue-800 focus text-base" onClick={() => AddNewObjective()}><i className="fas fa-folder-plus fa-lg"></i>Añadir</button>
                                            <button className="text-gray-600 hover:text-gray-700 ml-6 text-base" onClick={() => setAddObjective(false)}><i className="fas fa-ban fa-lg"></i>Cancelar</button>
                                        </div>
                                    </div>
                                </li>

                            }
                            <ul id="lista_obj" form={null} className="  h-full mt-5 py-2 px-6 border-t-2 
                            border-blue-200  pr-8">

                                {objectives_list !== {} && objectives_list.map((objetivo) => {
                                    return (<RowObjective key={nanoid()} list={objectives_list} setObjectivesList={setObjectivesList} datarow={objetivo} />);
                                })}
                            </ul>
                        </div>



                    </div>
                </div>




                <div>

                </div>
                <ToastContainer rtl
                    position="top-center"
                    autoClose={2000}

                    limit={1}
                />
            </div>
        </div>
    )
}

export default New_project
