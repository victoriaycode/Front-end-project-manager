import { TextareaAutosize } from "@material-ui/core";
import Commentary from "components/Commentary";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

import New_Commentary from "components/New_Commentary";

import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFormData from 'hooks/useFormData';
import { EDIT_ADVANCE_BY_STUDENT, GET_ADVANCE_BY_ID } from 'graphql/avances/queries'

import { useQuery, useMutation } from '@apollo/client';
import { useUser } from "context/userContext";
import PrivateComponent from "components/PrivateComponent";

const Advance = () => {

  const { _id } = useParams();

  const { _idAvance } = useParams();
  const [advance, setAdvance] = useState({});
  const [createdBy, setCreatedBy] = useState("");

  const [editable, setEditable] = useState(false);

  const [InactiveOrFinishedProject, setInactiveOrFinishedProject] = useState(false);
  const [input_bg, setInputBg] = useState("bg-gray-50");
  const [newCommentary, setNewCommentary] = useState(false);
  const { userData } = useUser();
  const idEstudiante = userData._id + "";

  const role = "ESTUDIANTE";
  const { form, formData, updateFormData } = useFormData(null);



  const { data, error, loading, refetch } = useQuery(GET_ADVANCE_BY_ID, {
    variables: {
      _idAvance
    },
  });

  useEffect(() => {
    if (data) {

      setAdvance(data.filtrarAvancePorId);
      console.log("data avance", data);
    }
  }, [data]);

  useEffect(() => {
    if (!loading && data) {
      let nombre = data.filtrarAvancePorId.creadoPor.nombre;
      let apellido = data.filtrarAvancePorId.creadoPor.apellido;
      setCreatedBy(nombre + " " + apellido);
      setAdvance(data.filtrarAvancePorId);
      console.log("data estado",data.filtrarAvancePorId);
      if (data && data.filtrarAvancePorId.proyecto.estado == "INACTIVO"
        || data.filtrarAvancePorId.proyecto.fase == "TERMINADO") {
        setInactiveOrFinishedProject(true);
      };
    } 
  }, [loading]);

  useEffect(() => {
    refetch()
    if (editable) {

      setInputBg("bg-gray-100");
    } else {

      setInputBg("bg-indigo-50");
    }

  }, [editable])

  const [editarAvance, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDIT_ADVANCE_BY_STUDENT);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("formdata", formData);
    if (formData.titulo !== "" && formData.descripcion !== "") {

      const edit = editarAvance({
        variables: { _idAvance, ...formData },
      });


      setEditable(false);
      console.log("edit ", edit);



    }
  };
  useEffect(() => {
    if (mutationData) {
      console.log('Avance modificado correctamente');

    }
  }, [mutationData]);
  useEffect(() => {
    if (mutationError) {
      console.log("error", mutationError);
      toast.error('Error modificando el avance');
    }

  }, [mutationError]);
  if (loading) return <div>Cargando....</div>;

  if (mutationLoading) return <div>Cargando....</div>;


  return (
    <div className="w-full h-full overflow-y-hidden pb-4">

      <form className="h-full "
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}>

        <div className="sticky h-16 flex flex-row bg-gray-100 w-full align-center justify-start mt-6 border-b-2 ">
          <NavLink to={`/proyectos/proyecto/avances/${_id}`}>
            <button className="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full 
          h-14 w-14 align-center justify-center">
              <i className="fas fa-angle-left fa-2x"></i>
            </button>
          </NavLink>

          <span className="text-lg text-blue-800 text-2xl ml-2 mr-5 pt-2 font-bold ">
            Avance # {_idAvance}
          </span>
          <PrivateComponent roleList={['ESTUDIANTE']}>


            {data && data.filtrarAvancePorId.creadoPor._id === idEstudiante &&
              <div className="flex flex-row align-center ">

                {editable ? (<div >   <button type="submit" className="p-1  pl-5 pr-5 ml-10 flex-end m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" disabled={Object.keys(formData).length === 0}>Guardar</button>
                  <button className="p-1 pl-5 pr-5 ml-10 flex-end m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" onClick={() => setEditable(false)}>Cancelar</button></div>)
                  : (<>{<button className="p-1 pl-5 pr-5  ml-10 flex-end m-2 mb-3 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" onClick={() => setEditable(true)} >Editar</button>}</>)}
              </div>}
          </PrivateComponent>
        </div>

        <div className="w-full  flex flex-col h-full overflow-y-scroll  ">
          <div>
            <div className="w-full h-full ">

              <div className="w-full h-full px-20 py-1 ">


                <div className=" w-full bg-white   flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                  {(loading) ? (<ReactLoading type={"spin"} color="#1260CD" height={'20%'} />) : (<>
                    <div className="w-full py-2 px-10 flex flex-row ">

                      <span className="text-gray-500 text text-lg font-medium mt-4">
                        Titulo Avance:
                      </span>
                      {editable ? (<TextareaAutosize name="titulo" type="text" minRows="2" className={`h-10 w-5/6 mx-5 px-10 mt-1  text-xl font-semibold text-blue-800 rounded-2xl z-0 focus:outline-none
                    ${input_bg}`} defaultValue={advance.titulo} />)
                        : (<TextareaAutosize minRows="1" disabled className={`h-10 w-5/6 py-1 mx-5 px-10 mt-1  text-xl font-semibold text-blue-800 rounded-2xl z-0 focus:outline-none
                    ${input_bg}`} value={advance.titulo} >  </TextareaAutosize>)

                      }


                    </div>
                    <div className="w-full py-2 px-10 flex flex-row">
                      <span className="text-gray-500 text text-lg font-medium mt-4">Descripción : </span>

                      {editable ? (<TextareaAutosize minRows="2" name="descripcion" defaultValue={advance.descripcion} minRows="3 " type="text"
                        className={` w-5/6 mx-5 px-10 py-4 ml-10 rounded-2xl z-0 focus:outline-none ${input_bg}`}>
                      </TextareaAutosize>)
                        : (
                          <TextareaAutosize disabled
                            className={`h-30 break-all w-5/6 mx-5 px-10 py-2 ml-10 rounded-2xl z-0 focus:outline-none ${input_bg}`}
                            value={advance.descripcion}>
                          </TextareaAutosize>)}

                    </div>

                    <div className="w-full py-2 px-10 text-sm flex flex-row align-center justify-center ">
                      <div>
                        <span className="text-gray-500 text   font-light mt-4">
                          Estudiante:
                        </span>

                        <input type="text" disabled
                          className={`text-gray-500 bg-white text-lg font-medium p-2 pl-4 mt-4  rounded-2xl z-0 focus:outline-none`}
                          defaultValue={createdBy} />
                      </div>

                      <div>
                        <span className="text-gray-500  mt-4  ">
                          Fecha de creación:
                          <input type="text" disabled
                            className={`text-gray-500 bg-white  text-lg p-2 pl-4 font-medium mt-4  rounded-2xl z-0 focus:outline-none`}
                            defaultValue={advance.fecha} />
                        </span>
                      </div> </div>
                  </>)}

                </div>

              </div>





            </div>
          </div>


          <div className="w-full   my-5 px-4  py-5 px-16 border-solid border-gray-300 border-t-2">
            <div className="w-full flex flex-row justify-start py-2  mx-5">
              <span className="text-lg text-blue-800 text-2xl font-bold  " >Observaciones</span>

              <PrivateComponent roleList={['LIDER']}>
                {!InactiveOrFinishedProject && <>
                  {!newCommentary &&
                    <button className="p-1 ml-20 mr-10  bg-transparent border-2 border-blue-500  
                      text-blue-500 text-sm rounded-lg hover:bg-blue-600 
              hover:text-white  
                    focus:border-4 "
                      onClick={() => setNewCommentary(true)}>Añadir nueva</button>}
                      </>}</PrivateComponent>
            </div>


            <div className="w-full h-full mb-10">

              <div className="mt-4 flex flex-col gap-1 h-3/4 px-5">

                {newCommentary && <New_Commentary _idAvance={_idAvance} setCancel={setNewCommentary} />}
                {data && data.filtrarAvancePorId.observaciones.slice(0).reverse().map((observacion) => {
                  return (
                    <Commentary observacion={observacion}   ></Commentary>
                  );
                })}


              </div>
            </div>
          </div>

        </div>

      </form>
    </div>

  )
}

export default Advance;