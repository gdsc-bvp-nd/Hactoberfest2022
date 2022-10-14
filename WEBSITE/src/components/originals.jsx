import '../index.css'
import Btn from './button';

const Originals = () => {
    return (
        <div className='w-full justify-center flex lg:items-center lg:justify-center'>
            <div className='w-full bg-cover p-2 md:p-4 lg:bg-[#0c0c0c] lg:flex-row lg:flex lg:justify-evenly lg:w-4/5 lg:rounded-md lg:p-16'>
                <div className='w-full h-full m-2 p-4 backdrop-blur-md rounded-md md:p-8 '>
                    <img src={require('../assets/originLogo.png')} className='w-32 mb-10 lg:w-64' alt='' />
                    <h1 className='text-[#8236d4] text-xl my-2 font-bold lg:text-5xl tracking-wide lg:mb-5'>LA LA LAND</h1>
                    <p className='text-[#b39cca] text-md lg:mb-10 original_font' >The story of aspiring actress Mia and dedicated jazz musician Sebastian, who struggle to make ends meet while pursuing their dreams in a city known for destroying hopes and breaking hearts.</p>
                    <Btn/>
                </div>
                <img src={require('../assets/original.png')} alt='' className='hidden lg:flex lg:w-[800px] aspect-video' />
            </div>
        </div>
    );
}

export default Originals;