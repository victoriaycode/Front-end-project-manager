import React from 'react'
import { useState } from 'react'
import Enroll_modal from './Enroll_modal'
import New_project_modal from './New_project_modal'
import ProjectCardInfo from './ProjectCardInfo'
import Search_input from './Search_input'

const ProjectsList = () => {
    
    const [openModal, setOpenModal] = useState(false);
    const [openNewProject, setNewProject] = useState(false);
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden overflow-x-hidden pl-20 pr-20" >
             <div className="flex flex-row w-full justify-end align-center mr-20 ">
                <button class="p-2 pl-5 pr-5 z-30 absolute top-5 right-30 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" onClick={()=>setNewProject(true)}>Nuevo</button></div>
        <div className="relative h-16 flex flex-row bg-gray-100 w-full align-center justify-start 
        mt-6 border-b-2 pb-4">
            <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">Proyectos</span>
            <Search_input></Search_input>
            
            <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-50 pr-8 pl-5 text-lg text-gray-400 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" defaultValue="alfabetic">
                            <option  className="text-gray-400" value="alfabetic" >Ordenar por A-Z</option>
                            <option className="text-gray-400" value="recent">Más recientes </option>
                            <option className="text-gray-400" value="older">Más antiguos</option>
                        
                        </select>
                    </div></div>
           </div>
          
            <div className="flex flex-auto mb-6  overflow-y-scroll justify-center align-center ">
                <div className="flex-auto grid lg:grid-cols-4 mg:grid-cols-2 sd:grid-cols-1 pt-8  mt-0 gap-y-8  gap-x-5 md:pl-14
                 pt-2 align-center justify-center ">
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>

                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     <ProjectCardInfo openModal={openModal} setOpenModal={setOpenModal}></ProjectCardInfo>
                     

                </div>

            </div>
            {
                openModal && <Enroll_modal project_name={"proyect1"} setOpenModal={setOpenModal}></Enroll_modal>
            }
            {
                openNewProject && <New_project_modal setNewProject= {setNewProject}></New_project_modal>
            }
          </div>
    )
}

export default ProjectsList

