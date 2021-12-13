import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client';
import { GET_USUARIOS} from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';
import ModalAutorizarUsuario from 'components/ModalAutorizarUsuario'
import PrivateRoute from 'components/PrivateRoute';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';
import { useUser } from 'context/userContext';

const UsersDashboard = () => {

  const { data, error, loading } =  useQuery(GET_USUARIOS);

  const [openModal, setOpenModal] = useState(false);
  const [idUsuario, setIDUsuario] = useState('');
  
  const [lista, setLista] = useState([]);
  const [listFiltered, setListFiltered] = useState([]);
  const [searchBy, setSearchBy] = useState("");
 
  const [sortBy, setSortedBy]=useState("older");

  const { userData } = useUser();

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);
  useEffect(() => {
    if (!loading && data) {

        setLista(data.Usuarios);
        setListFiltered(data.Usuarios);

    }
}, [data]);
  useEffect(() => {
    if (!loading && lista) {
        setListFiltered(
            lista.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(searchBy.toLowerCase());
            })
        );
    }

}, [searchBy, lista]);

useEffect(() => {

    if(listFiltered!==null){

    const lista1= listFiltered.slice(0).reverse();
 
    setListFiltered(lista1);  
  }      

}, [sortBy]);
  if (loading) return <div>Cargando....</div>;

  return (

  <PrivateRoute roleList={['ADMINISTRADOR','LIDER']} stateUser={'AUTORIZADO'}>
    <div className="w-full h-full flex flex-col overflow-y-hidden " >
    <div className="relative h-16 flex flex-row bg-gray-100 w-full justify-start mt-6">
        <span className="text-lg text-blue-800 text-3xl ml-8  font-bold">Usuarios</span>
    </div>
  
  <div className="flex flex-row  ml-0 justify-start">
                <div className="  flex justify-center items-center px-2 sm:px-4 lg:px-10">
                    <div className="relative"> <input type="text" className="h-12 w-72 pr-8 pl-5   rounded-2xl z-0 focus:shadow focus:outline-none"
                                value={searchBy} onChange={(e) => setSearchBy(e.target.value)} placeholder="Buscar por " />
                        <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                    </div>
                </div>


                <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                    <select   value={sortBy} onChange={(e) => setSortedBy(e.target.value)} className="disabled:bg-opacity-0 h-10 w-72 pr-8 pl-5 text-lg text-gray-400 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" >
                           
                            
                           <option className="text-gray-400" value="older">Registros Más antiguos</option>
                           <option className="text-gray-400" value="recent">Registros Más recientes </option>
                       
                       </select>
                    </div>
                </div>

                <div className="flex flex-rows-2 align-center ml-40   ">
                <div className="h-10  text-ms   w-60 font-light text-gray-400  pt-10  ">
                    <span className="h-6 mb-4 ">Mostrando {listFiltered!=null ? listFiltered.length :0  } Usuarios</span>
                </div>
               
            </div>
               
            </div>

            <div className="flex w-full h-full items-start justify-center align-center mt-8 pl-10 pr-10 overflow-x-auto overflow-y-scroll"> 
                
                <table className='tabla'>
                  <thead>
                    <th >Nombre</th>
                    <th >Apellido</th>
                    <th >Identificación</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Autorizar</th>
                  </thead>
                  <tbody>
                  {data &&
                    listFiltered.map((u) => {
                      return(
                      <tr key={u._id}>
                        <td>{u.nombre}</td>
                        <td>{u.apellido}</td>
                        <td>{u.identificacion}</td>
                        <td>{u.correo}</td>
                        <td>{Enum_Rol[u.rol]}</td>
                        <td>{Enum_EstadoUsuario[u.estado]}</td>

                      
                            <td> 
                            {u.estado !=="AUTORIZADO" && userData.rol=="LIDER" && <>
                            <i onClick={() => {
                              setIDUsuario(u._id) 
                              setOpenModal(true)} 
                            }className='fas fa-pen text-yellow-600 justify pl-7 hover:text-yellow-400 cursor-pointer' />
                            
                             {
                                  openModal && <ModalAutorizarUsuario setOpenModal={setOpenModal} _id={idUsuario}></ModalAutorizarUsuario>
                                  
                              }                          
                          </>}</td>      

                          { userData.rol=="ADMINISTRADOR" &&
                        <td> 
                          <i onClick={() => {
                            setIDUsuario(u._id) 
                            setOpenModal(true)} 
                          }className='fas fa-pen text-yellow-600 justify  hover:text-yellow-400 cursor-pointer' />
                          
                           {
                                openModal && <ModalAutorizarUsuario setOpenModal={setOpenModal} _id={idUsuario}></ModalAutorizarUsuario>
                                
                            }                          
                        </td>     }             
                    </tr>
                     
                      )  
                    })}
                  </tbody>
                  
                </table>
            </div>
    </div>
   </PrivateRoute>
  )
}


export default UsersDashboard;
