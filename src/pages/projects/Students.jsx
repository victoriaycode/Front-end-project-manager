import ProjectNavbar from 'components/ProjectNavbar'
import Search_input from 'components/Search_input'
import React from 'react'
import { useState ,useEffect} from 'react'
import { nanoid } from 'nanoid';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { FILTRAR_INSCRIPCIONES_PROYECTO } from 'graphql/inscripciones/queries';

const Students = () => {

    const { _id } = useParams();
    const idProyecto=_id;
    const [studentsList, setStudentsList]=useState();
    const [searchBy, setSearchBy]= useState();
    const { data,  error, loading, refetch } = useQuery(FILTRAR_INSCRIPCIONES_PROYECTO, {
        variables: {
            idProyecto
        },
    });
    useEffect(() => {
        if (!loading) {
            
            setStudentsList(data.filtrarInscripcionesPorProyecto);
            console.log("asda",studentsList);
            console.log("data",data);
        }
    }, [data]);

    const students_list = [ 
 
    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },
    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },

    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },

    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },
    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },

    {"identificacion":"23231232","nombre": "Camilo Fausto", "correo": "camilofausto1@gmail.com", "estado": "No Aprobado" },


    ]

    const [editable, setEditable] = useState(false)

    const RowStudentInfo = ({ enroll }) => {
        return (
            <tr className="hover:bg-gray-100">
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {enroll.estudiante.identificacion}
                </td>
                <td className="border-t-0 px-6   align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blue-800 
          font-medium   ">
                    {enroll.estudiante.nombre}  {enroll.estudiante.apellido}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {enroll.estudiante.correo}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                    {enroll.fechaIngreso}
                </td>
                {/* {
                    editable ? (<>
                   <td>
                       <Toggle></Toggle>
                   </td>

                    </>) : (<>
                        <td className="border-t-0 px-6  align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-2 ">
                            {student.estado} </td>
                    </>)
                } */}


                <td>

                </td>




            </tr>
        )
    }
    if (loading) return <div>Cargando....</div>;

    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >

        <ProjectNavbar _idActual={_id} nombreProject={_id} 
        rutaRetorno={'/proyectos'}/>
   
            <div className="w-full h-full flex flex-col overflow-y-hidden " >
            <div className="flex flex-row  ml-0 justify-start mt-8">
            <div className="  flex justify-center items-center px-2 sm:px-4 ml-14">
        
        <div className="relative"> 
       
        <input type="text" className="h-12 w-72 pr-8 pl-5   rounded-2xl z-0 focus:shadow focus:outline-none"
          value={searchBy}onChange={(e) => setSearchBy(e.target.value)}  placeholder="Buscar por nombre proyecto" />
            <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
        </div>

    </div>
          
                </div>
               
                <div className="h-full w-ful px-0 px-5 ">
                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center ">
                                <div className="relative w-full px-2 max-w-full flex-grow flex-1   ">
                                    <h3 className="font-semibold text-base text-gray-500">Mostrando {students_list.length}  estudiantes en el proyecto </h3>
                                
                                </div>
                                {/* {editable ? (<button onClick={() => setEditable(!editable)} className="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 ">Guardar</button>) : 
                 (<button onClick={() => setEditable(!editable)} className="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 ">Editar</button>)} */}

                            </div>
                        </div>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    
                     
                        <div className=" w-full  h-96  overflow-x-auto overflow-y-scroll ">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead   >
                                    <tr>
                                        
                                    <th className=" sticky  top-0 px-6  bg-blue-50 text-blueGray-500 align-middle  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Identificacion
                                        </th>
                                        <th className=" sticky w-auto top-0 px-6  bg-blue-50  text-blueGray-500 align-middle  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Estudiante
                                        </th>

                                        <th className="sticky top-0 px-6  bg-blue-50  text-blueGray-500 align-middle py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Correo
                                        </th>
                                        <th className=" sticky top-0 z-30 px-6  bg-blue-50  text-blueGray-500 align-middle  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Fecha Ingreso
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {data.filtrarInscripcionesPorProyecto.map((enroll) => {
                                        return (
                                            <RowStudentInfo key={nanoid()} enroll={enroll} />
                                        );
                                    })}
                                </tbody>

                            </table>
                        </div></div>
                    </div>
                </div>
            </div>
        
        </div>

    )
}

export default Students
