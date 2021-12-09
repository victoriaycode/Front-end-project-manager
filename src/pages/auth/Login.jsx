import { Link } from "react-router-dom";
import logo from "media/logo.png"
import ButtonLoading from "components/ButtonLoading";
import React, { useEffect } from 'react';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutation';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';

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
    if (dataMutation) {
      if (dataMutation.login.token) {
        setToken(dataMutation.login.token);
        navigate('/');
      }
    }
  }, [dataMutation, setToken, navigate]);

  return (
    <div className='flex h-screen bg-blue-900'> 
        <div className='flex flex-col h-screen bg-blue-800 text-white'>
            <form onSubmit={submitForm} onChange={updateFormData} ref={form} className='mt-52 mx-32'>
                <h1 className='text-3xl'>¡Bienvenido!</h1>
                <p className='mt-2 mb-8 font-bold text-2xl'>Ingresa tus datos →</p>
                <label className='font-bold text-xl'>Correo</label><br/>
                <input name='correo' type="email"  placeholder="nombre@ejemplo.com"
                className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'>
                </input><br/><br />
                <label className='font-bold text-xl' >Contraseña</label><br /> 
                <input type="password" name='password'
                className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'></input>
                <br /> 
                <br /> 
                <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoading}
                        text='Iniciar Sesión'
                />
            </form>  
               
            <span className='text-xl ml-52'>¿Aun no tienes cuenta?</span><br/>
             <Link to ='/register'>
                <button className='bg-none hover:bg-yellow-600 hover:text-white border-2 border-white text-white rounded-lg h-auto p-2 w-48 ml-52 cursor-pointer text-2xl' type="submit">
                Regístrate</button>
              </Link>
          <p className='absolut mt-auto mx-40 text-xs'>Equipo devOcean/Grupo4/Ciclo4/UdeA/MisionTic 2022</p>            
        </div>
        <div className='flex pt-72'>
          <img className='h-60 w-60 ml-72' src={logo} alt="devOcean" />
          <h1 className='text-white text-9xl text-center mt-12'>devOcean</h1>
        </div>
    </div>
  );
};

export default Login;