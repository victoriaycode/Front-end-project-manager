
import ProjectNavbar from 'components/ProjectNavbar'
import AdvancesTable from 'components/AdvancesTable'
import React from 'react'
import Search_input from 'components/Search_input'
import New_advance_modal from 'components/New_advance_modal'
import { useState } from 'react'
import { useParams } from 'react-router';

const AdvancesDashboard = () => {
    
    const { _id } = useParams();
    
    const [openNewAdvanceModal, setNewAdvanceModal]= useState(false);
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
      <ProjectNavbar _idActual={_id} nombreProject={_id} rutaRetorno={`/proyectos/proyecto/${_id}`}/>
   
   
    <AdvancesTable idProject={_id} openNewAdvanceModal={openNewAdvanceModal} setModal={setNewAdvanceModal}></AdvancesTable>
 
    {openNewAdvanceModal &&
     <New_advance_modal nameStudent="Yeison"  idStudent={"61a95aebeb450051e9c2dc10"} idProject={_id} setOpenModal={setNewAdvanceModal}></New_advance_modal>}
   
    </div>

    )
    
}



export default AdvancesDashboard
