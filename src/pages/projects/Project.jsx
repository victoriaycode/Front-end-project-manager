import ProjectNavbar from 'components/ProjectNavbar'
import React from 'react'
import Information from './Information'

const Project = () => {
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden">
    <ProjectNavbar></ProjectNavbar>
       <Information></Information>
        </div>
    
    )
}

export default Project
