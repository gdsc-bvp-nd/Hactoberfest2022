import '../index.css'
import Aos from 'aos';
import { useEffect } from 'react';

const CreatorsPage = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
        window.scrollTo(0, 0);
    })
    return (
        <div className=' w-full h-max md:h-screen xl:h-screen flex bg-creator bg-cover flex-col bg-fixed'>
            <div className='w-full h-max backdrop-blur-sm pt-10'>
                <div className='w-full h-96 flex justify-center items-center flex-col p-10'>
                    <h1 className='text-5xl text-start tracking-wider m-5 text-[#fff7f7]'>It's always about<br></br> the <b className='text-[#d4c9b4] font-extrabold'>people</b></h1>
                    <p className=' w-full md:px-36 xl:w-2/5 m-5 text-xl text-justify text-[#f0f0f0] font-semibold'>We are good ones. And so are our visitors. We wouldn't have it any other way. <br></br>Meet the team</p>
                </div>
                <div className='w-full h-max bg-[#070f74] flex justify-center items-center'>
                    <div className='w-full h-max md:h-max md:pb-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 px-5 bg-[#070f74] xl:w-1/2'>
                        <a href='https://www.instagram.com/ishika_sunil/' data-aos='zoom-out-up'>
                            <div className=' w-auto h-max rounded-xl shadow-xl p-10 flex justify-center items-center flex-col mt-5' id='parent'>
                                <img src={require('../assets/creators/uncle.jpeg')} className='rounded-[50%] aspect-square w-1/2 opacity-80' alt='' />
                                <p className='text-[#c1c7ff] mt-10 text-3xl font-bold'>Ishika Sunil</p>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/this_is_hiten/'>
                            <div className=' w-auto h-max rounded-xl shadow-xl p-10 flex justify-center items-center flex-col mt-5 md:mt-0' id='parent'>
                                <img src={require('../assets/creators/hiten.jpg')} className='rounded-[50%] aspect-square w-1/2 opacity-80' alt='' />
                                <p className='text-[#c1c7ff] mt-10 text-3xl font-bold'>Hiten Vats</p>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/_paritosh.jha_/'>
                            <div className=' w-auto h-max rounded-xl shadow-xl p-10 flex justify-center items-center flex-col mt-5 md:mt-0' id='parent'>
                                <img src={require('../assets/creators/parry.jpg')} className='rounded-[50%] aspect-square w-1/2 opacity-80' alt='' />
                                <p className='text-[#c1c7ff] mt-10 text-2xl md:text-2xl xl:text-3xl font-bold'>Paritosh Kumar Jha</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatorsPage;
