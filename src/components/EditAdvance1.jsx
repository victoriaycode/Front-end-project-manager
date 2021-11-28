/**import React from 'react'
import { useEffect } from 'react';
import { TextareaAutosize } from "@material-ui/core";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import useFormData from 'hooks/useFormData';
import { EDIT_ADVANCE_BY_STUDENT } from 'graphql/avances/queries'

import { useMutation } from '@apollo/client';
const EditAdvance1 = ({advance,createdBy,_idAvance,setEditable}) => {

    const [title, setTitle]= useState("");
    const [descrip, setDescrip]= useState("");
    const input_bg="bg-gray-50";
  
  
  
    const [editarAvance, { data: mutationData, loading: mutationLoading, error: mutationError }] =
      useMutation(EDIT_ADVANCE_BY_STUDENT);

    const submitForm = (e) => {
      e.preventDefault();
     console.log("titul",titulo);
     console.log("descrip",descrip);

       if(title!=="" && descrip!=""){
         let titulo= title;
         let descripcion=descrip;
          const edit= editarAvance({
            variables: { _idAvance, titulo,descripcion },
          });
          
        console.log("edit ",edit);
      
          setEditable(false);
        
      }else{
        console.log("falta cambiar");
      }
    };
    useEffect(() => {
      if (mutationData) {
        console.log('Avance modificado correctamente');
      }
    }, [mutationData]);
    useEffect(() => {
      if (mutationError) {
        console.log("error", mutationError);
        toast.error('Error modificando el avance');
      }
  
    }, [mutationError]);
    return (
        <div className="w-full h-full overflow-y-hidden">
        <form
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}>
              <div>
            <div className="w-full h-full overflow-y-hidden">

              <div className="w-full h-full px-20 py-1 ">

                <div className=" w-full bg-white   flex flex-col align-center justify-center border-solid border-2 border-gray-300 rounded-xl py-2">
                <>
                  <div className="w-full py-2 px-10 flex flex-row ">

                    <span className="text-gray-500 text text-lg font-medium mt-4">
                      Titulo Avance:
                    </span>
                    <input name="titulo"onChange={(e) => {
              setTitle(e.target.value)}} type="text" className={`h-10 w-5/6 mx-5 px-10 mt-1  text-xl font-semibold text-blue-800 rounded-2xl z-0 focus:outline-none
                    ${input_bg}`} defaultValue={advance.titulo} />

                   


                  </div>
                  <div className="w-full py-2 px-10 flex flex-row">
                    <span className="text-gray-500 text text-lg font-medium mt-4">Descripción </span>

                    <TextareaAutosize name="descripcion" 
                    onChange={(e) => {
                      setDescrip(e.target.value)}}defaultValue={advance.descripcion} minRows="3 " type="text"
                      className={`h-10 w-5/6 mx-5 px-10 py-2 ml-10 rounded-2xl z-0 focus:outline-none ${input_bg}`}>
                    </TextareaAutosize>
                    
                  </div>

                  <div className="w-full py-2 px-10 "><span className="text-gray-500 text text-lg font-medium mt-4">
                    Estudiante:
                  </span>

                    <input type="text" disabled
                      className={`text-gray-500 text ${input_bg}  text-lg p-2 pl-4 font-medium mt-4 ml-20 rounded-2xl z-0 focus:outline-none`}
                      defaultValue={createdBy} />
                    <span className="text-gray-500 text text-lg font-medium mt-4 ml-20">
                      Fecha de creación:
                      <input type="text"disabled
                        className={`text-gray-500 text ${input_bg}  text-lg p-2 pl-4 font-medium mt-4 ml-20 rounded-2xl z-0 focus:outline-none`}

                        defaultValue={advance.fecha} />
                    </span>
                  </div>
                        </>

                </div>

              </div>
              <div  className="flex justify-center align-center">  <button type="submit" className="p-1  pl-5 pr-5 ml-10  m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" >
               {mutationLoading && <ReactLoading type={"spin"} color="#1260CD" height={'20%'}  />} 
               Guardar</button>
              <button className="p-1 pl-5 pr-5 ml-10  m-2 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-yellow-200 hover:text-gray-500  hover:border-gray-500
             focus:border-4 focus:border-blue-300" onClick={() => setEditable(false)}>Cancelar</button></div>
            </div>
            
          </div>
    
                 </form>
        </div>
    )
}

export default EditAdvance1
**/
import React from 'react'

const EditAdvance1 = () => {
  return (
    <div>
      
    </div>
  )
}

export default EditAdvance1
