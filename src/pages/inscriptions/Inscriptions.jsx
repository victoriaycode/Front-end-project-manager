import Title_page from 'components/Title_page'
import React from 'react'
import Search_input from 'components/Search_input'
import { useState, useEffect} from 'react'
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries';
import { APROBAR_INSCRIPCION } from 'graphql/inscripciones/mutaciones';
import { useQuery, useMutation } from '@apollo/client';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ButtonLoading from 'components/ButtonLoading';
import AccordionDetails from '@mui/material/AccordionDetails';
import { toast } from 'react-toastify';
import Badge from '@mui/material/Badge';

const Inscriptions = () => {

    const { data, error, loading, refetch } = useQuery(GET_INSCRIPCIONES);
    const [editable, setEditable] = useState(false)
    
    useEffect(() => {
        console.log('data inscripciones', data);
    }, [data]);
    
    if (loading) return <div>Loading...</div>

        return (
        <div className="w-full h-full flex flex-col">

                <Title_page title={"Inscripciones"} returns={true} return_to ={"/inscripciones"}></Title_page>
                    <div className="flex flex-row  ml-0 justify-start mt-8">
                        <Search_input></Search_input>
                    </div>
        
                <div className="ml-8 mt-8 max-w-screen-2xl">
                    <AccordionInscripcion
                        titulo='Inscripciones Aprobadas'
                        data={data.Inscripciones.filter((el)=> el.estado ==="ACEPTADO")}
                        />
                    <AccordionInscripcion
                        titulo='Inscripciones Pendientes'
                        data={data.Inscripciones.filter((el)=> el.estado ==="PENDIENTE")}
                        />
                    <AccordionInscripcion
                        titulo='Inscripciones Rechazadas'
                        data={data.Inscripciones.filter((el)=> el.estado ==="RECHAZADO")}
                        />
            </div>
        </div>
        )

};

const AccordionInscripcion = ({ data, titulo, refetch = () => {} }) => {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<i className="fas fa-chevron-down"/>}>
          {titulo}
          <div className="mb-4 ml-4">
          <Badge badgeContent={data.length>0 ? data.length : "0"} color="primary">
            <i className='fas fa-clipboard-list fa-2x iconcolor'></i>
            </Badge>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex'>
            {data &&
              data.map((inscripcion) => {
                return <Inscripcion inscripcion={inscripcion} refetch={refetch} />;
              })}
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };

const Inscripcion = ({ inscripcion, refetch }) => {
    const [aprobarInscripcion, { data, loading, error }] = useMutation(APROBAR_INSCRIPCION);
  
    useEffect(() => {
      if (data) {
        toast.success('Inscripción aprobada con éxito');
        refetch();
      }
    }, [data]);
  
    useEffect(() => {
      if (error) {
        toast.error('Error aprobando la inscripción');
      }
    }, [error]);
  
    const cambiarEstadoInscripcion = () => {
      aprobarInscripcion({
        variables: {
          aprobarInscripcionId: inscripcion._id,
        },
      });
    };
  
    return (
      <div className='bg-gray-900 text-gray-50 flex flex-col p-6 m-2 rounded-lg shadow-xl'>
        <span>{inscripcion.proyecto.nombre}</span>
        <span>{inscripcion.estudiante.nombre}</span>
        <span>{inscripcion.estado}</span>
        {inscripcion.estado === 'PENDIENTE' && (
          <ButtonLoading
            onClick={() => {
              cambiarEstadoInscripcion();
            }}
            text='Aprobar Inscripción'
            loading={loading}
            disabled={false}
          />
        )}
      </div>
    );
  };

export default Inscriptions;
