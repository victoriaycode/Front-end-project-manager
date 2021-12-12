import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react'
import { GET_USUARIO} from 'graphql/usuarios/queries';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations';
import Switch from 'components/switch';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';
const ModalAutorizarUsuario = ({setOpenModal,_id}) => {
    
     const {data: queryData,error: queryError,loading: queryLoading,} = useQuery(GET_USUARIO, {
     
        variables: { _id,  },
      });
      console.log('data usuario: ',queryData)
      const [autorizar, setAutorizar] = useState(false);
      const [state, setState] = useState('PENDIENTE');
      const [posicionSwitch, setPosicionSwitch] = useState(false);
      

      const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDITAR_USUARIO);

    
    const cambiarEstado =()=>{
        editarUsuario({
            variables:{
                _id, nombre:queryData.Usuario.nombre, 
                apellido:queryData.Usuario.apellido,
                identificacion:queryData.Usuario.identificacion,
                correo:queryData.Usuario.correo,
                estado: state
            }
        })
    }

    useEffect(() => {
        if (state==='AUTORIZADO') {
          setPosicionSwitch(true)
        }else if(state==='NO_AUTORIZADO'){
            setPosicionSwitch(false)
        }
      }, [state]);

    
        useEffect(() => {
        if (autorizar===true){
            setState('AUTORIZADO')
        }else if(autorizar===false){
            setState('NO_AUTORIZADO')
        }
        
        }, [autorizar]);

        

    
   if (queryLoading) return <div>Cargando....</div>;

    return (
    
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-10">
       
            <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
            
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Autorizar Usuario</h3>
                    <i onClick={()=>setOpenModal(false)} className="far fa-times-circle fa-2x hover:text-red-700"></i>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col pl-4 text-black text-3xl'>
                        <label className='text-black text-3xl'>Usuario:
                            <label className='text-gray-500 text-2xl'>{' '+queryData.Usuario.nombre} </label></label>
                        <label>Rol:
                        <label className='text-gray-500 text-2xl'>{' '+Enum_Rol[queryData.Usuario.rol]} </label>
                        </label>
                        <label>Estado:
                            <label className='text-gray-500 text-2xl'>{' '+Enum_EstadoUsuario[queryData.Usuario.estado]} </label>
                        </label>
                    </div>
                    <Switch autorizar={autorizar} setAutorizar={setAutorizar} posicionSwitch={posicionSwitch}></Switch>
                    
                </div>
                <div className="flex justify-end items-center w-100 border-t p-3">
                
                    <button onClick={()=>{

                        setOpenModal(false)
                        cambiarEstado()
                        
                    }
                        
                        }
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Confirmar</button>
                    <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-1 close-modal ml-2" onClick={()=>setOpenModal(false)}>Cancelar</button>
                </div>
            </div>
      </div>
     
)
}

export default ModalAutorizarUsuario;
