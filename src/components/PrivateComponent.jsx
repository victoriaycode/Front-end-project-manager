import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol) 
  // && stateUser.includes(userData.estado)
   ) {
    return children;

  } 

  return <></>;
};

export default PrivateComponent;