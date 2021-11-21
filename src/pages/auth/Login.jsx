//import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='flex h-screen'> 
        <div className='flex flex-col h-screen bg-white text-blue-900'>
            <h1 className='mt-36 ml-8'>¡Bienvenido!</h1>
            <p className='ml-8'>Ingresa tus datos.</p>
            <form className='mt-12 ml-8'>
                <label>Correo</label><br/>
                <input type="email"  placeholder="nombre@ejemplo.com"
                className='rounded-lg p-2 w-80 cursor-auto border-2 border-blue-900 hover:border-yellow-700'>
                </input><br/><br />
                <label>Contraseña</label><br /> 
                <input type="password"
                className='rounded-lg p-2 w-80 cursor-auto border-2 border-blue-900 hover:border-yellow-700'></input><br /> 

                {/* <Link to='/'> */}
                <button className='bg-yellow-300 p-2 w-80 border-none text-white rounded-lg h-auto my-4 cursor-pointer text-2xl' type="submit">
                  Ingresar
                  </button><br />
                {/* <Link/> */}
                <span className="auth">¿Aun no tienes cuenta?</span><br/>
                {/* <Link to='/Auth/register'> */}
                <button className='bg-yellow-300 border-none text-white rounded-lg h-auto p-2 w-auto my-4 cursor-pointer text-2xl' type="submit">
                  Regístrate</button>
                  {/* <Link/> */}
            </form>  
          <p className='absolut mt-auto'>Equipo devOcean/Grupo4/Ciclo4/UdeA/MisionTic 2022</p>            
        </div>
       <div>
        <img src="./media/logo.jpg" alt="devOcean" />
       </div>
    </div>
  );
};

export default Login;