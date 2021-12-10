import Title_page from 'components/Title_page';
import React from 'react';
import PrivateRoute from 'components/PrivateRoute';
import { useUser } from 'context/userContext';

const Index = () => {
  const { userData } = useUser();
  const name= userData.nombre +" "+userData.apellido;
  const role= userData.rol;
  const estado= userData.estado;
  const date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    let day = date.toLocaleDateString("es-US", options);
  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden " >
      <PrivateRoute roleList={['ADMINISTRADOR','LIDER','ESTUDIANTE']} >
        
        <Title_page title={"Inicio"}  returns ={false} return_to={"/"}></Title_page>
        <div className="w-full h-auto flex flex-col mt-10 pl-10 ">
        <span className='text-blue-800 text-4xl '>Bienvenido,      
           <span className='text-blue-500 font-bold mt-5 text-3xl ml-5'> {name}</span> </span>
       
           <span className='text-gray-500 text-xl mt-5 font-semibold'> Rol: {role}</span>
          <span className='text-gray-800 text-lg italic mt-2'> Sesión: {day}</span>
        
          {!estado==="AUTORIZADO" && 
          <div>
           <span className='text-blue-400 text-3xl font-bold mt-8 '> NO ESTÁS AUTORIZADO AÚN</span> 
         <span className='text-gray-800 text-lg italic mt-2'> Intenta más tarde. </span>
        </div>} 
        </div>
     
      
      </PrivateRoute>
        </div>
  );
};

export default Index;
