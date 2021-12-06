import { useQuery } from '@apollo/client';
import RowObjective from 'components/RowObjective'
import { GET_PROJECT_INFO } from 'graphql/proyectos/queries';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

const Info = () => {
    
    const { _id } = useParams();
    const [objectives_list, setObjectivesList] = useState([]);
    const [editObjective, setEditObjective]=useState(false);
    
    const { data: infoProject, error, loading } = useQuery(GET_PROJECT_INFO, {
        variables: {
            _id
        },
    });
    
    useEffect(() => {
        console.log('data Proyecto', infoProject);
        if (!loading && infoProject != null) {

            let proj = infoProject.filtrarProyecto;
           
            setObjectivesList(proj.objetivos);
        //    let nom=  actualProject.lider.nombre + ""+ actualProject.lider.apellido;
        //    setNomCompletoLider(nom);
        }
    }, [infoProject]);
    
    if (loading) return <div>Cargando....</div>;
    return (
        <div className="w-full h-full overflow-y-hidden">
             <div className=" h-full flex flex-row ">
             <div className="bg-white  py-2 px-4 align-center rounded-2xl my-1 flex flex-col
              gap-2 border-solid border-2 border-gray-300">
                    
                    <div className="mt-10 m-2">
      
      <span className="px-8 rounded-r-lg bg-blue-800  text-white  font-bold p-3 uppercase border-blue-800 border-t border-2">
      <i class="fas fa-folder fa-lg"></i> Proyecto</span>
      <span className="px-8 rounded-r-lg bg-gray-100  text-blue-800 font-bold p-3  uppercase border-blue-500 border-t border-b   border-r">
          {infoProject.filtrarProyecto.nombre}</span>
         
   
</div>
<div className="m-2 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">ID PROYECTO</span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto._id}</span>
   
</div>
<div className="m-2 mt-4 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
      <i class="far fa-user-circle fa-lg"></i> Lider</span>
      <span className="px-8 rounded-r-lg bg-white w-full  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.lider.nombre} {infoProject.filtrarProyecto.lider.apellido}</span>
   
</div>
<div className="m-2 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">ID Lider</span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.lider.identificacion}</span>
   
</div>

<div className="m-2 mt-8 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
     PRESUPUESTO <i class="fas fa-funnel-dollar fa-lg"></i></span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
          $ {infoProject.filtrarProyecto.presupuesto}</span>
   
</div>
<div className="m-2 mt-8 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
      <i class="far fa-calendar"></i> ESTADO</span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.estado}</span>
   
</div>
<div className="m-2 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
      <i class="fas fa-tachometer-alt"></i>FASE</span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.fase}</span>
   
</div>
<div className="m-2 mt-8">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
      <i class="far fa-calendar-alt fa-lg "></i>  FECHA CREACIÓN</span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.fechaCreacion!="" ?(infoProject.filtrarProyecto.fechaCreacion):("SIN FECHA AÚN") }  </span>

   
</div>
<div className="m-2 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
      <i class="far fa-calendar-alt fa-lg "></i> FECHA INICIO</span>
      <span className="px-8 rounded-r-lg bg-white w-20  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.fechaInicio!=null ?(infoProject.filtrarProyecto.fechaInicio):("SIN FECHA AÚN") }  </span>

   
</div>
<div className="m-2 ">
      
      <span className="px-8 rounded-r-lg bg-white-100  text-blue-800 font-bold p-2 uppercase border-blue-300 border-t border-2">
      <i class="far fa-calendar-alt fa-lg "></i> FECHA TERMINACIÓN</span>
      <span className="px-8 rounded-r-lg bg-white w-40  text-blue-800 font-bold p-2 uppercase border-blue-500 border-t border-b  border-r">
      {infoProject.filtrarProyecto.fechaFin!=null ?(infoProject.filtrarProyecto.fechaFin):("SIN FECHA AÚN") }  </span>
   
</div>
                </div>
                
                <div className="bg-white flex-auto py-2 px-4 align-center rounded-2xl my-1 flex flex-col
              gap-2 border-solid border-2 border-gray-300">
                ssdadq
                <ul id="lista_obj"  className="list-decimal  h-full mt-5 py-2 px-6 border-t-2 
                            border-blue-200 pl-10 pr-8">

                                {infoProject  && objectives_list.map((objetivo) => {
                                    return (<RowObjective key={nanoid()} editEnable={editObjective} datarow={objetivo} />);
                                })}
                            </ul>
               </div>
             </div>
            
        </div>
    )
}

export default Info
