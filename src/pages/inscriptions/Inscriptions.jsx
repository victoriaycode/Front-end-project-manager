import Title_page from 'components/Title_page'
import React from 'react'
import { useState, useEffect} from 'react'
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries';
import { APROBAR_INSCRIPCION, RECHAZAR_INSCRIPCION } from 'graphql/inscripciones/mutaciones';
import { useQuery, useMutation } from '@apollo/client';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ButtonLoading from 'components/ButtonLoading';
import AccordionDetails from '@mui/material/AccordionDetails';
import { toast } from 'react-toastify';
import Badge from '@mui/material/Badge';
import moment from "moment";
import 'moment/locale/es';
import PrivateRoute from 'components/PrivateRoute';
import { useUser } from 'context/userContext';
import { nanoid } from 'nanoid';
import PrivateComponent from 'components/PrivateComponent'



const Inscriptions = () => {
    const { userData } = useUser();
    const role= userData.rol+"" ;
    const { data, error, loading, refetch } = useQuery(GET_INSCRIPCIONES);
    
    useEffect(() => {
        console.log('data inscripciones', data);
    }, [data]);
    
    if (loading) return <div>Loading...</div>

        return (
   
          <PrivateRoute roleList={['LIDER',"ESTUDIANTE"]} >
        <div className="w-full h-full flex flex-col">

                <Title_page title={"Inscripciones"} returns={true} return_to ={"/inscripciones"}></Title_page>
        
                <div className="ml-8 mt-8 max-w-screen-2xl">
                  <AccordionInscripcion
                      key={nanoid()}
                      titulo='PENDIENTES'
                      data={data.Inscripciones.filter((el)=> el.estado ==="PENDIENTE")}
                      refetch={refetch}
                      role={role}
                      />
                    <AccordionInscripcion
                       key={nanoid()}
                        titulo='APROBADAS'
                        data={data.Inscripciones.filter((el)=> el.estado ==="ACEPTADO")}
                        role={role}
                        />
                    <AccordionInscripcion
                       key={nanoid()}
                        titulo='RECHAZADAS'
                        data={data.Inscripciones.filter((el)=> el.estado ==="RECHAZADO")}
                        role={role}
                        />
            </div>
        </div></PrivateRoute>
        )

};

const AccordionInscripcion = ({ data, titulo, refetch = () => {} }) => {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<i className="fas fa-chevron-down"/>}>
          <div className='font-bold text-xl text-blue-900'>{titulo}</div>
          <div className="mb-4 ml-4">
          <Badge badgeContent={data.length>0 ? data.length : "0"} color="primary">
            {
            titulo === "APROBADAS" ?
            <i className='fas fa-clipboard-check fa-2x iconcolor'/>
            :
            <i className='fas fa-clipboard-list fa-2x iconcolor'/>}
            </Badge>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='grid grid-cols-5'>
            {data &&
              data.map((inscripcion) => {
                return <Inscripcion inscripcion={inscripcion} refetch={refetch} />;
              })}
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };

const Inscripcion = ({ inscripcion, refetch, role }) => {
    const [aprobarInscripcion, { data, loading, error }] = useMutation(APROBAR_INSCRIPCION);
    const [rechazarInscripcion, { data: mutationData, loading: loadingData, error: errorData }] = useMutation(RECHAZAR_INSCRIPCION);
  
    useEffect(() => {
      if (data || mutationData) {
        toast.success('Inscripción gestionada con éxito');
        refetch();
      }
    }, [data, mutationData]);
  
    useEffect(() => {
      if (error || errorData) {
        toast.error('Error aprobando la inscripción');
      }
    }, [error, errorData]);
  
    const cambiarEstadoInscripcion = () => {
      aprobarInscripcion({
        variables: {
          aprobarInscripcionId: inscripcion._id,
        },
      })};

    const estadoRechazadoInscripcion = () => {
      rechazarInscripcion({
        variables: {
          rechazarInscripcionId: inscripcion._id,
        },
      })};
  
    return (
      // <PrivateRoute roleList={['LIDER',"ESTUDIANTE"]} >
      <div className='  text-gray-700 flex flex-col w-48 h-54 p-2 m-2 rounded-lg shadow-xl  bg-gray-200 border-none'>
        <span className='font-semibold text-sm'>Nombre proyecto:</span>
        <p className='font-semibold text-sm truncate mb-2 text-blue-800' >{inscripcion.proyecto.nombre}</p>
      
        <div className='mb-2'>
        <span className='font-semibold text-sm mt-auto'>Estudiante:</span>
        <span className='font-ligth text-sm'>{`${inscripcion.estudiante.nombre} ${inscripcion.estudiante.apellido}`}<br/></span>
        <span className='font-ligth text-xs'>{inscripcion.estudiante.correo}</span>
        </div>
       
        {inscripcion.estado === 'PENDIENTE'  && (
        <>  <PrivateComponent roleList={['LIDER']}>
        <div className='flex mt-auto justify-between'>
          <ButtonLoading
            onClick={() => {
              cambiarEstadoInscripcion();
            } }
            text='ACEPTAR'
            loading={loading}
            disabled={false}
            className={'w-20 text-sm text-white rounded-md border-none mt-auto hover:bg-green-700  bg-green-500'} />
            
            <ButtonLoading
            onClick={() => {
              estadoRechazadoInscripcion();
            } }
            text='RECHAZAR'
            loading={loadingData}
            disabled={false}
            className={'w-20 text-sm text-white rounded-md border-none bg-red-500   mt-auto hover:bg-red-700'} />
        </div>
         </PrivateComponent> </>
        )}
         {inscripcion.estado === 'ACEPTADO' && (
           
           <div><>
           <span className='font-semibold text-sm mt-auto '>Fecha ingreso:</span>
           <span className="text-xs">{inscripcion.fechaIngreso!=null ?  moment(inscripcion.fechaIngreso).format('DD/MM/YY hh:mm:ss a'):""}</span>
           </>
           <>
           <span className='font-semibold text-sm mt-auto'><br/>Fecha Egreso:</span>
           {inscripcion.fechaEgreso!=null ? <span className="text-xs">{inscripcion.fechaEgreso!=null ? moment(inscripcion.fechaEgreso).format('DD/MM/YY hh:mm:ss a'):""}</span>:(<></>)}
           </>
           </div>
         )
       }
       {/* {inscripcion.estado === 'RECHAZADO' && (
          //  <>
          //  <span className='font-semibold text-sm mt-auto'>Fecha gestión:</span>
          //  <span className="text-xs">{moment(new Date()).format('DD/MM/YY hh:mm:ss a')}</span>
          //  </>
         )
       } */}
      </div>
      // </PrivateRoute>
    );
  };

export default Inscriptions;