
import React from 'react'
import { useState, useEffect } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { useMutation } from '@apollo/client';

import { CREATE_NEW_ADVANCE } from 'graphql/avances/queries';


const New_advance_modal = ({ nameStudent, idStudent, idProject, setOpenModal, numAdvancesP }) => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  var date = new Date().toISOString().slice(0, 10);



  const [addAdvance, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(CREATE_NEW_ADVANCE);



  useEffect(() => {

    console.log("idSt", idStudent);
    console.log("idProj", idProject);


  }, []);
  useEffect(() => {

    console.log("error", errorMutation);


  }, [errorMutation]);

  const addNewAdvance = async () => {
    console.log("Guardando")
    if (titulo !== "" && descripcion !== "") {
      let proyecto = idProject;
      let creadoPor = idStudent;
      const fecha = date;
      let numAdvances = numAdvancesP + "";
      let g = { titulo, descripcion, fecha, proyecto, creadoPor };
      console.log(g);

      let added = await addAdvance({
        variables: { titulo, descripcion, fecha, proyecto, creadoPor, numAdvances },
      });
      console.log("added ", added);
      setOpenModal(false);
    } else {
      console.error("Error creando avance. Escriba de nuevo", errorMutation);
    }
  };



  if (loadingMutation) return <div>Cargando....</div>;

  return (

    <div className="modal h-screen z-30 w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20">

      <div className="bg-white rounded-xl shadow-lg w-4/6 ">

        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">Nuevo Avance En <span className="text-blue-800 font-bold"> Proyecto # {idProject}</span></h3>
          <button className="text-black hover:text-blue-700" onClick={() => setOpenModal(false)}><i className="far fa-times-circle fa-2x"></i></button>
        </div>

        <div className="p-3">
          <div className="w-full h-full overflow-y-hidden">

            <div className="w-full h-full px-20 overflow-y-scroll">

              <div className="bg-white  w-full py-2 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">
                <div className="w-full py-2 px-4 flex flex-row justify-around">
                  <span className="text-blue-800 text text-lg font-medium mt-4">
                    Titulo :
                  </span> <input type="text" maxLength="80" className="h-10 w-5/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-gray-100"
                    placeholder="Titulo avance" onChange={(e) => {
                      setTitulo(e.target.value)
                    }} />
                </div>
              </div>

              <div className=" w-full bg-white  mt-4 flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">

                <div className="w-full py-2 px-10 flex flex-row">
                  <span className="text-blue-800 text 
                        text-lg font-medium mt-4">      Descripción:    </span>


                  <TextareaAutosize placeholder="Escribe tu avance"
                    minRows="5 " type="text" className="h-10 w-5/6 mx-5 px-10 py-2 ml-10 rounded-2xl z-0 
                    focus:outline-none bg-gray-100" onChange={(e) => {
                      setDescripcion(e.target.value)
                    }}>
                  </TextareaAutosize>
                </div>
                <div className="w-full py-2 px-10 "><span className="text-blue-800 text text-lg font-medium mt-4">
                  Estudiante:
                </span>
                  <span className="text-gray-500 text text-lg font-medium mt-4 ml-20">
                    {nameStudent}
                  </span>
                  <span className="pl-40  text-gray-500 text text-lg  mt-4 ml-2">
                    Creado en: {date}
                  </span>
                </div>


              </div>

            </div>





          </div>
        </div>
        <div className="flex justify-end items-center w-100 border-t p-3">

          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-xl h-10 text-lg text-white" onClick={() => addNewAdvance()}>Guardar</button>
          <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-xl h-10 ml-3 text-white mr-1 close-modal ml-2" onClick={() => setOpenModal(false)}>Cancelar</button>
        </div>
      </div>
    </div>

  )
}

export default New_advance_modal