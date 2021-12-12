import Title_page from 'components/Title_page'
import React from 'react'

const Index1 = () => {
    
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
            
        <Title_page title={"Inicio"} returns={true} return_to ={"/inicio"}></Title_page>
        </div>
    )
}

export default Index1
