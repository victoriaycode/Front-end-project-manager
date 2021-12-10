
import ProjectNavbar from 'components/ProjectNavbar'
import AdvancesTable from 'components/AdvancesTable'
import React from 'react'
import Search_input from 'components/Search_input'
import New_advance_modal from 'components/New_advance_modal'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from 'context/userContext'

const AdvancesDashboard = () => {
  const { userData } = useUser();
    const { _id } = useParams();
    const name_student= userData.nombre +" "+ userData.apellido;
    const id_Estudiante= userData._id +" ";  
 

    const [openNewAdvanceModal, setNewAdvanceModal]= useState(false);
    
    

    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
      <ProjectNavbar _idActual={_id} nombreProject={_id} rutaRetorno={`/proyectos/proyecto/${_id}`}/>
   
   
    <AdvancesTable idProject={_id} openNewAdvanceModal={openNewAdvanceModal} setModal={setNewAdvanceModal}></AdvancesTable>
     
    {openNewAdvanceModal &&
     <New_advance_modal nameStudent={name_student}  idStudent={id_Estudiante} 
     idProject={_id} setOpenModal={setNewAdvanceModal}></New_advance_modal>} 
   
    </div>

    )
    
}



export default AdvancesDashboard
