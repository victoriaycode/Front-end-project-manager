import ProjectNavbar from 'components/ProjectNavbar'
import { useState } from 'react'
import React from 'react'

const Information = () => {

    const [editProject, setEditProject] = useState(false)
    const project = {
        "nombre": "Proyecto App Web Too",
        "_id": "122321afsd2232",
        "estado": "Activo",
        "fase": "En desarrollo",
        "fecha_inicial": "14/01/2020",
        "fecha_final": "14/10/2021",
        "presupuesto": 12300000,
        "lider": { "nombre": "Federico Montoya Lopez", "id_doc": 1104235329 },
        "objetivos_generales": ["proyecto diseñado para la simulación y estudio del diseño de una aplicacion", "proyecto diseñado para la simulación y estudio del diseño de una aplicacion", "proyecto diseñado para la simulación y estudio del diseño de una aplicacion"
        ],
        "objetivos_especificos": ["OBje1,dksadasdas", "OBje1,dksadasdas", "OBje1,dksadasdas", "OBje1,dksadasdas", "OBje1,dksadasdas", "Objet2.sdadsasdasddqw", "Ondsadas"]


    };
    let colorState = "green";
    let colorFase = "yellow";


    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden  " >

            <div className=" pl-20 pr-20  ml-20 h-full w-5/6 mb-4  overflow-y-scroll bg-gray-50">
                {editProject ? (<div>
                    <button class="p-1 pl-4 pr-4 top-28 right-16 absolute  bg-transparent border-2 border-blue-500 font-bold text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                 hover:text-white  
             focus:border-4 " onClick={() => setEditProject(!editProject)}>Guardar</button>
                    <button class="p-1 pl-4 pr-4 top-40 right-16 absolute  bg-transparent border-2 border-blue-500 font-bold text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                 hover:text-white  
             focus:border-4 " onClick={() => setEditProject(!editProject)}>Cancelar</button></div>) : (<button class="p-1 pl-4 pr-4 top-28 right-16 absolute  bg-transparent border-2 border-blue-500 font-bold text-blue-500 text-lg rounded-lg hover:bg-blue-600 
             hover:text-white  
         focus:border-4 " onClick={() => setEditProject(!editProject)}>Editar</button>)}

                <div className="flex flex-row w-full h-5/6   px-10 pt-4  justify-center align-center ">

                    <div className="flex flex-col gap-1 h-full  ">

                        <span className="text-gray-500 text text-lg font-bold mt-2">Nombre: </span>

                        <span className="text-gray-500 text text-lg font-bold "> ID proyecto: </span>
                        <span className="text-gray-500 text text-lg font-bold "> Lider: </span>
                        <span className="text-lg text-gray-500 text-1xl font-bold ">Estado:</span>

                        <span className="text-lg text-gray-500 text-1xl font-bold ">Fase: </span>

                        <span className="text-lg text-gray-500 text-1xl font-bold ">Fecha Inicial: </span>

                        <span className="text-lg text-gray-500 text-1xl font-bold ">Fecha Final: </span>

                        <span className="text-lg text-gray-500 text-1xl font-bold ">Presupuesto: </span>
                    </div>

                    <div className="flex flex-col flex-auto w-auto gap-1 pl-14  ">

                        {editProject ? (<>
                            <input type="text" class="w-4/5 border shadow-sm px-3  rounded-md appearance-none  text-blue-800 text text-2xl flex-end  font-bold mt-2
                                 dark:bg-dark-2 dark:border-transparent" defaultValue={project.nombre} />
                        </>) : (<>

                            <span className="text-blue-800 text text-2xl   font-bold mt-0"> {project.nombre} </span>
                        </>)}

                        <span className="text-gray-500   text-lg"> {project._id}</span>
                        <span className="text-gray-500 font-bold   text-lg"> {project.lider.nombre}
                            <span className="text-gray-500 font-medium  pl-4 "> ID # {project.lider.id_doc}</span></span>



                        <span className="text-lg text-blue-800 text-1xl font-bold  ">{project.estado}<br /></span>
                        <span className="text-lg text-blue-800 text-1xl font-bold  ">{project.fase}</span>
                        <span className="text-lg text-gray-500 text-1xl font-bold  ">{project.fecha_inicial}</span>
                        <span className="text-lg text-gray-500 text-1xl font-bold  ">{project.fecha_final}</span>
                        <span className="text-lg text-gray-500 text-1xl font-bold ">$ {project.presupuesto}</span>

                        <Objectives_list title={"Objetivos generales"} objetivos_list={project.objetivos_generales} editProject={editProject}></Objectives_list>

                        <Objectives_list title={"Objetivos especifícos"} objetivos_list={project.objetivos_especificos} editProject={editProject}></Objectives_list>


                    </div>




                </div>

            </div>


        </div>
    )
}

const Objectives_list = ({ title, objetivos_list, editProject }) => {
    return (<div className="pt-4 list-decimal w-full">
        <span className="text-lg text-blue-800 text-2xl font-bold  ">{title}</span>
        {editProject &&
            <button className="p-1 ml-20  bg-transparent border-2 border-blue-500  text-blue-500 text-sm rounded-lg hover:bg-blue-600 
  hover:text-white  
focus:border-4 ">Añadir nuevo</button>}
        {objetivos_list.map((objetivo) => {
            return (
                <li className=" py-1">
                    {editProject ?
                        (<div>
                            <input type="text" className="w-5/6 border shadow-sm px-3 py-1 rounded-md appearance-none  text-gray-600 text text-sm flex-end  
            dark:bg-dark-2 dark:border-transparent" defaultValue={objetivo} />
                            <button className="ml-2"><i className="far fa-trash-alt"></i></button> </div>) : (
                            <span className="text-sm ">{objetivo}</span>)}
                </li>
            );
        })}</div>)
}
export default Information

