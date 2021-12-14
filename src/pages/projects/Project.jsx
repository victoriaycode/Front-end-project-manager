import React from 'react'
import { useState,useEffect } from 'react';


import ProjectNavbar from 'components/ProjectNavbar';
import Info from './Info';
const Project = () => {


    return (
        <div className="w-full h-full overflow-y-hidden">
         <ProjectNavbar/>
            <Info/>
            
        </div>
    )
}

export default Project
