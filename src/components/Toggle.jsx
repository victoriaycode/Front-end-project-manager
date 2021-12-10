import { nanoid } from 'nanoid'
import React from 'react'


const Toggle = () => {
    return (
      
      <td  className="border-t-0 px-6  align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
      <div   className="relative inline-block w-10 h-8 mr-2 align-middle select-none transition duration-200 ease-in">
          <input  type="checkbox"  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
          <label  for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-red-300 "></label>
      </div>

      <label for="toggle" className="text-xs text-gray-700">Aprobar</label>
  </td>
    )
}

export default Toggle
