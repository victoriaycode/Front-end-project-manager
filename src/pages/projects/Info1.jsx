import React from 'react'
import { useState, useEffect } from 'react';
import { GET_PROJECT_INFO } from 'graphql/proyectos/queries'
import { useQuery } from '@apollo/client';
import ProjectNavbar from 'components/ProjectNavbar';
import { useParams } from 'react-router';
import { nanoid } from 'nanoid';
import RowObjectiveUpdate from 'components/RowObjectiveUpdate';

const Info = () => {
    const { _id } = useParams();
    const [newType, setnewType] = useState("GENERAL")
    const [newDescripObj, setNewDescripObj] = useState("")
    const [addObjective, setAddObjective] = useState(false)
    const [objectives_list, setObjectivesList] = useState([])
    const [editObjective, setEditObjective]=useState(false);
    const { data: infoProject, error, loading } = useQuery(GET_PROJECT_INFO, {
        variables: {
            _id
        },
    });




    useEffect(() => {
        console.log('data Proyecto', infoProject);
        if (!loading && infoProject != null) {

            let proj = infoProject.filtrarProyecto;
            setObjectivesList(proj.objetivos);
            console.log("ssd", proj);
        }
    }, [infoProject]);
    const [general_obj_to_add, set_general_obj_list] = useState([]);
    //const [infoProject, setInfoProject]= useState(null);





    //const [specific_obj_to_add ,set_specific_obj_list] =useState([]);


    if (loading) return <div>Cargando....</div>;
    return (
        <div className="w-full h-full overflow-y-hidden">
            <ProjectNavbar _idActual={_id} rutaRetorno={'/proyectos'} />



            <div className="w-full h-5/6 px-20 overflow-y-scroll">

                <div className="bg-white  w-full py-2 px-4 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">
                    <div className="w-full py-2 px-4 flex flex-row ">
                        <span className="text-gray-500 text text-lg font-medium mt-4">
                            Titulo Proyecto:
                        </span>
                        <span className="text-blue-800 px-10 py-2 text-2xl font-bold  h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100">
                            {infoProject.filtrarProyecto.nombre} - ID:  {infoProject.filtrarProyecto._id}
                        </span>
                    </div>
                </div>
                <div className="bg-white  w-full py-2 px-4 align-center rounded-2xl my-1 flex flex-col gap-2 border-solid border-2 border-gray-300">
                    <div className="flex flex-row w-full">
                        <div className="w-full py-2 px-4 flex flex-row text-lg">
                            <span className="text-gray-500   font-medium mt-4">
                                Nombre Lider:
                            </span>

                            <span  className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                >{infoProject.filtrarProyecto.lider.nombre} {infoProject.filtrarProyecto.lider.apellido}  </span>
                        </div>
                        <div className="w-full py-2 px-4 flex flex-row text-lg">
                            <span className="text-gray-500 text  font-medium mt-4">
                                ID Lider:
                            </span> <span   className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                >{infoProject.filtrarProyecto.lider.identificacion} </span>
                        </div>




                    </div>
                    <div className="flex flex-col w-full">
                        <div className="w-full py-2 px-4  text-gray-500   flex flex-row text-lg">
                            <span className="text-gray-500   font-medium mt-4">
                                Presupuesto :
                            </span> <input type="number" min="0" className="h-10  w-1/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                placeholder={infoProject.filtrarProyecto.presupuesto} ></input>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Fecha inicio:
                                </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder={infoProject.filtrarProyecto.fechaInicio}></input>
                            </div>
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Fecha fin:
                                </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder={infoProject.filtrarProyecto.fechaFin}></input>
                            </div></div>
                        <div className="flex flex-row">
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Estado:
                                </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder={infoProject.filtrarProyecto.estado} ></input>
                            </div>
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Fase:
                                </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder={infoProject.filtrarProyecto.fase} ></input>
                            </div></div>
                    </div>

                </div>
                {/**
         * 
        
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
                    { specific_obj_to_add.map((objetivo) => {
                        return (<RowObjective  datarow={objetivo} />);
                    })}
                </ul>
            </div>
*/}
                        
                    <div className=" w-full h-auto  mb-20 bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 
                    rounded-xl py-6">
  <div className="w-full flex flex-row align-center">
                                <span className="text-blue-800 px-10 py-2 text-2xl font-bold ">      Objetivos      </span>
                                {!editObjective ?(<button className="p-1 ml-20  h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                hover:text-white  focus:border-4 "onClick={() => setEditObjective(!editObjective)}>EDITAR</button>):(<button className="p-1 ml-20  h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                hover:text-white  focus:border-4 "onClick={() => setEditObjective(!editObjective)}>Cancelar</button>)
                                    }
                            </div>
                           
                            
                        <div className="bg-gray-100 py-4 mt-4"> {editObjective &&
                             <button className="p-1  ml-10 w-40 h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                       hover:text-white  focus:border-4 "onClick={() => setAddObjective(!addObjective)}>Añadir Objetivo</button>}
                        </div>
                      
                            {addObjective &&

<li className="text-gray-500 font-semibold list-none text-lg font-light py-2 bg-gray-100 px-8 ">
    <div className="w-full flex flex-col ">
    <div className="w-full flex flex-row align-center">
                                <span className="text-blue-800 px-10 py-2 text-2xl font-bold ">      Objetivo Nuevo      </span>
                                {!addObjective &&
                                    <button className="p-1 ml-20  h-10 bg-transparent border-2 border-blue-500  text-blue-500 text-lg rounded-lg hover:bg-blue-600 
                hover:text-white  focus:border-4 "onClick={() => setAddObjective(!addObjective)}>Nuevo</button>}
                            </div>

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
                defaultValue={newDescripObj} onChange={(e) => setNewDescripObj(e.target.value)} />

            <button className="text-blue-600 hover:text-blue-800 focus"><i className="fas fa-folder-plus fa-lg"></i>Añadir</button>
            <button className="text-gray-600 hover:text-gray-700 ml-10" onClick={() => setAddObjective(false)}><i className="fas fa-ban fa-lg"></i>Cancelar</button>
        </div>
    </div>
</li>

}
    <ul id="lista_obj"  className="list-decimal  h-full mt-5 py-2 px-6 border-t-2 
                            border-blue-200 pl-10 pr-8">

                                {infoProject  && objectives_list.map((objetivo) => {
                                    return (<RowObjectiveUpdate key={nanoid()} editEnable={editObjective} datarow={objetivo} />);
                                })}
                            </ul></div>
            </div>
           
        </div>
    );
};
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
    );
};

export default Info
