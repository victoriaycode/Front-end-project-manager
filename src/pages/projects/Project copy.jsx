import React from 'react'
import { useState,useEffect } from 'react';
import New_date from 'components/New_date';
import { useParams } from 'react-router';
import ProjectNavbar from 'components/ProjectNavbar';
import Info from './Info';
const Project = () => {

    const {_id}=useParams();
    return (
        <div className="w-full h-full overflow-y-hidden">
         <ProjectNavbar _id_project={_id}/>
            <Info _id_project={_id}/>
            
           <span>{_id}</span>
            
        </div>
    )
}

export default Project
