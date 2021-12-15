import React from 'react'
import { useState, useEffect } from 'react'
import ProjectCardInfo from '../../components/ProjectCardInfo'
import { NavLink } from 'react-router-dom'

import { GET_PROJECTS_CARDS, GET_STUDENT_PROJECTS_ENROLLED } from 'graphql/proyectos/queries'
import { useQuery } from '@apollo/client';
import { GET_PROJECTS_BY_LIDER } from 'graphql/proyectos/queries'
import { useUser } from 'context/userContext'
import PrivateComponent from 'components/PrivateComponent'
import ReactLoading from 'react-loading';
import PrivateRoute from 'components/PrivateRoute';
import { nanoid } from 'nanoid'

const ProjectsList = () => {
  const { userData } = useUser();
  const role = "" + userData.rol;

  const [listProjects, setListProjects] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [listProjectsLider, setListProjectsLider] = useState([]);
  const [filteredListLider, setFilteredListLider] = useState([]);
  const [viewToApprove, setViewToApprove] = useState(false);

  const [listProjectsStudent, setListProjectsStudent] = useState([]);
  const [filteredListStudent, setFilteredListStudent] = useState([]);
  const [viewOnlyStudent, setViewOnlyStudent] = useState(true);
  const [already_enrolled, setAlready_enrolled] = useState(false);

  const [sortBy, setSortedBy] = useState("older");

  const idEstudiante = userData._id + "";
  const id_lider = userData._id + "";


  const [openModalEnroll, setOpenModalEnroll] = useState(false);

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const { data: dataProjects, error, loading, refetch:refetchProjects } = useQuery(GET_PROJECTS_CARDS);
  const { data: dataStudent, error: errorStudent, loading: loadingStudent, refetch: refetchStudent }
    = useQuery(GET_STUDENT_PROJECTS_ENROLLED, {
      variables: {
        idEstudiante
      },
    });
  const { data: dataLider, error: errorLider, loading: loadingLider, refetch: refetchLider }
    = useQuery(GET_PROJECTS_BY_LIDER, {
      variables: {
        id_lider
      },
    });
  const [buttonEstudiante, setButtonEstudiante] = useState("text-blue-500");
  const [buttonToApprove, setButtonToApprove] = useState("text-blue-800");
  const [buttonTodos, setButtonTodos] = useState("text-gray-700");
  const [buttonTodos2, setButtonTodos2] = useState("text-gray-700");

  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    if (!loadingLider && dataLider) {
      setListProjectsLider(dataLider.filtrarProyectoPorLider);
      setFilteredListLider(dataLider.filtrarProyectoPorLider);
      console.log("datalider", dataLider);
    }
  }, [dataLider])


  useEffect(() => {
    if (!loadingStudent && dataStudent) {
      console.log('data estudiante', dataStudent);
      if (userData && dataStudent) {
        const flt = dataStudent.filtrarInscripcionesPorEstudiante.filter((el) => el.estado === "ACEPTADO" && el.fechaEgreso == null);
        if (flt.length > 0) {
          setAlready_enrolled(true);
        } else {
          setAlready_enrolled(false);
        }

        setListProjectsStudent(flt);
        setFilteredListStudent(flt);
      }

    }
  }, [dataStudent]);

  useEffect(() => {
    refetchStudent();
    
  }, [viewOnlyStudent]);

  useEffect(() => {
    refetchLider();
    refetchProjects();
  }, [viewToApprove]);
  useEffect(() => {
    if (!loading && dataProjects) {

      setListProjects(dataProjects.Proyectos);
      setFilteredList(dataProjects.Proyectos);

    }

    console.log('data servidor', dataProjects);

  }, [dataProjects]);


  useEffect(() => {
    if (!loading && listProjects) {
      setFilteredList(
        listProjects.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(searchBy.toLowerCase());
        })
      );
    }
    if (role === "LIDER") {
      if (!loadingLider && listProjectsLider) {
        setFilteredListLider(
          listProjectsLider.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(searchBy.toLowerCase());
          })
        );
      }
    }

    if (role === "ESTUDIANTE") {
      if (!loadingStudent && listProjectsStudent) {
        setFilteredListStudent(
          listProjectsStudent.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(searchBy.toLowerCase());
          })
        );
      }
    }
  }, [searchBy, ProjectsList, listProjectsLider, listProjectsStudent])

  useEffect(() => {
    console.log("sort", sortBy);
    if (filteredList !== null) {


      const lista = filteredList.slice(0).reverse();
      console.log("sort", lista);
      setFilteredList(lista);
    }
    if (role == "LIDER") {
      const lista1 = filteredListLider.slice(0).reverse();
      setFilteredListLider(lista1);
    }
    if (role == "ESTUDIANTE") {
      const lista2 = filteredListStudent.slice(0).reverse();
      setFilteredListStudent(lista2);
    }

  }, [sortBy])

  useEffect(() => {

    if (viewOnlyStudent) {
      setButtonTodos("text-gray-500 border-gray-500  ");
      setButtonEstudiante("text-blue-800 border-blue-800 bg-blue-100 rounded-xl");

    } else {
      setButtonEstudiante("text-gray-500 border-gray-500 ");
      setButtonTodos("text-blue-800 border-blue-800  bg-blue-100 rounded-xl");
    }

  }, [viewOnlyStudent]);

  useEffect(() => {

    if (viewToApprove) {
      setButtonToApprove("text-blue-800 border-blue-800");
      setButtonTodos2("text-gray-800 border-gray-600");
    } else {
      setButtonToApprove("text-gray-800 border-gray-600");
      setButtonTodos2("text-blue-800 border-blue-800");
    }

  }, [viewToApprove]);



  useEffect(() => {
    if (loading) {

    } else {

      console.log('data servidor', dataProjects);
    }
  }, [loading]);

  useEffect(() => {
  
    if (openModalEnroll) {
      refetchStudent();
      refetchProjects();
    }
    if (openModalEdit) {
      refetchLider();
      refetchProjects();
    }
  }, [openModalEdit, openModalEnroll]);
  // if (loading) return <div>Cargando....</div>;
  // if (loadingStudent) return <div>Cargando....</div>;
  // if (loadingLider) return <div>Cargando....</div>;
  if (loading || loadingStudent || loadingLider) return <div><ReactLoading type='spin' height={20} width={20} />Cargando...</div>
  return (
    <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER', 'ESTUDIANTE']} >

      <div className="w-full h-full flex flex-col  overflow-y-hidden overflow-x-hidden pl-20 pr-20" >

        {role == "LIDER" &&
          <NavLink to="/proyectos/nuevo">
            <div className="flex flex-row w-full  justify-end align-center mr-20  ">
              {!openModalEdit &&
                <button className="p-2 pl-5 pr-5 z-30 absolute  top-8 right-30 bg-transparent font-bold shadow border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200
                 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" >Nuevo</button>}
            </div></NavLink>
        }

        <div className="relative h-20  pl-8  flex flex-row  w-full align-center  
        pt-6  bg-gray-100 bg-opacity-50 pb-4 ">
          <span className="text-lg text-blue-800 text-3xl ml-2 mr-5 pt-2 font-bold justify-start ">Proyectos</span>
          <div className="flex flex-col  sm:flex-row ml-5  text-lg gap-10 ">

            <PrivateComponent roleList={['ESTUDIANTE']}>
              <>
                <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium 
          border-gray-500  focus:outline-none hover:border-blue-800 border-b-4  transition duration-150 ${buttonEstudiante}`}
                  onClick={() => setViewOnlyStudent(true)}>
                  <i className="fas fa-check "></i> Mis Inscritos
                </button>
                <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium 
          border-gray-500   hover:border-blue-800 focus:outline-none border-b-4  transition duration-150 ${buttonTodos}`}
                  onClick={() => setViewOnlyStudent(false)}>
                  <i className="fas fa-clipboard-list "></i> Explorar Otros
                </button></></PrivateComponent>
            <PrivateComponent roleList={['ADMINISTRADOR']}> <>

              <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium text-gray-600 
          border-gray-600   hover:border-blue-800 focus:outline-none border-b-4 transition duration-150 ${buttonTodos2}`}
                onClick={() => setViewToApprove(false)}>
                <i className="fas fa-clipboard-list "></i> Ver Todos
              </button>
              <button className={` py-4 px-6 block hover:text-blue-800 focus:outline-none pb-8  font-medium text-gray-600 
          border-gray-600  focus:outline-none hover:border-blue-800 border-b-4 transition duration-150 ${buttonToApprove}`} onClick={() => setViewToApprove(true)}>
                <i className="fas fa-info-circle w-auto" ></i> Sin Aprobar
              </button></></PrivateComponent>
          </div>
          <div className="flex flex-row ml-2">
            <div className="flex flex-row  flex-center">

              <div className="  flex justify-center items-center px-2 sm:px-4 ml-14">
                {
                  <div className="relative">

                    <input type="text" className="h-12 w-72 pr-8 pl-5  border-gray-200 rounded-2xl z-0 focus:shadow focus:outline-none"
                      value={searchBy} onChange={(e) => setSearchBy(e.target.value)} placeholder="Buscar por nombre o id proyecto" />
                    <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                  </div>}

              </div>
              {
                <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-4 ml-2">
                  <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                    <select value={sortBy} onChange={(e) => setSortedBy(e.target.value)} className="disabled:bg-opacity-0 h-10 w-48 pr-8 pl-5 text-lg 
                  text-gray-600 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-200" >


                      <option className="text-gray-700" value="older">Más antiguos</option>
                      <option className="text-gray-700" value="recent">Más recientes </option>

                    </select>
                  </div>
                </div>}
            </div>

          </div>

        </div>
        {/* <div className="h-10  text-ms ml-5  w-60 font-light text-gray-400  pt-6  ">
                    <span className="h-6  ">
                      if(rol=="LIDER")Mostrando {filteredListLider.length} Proyectos</span>
                </div> */}
        <div className="flex flex-auto mb-6   overflow-y-scroll justify-center align-center ">
          <div className="flex-auto px-6  grid lg:grid-cols-4 mg:grid-cols-2 sd:grid-cols-1 pt-8  m
                t-0 gap-y-8  gap-x-8
                 pt-2 align-center justify-center ">

            <PrivateComponent roleList={['ADMINISTRADOR']}>
              <> {!viewToApprove && filteredList != null && filteredList.map((project_info) => {
                return (
                  <ProjectCardInfo key={nanoid()} project_info={project_info} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
                );
              })}
                {viewToApprove && filteredList != null && filteredList.filter((el) => (el.estado === "INACTIVO" && el.fase === "NULO")).map((project_info) => {
                  return (
                    <ProjectCardInfo key={nanoid()} project_info={project_info} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
                  );
                })}  </></PrivateComponent>

            {/**For students view all projects and only enrolled */}

            <PrivateComponent roleList={['ESTUDIANTE']}>
              <>
                {viewOnlyStudent && filteredListStudent.length === 0 &&
                  <div className="rounded-2xl  ml-5 mt-10 bg-white h-48 flex flex-col">
                    <span className='ml-3 text-lg text-gray-500 my-4 font-bold '> Querido Estudiante,
                    </span>
                    <span className='ml-3 text-lg text-blue-600 '><br />NO TIENES PROYECTOS  <br />con inscripciones <br />aceptadas o vigentes.</span>

                  </div>}
                {viewOnlyStudent && filteredListStudent != null && filteredListStudent.map((project_info) => {
                  return (
                    <ProjectCardInfo key={nanoid()} project_info={project_info.proyecto}
                      setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit}
                      already_enrolled={already_enrolled}  ></ProjectCardInfo>
                  );
                })}

                {!viewOnlyStudent && filteredList != null && filteredList.map((project_info) => {
                  return (
                    <ProjectCardInfo key={project_info._id} project_info={project_info} setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
                  );
                })}

              </></PrivateComponent>


            <PrivateComponent roleList={['LIDER']}>
              <>
                {dataLider && filteredListLider != null && filteredListLider.map((project_info) => {
                  return (
                    <ProjectCardInfo key={nanoid()} project_info={project_info} setOpenModalEnroll={setOpenModalEnroll} setOpenModalEdit={setOpenModalEdit} ></ProjectCardInfo>
                  );
                })}
              </></PrivateComponent>


          </div>


        </div>


      </div>
    </PrivateRoute>

  )
}

export default ProjectsList
