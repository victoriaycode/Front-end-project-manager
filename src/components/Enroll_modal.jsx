
import { useUser } from 'context/userContext';
import { CREAR_INSCRIPCION } from 'graphql/inscripciones/mutaciones';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import ButtonLoading from 'components/ButtonLoading';

const Enroll_modal = ({name_project,setOpenModalEnroll}) => {

  const { userData } = useUser();
  
  const InscripcionProyecto = ({ idProyecto, estado, inscripciones, userData }) => {

    const [estadoInscripcion, setEstadoInscripcion] = useState('');
    const [crearInscripcion, { data, loading, error }] = useMutation(CREAR_INSCRIPCION);

  
    useEffect(() => {
      if (userData && inscripciones) {
        const flt = inscripciones.filter((el) => el.estudiante._id === userData._id);
        if (flt.length > 0) {
          setEstadoInscripcion(flt[0].estado);
        }
      }
    }, [userData, inscripciones]);
  
    useEffect(() => {
      if (data) {
        console.log(data);
        toast.success('Inscripción creada con éxito');
      }
    }, [data]);
  
    const confirmarInscripcion = () => {
      crearInscripcion({ variables: { proyecto: idProyecto, estudiante: userData._id } });
    };
  
    return (
      <>
        {estadoInscripcion !== '' ? (
          <span>Ya estas inscrito en este proyecto y el estado es {estadoInscripcion}</span>
        ) : (
          <ButtonLoading
            onClick={() => confirmarInscripcion()}
            disabled={estado === 'INACTIVO'}
            loading={loading}
            className={'bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white'}
            text='Confirmar'
          />
        )}
      </>
    );
  };

    return (
    
        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
       
        <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      
          <div class="border-b px-4 py-2 flex justify-between items-center">
            <h3 class="font-semibold text-lg">Solicitud de Inscripción</h3>
            <button class="text-black hover:text-blue-700" onClick={()=>setOpenModalEnroll(false)}><i class="far fa-times-circle fa-2x"></i></button>
          </div>
        
          <div class="p-3">
          {userData.nombre} <br/>
          ¿Desea inscribirse al proyecto {name_project}?
          </div>
          <div class="flex justify-end items-center w-100 border-t p-3">
           
            <InscripcionProyecto 
              // idProyecto={proyecto._id}
              // estado={proyecto.estado}
              // inscripciones={proyecto.inscripciones}
               />
            <button class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-2" onClick={()=>setOpenModalEnroll(false)}>Cancelar</button>
          </div>
        </div>
      </div>
     
)
}

export default Enroll_modal
