import { useQuery, useMutation } from '@apollo/client';
import { Dialog, TextareaAutosize, Tooltip } from '@material-ui/core';
import Create_objective_modal from 'components/Create_objective_modal';
import ProjectNavbar from 'components/ProjectNavbar';

import ReactLoading from 'react-loading';

import RowObjectiveInfo from 'components/RowObjectiveInfo';
import { GET_PROJECT_INFO, EDIT_PROJECT_BY_LIDER } from 'graphql/proyectos/queries';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import PrivateComponent from 'components/PrivateComponent';
import { useUser } from 'context/userContext'

const Info = () => {

    const { _id } = useParams();
    const { userData } = useUser();
    const idLider= userData._id+"";
    const rolUser= userData.rol+"";
    const [objectives_list, setObjectivesList] = useState([]);
    const [editObjective, setEditObjective] = useState(false);
    const [editName, setEditName] = useState(false);
    const [newName, setNewName] = useState("");
    const [liderName, setLiderName] = useState("");
    const [newBudget, setNewBudget] = useState(0);
    const [editBudget, setEditBudget] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [editObjModal, setEditObjModal] = useState(false);
    const [deleteObjModal, setDeletedObjModal] = useState(false);
    
    const [actualProject, setActualProject] = useState([]);
    const { data: infoProject, error, loading, refetch } = useQuery(GET_PROJECT_INFO, {
        variables: {
            _id
        },
    });

    const [nombreproyecto,setNombreProyecto]=useState("Proyecto");
    const [editarProjectLider, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDIT_PROJECT_BY_LIDER);
    const [state_color, changeStateColor] = useState("text-green-500");
    const [fase_color, changeFaseColor] = useState("text-gray-500");

    useEffect(() => {
        console.log('data Proyecto', infoProject);
        if (!loading && infoProject ) {

            let proj = infoProject.filtrarProyecto;
            setActualProject(infoProject.filtrarProyecto);
            if (infoProject.filtrarProyecto.estado == "INACTIVO") { changeStateColor("text-red-400") }
            setNewName(infoProject.filtrarProyecto.nombre);
            setNewBudget(infoProject.filtrarProyecto.presupuesto);
            setNombreProyecto(infoProject.filtrarProyecto.nombre);
            setLiderName(infoProject.filtrarProyecto.lider.nombre + " "+ infoProject.filtrarProyecto.lider.apellido);
            if (infoProject.filtrarProyecto.fase == "NULO") { changeFaseColor("text-gray-400") }
            if (infoProject.filtrarProyecto.fase == "INICIADO") { changeFaseColor("text-blue-400") }
            if (infoProject.filtrarProyecto.fase == "DESARROLLO") { changeFaseColor("text-yellow-400") }
            if (infoProject.filtrarProyecto.fase == "TERMINADO") { changeFaseColor("text-red-400") }
            setObjectivesList(proj.objetivos);
            

        }
        console.log("infoProject",infoProject);
    }, [infoProject]);

    const editNewTitle = async () => {
       
        let idProyecto = infoProject.filtrarProyecto._id;
      

        if (newName !== "") {

            const edit = editarProjectLider({
                variables: { idProyecto, "nombre": newName },
            });

            
        }
        setEditName(false);
    }
    const editNewBudget = async () => {
       
        let idProyecto = infoProject.filtrarProyecto._id;
      

        if (newBudget !== "") {
            let presup = parseFloat(newBudget);
            const edit = editarProjectLider({
                variables: { idProyecto, "presupuesto": presup },
            });

         
        }
        setEditBudget(false);
    }
    useEffect(() => {
        if (mutationData) {
            // toast.success("Proyecto editado con éxito");
            console.log('Proyecto editado correctamente');

        }
    }, [mutationData]);
    useEffect(() => {
        refetch();
        setDeletedObjModal(false);
        setEditObjModal(false);
    }, [createModal, deleteObjModal, editObjModal]);
    useEffect(() => {
        if (mutationError) {
            console.log("error", mutationError);
            // toast.error('Error modificando el nombre proyecto');
        }

    }, [mutationError]);
    if (mutationLoading || loading) return <div><ReactLoading type='spin' height={20} width={20} />Cargando...</div>
    // if (loading) return <div>  {loading ? <ReactLoading type='spin' height={20} width={20} /> : <></>}Cargando....</div>;
    // {loading ||mutationLoading && <ReactLoading type='spin' height={20} width={20} />}
    return (
        <div className="w-full h-screen  ">
          
          
            <ProjectNavbar _idActual={_id} rutaRetorno={'/proyectos'} nombreProject={ nombreproyecto} />
            <div className=" h-5/6 flex flex-rows px-2  mb-5 mt-2" >
            {rolUser=="LIDER" && idLider!==infoProject.filtrarProyecto.lider._id &&
            <div className='w-full h-full  flex flex-col px-60  justify-center text-blue-600 '>
            <i className="fas fa-user-lock fa-4x" ></i>
            <span className='text-blue-600 text-2xl'>No puedes ver esta información.</span>
            <span className='text-blue-800 text-2xl'>No eres lider de este proyecto. </span>
          
          </div>
           }  
           {/* {(rolUser=="LIDER"  && idLider===infoProject.filtrarProyecto.lider._id ) && rolUser=="ESTUDIANTE" || rolUser=="ADMINISTRADOR" &&<> */}
           
           { (idLider===infoProject.filtrarProyecto.lider._id || rolUser==="ESTUDIANTE" || rolUser==="ADMINISTRADOR") &&<>
                <div className="bg-white h-full   py-2 px-4 align-center rounded-2xl mt-1  flex flex-col
              gap-2 border-solid border-2 border-gray-300 ">

                    <div className=" m-2  ">
                        <div>
                            <div className="flex flex-row justify-between">
                                <span className="px-8 rounded-r-lg bg-blue-800  text-white  font-bold p-3 uppercase border-blue-800 border-t border-2">
                                    <i className="fas fa-folder fa-lg"></i> Proyecto</span>
                                
                                    <PrivateComponent roleList={['LIDER']}>
                                <div className="flex flex-row  flex-center justify-end">
                                    {!editName ? (<Tooltip title='EDITAR NOMBRE' arrow placement="left">
                                        <button className="text-blue-600 hover:text-blue-800  py-1 px-2  transform hover:scale-125 focus" >
                                            <i className="fas fa-edit fa-2x" onClick={() => setEditName(true)}></i></button></Tooltip>)
                                        : (<><Tooltip title='GUARDAR NOMBRE' arrow placement="left">
                                            <button className="text-blue-600 hover:text-blue-800  py-1 px-2  
                                            transform hover:scale-125  focus" onClick={() => editNewTitle()} >
                                                <i className="fas fa-save fa-2x"></i></button></Tooltip>
                                            <Tooltip title='CANCELAR' arrow placement="right">
                                                <button className="text-gray-500 hover:text-gray-700 ml-5 py-1  px-2  transform hover:scale-125">
                                                    <i className="fas fa-ban fa-lg" onClick={() => setEditName(false)} ></i></button></Tooltip></>)}

                                </div></PrivateComponent>
                            </div>
                        </div>

                        
                        {!editName ? (<TextareaAutosize maxRows="2" disabled value={actualProject.nombre} minRows="1" className="p-2  w-full mt-1 rounded-r-lg bg-blue-100 bg-opacity-75  text-lg  text-blue-800 font-bold   uppercase border-blue-500 border-t border-b   border-r">
                        </TextareaAutosize>) : (<input disabled={!editName} value={newName}
                            onChange={(e) => {
                                setNewName(e.target.value)
                            }}  className="p-2  w-full mt-1 rounded-r-lg bg-blue-100 bg-opacity-75  text-lg  text-blue-800 font-bold   uppercase border-blue-500 border-t border-b   border-r">
                        </input>)}


                    </div>
                    <div className="m-2     ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">ID PROYECTO</span>
                        <span className="px-8 rounded-r-lg bg-white w-20  text-gray-600 font-bold p-2  border-blue-500 border-t border-b  border-r">
                            {infoProject.filtrarProyecto._id}</span>

                    </div>
                    <div className="m-2  ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                            <i className="far fa-user-circle fa-lg"></i> Lider</span>
                        <span className="px-8 rounded-r-lg bg-white w-full  text-gray-600 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
                            {/* {infoProject.filtrarProyecto.lider.nombre} {infoProject.filtrarProyecto.lider.apellido}</span> */}
                        {liderName}</span>

                    </div>
                    <div className="m-2 ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">ID Lider</span>
                        <span className="px-8 rounded-r-lg bg-white w-20  text-gray-500 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
                            {infoProject.filtrarProyecto.lider.identificacion}</span>

                    </div>

                    <div className="m-2 mt-3 flex flex-row justify-between">
                        <div>
                            <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                                <i className="fas fa-funnel-dollar fa-lg"></i>   PRESUPUESTO  $</span>

                            {editBudget ? (<input value={newBudget} onChange={(e) => {
                                setNewBudget(e.target.value)
                            }}
                                className="px-2 ml-1 rounded-r-lg bg-white w-32 text-lg  text-gray-600 font-bold p-2 
                                uppercase border-blue-500 border-t border-b  border-r"></input>)
                                : (<span
                                    className="px-2 ml-1 rounded-r-lg bg-white w-32 text-lg  text-gray-600 font-bold p-2 
                                    uppercase border-blue-500 border-t border-b  border-r">{infoProject.filtrarProyecto.presupuesto}</span>)}

                        </div>

                        <PrivateComponent roleList={['LIDER']}>
                        <div className="flex flex-row  -mt-2 justify-end ">
                            {!editBudget ? (<Tooltip title='EDITAR PRESUPUESTO' arrow placement="top">
                                <button className="text-blue-600 hover:text-blue-800  px-2  transform hover:scale-125 focus" >
                                    <i className="fas fa-edit fa-2x" onClick={() => setEditBudget(true)}></i></button></Tooltip>)
                                : (<><Tooltip title='GUARDAR PRESUPUESTO' arrow placement="bottom">
                                    <button className="text-blue-600 hover:text-blue-800  py-1 px-2  
                                    transform hover:scale-125 ml-2 focus" onClick={() => editNewBudget()}>
                                        <i className="fas fa-save fa-2x"></i></button></Tooltip>
                                    <Tooltip title='CANCELAR' arrow placement="right">
                                        <button className="text-gray-500 hover:text-gray-700 ml-2 py-1  px-2  transform hover:scale-125">
                                            <i className="fas fa-ban fa-lg" onClick={() => setEditBudget(false)} ></i></button></Tooltip></>)}

                        </div></PrivateComponent>
                    </div>
                    <div className="m-2 mt-4 ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                            <i class="far fa-calendar"></i> ESTADO</span>
                        <span className={`px-8 rounded-r-lg bg-white w-20  ${state_color} font-bold p-2 uppercase border-blue-500 border-t border-b  
      border-r`}>
                            {infoProject.filtrarProyecto.estado === "ACTIVO" ? (<i className="far fa-calendar-check"></i>) : (<i className="far fa-calendar-minus"></i>)} {infoProject.filtrarProyecto.estado}</span>

                    </div>
                    <div className="m-2 ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                            <i className="fas fa-tachometer-alt"></i>FASE</span>
                        <span className={`px-8 rounded-r-lg bg-white w-20  ${fase_color} font-bold p-2 uppercase border-blue-500 border-t border-b  
      border-r`}>
                            {infoProject.filtrarProyecto.fase}</span>

                    </div>
                    <div className="m-2 mt-2">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                            <i class="far fa-calendar-alt fa-lg "></i>  FECHA CREACIÓN</span>
                        <span className="px-8 rounded-r-lg bg-white w-20  text-gray-400 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
                            {infoProject.filtrarProyecto.fechaCreacion != "" ? (infoProject.filtrarProyecto.fechaCreacion) : ("SIN FECHA AÚN")}  </span>


                    </div>
                    <div className="m-2 ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                            <i class="far fa-calendar-alt fa-lg "></i> FECHA INICIO</span>
                        <span className="px-8 rounded-r-lg bg-white w-20  text-gray-400 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
                            {infoProject.filtrarProyecto.fechaInicio != null ? (infoProject.filtrarProyecto.fechaInicio) : ("SIN FECHA AÚN")}  </span>


                    </div>
                    <div className="m-2  ">

                        <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
                            <i class="far fa-calendar-alt fa-lg "></i> FECHA TERMINACIÓN</span>
                        <span className="px-8 rounded-r-lg bg-white w-40  text-gray-400 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
                            {infoProject.filtrarProyecto.fechaFin != null ? (infoProject.filtrarProyecto.fechaFin) : ("SIN FECHA AÚN")}  </span>

                    </div>
                </div>

                <div className="bg-white flex-auto py-2 px-4 align-center rounded-2xl my-1 flex flex-col
              gap-2 border-solid border-2 border-gray-300  ">
                    <div className="flex flex-row justify-between pt-2 mt-8 border-blue-500 border-b   ">
                        <span className="px-8 my-2 rounded-r-lg  text-blue-800 font-bold p-3 text-xl   uppercase">Objetivos</span>
                        <PrivateComponent roleList={['LIDER']}>
                        <button type="button" className="p-1 pl-4 pr-4 mt-4 mr-10  
                                    bg-white border-2 border-blue-500 font-bold h-10 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-white  
                                    focus:border-4 " onClick={() => setCreateModal(true)}>Añadir</button></PrivateComponent>
                    </div>

                    <div className="overflow-y-scroll  mb-10  ">


                        <ul id="lista_obj" className=" h-full  py-2 px-6 
                             pl-10 pr-8 ">

                            {infoProject && infoProject.filtrarProyecto.objetivos.map((objetivo,index) => {
                                return (<>
                                                         <RowObjectiveInfo key={nanoid()} index={index}
                                    idProyecto={infoProject.filtrarProyecto._id} setDeleted={setDeletedObjModal} setEditObjModal={setEditObjModal} editEnable={editObjective}
                                    datarow={objetivo} objectives_list={objectives_list}  /> 
                                    </>
     );
                            })}
                        </ul>
                    </div> </div>
            
                    </> }  </div>

            <Dialog open={createModal}>
                <Create_objective_modal setOpenEditObj={setCreateModal}
                    idProyecto={infoProject.filtrarProyecto._id}></Create_objective_modal>
            </Dialog>
            
        </div>
    )
}

export default Info
