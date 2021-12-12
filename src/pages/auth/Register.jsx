import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import ButtonLoading from "components/ButtonLoading";
import { Enum_Rol } from 'utils/enums';
import DropDown from 'components/DropDown';
import useFormData from 'hooks/useFormData';
import { REGISTRO } from 'graphql/auth/mutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { useAuth } from 'context/authContext';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

const Register = () => {
    
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData();
  
    const [registro, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
      useMutation(REGISTRO);
  
//La función registro pasa los valores de los inputs que vienen del formulario de registro 
    const submitForm = (e) => {
      e.preventDefault();
      registro({ variables: formData });
    };
  
    useEffect(() => {
        if (dataMutation) {
            if (dataMutation.registro.token) {
                setToken(dataMutation.registro.token);
                }
            }
        }, [dataMutation, setToken, navigate]);
        
    useEffect(() => {
        if (dataMutation) {
                toast.success('Usuario registrado con éxito');
                }
        },
         [dataMutation]);
    
        useEffect(()=>{
            if (errorMutation){
                toast.error('Error creando usuario');
                }      
        },[errorMutation])
    
    return (
    <div>       
        <div className='bg-blue-800 flex flex-col h-screen text-white overflow-y-auto'>
            <div className='mt-12 ml-96 pl-10'> 
                    <h1 className='text-2xl font-bold '>Regístrate → </h1>
                    <form onSubmit={submitForm} onChange={updateFormData} ref={form} className='flex flex-col mt-12'> 
                        
                        <label className='font-medium text-lg' htmlFor="NombreUsuario">Nombres</label>
                        <input type="text" name="nombre" 
                        className='mt-2 rounded-lg p-2 w-96 h-10 cursor-auto outline-none text-blue-900 text-base'
                        placeholder="Ingresa nombre completo" required/><br/>

                        <label className='font-medium text-lg' htmlFor="ApellidorUsuario">Apellidos </label>
                        <input type="text" name="apellido"
                        className='mt-2 rounded-lg p-2 w-96 h-10 cursor-auto outline-none text-blue-900 text-base'
                        required/><br/>
                    
                        <label className='font-medium text-lg' htmlFor="id">Cédula</label>
                        <input type="numer" name="identificacion"
                        className='mt-2 rounded-lg p-2 w-96 h-10 cursor-auto outline-none text-blue-900 text-base'
                        required/><br/>

                        <DropDown label='Rol Usuario' name='rol' required={true} options={Enum_Rol} /><br/>
                        
                        <label className='font-medium text-lg' htmlFor="emailUsuario">Correo</label>
                        <input type="email" id="email" name="correo"
                        className='mt-2 rounded-lg p-2 w-96 h-10 cursor-auto outline-none text-blue-900 text-base'
                        placeholder="Ejemplo: hola@hotmail.com" required/><br/>

                        <label className='font-medium text-lg' htmlFor="contraseñaUsuario">Contraseña</label>
                        <input type="password" id="password" name="password"
                        className='mt-2 rounded-lg p-2 w-96 h-10 cursor-auto outline-none text-blue-900 text-base'
                        required/><br/>

                        <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={loadingMutation}
                        className={"w-96 h-10 bg-yellow-500 text-white font-semibold text-xl mb-6 rounded-lg hover:bg-yellow-600  shadow-md disabled:opacity-50 disabled:bg-gray-700"}
                        text='Registrarme'
                        /> 

                    </form>

                    <span className='ml-28'>¿Ya tienes cuenta?</span><br/>
                    <div className='mb-8 mt-2'>
                        <Link to ='/Login'>
                            <span className='cursor-pointer font-medium ml-32 underline'>Inicia sesión</span>
                        </Link>  
                    </div>
                    <ToastContainer/>
            </div>
        </div>
    </div>
    )
}

export default Register
