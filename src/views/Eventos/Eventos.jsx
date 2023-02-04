import { useState } from 'react';
import { db } from '../../Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const initial = {
  name: '',
  apellido: '',
  email: '',
  tel: '',
  dir: '',
  fecha: '',
  hora: '',
  senia: 0
};

const Eventos = () => {

  const [values, setValues] = useState(initial);
  const [purchaseId, setPurchaseId] = useState('');
  const [check, setCheck] = useState(false);
  const fecha = new Date();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value })
    handleOperation();
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'clientes'), { values, fecha });
    setPurchaseId(docRef.id);

    setTimeout(() => {
      setPurchaseId('')
      setValues(initial)
      setCheck(false)
    }, 15000);
  };

  const handleOperation = () => {
    if (values.name !== '' && values.apellido !== '' && values.email !== '' && values.tel !== ''
      && values.dir !== '' && values.fecha !== '' && values.hora !== '' && values.senia !== 0) {
      setCheck(true);
    }
  }

  return (
    <div className='m-4'>
      <h1 className='block text-center m-4 font-roboto font-bold text-3xl'>Reservas de Eventos</h1>
      <article className='text-center p-4 lg:p-12'>
        <h3 className='font-roboto font-semibold'>Texto descriptivo de contrato por alquiler de eventos</h3>
        <p className='text-justify p-3 md:px-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium, at facere dolorem asperiores sapiente ipsum autem, fugiat ipsam quis unde repellat architecto quaerat possimus. Reprehenderit tenetur illo sint magnam.
          Illum quibusdam nihil nesciunt accusantium possimus sit blanditiis veritatis libero labore. Exercitationem odio asperiores optio deleniti in praesentium, et officiis eos explicabo id animi quod at quae dolorum reprehenderit nisi!
          Aut adipisci magnam vitae perferendis tempora consequuntur ea nihil atque modi quam ut ex autem vero praesentium neque placeat laudantium odio maiores, repudiandae mollitia sapiente architecto. Corporis dolor qui nemo.
          Nobis ab nam quo iusto, at mollitia quia, itaque commodi facilis laborum exercitationem vel porro deserunt alias! Tempore fuga corrupti vitae mollitia culpa magnam recusandae reiciendis, est fugiat, porro accusamus?
          Ipsa dolore nesciunt alias nisi, hic laboriosam praesentium architecto tempora, deserunt, neque possimus? Assumenda aperiam sequi iste doloribus quos, blanditiis obcaecati accusantium, fuga omnis dicta, voluptatibus id. Placeat, quasi amet?
          Dolores, repellendus dicta? Dolorum rem odio dolorem illum eos rerum odit, pariatur alias quibusdam nulla fuga dolor ipsum? Libero adipisci dicta enim asperiores eaque. Ratione esse iure sit officiis in?
          Assumenda ipsam veniam maxime nulla. Atque ipsum hic accusantium ducimus quam temporibus molestias, voluptas aliquid omnis! Nihil neque doloremque architecto molestias ducimus in, voluptatibus minima veritatis dolor, quam temporibus a!
          Sed harum architecto placeat, repellendus, distinctio, quas eius possimus numquam laboriosam veritatis non. Dignissimos doloremque dolor consectetur, veniam est commodi amet iure quod. Minima odio numquam fuga dolorum pariatur debitis.
          Iusto quidem numquam reprehenderit molestiae quia veniam minus possimus cum explicabo quam commodi distinctio, saepe, rem praesentium magnam odio laborum hic cumque? Soluta quaerat asperiores hic totam esse quae eligendi.
          Ea similique quas dicta quidem asperiores veritatis in provident, autem molestiae, expedita dolorum. Hic, eaque. Perspiciatis aspernatur laborum porro, dolor quos cum dolorem, repellat rerum ex nesciunt in saepe. Assumenda.
        </p>
      </article>
      {purchaseId === '' ? (
        <>
          <form className='flex flex-col p-4 xl:px-20 xl:py-4' onSubmit={onSubmit}>
            <h2 className='text-center font-bold font-poppins'>Ingrese sus Datos</h2>
            <h3 className='text-center font-poppins p-2'>
              Todos los campos son requeridos
              <span className='text-red-600'>*</span>
            </h3>
            <div className='block p-2 sm:flex sm:w-full md:p-4 lg:px-10 xl:p-18'>
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Nombre *'
                type="text"
                name='name'
                value={values.name}
                onChange={handleOnChange}
                required />
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Apellido *'
                type="text"
                name='apellido'
                value={values.apellido}
                onChange={handleOnChange}
                required />
            </div>
            <div className='block p-2 sm:flex sm:w-full md:p-4 lg:px-10 xl:p-18'>
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Direccion'
                type="text"
                name='dir'
                value={values.dir}
                onChange={handleOnChange}
              />
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Email'
                type="email"
                name='email'
                value={values.email}
                onChange={handleOnChange}
              />
            </div>
            <div className='block p-2 sm:flex sm:w-full md:p-4 lg:px-10 xl:p-18'>
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Telefono *'
                type="number"
                name='tel'
                value={values.tel}
                onChange={handleOnChange}
                required />
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Dia *'
                type="date"
                name='fecha'
                value={values.fecha}
                onChange={handleOnChange}
                required />
            </div>
            <div className='block p-2 sm:flex sm:w-full md:p-4 lg:px-10 xl:p-18'>
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Hora *'
                type="time"
                name='hora'
                value={values.hora}
                onChange={handleOnChange}
                required />
              <input
                className="shadow-lg py-3 pl-4 mb-2 outline-none border-2 rounded-md w-full sm:w-[40%] sm:mx-auto lg:w-[40%]"
                placeholder='Seña $ *'
                type="number"
                name='senia'
                value={values.senia}
                onChange={handleOnChange}
                required />
            </div>
            {check && <button className='bg-gray-300 border-2 p-2 mx-auto rounded-lg hover:shadow-lg hover:shadow-black'>Confirmar Alquiler</button>}
          </form>
        </>
      ) : (
        <div className='block text-justify lg:text-center justify-center my-4 p-1 lg:p-8 2xl:px-60 2xl:mx-72 rounded-lg
        border-2 border-primario bg-gray-300'>
          <article className='font-poppins text-lg px-2 md:px-10'>
            {`El/La señor/a ${values.name.toLocaleUpperCase()}, ${values.apellido.toLocaleUpperCase()} realizo el dia ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} una reserva de evento, el que se llevara a cabo el dia ${values.fecha} dejando como seña un valor de ${values.senia}.
            La reserva contara con 3hs del buffet del establecimiento, parrillero y bebidas. Por otra parte contara con la cancha de futbol 7 a disposicion por la duracion del evento`}
          </article>
          <div className='block md:flex relative md:justify-evenly'>
            <div className=''>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Nombre: ${values.name.toLocaleUpperCase()}`}
              </h4>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Apellido: ${values.apellido.toLocaleUpperCase()}`}</h4>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Direccion: ${values.dir}`}
              </h4>
            </div>
            <div>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Email: ${values.email}`}
              </h4>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Tel: ${values.tel}`}
              </h4>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Seña: $${values.senia}`}
              </h4>
            </div>
            <div>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Fecha: ${values.fecha}`}
              </h4>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Hora: ${values.hora}`}
              </h4>
              <h4 className='text-md sm:text-lg font-bold m-4'>
                {`Clave: ${purchaseId}`}
              </h4>
            </div>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default Eventos;