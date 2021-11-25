import React from 'react'
import { useState,useEffect } from 'react';
import New_date from 'components/New_date';
import { useParams } from 'react-router';
import Info from './Info';
import { NavLink } from 'react-router-dom';
import { useProject } from 'context/projectContext';
import ProjectNavbar from 'components/ProjectNavbar';
const Project = () => {
    
    
  const {actualProject, setActualProject}= useProject();
  
    
    return (
        <div className="w-full h-full overflow-y-hidden">
         <ProjectNavbar _id_project={actualProject._id}/>
            <Info id_project={actualProject._id}/>
            
           <span>{actualProject._id}</span>
            
        </div>
    )
}

export default Project
