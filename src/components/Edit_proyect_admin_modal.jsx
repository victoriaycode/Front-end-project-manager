
import React from 'react'
import Toggle from './Toggle'

const Edit_proyect_admin_modal = ({project_id,setOpenModalEdit}) => {

  const Edit_Project_box = () => {

    return (
        
       
        <div className="w-full h-full overflow-y-hidden ">
            
            <div className="w-full h-full px-20  ">
                {/*
                <div className="bg-gray-100 flex flex-col  w-full py-2 align-center rounded-2xl my-1 flex flex-row gap-2 border-solid border-2 border-gray-300">
                <div className="w-full py-2 px-4 flex flex-row "><span className="text-gray-500 text text-lg font-medium mt-4">
                        Proyecto :
                        </span> <input disabled type="text" className="h-10 w-3/6 mx-5 px-10 mt-1 rounded-2xl z-0 focus:outline-none bg-white border-2 border-gray-300"
                                    placeholder="proyecto nombre" />
                    </div>
                    <div className="flex flex-row w-full text-sm ">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500   font-medium mt-4">
                                     Lider:
                                </span> 
                            </div>
                            
                            <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500   font-medium mt-4">
                                    Presupuesto :
                                </span> 
                            </div>
                            
                        </div>

                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500   font-medium mt-4">
                                    Fecha inicio :
                                </span>
                            </div>
                            
                        </div>
                          
                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500   font-medium mt-4">
                                    Fecha Fin :
                                </span> 
                            </div>
                            
                        </div>
                        </div>
                        
                </div>*/}

                <div className="  w-full mt-4 py-2 px-4  grid align-center justify-center  rounded-2xl my-1 flex flex-col gap-2 border-solid border-2 border-gray-300">
                        <div className="flex flex-col w-full align-center ">
                            
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500 text  font-medium mt-4">
                                    Estado:
                                </span> 
                                <div className="  flex justify-center items-center px-4 sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-50 pr-8 pl-5 text-lg text-gray-500 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-300 border-2" defaultValue="alfabetic">
                            <option  className="text-gray-400" value="alfabetic" >Activo</option>
                            <option className="text-gray-400" value="recent">Inactivo </option>
                            <option  className="text-gray-400" value="alfabetic" >Pendiente</option>
                        </select>
                    </div>
                </div>
                            </div>
                            <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Fase :
                                </span> <div className="flex flex-rows-2 relative align-center justify-center  bg-white rounded-2xl ">
                        <select className="h-10 w-50  ml-5 px-8 pl-5 text-lg text-gray-500 rounded-2xl z-0 focus:shadow focus:outline-none border-gray-300 border-2" defaultValue="">
                            <option  className="text-gray-400" value="En desarrollo" >En desarrollo</option>
                            <option className="text-gray-400" value="Terminado">Terminado </option>
                            <option  className="text-gray-400" value="Nulo" >Nulo</option>
                        </select>
                    </div>
                            </div>
                        </div>

                       
                          

                        </div>
                      
                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-sm font-semibold ">
                                    Se editará el proyecto  a Estado :
                                    <span className="px-2 text-blue-500 text-sm ">INACTIVO</span> Fase: <span className="px-2 text-blue-500 text-sm">SIN FASE</span> </span>

                            </div>

                        </div>
                    </div>

            </div>





        </div>
   
    )
}
  
  
    return (
    
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
       
        <div className="bg-white rounded shadow-lg w-3/6 ">
      
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg text-blue-800">Editar Proyecto  <span className="text-gray-800 font-bold"> # {project_id} : proyecto nombre</span></h3>
            <button className="text-black hover:text-blue-700" onClick={()=>setOpenModalEdit(false)}><i class="far fa-times-circle fa-2x"></i></button>
          </div>
        
          <div className="p-3">
          <Edit_Project_box></Edit_Project_box>
          </div>
          <div className="flex justify-center items-center w-100 border-t p-3">
           
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Guardar</button>
            <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-8" onClick={()=>setOpenModalEdit(false)}>Cancelar</button>
          </div>
        </div>
      </div>
     
)
}

export default Edit_proyect_admin_modal
