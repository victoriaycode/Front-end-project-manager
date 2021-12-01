import Title_page from 'components/Title_page'
import React from 'react'

const Profile = () => {
    
    return (
        <div className="w-full h-full flex flex-col overflow-y-hidden " >
            
        <Title_page title={"Mi Perfil"} returns={true} return_to ={"/usuarios"}></Title_page>
        </div>
    )
}

export default Profile
