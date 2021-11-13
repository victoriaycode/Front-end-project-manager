
import ProjectNavbar from 'components/ProjectNavbar'
import AdvancesTable from 'components/AdvancesTable'
import React from 'react'

const AdvancesDashboard = () => {
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
   <ProjectNavbar/>
   <div className="flex flex-row  ml-0 justify-start mt-8">
                <div className="  flex justify-center items-center px-2 sm:px-4 lg:px-8">
                    <div className="relative"> <input type="text" className="h-12 w-96 pr-8 pl-5 rounded-2xl z-0 focus:shadow focus:outline-none"
                        placeholder="Search anything..." />
                        <div className="absolute top-3 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                    </div>
                </div>
                </div>
    <AdvancesTable></AdvancesTable>
    </div>
    )
}



export default AdvancesDashboard
