import { useMutation } from '@apollo/client';
import { Dialog, Zoom } from '@material-ui/core';
import { useUser } from 'context/userContext';
import { EDIT_PROJECT_BY_ADMIN } from 'graphql/proyectos/queries';
import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Edit_project_admin_modal from './Edit_project_admin';
import Enroll_modal from './Enroll_modal';
import PrivateComponent from './PrivateComponent';

const ProjectCardInfo = ({ project_info, already_enrolled }) => {

  const { userData } = useUser();

  const user = userData.rol + "";

  const [aprobarModal, setAprobarModal] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const [enrollModal, setEnrollModal] = useState(false);

  var dateNow = new Date();

  const [editarProjectAdmin, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDIT_PROJECT_BY_ADMIN);

  //const [openModal, setOpenModal] = useState(false);
  const card = project_info;
  const [colorState, setColorState]= useState("green");
  const [colorFase, setColorFase]= useState("gray");

  useEffect(() => {
  if (project_info.estado === "INACTIVO") {
    setColorState("gray");
  }else{
    setColorState("green");
  }
  if (project_info.fase === "NULO") {
    setColorFase( "gray");

  }
  if (project_info.fase === "TERMINADO") {
    setColorFase( "red");

  }

  if (project_info.fase === "INICIADO") {
    setColorFase("blue");

  }
  if (project_info.fase === "DESARROLLO") {
    setColorFase("yellow");

  }
  }, [,project_info])

      // let colorState = "green";
  // let colorFase = "gray";
  // if (project_info.estado === "INACTIVO") {
  //   colorState = "gray"

  // }
  // if (project_info.fase === "TERMINADO") {
  //   colorFase = "red"

  // }

  // if (project_info.fase === "INICIADO") {
  //   colorFase = "blue"

  // }
  // if (project_info.fase === "DESARROLLO") {
  //   colorFase = "yellow"

  // }

  const aprobarProyecto = async () => {
    console.log("aprobar");
    let idProyecto = card._id;
    console.log("idProyecto", idProyecto);

    const edit = editarProjectAdmin({
      variables: { idProyecto, "estado": "ACTIVO", "fase": "INICIADO", "fechaInicio": dateNow },
    });
    setAprobarModal(false);
    console.log("edita", edit);
  }


  return (
    <>



      <div className="flex flex-col   w-70 h-64 bg-white   shadow-xl p-4  rounded-2xl transform transition duration-200 hover:scale-110  ">


        <div className="flex flex-col  ">


          <div className="flex flex-col  justify-center   w-full align-center">
            <p className="text-lg text-blue-800 w-30 truncate  text-center pb-1 pt-3 text-2xl font-bold  ">{card.nombre}</p>
            {/* <span className=" text-ms text-gray-500 text-xs mx-2 font-light pt-2 ">Lider : <span className="text-blue-800 font-light">{card.lider.nombre} {card.lider.apellido}</span> </span> */}

            {already_enrolled ? (<><span className=" text-blue-500 text-sm mx-2 text-center  font-light align-start pb-1"> <i className="far fa-check-circle"></i> Inscripción Aceptada</span> </>) : (
              <span className=" text-gray-500 text-sm mx-2 text-center  font-light align-start pb-1">Lider : <span className="text-gray-800 font-light">{card.lider.nombre} {card.lider.apellido}</span> </span>

            )}
          </div>
          <div className="flex flex-row px-2 justify-center mt-2 ">
            <div className={`relative flex flex-row  gap-4 h-16 flex justify-center items-center   
          text-${colorState}-500 `}>

              <span className=" mt-1 w-20 text-center font-semibold mb-1 text-base">  <i className="far fa-calendar-check fa-2x"></i> {card.estado}</span>
              <span className={` pt-2 text-center text-${colorFase}-500 font-semibold text-xs`}>   <i className="fas fa-tachometer-alt fa-2x"></i> {card.fase} </span>

            </div>
          </div>
        </div>
        <div className="flex flex-rows-2 w-full gap-2 justify-center align-center mt-4 ">
          <NavLink
            to={`/proyectos/proyecto/${card._id}`}  >

            <button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                    text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                    focus:border-4 focus:border-blue-300 text-base"  ><i className="far fa-eye fa-lg"></i> Ver</button>
          </NavLink>

          <PrivateComponent roleList={['ESTUDIANTE']}>
            {!already_enrolled &&
              <>{(card.estado === "ACTIVO" && (card.fase != "NULO" || card.fase != "TERMINADO")) &&

                <button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                    text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                    focus:border-4 focus:border-blue-300  text-xs" onClick={() => setEnrollModal(true)}>
                  <i className="fas fa-check-double fa-lg"></i> Inscribirse</button>}</>}

          </PrivateComponent>


          <PrivateComponent roleList={['ADMINISTRADOR']}>

            <>
              {(card.estado === "INACTIVO" && card.fase === "NULO")
                ? (<button className="p-2 pl-4 pr-4 ml-2 bg-transparent border-2 border-blue-300
                   text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                   focus:border-4 focus:border-blue-300 font-mono text-base"  onClick={() => setAprobarModal(true)}> <i className='' ass="far fa-check-circle"></i>APROBAR</button>
                ) : (
                  <>{(card.estado === "INACTIVO" && card.fase === "TERMINADO") ? (<></>) :
                    (<button className="p-2 pl-4  pr-4 ml-2 bg-transparent border-2 border-blue-300
                      text-blue-800 rounded-lg  hover:text-blue-500 hover:border-blue-500 font-bold
                      focus:border-4 focus:border-blue-300 font-mono text-base" onClick={() => setEditModal(true)}><i className="far fa-edit"></i> EDITAR</button>)}

                  </>)
              }

            </>
          </PrivateComponent>
        </div>


        <Dialog open={aprobarModal} >

          <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20">

            <div className="bg-white rounded shadow-lg w-1/3  ">

              <div className="border-b px-4 py-2 flex justify-between items-center">
                <h3 className="font-semibold text-blue-800 text-xl"> Proyecto: {card.nombre}</h3>
                <button className="text-black hover:text-blue-700" onClick={() => setAprobarModal(false)}><i class="far fa-times-circle fa-2x"></i></button>
              </div>

              <div className="w-full flex flex-col px-4 py-2">
                <h3 className="font-semibold text-blue-800 text-xl mb-2"> ¿Desea aprobar este proyecto?</h3>
                <span className="text-base "> Su estado será
                  <span className="text-gray-800  font-semibold"> ACTIVO</span> y su fase será
                  <span className="text-gray-800  font-semibold"> INICIADO</span></span>
              </div>
              <div class="flex justify-end items-center w-100 border-t p-3">

                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 h-10 rounded-2xl text-white" onClick={() => aprobarProyecto()}>Si, aprobar</button>
                <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 h-10 rounded-2xl rounded text-white mr-1 close-modal ml-5" onClick={() => setAprobarModal(false)}>Cancelar</button>
              </div>
            </div>
          </div>

        </Dialog>

        <Dialog open={editModal}>
          <Edit_project_admin_modal idProyecto={card._id} initialState={card.estado}
            nombreProyecto={card.nombre} fechaInicio={card.fechaInicio} fechaFin={card.fechaFin} initialFase={card.fase} setOpenModalEdit={setEditModal} />


        </Dialog>
        <Dialog open={enrollModal} >
          <Enroll_modal setOpenModalEnroll={setEnrollModal} name_project={card.nombre} idProyecto={card._id} ></Enroll_modal>
        </Dialog>
      </div>


    </>)
}



export default ProjectCardInfo