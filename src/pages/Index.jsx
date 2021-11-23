import Title_page from 'components/Title_page';
import React from 'react';

const Index = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden " >
       <Title_page title={"Inicio"}  returns ={false} return_to={"/"}></Title_page>

        </div>
  );
};

export default Index;
