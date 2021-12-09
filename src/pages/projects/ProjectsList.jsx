import React from 'react'
import { useState,useEffect } from 'react'
import Enroll_modal from '../../components/Enroll_modal'
import ProjectCardInfo from '../../components/ProjectCardInfo'
import Search_input from '../../components/Search_input'
import { NavLink } from 'react-router-dom'
import Edit_proyect_admin_modal from '../../components/Edit_proyect_admin_modal'

import { GET_PROJECTS_CARDS,GET_STUDENT_PROJECTS_ENROLLED  } from 'graphql/proyectos/queries'
import { useQuery } from '@apollo/client';

const ProjectsList = () => {
    
    const [listProjects, setListProjects]= useState([]);
    
    const [viewOnlyStudent, setViewOnlyStudent]= useState(true);
    
    const [viewToApprove, setViewToApprove]= useState(false);
    const { data, error, loading } = useQuery(GET_PROJECTS_CARDS);
    const idEstudiante= "61a95aebeb450051e9c2dc10";
    const idLider="61a955cf355428fe4ece9225";
    const [role, setRole]=useState("ESTUDIANTE");
    const  { data:dataStudent, error:errorStudent, loading:loadingStudent } 
    = useQuery(GET_STUDENT_PROJECTS_ENROLLED, {
      variables: {
        idEstudiante
      },
    });
   
    const [buttonEstudiante, setButtonEstudiante]=useState("text-gray-800");
    const [buttonToApprove, setButtonToApprove]=useState("text-blue-800");
    const [buttonTodos, setButtonTodos]=useState("text-gray-700");
    const [buttonTodos2, setButtonTodos2]=useState("text-gray-700");
    const [filteredList, setFilteredList]= useState([]);
    const [searchBy, setSearchBy]= useState("");
    // const viewStudentEnrolledProjects=()=>{
    //   if(dataStudent!=null){
    //     console.log(dataStudent.filtrarInscripcionesPorEstudiante.Proyectos)
    //   }
      
    // }
    useEffect(() => {
      if(searchBy!=""){
        setListProjects(
          listProjects.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(searchBy.toLowerCase());
          })
        );
      }
    }, [searchBy,ProjectsList])
    useEffect(() => {
     
     if(viewOnlyStudent ){
      setButtonTodos("text-gray-800 border-gray-600");
      setButtonEstudiante("text-blue-800 border-blue-800" );
     
     }else{
      setButtonEstudiante("text-gray-800 border-gray-600");
      setButtonTodos("text-blue-800 border-blue-800");
     }
      
    }, [viewOnlyStudent]);

    useEffect(() => {
     
      if(viewToApprove ){
       setButtonToApprove("text-blue-800 border-blue-800" );
       setButtonTodos2("text-gray-800 border-gray-600");
      }else{
        setButtonToApprove("text-gray-800 border-gray-600");
       setButtonTodos2("text-blue-800 border-blue-800");
      }
       
     }, [viewToApprove]);
    useEffect(() => {
     
      console.log('data estudiante', dataStudent);
      
    }, [dataStudent]);
    useEffect(() => {
      if(!loading){
        setListProjects(data.Proyectos);
        // if(role="LIDER"){
        //   const lista= listProjects.filter((el) => el.lider._id ===idLider );
        //   setListProjectsLider(lista);
        //   console.log("listalider",lista);
        // }else{
        
        // }
      }
        console.log('data servidor', data);
        
      }, [data]);
    
      useEffect(() => {
        if(loading){
    
        }else{
    
          console.log('data servidor', data);
        }
      }, [loading]);
    
    const [openModalEnroll, setOpenModalEnroll] = useState(false);
    
    const [openModalEdit, setOpenModalEdit] = useState(false);
    if (loading) return <div>Cargando....</div>;
 
    return (
     
        <div className="w-full h-full flex flex-col  overflow-y-hidden overflow-x-hidden pl-20 pr-20" >
              <NavLink to="/proyectos/nuevo">
             <div className="flex flex-row w-full  justify-end align-center mr-20  ">
                {/* {!openModalEdit && 
                <button className="p-2 pl-5 pr-5 z-30 absolute top-5 right-30 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" >Nuevo</button>} */}
             </div></NavLink>
             
        <div className="relative h-20 mt-4 pl-8  flex flex-row  w-full align-center justify-center 
        pt-6  bg-blue-200 bg-opacity-50 pb-4 ">
            <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold ">Proyectos</span>
            <div className="flex flex-col  sm:flex-row ml-5  text-lg gap-10 ">
            
            {role==="ESTUDIANTE" && <>
          <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium 
          border-gray-600  focus:outline-none hover:border-blue-800 border-b-4 transition duration-150 ${buttonEstudiante}`} 
          onClick={()=>setViewOnlyStudent(true)}>
            <i className="fas fa-info-circle w-auto" ></i> Mis Inscritos
          </button>
          <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium 
          border-gray-600   hover:border-blue-800 focus:outline-none border-b-4 transition duration-150 ${buttonTodos}`}
            onClick={()=>setViewOnlyStudent(false)}>
            <i className="fas fa-info-circle "></i> Ver Todos
          </button></>}
          {role==="ADMINISTRADOR" && <>
      
          <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium text-gray-600 
          border-gray-600   hover:border-blue-800 focus:outline-none border-b-4 transition duration-150 ${buttonTodos2}`}
            onClick={()=>setViewToApprove(false)}>
            <i className="fas fa-info-circle "></i> Ver Todos
          </button>
          <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium text-gray-600 
          border-gray-600  focus:outline-none hover:border-blue-800 border-b-4 transition duration-150 ${buttonToApprove}`} onClick={()=>setViewToApprove(true)}>
            <i className="fas fa-info-circle w-auto" ></i> Sin Aprobar
          </button></>}
            </div>
            <div className="flex flex-row ml-2">
            <div className="flex flex-row  flex-center">
          
        <div className="  flex justify-center items-center px-2 sm:px-4 ml-14">
            <div className="relative"> 
            <input type="text" className="h-12 w-70 pr-8 pl-5 rounded-2xl z-0 focus:shadow focus:outline-none"
              value={searchBy}onChange={(e) => setSearchBy(e.target.value)}  placeholder="Buscar " />
                <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
            </div>

        </div>
            
            <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 ml-8">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-48 pr-8 pl-5 text-lg text-gray-400 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" defaultValue="recent">
                           
                            <option className="text-gray-400" value="recent">Más recientes </option>
                            <option className="text-gray-400" value="older">Más antiguos</option>
                            <option  className="text-gray-400" value="alfabetic" >Por nombre</option>
                        
                        </select>
                    </div>
                    </div>
            </div>
            
            </div>
          
           </div>
           
            <div className="flex flex-auto mb-6   overflow-y-scroll justify-center align-center ">
                <div className="flex-auto px-6  grid lg:grid-cols-4 mg:grid-cols-2 sd:grid-cols-1 pt-8  m
                t-0 gap-y-8  gap-x-8
                 pt-2 align-center justify-center ">
                   
                   {role==="ADMINISTRADOR" &&  data &&
                    <> { !viewToApprove && data && listProjects.map((project_info) => {
              return (
                <ProjectCardInfo key={project_info._id} project_info={project_info}  setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
              );
            })}
            { viewToApprove && data && listProjects.filter((el) => (el.estado ==="INACTIVO" && el.fase==="NULO") ).map((project_info) => {
              return (
                <ProjectCardInfo key={project_info._id} project_info={project_info}  setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
              );
            })}  </>}
    {/**For students view all projects and only enrolled */}
            {role==="ESTUDIANTE" &&  
            <>
            
 {viewOnlyStudent  && dataStudent &&  dataStudent.filtrarInscripcionesPorEstudiante.map((project_info) => {
              return (
                <ProjectCardInfo key={project_info.proyecto._id} project_info={project_info.proyecto}  setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
              );
            })} 

            { !viewOnlyStudent  && data && listProjects.map((project_info) => {
              return (
                <ProjectCardInfo key={project_info._id} project_info={project_info}  setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
              );
            })}
            
           
            </>}
            
                      { role==="LIDER" && data &&
                      <>
{ listProjects.filter((el) => el.lider._id ===idLider ).map((project_info) => {
              return (
                <ProjectCardInfo key={project_info.proyecto._id} project_info={project_info.proyecto}  setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
              );
            })}
                      </>} 
          

                </div>

                {/* <div className="flex-auto grid lg:grid-cols-4 mg:grid-cols-2 sd:grid-cols-1 pt-8  mt-0 gap-y-8  gap-x-5 md:pl-14
                 pt-2 align-center justify-center ">
                        {dataStudent && dataStudent.filtrarInscripcionesPorEstudiante.map((project_info) => {
              return (
                <ProjectCardInfo key={project_info.proyecto._id} project_info={project_info.proyecto}  setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
              );
            })}
 

                </div> */}
            </div>
            {
                openModalEnroll && <Enroll_modal project_name={"proyect1"} setOpenModalEnroll={setOpenModalEnroll}></Enroll_modal>
            }
             {
                openModalEdit &&  <Edit_proyect_admin_modal project_id={"2312323"} setOpenModalEdit={setOpenModalEdit}></Edit_proyect_admin_modal>
            }
            
          </div>
          
    )
}

export default ProjectsList

