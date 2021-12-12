import React, {useEffect, useState} from 'react'


const Switch = ({autorizar,setAutorizar,posicionSwitch}) => {
    console.log('posicionSwitch',posicionSwitch)
    
    return (
        posicionSwitch ?(

            <td  className="border-t-0 px-6  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                <div   className="relative inline-block w-14 h-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input  onClick={()=> setAutorizar(!autorizar)} type="checkbox"  name='switch' className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer "  />
                    <label  for="toggle" className="toggle-label block overflow-hidden h-8 rounded-full bg-green-300 "></label>
                </div>

                <label for="toggle" className="text-xs text-gray-700">Autorizado</label>
            </td>
        )
       :(
        <td  className="border-t-0 px-6  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
        <div   className="relative inline-block w-14 h-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input  onClick={()=> setAutorizar(!autorizar)} type="checkbox"  name='switch' className="absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer "  />
            <label  for="toggle" className="toggle-label block overflow-hidden h-8 rounded-full bg-red-300 "></label>
        </div>

        <label for="toggle" className="text-xs text-gray-700">Autorizado</label>
    </td>
       )
      )
      }
        
export default Switch;

