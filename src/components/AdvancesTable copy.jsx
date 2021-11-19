import userEvent from '@testing-library/user-event'
import React from 'react'

const AdvancesTable = () => {
  const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let day = date.toLocaleDateString("es-US", options);
  
  const advanceInfo= {
    title : "advance 1",
    description: "advance about......sdasdasssssssssssssssssssssssssdasssssssssssssssssssssssssssdasd.",
    student: "Gaby Montez",
    date:day
  }

  const RowAdvanceInfo= ()=>{
    return (
      <tr className="w-full flex flex-rows-4 justify-around">
        <td className="text-blue-400">{advanceInfo.title}</td>
        <td className="">{advanceInfo.description}</td>
        <td>{advanceInfo.student}</td>
        <td>{advanceInfo.date}</td>
      </tr>
    )
  }
  return (
    <div className="flex-auto w-full h-full justify-center align-center mt-8 pl-10 pr-10"> 
                
    <table className="table-auto">
      <thead className="  border-b-4">
      <tr>
        <th >Avance</th>
        <th >Descripción</th>
        <th>Hecho por</th>
        <th>Fecha</th>
    
        </tr>
      </thead>
      <tbody className="">
      <RowAdvanceInfo></RowAdvanceInfo>
      </tbody>
      </table>
      </div>
  )
}

export default AdvancesTable
