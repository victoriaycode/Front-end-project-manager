import { Link } from "react-router-dom";
import logo from "media/logo.png"

function Login() {
  return (
    <div className='flex h-screen bg-blue-900'> 
        <div className='flex flex-col h-screen bg-blue-800 text-white'>
            <form className='mt-52 mx-32'>
                <h1 className='text-3xl'>¡Bienvenido!</h1>
                <p className='mt-2 mb-8 font-bold text-2xl'>Ingresa tus datos →</p>
                <label className='font-bold text-xl'>Correo</label><br/>
                <input type="email"  placeholder="nombre@ejemplo.com"
                className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'>
                </input><br/><br />
                <label className='font-bold text-xl' >Contraseña</label><br /> 
                <input type="password"
                className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'></input><br /> 
                <button className='bg-yellow-500 hover:bg-yellow-600 p-2 w-96 border-none text-white rounded-lg h-auto my-8 cursor-pointer text-2xl' type="submit">
                  Ingresar
                  </button><br />
            </form>  
                <span className='text-xl ml-52'>¿Aun no tienes cuenta?</span><br/>
             <Link to ='/auth/register'>
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