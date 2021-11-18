//import { Link } from "react-router-dom";

function Login() {
  return (
    <div> 
        <h1>devOcean</h1> 
        <p >Equipo devOcean/Grupo4/Ciclo4/UdeA/MisionTic 2022</p>
    
            <div>
                <h1>¡Bienvenido!</h1>
                <p>Ingresa tus datos.</p><br></br>
                <form>
                    <label for="email">Correo</label><br/>
                    <input type="email"  placeholder="nombre@ejemplo.com"></input><br/>
                    <label for="password">Contraseña</label><br />
                    <input type="password"></input><br /> 
                    
                    {/* <Link to='/'> */}
                    <button className="botonlogin" type="submit">Ingresar</button><br></br> 
                    <span className="auth">Olvidé mi contraseña</span>
                    {/* <Link/> */}
                    <span className="auth">¿No tienes cuenta?</span><span class="register">Regístrate!</span>
                    {/* <Link to='/Auth/register'> */}
                    <button className="botonlogin">Registrarme</button>
                     {/* <Link/> */}
                </form>              
         </div>
    </div>
  );
}

export default Login;