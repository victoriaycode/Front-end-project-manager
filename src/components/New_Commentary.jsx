
import { useMutation } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
import { ADD_NEW_OBSERVATION } from 'graphql/avances/queries'
import React, { useState,useEffect } from 'react'
import ReactLoading from "react-loading";
import { useUser } from 'context/userContext';
import moment from "moment";
import 'moment/locale/es';
const New_Commentary = ({_idAvance,setCancel}) => {
  const { userData } = useUser();

  let timeday = new Date();
    
    const [comment, setComment]= useState("");
   
    
  const [addComment, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
  useMutation(ADD_NEW_OBSERVATION);

    const addNewObservation = async () => {
      console.log("Guardando")
     
      if(comment!==""){

        let observacion= comment +" -  "+ timeday;
        await addComment({
          variables: { _idAvance, observacion },
        });
        setCancel(false);
        console.log("data comentario ",dataMutation)}
    };
   useEffect(() => {
    console.log("commentary ",comment)
   }, [comment])
   
   useEffect(() => {
    if (dataMutation) {
      
      toast.success('Observación adicionado con exito');
      setCancel(false);
    }
  }, [dataMutation]);

  useEffect(() => {
    if (errorMutation) {
     
      toast.error('Error adicionando el comentario');
      setCancel(false);
    }
  }, [errorMutation]);
      

  if (loadingMutation) return <div className="grid align-center">
    <ReactLoading type={"spin"} color="#1260CD" height={'20%'}  /><span>Cargando....</span></div>;
    return (
       

  <div className=" w-full flex  flex-row bg-white p-2 pt-4 mb-6 rounded shadow-lg border-solid border-2 border-gray-300 ">
    {loadingMutation ? (<ReactLoading type={"spin"} color="#1260CD" height={'20%'}  />)
    :(<>
    <div className="flex  flex-col mx-2 py-2  flex-center align-center justify-items ">  
     <i className="fas fa-user-circle fa-2x"></i>
     <h1 className="font-semibold mt-2">{userData.nombre} {userData.apellido}</h1>
     
     <div>
     

     </div>

   </div>
   <div className="mt-3 flex flex-col px-3  w-full">
      <textarea  minRows="2" className="border break-all px-4 py-4 rounded w-full text-gray-700" 
      placeholder="Escribe tu observación ..." onChange={(e) => {
              setComment(e.target.value)}}></textarea>
       
      <div className="flex mt-2 justify-between mx-3">
     
        <p className="text-xs text-gray-500">{moment(timeday).format('DD/MM/YY hh:mm:ss a')}</p>
      <div>
        
        <button className="px-4 py-1 bg-blue-700 text-white rounded font-light
         hover:bg-blue-800 " onClick={() => addNewObservation()}>Enviar</button>
      
      <button className="px-4 py-1 bg-gray-400 text-white rounded
       font-light hover:bg-gray-600 ml-4" onClick={()=>setCancel(false)}>
      Cancelar</button>
      </div>
     
    </div>
    
    </div>

</>)}

  </div>

    )
}

export default New_Commentary