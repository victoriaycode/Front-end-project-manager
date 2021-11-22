import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
    
    /*const form = useRef(null);

    //async trabaja con await axios    
    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value;
        });
        console.log('espia',nuevoUsuario)
        //se define el método POST
        await registrarUsuarios(
            
            {   
                _id:nuevoUsuario._id,
                id_usuario: nuevoUsuario.id_usuario,
                given_name: nuevoUsuario.given_name,
                family_name: nuevoUsuario.family_name,
                email: nuevoUsuario.email,
                rol:nuevoUsuario.rol,
                estado:nuevoUsuario.estado
            },
            (response) => {
              console.log(response.data);
              toast.success('Nuevo Usuario agregado con éxito');
            },
            (error) => {
              console.error(error);
              toast.error('Error agregando el Usuario');
            }
          );
    };*/
    
    return (
    <div>       
        <div className='bg-blue-800 flex flex-col h-screen text-white'>
            <div className='ml-96'> 
                <Link to ='/auth/login'>
                    <button className='bg-yellow-500 hover:bg-yellow-600 p-2 w-96 border-none text-white rounded-lg h-auto my-8 cursor-pointer text-2xl'>                
                    Volver a Login
                    </button>
                </Link>
                    <h1 className='text-3xl font-bold '>Registrar nuevo usuario</h1>
                    <p className='text-2xl mt-2'>Ingresa los datos del nuevo usuario→</p>
                    <form className='flex flex-col mt-16'> 
                        
                        <label className='font-bold text-xl' htmlFor="NombreUsuario">Nombres</label>
                        <input type="text" name="nombre" 
                        className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'
                        placeholder="Ingresa nombre completo" required/><br/>

                        <label className='font-bold text-xl' htmlFor="ApellidorUsuario">Apellidos </label>
                        <input type="text" name="apellido"
                        className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'
                        required/><br/>
                    
                        <label className='font-bold text-xl' htmlFor="id">Cédula</label>
                        <input type="numer" name="identificacion"
                        className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'
                        required/><br/>

                        <label className='font-bold text-xl' htmlFor="emailUsuario">Correo</label>
                        <input type="email" id="email" name="correo"
                        className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'
                        placeholder="Ejemplo: hola@hotmail.com" required/><br/>
                        
                        <label className='font-bold text-xl' htmlFor="rolUsuario">Rol del Usuario</label>
                            <select className='mt-2 rounded-lg p-2 h-12 w-96 cursor-auto outline-none text-blue-900 text-xl'
                            name="rol" required defaultValue={0} >
                                <option disabled value={0}> Selecciona un rol</option>
                                <option>Administrador</option>
                                <option>Líder</option>
                                <option>Estudiante</option>
                            </select><br/>

                        <input id="input_ventas" type="hidden" name="estado" value="Pendiente" required/>
                        
                        <button type="submit" className='bg-yellow-500 hover:bg-yellow-600 p-2 w-96 border-none text-white rounded-lg h-auto my-8 cursor-pointer text-2xl'
                        > Registrarme! </button>
                        </form>
                    {/* <ToastContainer position='bottom-center' autoClose={4000} />     */}
            </div>
        </div>
    </div>
    )
}

export default Register
