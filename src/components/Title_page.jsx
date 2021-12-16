import React from 'react'
import { NavLink } from 'react-router-dom'

const Title_page = ({ returns, return_to, title }) => {

  return (

    <div data-testid='styles' className="relative h-16 flex flex-row bg-gray-100 w-full justify-start mt-6  ">
      {returns &&
        <NavLink data-testid='return-to' to={return_to}>
          <button class="text-blue-800 py-4 px-4 block hover:text-blue-400 hover:bg-gray-200 focus:outline-none font-medium border-blue-800 rounded-full h-14 w-14 align-center justify-center">
            <i className="fas fa-angle-left fa-2x"></i>
          </button>
        </NavLink>}
      <span data-testid='text-title' className="text-lg text-blue-800 text-3xl ml-8  font-bold">{title}</span>

    </div>

  )
}

export default Title_page
