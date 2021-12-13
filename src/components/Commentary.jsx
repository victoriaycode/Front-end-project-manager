import { ListSubheader, TextareaAutosize } from '@material-ui/core';
import React from 'react'

import moment from "moment";
import 'moment/locale/es';
import { useUser } from 'context/userContext';

const Commentary = ({ observacion }) => {
  const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let timeday = date.toLocaleDateString("es-US", options);
  const { userData } = useUser();

  return (


    <div className="w-full h-auto flex flex-row bg-white p-2  py-4 mt-2  rounded shadow-lg  ">
      <div className="flex flex-col mx-2 mt-2  px-1 flex-center align-center justify-items ">

        <i className="fas fa-user-circle fa-2x"></i>
        {userData.rol == "LIDER" && <span className="font-semibold text-sm mt-2">{userData.nombre} {userData.apellido}</span>}

        <div>


        </div>

      </div>

      <div className="mt-3 flex flex-col px-2  w-full">
        <p className=" border-b-2   pb-2 border-gray-300 break-all py-2  px-1 rounded w-full  text-gray-500" >{observacion}</p>
        {/* <p className="text-xs text-gray-500 mt-2 ml-2 ">{timeday}</p> */}
      </div>




    </div>

  )
}

export default Commentary