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

  const testUsers=(tryUser)=>{

    if(tryUser==="admin"){
     // document.getElementById('email').value = "testadmin@gmail.com";
     // document.getElementById('password').value = "testadmin100";
      formData.correo = "testadmin@gmail.com";
      formData.password="testadmin100";
      
    }
    else if(tryUser==="lider"){
      formData.correo = "testlider@gmail.com";
      formData.password="testadmin100";
      
    }
    else if(tryUser==="student"){
      formData.correo = "teststudent@gmail.com";
      formData.password="testadmin100";
      
    }
    login({
      variables: formData,
      
    });
   
  }
  
  useEffect(() => {
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
    <div  data-testid='login-page' className='flex h-screen w-screen bg-blue-900'> 
        <div className='flex flex-col  bg-blue-800 text-white'>
            <form onSubmit={submitForm} onChange={updateFormData} ref={form} className='mx-24 mt-10'>
                <h1 className='text-2xl font-bold'>¡Bienvenido!</h1>
                <p className='mt-2 mb-6 text-base'>Ingresa tus datos →</p>
                <label className='font-medium text-lg'>Correo</label><br/>
                <input name='correo' id="email"type="email"  placeholder="nombre@ejemplo.com"
                className='mt-2 rounded-lg p-2 h-10 w-96 mb-4 cursor-auto outline-none text-blue-900 font-normal text-base'>
                </input><br/>
                <label className='font-medium text-lg' >Contraseña</label><br /> 
                <input type="password" name='password' id="password"
                className='mt-2 rounded-lg p-2 h-10 w-96 mb-4 cursor-auto outline-none text-blue-900 text-xl'></input>
                <br /> 
                <br /> 
                <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                       
                        className={"w-96 h-10 bg-yellow-500 text-white font-semibold text-xl mb-6 rounded-lg hover:bg-yellow-600  shadow-md disabled:opacity-50 disabled:bg-gray-700"}
                        text='Iniciar sesión'
                />
            </form>  
               
            <span className='ml-52 mb-2 text-base'>¿Aun no tienes cuenta?</span>
             <Link to ='/register'>
                <button className='bg-none hover:bg-yellow-600 hover:text-white border-2 border-white text-white rounded-lg h-10 w-36 ml-52 cursor-pointer text-xl' type="submit">
                Regístrate</button>
              </Link>
              <div className="mt-6 mx-4 border-t-2 font-mono border-yellow-600 p-2">
        <span className='ml-52 mb-2 text-2xl font-mono'>Try Users</span>
        <div className="flex flex-row  justify-around mt-1">
        <button className='bg-none hover:bg-yellow-600 hover:text-white border-2 border-white text-white rounded-lg h-10 w-32 cursor-pointer text-md' type="button" onClick={()=>testUsers("admin")}>
                Admin</button>
                <button className='bg-none hover:bg-yellow-600 hover:text-white border-2 border-white text-white rounded-lg h-10 w-32  cursor-pointer text-md' type="button" onClick={()=>testUsers("lider")}>
                Lider</button>
                <button className='bg-none hover:bg-yellow-600 hover:text-white border-2 border-white text-white rounded-lg h-10 w-32 cursor-pointer text-md' type="button" onClick={()=>testUsers("student")}s>
                Estudiante</button>
        </div>
       
        
        </div>
          <p className=' fixed bottom-4 right-28 text-xs'>Equipo devOcean/Ciclo4/UdeA/MisionTic 2022</p>            
        </div>
      
        <div className='flex pt-52 pl-32'>
          <img className='h-40 w-40 ' src={logo} alt="devOcean" />
          <h1 className='text-white text-center mt-10 text-7xl'>devOcean</h1>
        </div>
    </div>
  );
};

export default Login;