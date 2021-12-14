
import React from 'react'
import Toggle from './Toggle'

const Info_student_modal = () => {

    const Student_info = () => {

        return (


            <div className="w-full h-full overflow-y-hidden ">

                <div className="w-full h-full px-20  ">

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

                    </div>

                    <div className="bg-gray-100  w-full mt-4 py-2 px-4  grid align-center justify-center  rounded-2xl my-1 flex flex-col gap-2 border-solid border-2 border-gray-300">
                        <div className="flex flex-col w-full align-center ">
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Nombre completo:
                                    <span className="text-gray-500 pl-4  font-medium mt-4">
                                        Lorena Diaz
                                    </span>  </span>
                            </div>
                            <div className="w-full py-2 px-4 flex flex-row text-lg">
                                <span className="text-gray-500   font-medium mt-4">
                                    Correo completo:
                                    <span className="text-gray-500 pl-4  font-medium mt-4">
                                        Lorena Diaz
                                    </span>  </span>
                            </div>




                        </div>
                
                        <div className="flex flex-row w-full">
                            <div className="w-full py-2 px-4 flex flex-row ">
                                <span className="text-gray-500 text text-lg font-medium ">
                                    Se editará el proyecto  con estado :
                                    <span className="px-5 text-blue-500 text-xl">Inactivo</span>  y  fase: <span className="px-5 text-blue-500 text-xl">sin fase.</span> </span>

                            </div>

                        </div>
                    </div>

                </div>





            </div>

        )
    }


    return (

        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">

            <div className="bg-white rounded shadow-lg w-4/6 ">

                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Editar Proyecto  <span className="text-blue-800 font-bold"> # {project_id}</span></h3>
                    <button className="text-black hover:text-blue-700" onClick={() => setOpenModalEdit(false)}><i class="far fa-times-circle fa-2x"></i></button>
                </div>

                <div className="p-3">
                    <Student_info />
                </div>
                <div className="flex justify-center items-center w-100 border-t p-3">

                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Guardar</button>
                    <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-8" onClick={() => setOpenModalEdit(false)}>Cancelar</button>
                </div>
            </div>
        </div>

    )
}

export default Info_student_modal
