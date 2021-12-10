import Title_page from 'components/Title_page';
import React from 'react';
import PrivateRoute from 'components/PrivateRoute';

const Index = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden " >
      <PrivateRoute roleList={['ADMINISTRADOR','LIDER','ESTUDIANTE']} stateUser={'AUTORIZADO'}>
        <Title_page title={"Inicio"}  returns ={false} return_to={"/"}></Title_page>
      </PrivateRoute>
        </div>
  );
};

export default Index;
