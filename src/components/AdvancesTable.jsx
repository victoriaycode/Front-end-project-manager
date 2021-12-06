
import React from 'react'
import { NavLink } from 'react-router-dom';
import New_date from './New_date';
import { LIST_ADVANCES_OF_PROJECT } from 'graphql/avances/queries'
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
const AdvancesTable = ({openNewAdvanceModal,setModal,idProject}) => {
  
 
    const filtrarAvanceId= idProject;
    const { data, error, loading ,refetch} = useQuery(LIST_ADVANCES_OF_PROJECT,{variables:{
      filtrarAvanceId},});
      
    const [listAdvances,setListAdvances]=useState({});

     useEffect(() => {
      if(loading){
       
      console.log('data AVANCES PROYECTO', data);
      }else{
        setListAdvances(data.filtrarAvance);
        
      console.log('data AVANCES ', data.filtrarAvance);
      }
      console.log('data AVANCES PROYECTO', data);

      //console.log("LIST ",listAdvances)
    }, [loading,data]); 
 
      
  useEffect(() => {
   
    refetch()
    
  }, [openNewAdvanceModal]);
  
  useEffect(() => {
    if (data) {

      setListAdvances(data.filtrarAvance);
    }
  }, [data]);

    if (loading) return <div>Cargando....</div>;
   

        const numberAdvances = 3;
  const advanceInfos = {
    title: "advance about design and implementation of diferent structures to the page",
    description: "advance about......sdasdasssssssssssssssssssssssssdasssssssssssssssssssssssssssdasd.",
    student: "Gaby Montez",
   
  }

  const RowAdvanceInfo = ({advanceInfo}) => {
    return (
      <tr className="hover:bg-gray-100">
           <NavLink to={`/proyectos/proyecto/avances/n/${idProject}/${advanceInfo._id}`}>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blue-800 
      hover:text-blue-400 cursor-pointer font-medium hover:font-light  ">
       {advanceInfo.titulo}
        </td></NavLink>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 ">
          {advanceInfo.creadoPor.nombre}  {advanceInfo.creadoPor.apellido}
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {advanceInfo.fecha}
        </td>
        {/* <td><span>{`/proyectos/proyecto/avances/n/${idProject}/${advanceInfo._id}`}</span></td> */}
       {/**
        * <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <New_date></New_date> 
        </td>
        */}
       

      </tr>
    )
  }
  return (
    <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-10 mx-auto mt-10">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-gray-500 italic">Mostrando {data.filtrarAvance.length} avances en el proyecto </h3>
            </div>
            {/*<NavLink to={'/proyectos/proyecto/avances/nuevo'}>
            <button className="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 ">Nuevo Avance</button>
  </NavLink>*/}
   <button className="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-base font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 "onClick={()=>{setModal(true)}}>Nuevo Avance</button>
          </div>
        </div>

        <div className=" w-full  h-96 overflow-x-auto overflow-y-scroll">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="sticky top-0 px-6 bg-blue-50 text-blue-800 align-middle  py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Avance
                </th>

                <th className="sticky top-0 px-6 bg-blue-50 align-middle  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Hecho por
                </th>
                <th className="sticky top-0 px-6 bg-blue-50 align-middle py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Creado
                </th>
               {/**
                * 
                 <th className="sticky top-0 px-6 bg-gray-200 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Última modificación
                </th>*/}
              </tr>
            </thead>

            <tbody>
            {data.filtrarAvance!={} && data.filtrarAvance.map((avance) => {
              return (
                <RowAdvanceInfo advanceInfo={avance} />
              );
            })}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default AdvancesTable
