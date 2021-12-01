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
            navigate('/login');
                }
            }
        }, [dataMutation, setToken, navigate]);
        
    
        useEffect(()=>{
            if (errorMutation){
                console.log("Error creando usuario")
                toast.error('Error creando usuario');
                }      
        },[errorMutation])
    
    return (
    <div>       
        <div className='bg-blue-800 flex flex-col h-screen text-white'>
            <div className='ml-96 pl-80'> 
                    <h1 className='text-3xl font-bold '>Regístrate → </h1>
                    <form onSubmit={submitForm} onChange={updateFormData} ref={form} className='flex flex-col mt-12'> 
                        
                        <label className='font-bold text-xl' htmlFor="NombreUsuario">Nombres</label>
                        <input type="text" name="nombre" 
                        className='mt-2 rounded-lg p-2 max-w-lg cursor-auto outline-none text-blue-900 text-xl'
                        placeholder="Ingresa nombre completo" required/><br/>

                        <label className='font-bold text-xl' htmlFor="ApellidorUsuario">Apellidos </label>
                        <input type="text" name="apellido"
                        className='mt-2 rounded-lg p-2 max-w-lg cursor-auto outline-none text-blue-900 text-xl'
                        required/><br/>
                    
                        <label className='font-bold text-xl' htmlFor="id">Cédula</label>
                        <input type="numer" name="identificacion"
                        className='mt-2 rounded-lg p-2 max-w-lg cursor-auto outline-none text-blue-900 text-xl'
                        required/><br/>

                        <DropDown label='Rol Usuario' name='rol' required={true} options={Enum_Rol} /><br/>
                        
                        <label className='font-bold text-xl' htmlFor="emailUsuario">Correo</label>
                        <input type="email" id="email" name="correo"
                        className='mt-2 rounded-lg p-2 max-w-lg cursor-auto outline-none text-blue-900 text-xl'
                        placeholder="Ejemplo: hola@hotmail.com" required/><br/>

                        <label className='font-bold text-xl' htmlFor="contraseñaUsuario">Contraseña</label>
                        <input type="password" id="password" name="password"
                        className='mt-2 rounded-lg p-2 max-w-lg cursor-auto outline-none text-blue-900 text-xl'
                        required/><br/>

                        <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={loadingMutation}
                        text='Registrarme!'
                        /> 

                    </form>

                    <span>¿Ya tienes cuenta?</span><br/>
                    <Link to ='/Login'>
                        <span>Inicia sesión</span>
                    </Link>
                    <ToastContainer/>
            </div>
        </div>
    </div>
    )
}

export default Register
