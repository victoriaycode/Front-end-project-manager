
import { useUser } from 'context/userContext';
import { CREAR_INSCRIPCION } from 'graphql/inscripciones/mutaciones';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import ButtonLoading from 'components/ButtonLoading';

const Enroll_modal = ({ idProyecto, name_project, setOpenModalEnroll }) => {

  const InscripcionProyecto = ({ estado, inscripciones }) => {

    const { userData } = useUser();
    const [crearInscripcion, { data, loading, error }] = useMutation(CREAR_INSCRIPCION);

    // const [estadoInscripcion, setEstadoInscripcion] = useState('');


    // useEffect(() => {
    //   if (userData && inscripciones) {
    //     const flt = inscripciones.filter((el) => el.estudiante._id === userData._id);
    //     if (flt.length > 0) {
    //       setEstadoInscripcion(flt[0].estado);
    //     }
    //   }
    // }, [userData, inscripciones]);

    useEffect(() => {
      if (data) {
        console.log(data);
        toast.success('Inscripción creada con éxito');
        setOpenModalEnroll(false);
      }
    }, [data]);

    const confirmarInscripcion = () => {
      crearInscripcion({ variables: { proyecto: idProyecto, estudiante: userData._id } });

    };

    return (
      <>
        {/* {estadoInscripcion !== '' ? (
          <span>Ya estas inscrito en este proyecto y el estado es {estadoInscripcion}</span>
        ) : ( */}
        <ButtonLoading
          onClick={() => confirmarInscripcion()}
          loading={loading}
          className={'bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white'}
          text='Confirmar'
        />
        {/* )} */}
      </>
    );
  };

  return (

    <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-20">

      <div className="bg-white rounded-2xl shadow-lg w-10/12 md:w-1/3">

        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-blue-800 text-lg">Solicitud de Inscripción del Estudiante</h3>
          <button className="text-black hover:text-blue-700" onClick={() => setOpenModalEnroll(false)}><i className="far fa-times-circle fa-2x"></i></button>
        </div>

        <div className="p-3 flex flex-col text-center">
          <span className="text-lg  font-light  text-gray-800 pb-2">
            ¿Desea enviar solicitud de inscripción al proyecto ?
          </span>
          <span className="text-2xl  font-semibold  text-blue-800">
            {name_project}
          </span>
        </div>
        <div className="flex justify-end items-center w-100 border-t p-3">
          <InscripcionProyecto></InscripcionProyecto>
          <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-xl h-10 text-white mr-1 close-modal ml-2" onClick={() => setOpenModalEnroll(false)}>Cancelar</button>
        </div>
      </div>
    </div>

  )
}

export default Enroll_modal
