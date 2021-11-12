import ProjectCard from 'components/ProjectCard'
import React from 'react'

const ProjectDashboard = () => {
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
            <div className="relative h-16 flex flex-row bg-gray-100 w-full justify-start mt-6">
                <span className="text-lg text-blue-800 text-3xl ml-8  font-bold">Proyectos</span>

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
                    <span className="h-6 mb-4 ">Mostrando 1-8 de 7 Projectos</span>
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
          
            <div className="flex overflow-y-scroll ">

                <div className="flex-auto grid lg:grid-cols-4 mg:grid-cols-2 sd:grid-cols-1 pt-8 mt-0 gap-y-10 gap-x-5 md:pl-14  pt-2 align-center justify-center ">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </div>

                
            </div>
            <div className="flex flex-row align-center justify-end mr-8">
            
            <div className="flex flex-row w-full justify-end align-center mr-20 ">
                <button class="p-2 pl-5 pr-5 absolute top-5 right-30 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300">Nuevo</button></div>
        </div>

        </div>


    )
}

export default ProjectDashboard
