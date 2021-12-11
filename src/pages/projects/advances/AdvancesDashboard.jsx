
import ProjectNavbar from 'components/ProjectNavbar'
import AdvancesTable from 'components/AdvancesTable'
import React from 'react'
import New_advance_modal from 'components/New_advance_modal'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from 'context/userContext'
import { useQuery } from '@apollo/client'
import { GET_INSCRIPCION_ACEPTADA } from 'graphql/inscripciones/queries'

const AdvancesDashboard = () => {
  const { userData } = useUser();
    const { _id } = useParams();
    const name_student= userData.nombre +" "+ userData.apellido;
    const idEstudiante= userData._id +" ";  
    const idProyecto= _id;
    const { data,  error, loading } = useQuery(GET_INSCRIPCION_ACEPTADA, {
      variables: {
          idProyecto,idEstudiante
      },
  });
  useEffect(() => {
    if (!loading && data) {
        if(data.filtrarSiEstaInscrito===null){
          console.log(" inscripcion null");
        }else
        console.log("data",data);
    }
}, [data]);
    const [openNewAdvanceModal, setNewAdvanceModal]= useState(false);

    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
      <ProjectNavbar _idActual={_id} nombreProject={_id} rutaRetorno={`/proyectos/proyecto/${_id}`}/>
   
      
   {/*<AdvancesTable idProject={_id} openNewAdvanceModal={openNewAdvanceModal} setModal={setNewAdvanceModal}></AdvancesTable>*/ } 
    <AdvancesTable idProject={_id} openNewAdvanceModal={openNewAdvanceModal} setModal={setNewAdvanceModal}></AdvancesTable>
    {openNewAdvanceModal &&
     <New_advance_modal nameStudent={name_student}  idStudent={idEstudiante} 
     idProject={_id} setOpenModal={setNewAdvanceModal}></New_advance_modal>} 

    </div>

    )
    
}



export default AdvancesDashboard
