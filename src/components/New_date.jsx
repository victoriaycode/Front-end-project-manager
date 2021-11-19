import React from 'react'

const New_date = () => {
    const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let day = date.toLocaleDateString("es-US", options);
 
  
    return (
    
            day
       
    )
}

export default New_date
