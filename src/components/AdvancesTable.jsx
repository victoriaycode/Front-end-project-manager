import userEvent from '@testing-library/user-event'
import advance from 'pages/projects/advances/advance';
import React from 'react'

const AdvancesTable = () => {
  const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let day = date.toLocaleDateString("es-US", options);
  const numberAdvances=3;
  const advanceInfo= {
    title : "advance about design and implementation of diferent structures to the page",
    description: "advance about......sdasdasssssssssssssssssssssssssdasssssssssssssssssssssssssssdasd.",
    student: "Gaby Montez",
    date:day
  }

  const RowAdvanceInfo= ()=>{
    return (
      <tr>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blue-800 
      hover:text-blue-400 cursor-pointer font-medium hover:font-light  ">
        {advanceInfo.title}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
      {advanceInfo.student}
      </td>
      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      {advanceInfo.date}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
       {advanceInfo.date}
        
      </td>
    </tr>
    )
  }
  return (
    <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-2 max-w-full flex-grow flex-1">
          <h3 class="font-light text-sm text-gray-500 italic">Mostrando {numberAdvances} avances en el proyecto </h3>
        </div>
        <button class="p-2 pl-5 pr-5 ml-2 bg-transparent border-2 border-blue-400
                 text-blue-400 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-800 
                  hover:border-gray-500 text-ms font-bold
                 focus:border-4 focus:border-blue-300 transform transition duration-300 ">Nuevo Avance</button>
      </div>
    </div>

    <div class=" w-full  h-96 overflow-x-auto overflow-y-scroll">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Avance
                        </th>
          
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Hecho por
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Creado 
                        </th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Última modificación 
                        </th>
          </tr>
        </thead>

        <tbody>
       
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        <RowAdvanceInfo/>
        </tbody>

      </table>
    </div>
  </div>
</div>
  )
}

export default AdvancesTable
