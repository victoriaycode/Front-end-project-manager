import ProjectNavbar from 'components/ProjectNavbar'
import Search_input from 'components/Search_input'
import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid';
import Toggle from 'components/Toggle';
import { useParams } from 'react-router';

const Students = () => {

    const { _id } = useParams();

    const students_list = [ 
 
    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },
    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },

    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },

    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },
    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },

    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },


    ]

    const [editable, setEditable] = useState(false)

    const RowStudentInfo = ({ student }) => {
        return (
            <tr className="hover:bg-gray-100">
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {student.identificacion}
                </td>
                <td className="border-t-0 px-6   align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blue-800 
          font-medium   ">
                    {student.nombre}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {student.correo}
                </td>

                {
                    editable ? (<>
                   <td>
                       <Toggle></Toggle>
                   </td>

                    </>) : (<>
                        <td className="border-t-0 px-6  align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-2 ">
                            {student.estado} </td>
                    </>)
                }


                <td>

                </td>




            </tr>
        )
    }

    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >

        <ProjectNavbar _idActual={_id}/>
   
            <div className="w-full h-full flex flex-col overflow-y-hidden " >
            <div className="flex flex-row  ml-0 justify-start mt-8">
              <Search_input></Search_input>
              <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-50 pr-8 pl-5 text-lg text-gray-400 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" defaultValue="alfabetic">
                            <option  className="text-gray-400" value="alfabetic" > Ordenar por A-Z</option>
                            <option className="text-gray-400" value="recent">Más recientes </option>
                            <option className="text-gray-400" value="older">Más antiguos</option>
                        
                        </select>
                    </div>
                </div>
                </div>
               
                <div className="h-full w-ful px-0 px-5 ">
                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0 bg-white">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-2 max-w-full flex-grow flex-1 ">
                                    <h3 className="font-light text-sm text-gray-500 italic">Mostrando {students_list.length} solicitudes de  estudiantes </h3>
                                
                                </div>
                                {editable ? (<button onClick={() => setEditable(!editable)} className="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 ">Guardar</button>) : 
                 (<button onClick={() => setEditable(!editable)} className="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 ">Editar</button>)}

                            </div>
                        </div>
                     
                        <div className=" w-full  h-96  overflow-x-auto overflow-y-scroll ">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead   >
                                    <tr>
                                        
                                    <th className=" sticky  top-0 px-6 bg-gray-200 text-blueGray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Identificacion
                                        </th>
                                        <th className=" sticky w-auto top-0 px-6 bg-gray-200 text-blueGray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Estudiante
                                        </th>

                                        <th className="sticky top-0 px-6 bg-gray-200 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Correo
                                        </th>
                                        <th className=" sticky top-0 z-30 px-6 bg-gray-200 text-blueGray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Estado
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {students_list.map((student) => {
                                        return (
                                            <RowStudentInfo key={nanoid()} student={student} />
                                        );
                                    })}
                                </tbody>

                            </table>
                        </div></div>
                    </div>
                </div>
            </div>
            <span>{_id}</span>
        </div>

    )
}

export default Students
