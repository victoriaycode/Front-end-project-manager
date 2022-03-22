
import React from 'react'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { LIST_ADVANCES_OF_PROJECT } from 'graphql/avances/queries';
import { NavLink } from 'react-router-dom';
import PrivateComponent from 'components/PrivateComponent';
import moment from "moment";
import 'moment/locale/es';
import { TextareaAutosize } from '@material-ui/core';

const TableAdvances = ({ idProject, setModal, activeProject, finishedProject, setNumAdvances, openNewAdvanceModal }) => {

    const { _id } = useParams();
    const idProyecto = _id;

    const [listAdvances, setAdvancesList] = useState();

    const [AdListFiltered, setAdListFiltered] = useState([]);
    const [searchBy, setSearchBy] = useState("");

    const [sortBy, setSortedBy] = useState("older");

    const { data: datalist, error: errorlist, loading: loadinglist, refetch } = useQuery(LIST_ADVANCES_OF_PROJECT, {
        variables: {
            idProject
        },
    });


    useEffect(() => {
        if (!loadinglist && datalist) {

            setAdvancesList(datalist.filtrarAvance);
            setAdListFiltered(datalist.filtrarAvance);


            setNumAdvances(datalist.filtrarAvance.length);

        }
    }, [datalist]);
    useEffect(() => {
        if (!loadinglist && listAdvances) {
            setAdListFiltered(
                listAdvances.filter((elemento) => {
                    return JSON.stringify(elemento).toLowerCase().includes(searchBy.toLowerCase());
                })
            );
        }

    }, [searchBy, listAdvances]);

    useEffect(() => {
       
        if (AdListFiltered !== null) {


            const lista = AdListFiltered.slice(0).reverse();
            setAdListFiltered(lista);
        }

    }, [sortBy]);

    useEffect(() => {
        refetch()
    }, [openNewAdvanceModal]);
    
    const AdvanceCard = ({enroll}) => {
        return (
            <div className="flex flex-col h-36 rounded-2xl transform transition duration-200  shadow-xl    hover:scale-110 ">
              <NavLink to={`/proyectos/proyecto/avances/n/${idProject}/${enroll._id}`}>
            
              <div className="flex flex-row gap-2 justify-center    px-4 py-2  align-center bg-blue-600 hover:bg-blue-800">
              <span className='text-yellow-300'><i className="fas fa-paperclip fa-lg"></i></span>
                <p className="text-base text-white -w30 truncate font-mono text-center pb-1 font-bold   ">{enroll.titulo} </p>
                </div>
              </NavLink>
                
            <div className="flex flex-col   bg-white  p-2   ">
           <p className="bg-blue-50 px-2 py-4 truncate text-sm "  disabled>
               {enroll.descripcion}
           </p>
            <div className='border-t-2 flex-row mt-2 text-center'>
            <span className='text-xs text-blue-800'>Por: {enroll.creadoPor.nombre}     {enroll.creadoPor.apellido}</span>
            <span className='text-xs ml-4 italic truncate'>    {moment(enroll.fecha).format('DD/MM/YY hh:mm a')}</span>
            </div>
            
            </div>
            </div>
        )
    }
    const RowAdvance = ({ enroll }) => {
        return (
            <tr className="hover:bg-gray-100">

                <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pr-1 ">
                    {enroll._id}
                </td>
                <NavLink to={`/proyectos/proyecto/avances/n/${idProject}/${enroll._id}`}>
                    <td className="border-t-0  align-middle border-l-0 border-r-0 text-base whitespace-nowrap py-2 px-2 text-left text-blue-800 
      hover:text-blue-400 cursor-pointer font-medium hover:font-light  ">
                        <p className='w-80 truncate'>{enroll.titulo}</p>
                    </td></NavLink>

                <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {enroll.creadoPor.nombre}     {enroll.creadoPor.apellido}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {moment(enroll.fecha).format('DD/MM/YY hh:mm a')}
                </td>
          


                <td>

                </td>




            </tr>
        )
    }
    if (loadinglist) return <div>Cargando....</div>;

    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden px-10" >


            <div className="w-full h-full flex flex-col overflow-y-hidden " >
                <div className="flex flex-row  ml-0 justify-start mt-4">
                    <div className="  flex justify-center items-center px-2 sm:px-4 ">

                        <div className="relative">

                            <input type="text" className="h-10 w-72 px-5  rounded-2xl z-0 focus:shadow focus:outline-none"
                                value={searchBy} onChange={(e) => setSearchBy(e.target.value)} placeholder="Buscar por titulo avance" />
                            <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                            </div>
                        </div>

                    </div>
                    <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                        <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                            <select value={sortBy} onChange={(e) => setSortedBy(e.target.value)} className="disabled:bg-opacity-0 h-10 w-48 pr-8 pl-5 text-lg text-gray-400 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" >


                                <option className="text-gray-400" value="older">Más antiguos</option>
                                <option className="text-gray-400" value="recent">Más recientes </option>

                            </select>
                        </div>
                    </div>
                </div>

                <div className="h-full w-ful  px-5 ">
                    <div className="w-full xl:w-12/12 mb-4 xl:mb-0 px-2 mx-auto ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center ">
                                <div className="relative w-full px-2 max-w-full flex-grow flex-1   ">
                                    <h3 className="font-semibold text-base text-gray-500">Mostrando {listAdvances && listAdvances.length}  avances en el proyecto </h3>

                                </div>
                                <PrivateComponent roleList={['ESTUDIANTE']}>
                                    {/* { infoProject && infoProject.filtrarProyecto.estado==="ACTIVO" && <> */}
                                    {activeProject && <><button className="p-2 px-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-800  rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-base font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 "
                                        onClick={() => { setModal(true) }}>Nuevo Avance</button></>}
                                </PrivateComponent>
                                {!activeProject && <span className='ml-2 text-blue-800 p-2 font-semibold bg-gray-200 ' >NOTA: NO se pueden agregar  avances en el momento.
                                    El proyecto está INACTIVO. </span>}
                                {!activeProject && finishedProject && <span className='ml-2 text-blue-800 p-2 font-semibold bg-gray-200 ' >NOTA: NO se pueden agregar  avances en el momento.
                                    El proyecto está TERMINADO. </span>}
                            </div>
                        </div>
              
                          <div className="relative flex flex-col min-w-0 break-words  w-full  mb-6  rounded ">
                        <div className="flex flex-auto   pt-2 justify-center align-center w-full    overflow-x-auto overflow-y-scroll ">
          <div className="flex-auto px-6  grid lg:grid-cols-4 mg:grid-cols-2 sd:grid-cols-1
                t-0 gap-x-8 gap-y-10
                 pb-2 align-center justify-center ">
                    {AdListFiltered.map((enroll) => {
                                            return (
                                                <AdvanceCard key={nanoid()} enroll={enroll} />
                                            );
                                        })}
                     </div></div>
                     </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TableAdvances