import React from 'react'
import Esc from './escuela.jpg'

const Escuelas = () => {
    return (
        <div className='w-full h.full'>
            <div className='m-2'>
                <h1 className='text-center mt-4 font-poppins text-2xl'>Escuelita de Futbol Infantil</h1>
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
            </div>
            <h3 className='text-center mt-4 font-poppins text-xl'>Inscribite con nosotros</h3>
            <h5 className='text-center mt-4 font-poppins text-md'>Dejanos tus datos</h5>
            <form className='block md:flex'>
                <select name="infantil" className='flex text-center justify-center rounded-md w-[60%] py-2 my-2 sm:w-[30%] mx-auto border-2'>
                    <option value="Maculino">Maculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Mixto">Mixto</option>
                </select>
                <select name="infantil" className='flex text-center justify-center rounded-md w-[60%] py-2 my-2 sm:w-[30%] mx-auto border-2'>
                    <option value="futbol">futbol</option>
                    <option value="hokey">hokey</option>
                </select>
                {/* <label className='block text-center md:flex md:mt-2'>Categoria</label> */}
                <input type="date" className="shadow-lg py-2 outline-none border-2 rounded-md flex w-[60%] my-2 sm:w-[30%] mx-auto text-center" />
            </form>
            <div className="w-full h-[450px] my-8">
                <img src={Esc} alt="escuelita" className="w-full md:w-[60%] h-full mx-auto rounded-lg" />
            </div>
            <div className="w-full h-[450px]">
                <iframe className="w-full h-full"
                    title="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.0899519593395!2d-60.69154795663379!3d-32.95826917861951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7adb6c87ade13%3A0xd966a83432ff7835!2sMegaestadium!5e0!3m2!1ses-419!2sar!4v1675473554156!5m2!1ses-419!2sar"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Escuelas