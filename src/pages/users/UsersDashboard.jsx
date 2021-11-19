
import React, {useEffect, useState, useRef} from 'react'
import Switch from 'components/switch'

const UsersDashboard = () => {

  const [estado, setEstado] = useState(false)
  const [textoEstado, setTextoEstado] = useState('Pendiente')

  useEffect(() => {  
    if (estado){
      setTextoEstado('Autorizado') 
    } else if(estado===false){
      setTextoEstado('No Autorizado') 
    }else{
      setTextoEstado('Pendiente') 
    }
}, [estado])  
  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden " >
  <div className="relative h-16 flex flex-row bg-gray-100 w-full justify-start mt-6">
      <span className="text-lg text-blue-800 text-3xl ml-8  font-bold">Usuarios</span>
  </div>
  
  <div className="flex flex-row  ml-0 justify-start">
                <div className="  flex justify-center items-center px-2 sm:px-4 lg:px-8">
                    <div className="relative"> <input type="text" className="h-12 w-96 pr-8 pl-5 rounded-2xl z-0 focus:shadow focus:outline-none"
                        placeholder="Search anything..." />
                        <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                    </div>
                </div>


                <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-50 pr-8 pl-5 text-lg text-gray-300 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-100" defaultValue="alfabetic">
                            <option  className="text-gray-400" value="alfabetic" >Sort by A-Z</option>
                            <option className="text-gray-400" value="recent">Más recientes </option>
                            <option className="text-gray-400" value="older">Más antiguos</option>
                            <option className="text-gray-400"value="most_worked">Más avances hechos</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-rows-2 align-center ml-40   ">
                <div className="h-10  text-ms   w-60 font-light text-gray-400  pt-10  ">
                    <span className="h-6 mb-4 ">Mostrando 20 Usuarios</span>
                </div>
                <div class="inline-flex mt-8 ">
                    <button class="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l  ">
                        Prev
                    </button>
                    <button class="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div>
            </div>
               
            </div>

            <div className="flex w-full h-full items-start justify-center align-center mt-8 pl-10 pr-10"> 
                
                <table className='tabla'>
                  <thead>
                    <th >Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Autorizar</th>
                  </thead>
                  <tbody>
                  <tr>
                      <td>Yeison Buitrago</td>
                      <td>yeison_buitragos@hotmail.com</td>

                      <td>Estudiante</td>
                      <td>{textoEstado}</td>
                      <td>
                           <Switch estado={estado} setEstado={setEstado}></Switch>
                          
                      </td>
                    </tr>

                    <tr>
                      <td>Laura Rojas</td>
                      <td>anadiaz99@gmail.com</td>

                      <td>Administrador</td>
                      <td>Pendiente</td>
                      <td><Switch ></Switch></td>
                    </tr>

                    <tr>
                      <td>Victoria Yuan</td>
                      <td>anadiaz99@gmail.com</td>

                      <td>Lider</td>
                      <td>Pendiente</td>
                      <td><Switch ></Switch></td>
                    </tr>

                    <tr>
                      <td>Felipe Sierra</td>
                      <td>anadiaz99@gmail.com</td>

                      <td>Lider</td>
                      <td>Pendiente</td>
                      <td><Switch ></Switch></td>
                    </tr>

                    <tr>
                      <td>Juan Diego Pineda</td>
                      <td>anadiaz99@gmail.com</td>

                      <td>Administrador</td>
                      <td>Pendiente</td>
                      <td><Switch ></Switch></td>
                    </tr>
                  </tbody>
                </table>
            </div>
  </div>
  )
}

export default UsersDashboard
