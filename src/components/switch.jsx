import React, {useState} from 'react'

const Switch = ({setEstado, estado}) => {
    //const [estado, setEstado] = useState(false)
    return (
        <div>
            
            <div
            className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
            >
            <input onClick={()=>{setEstado(!estado)}} type="checkbox" name="toggle" id="toggle" className=" toggle-checkbox absolute block
                w-6
                h-6
                rounded-full
                bg-white
                border-2
                appearance-none
                cursor-pointer
                "
            />  
            {console.log(estado)}      
            <label
                for="toggle"
                className="
                toggle-label
                block
                overflow-hidden
                h-6
                rounded-full
                bg-gray-300
                cursor-pointer
                "
            ></label>
        </div>
    </div>
    )
}

export default Switch
