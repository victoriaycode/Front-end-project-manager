import { Link } from "react-router-dom";
import logo from "media/logo.png"
import ButtonLoading from "components/ButtonLoading";
import React, { useEffect } from 'react';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutation';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import ReactLoading from 'react-loading';

function Login() {

  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { form, formData, updateFormData } = useFormData();

  const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN);
    
  const submitForm = (e) => {
    e.preventDefault();
    
    login({
      variables: formData,
      
    });
  };

  useEffect(() => {
    console.log("data",dataMutation);
    if (dataMutation !=null) {
      if (dataMutation.login!=null) {
        setToken(dataMutation.login.token);
        navigate('/');
      }else{
        alert("Usuario y/o contraseña incorrecta");
      }
      }
  }, [dataMutation, setToken, navigate]);

  
  useEffect(() => {
    console.log("error",mutationError);
  }, [mutationError]);
  return (
    <div className='flex h-screen bg-blue-900'> 
        <div className='flex flex-col h-screen bg-blue-800 text-white'>
            <form onSubmit={submitForm} onChange={updateFormData} ref={form} className='mx-24 mt-20'>
                <h1 className='text-2xl font-bold'>¡Bienvenido!</h1>
                <p className='mt-2 mb-8 text-base'>Ingresa tus datos →</p>
                <label className='font-medium text-lg'>Correo</label><br/>
                <input name='correo' type="email"  placeholder="nombre@ejemplo.com"
                className='mt-2 rounded-lg p-2 h-10 w-96 mb-4 cursor-auto outline-none text-blue-900 text-base'>
                </input><br/>
                <label className='font-medium text-lg' >Contraseña</label><br /> 
                <input type="password" name='password'
                className='mt-2 rounded-lg p-2 h-10 w-96 mb-4 cursor-auto outline-none text-blue-900 text-xl'></input>
                <br /> 
                <br /> 
                <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                       
                        className={"w-96 h-10 bg-yellow-500 text-white font-semibold text-xl mb-6 rounded-lg hover:bg-yellow-600  shadow-md disabled:opacity-50 disabled:bg-gray-700"}
                        text='Iniciar sesión'
                />
            </form>  
               
            <span className='ml-52 mb-0 text-base'>¿Aun no tienes cuenta?</span><br/>
             <Link to ='/register'>
                <button className='bg-none hover:bg-yellow-600 hover:text-white border-2 border-white text-white rounded-lg h-10 w-36 ml-52 cursor-pointer text-xl' type="submit">
                Regístrate</button>
              </Link>
          <p className='absolut mt-12 mx-40 text-xs'>Equipo devOcean/Ciclo4/UdeA/MisionTic 2022</p>            
        </div>
        <div className='flex pt-52'>
          <img className='h-40 w-40 ml-60' src={logo} alt="devOcean" />
          <h1 className='text-white text-center mt-10 text-7xl'>devOcean</h1>
        </div>
    </div>
  );
};

export default Login;