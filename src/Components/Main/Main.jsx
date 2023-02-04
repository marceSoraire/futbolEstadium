import { useState } from 'react'
import escudo from './sele.jpg';
import { Link } from 'react-router-dom';
import { app } from '../../Firebase/Firebase';
import { CgClose } from 'react-icons/cg'
import { RiMenu4Fill } from 'react-icons/ri'
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const Main = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    const cerrarSesion = () => {
        app.auth().signOut();
    }

    return (
        <div name='navbar' className="w-full h-[70px] text-white bg-nav z-20">
            <div className="max-w-[1280px] h-full mx-auto px-4 flex justify-around lg:justify-between items-center">
                <Link to="/" className="flex items-center hover:cursor-pointer">
                    <img className="z-20 w-[70px] object-cover rounded-full" src={escudo} alt='escudo' />
                    <p className="hidden md:flex font-roboto font-bold uppercase text-lg ml-2 text-primario hover:text-yellow-700">FulboShampang</p>
                </Link>
                <ul className="hidden lg:flex gap-6 text-lg text-primario font-bold font-roboto">
                    <Link to="/" smooth duration={1000} className="hover:cursor-pointer my-auto hover:text-yellow-700">
                        <span>Canchas</span>
                    </Link>
                    <Link to='/Eventos' smooth duration={1000} className="hover:cursor-pointer my-auto hover:text-yellow-700">
                        <span>Eventos</span>
                    </Link>
                    <Link to='/escuelas' smooth duration={1000} className="hover:cursor-pointer my-auto hover:text-yellow-700">
                        <span>Escula Infantiles</span>
                    </Link>
                    <button smooth duration={1000} onClick={cerrarSesion} className='p-4 hover:cursor-pointer hover:scale-105 hover:text-yellow-700 border-b border-b-gray-400'>Cerrar Sesion</button>
                </ul>

                <div onClick={handleNav} className='lg:hidden hover:cursor-pointer z-20 text-primario'>
                    {nav ? <CgClose size={28} /> : <RiMenu4Fill size={28} />}
                </div>

                <div className={nav ? 'z-10 lg:hidden fixed top-0 right-0 w-[60%] md:w-[35%] h-full bg-black ease-in duration-500' : 'z-10 lg:hidden fixed top-0 right-[-100%] w-[60%] md:w-[35%] h-full bg-black ease-in duration-500'}>
                    <ul className='pt-24 font-bold px-4 flex flex-col'>
                        <Link to='/' smooth duration={1000} onClick={handleNav} className='p-4 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Canchas</Link>
                        <Link to='/eventos' smooth duration={1000} onClick={handleNav} className='p-4 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Eventos</Link>
                        <Link to="/escuelas" smooth duration={1000} onClick={handleNav} className='p-4 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Escula Infantiles</Link>
                        <button smooth duration={1000} onClick={cerrarSesion} className='p-4 hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Cerrar Sesion</button>
                        <div className='mt-8 w-full px-8 flex justify-between'>
                            <BsFacebook size={30} className='hover:cursor-pointer text-blue-900' />
                            <BsInstagram size={28} className='hover:cursor-pointer text-red-500' />
                            <BsWhatsapp size={28} className='hover:cursor-pointer text-green-900' />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Main;
