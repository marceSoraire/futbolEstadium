import { useState } from 'react';
import { app } from '../../Firebase/Firebase';
import Escudo from '../../Components/Main/sele.jpg';

const Login = ({ userDate }) => {

  const [isRegister, setIsRegister] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isRegister) {
      crearUsuario(email, password);
    }
    else {
      iniciarSesion(email, password);
    }
  }

  const crearUsuario = (email, password) => {
    app.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => { userDate(user) });
  }

  const iniciarSesion = (email, password) => {
    app.auth().signInWithEmailAndPassword(email, password)
      .then((user) => { userDate(user) });
  }

  return (
    <div className='w-full'>
      <div className="relative mt-32 left-0 w-full font-poppins">
        <div className="w-[75%] mx-auto bg-white border-2 p-4 xl:p-24 shadow-md shadow-primario border-primario rounded-lg">
          <div className='flex justify-between align-center'>
            <h2 className="pt-1 pb-4 text-xl md:text-2xl lg:text-2xl font-poppins">{isRegister ? 'Crear Usuario' : 'Iniciar Sesion'}</h2>
            <img src={Escudo} alt='fulboshampang' className='w-[50px] sm:w-[80px] rounded-full border-2 border-yellow-500'/>
          </div>
          <p className="text-[10px] md:text-sm p-1 text-primario rounded-md">Los campos marcados con (<span className='text-red-600'>*</span>) son obligatorios</p>
          <form onSubmit={submitHandler} className="py-4">
            <div className="flex-col lg:flex-row gap-8 w-full py-4">
              <div className="flex flex-col flex-1">
                <label className="text-gray-500 text-center">Email (<span className='text-red-600'>*</span>)</label>
                <input type="email" id='email' className="shadow-lg py-2 px-3 outline-none border-2 rounded-md sm:w-[50%] sm:mx-auto" />
                {/* <p className="text-red-500 text-sm text-center">Ingrese Email</p> */}
              </div>

              <div className="flex flex-col flex-1 justify-center my-2">
                <label className="text-gray-500 text-center">Contraseña (<span className='text-red-600'>*</span>)</label>
                <input type="password" id='password' className="shadow-lg py-2 px-3 outline-none border-2 rounded-md sm:w-[50%] sm:mx-auto" />
                {/* <p className="text-red-500 text-sm text-center">Ingrese Contraseña</p> */}
              </div>
            </div>

            <p className="text-center md:text-sm p-2 text-primario rounded-md">{isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}</p>

            <div className="w-full text-center mt-2">
              <button type='submit' className='uppercase border-2 border-slate-500 px-4 py-2 my-3 sm:m-4 rounded-md text-primario font-poppins w-[200px] hover:shadow-xl'>{isRegister ? 'Registarte' : 'Ingresar'}</button>
              <button onClick={() => setIsRegister(!isRegister)} type="submit" className="uppercase border-2 border-slate-500 px-4 py-2 rounded-md text-primario font-poppins w-[200px] hover:shadow-xl">
                {isRegister
                  ? '¡Iniciar Sesion!'
                  : '¡Crear Usuario!'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Login;