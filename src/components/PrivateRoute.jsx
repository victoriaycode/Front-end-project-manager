import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, stateUser, children }) => {
  const { userData } = useUser();
  
  console.log('userData: ',userData)

  if (roleList.includes(userData.rol) && stateUser.includes(userData.estado)) {
    console.log('roleList: ',roleList)
    console.log('Estado: ',stateUser)
    return children;
    
  }else if(roleList.includes(userData.rol) && userData.estado ==='NO_AUTORIZADO'){
    return <div className='fixed top-1/3 right-1/4 ml-8'>
              <div className='flex flex-col w-full ml-32 h-52 bg-transparent text-5xl text-blue-700 items-center justify-center rounded-md border-2'>
                <i className="fas fa-lock"></i>
                En espera de autorización de administrador...     
                
              </div>
           </div>;
              
  }

  return <div className='text-9xl text-blue-500 '>No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;