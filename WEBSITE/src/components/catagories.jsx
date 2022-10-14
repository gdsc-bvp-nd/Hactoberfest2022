import { Link } from 'react-router-dom';
import '../index.css';

export default function Catagory() {
    return (
        <div className='w-full h-max flex justify-center items-center flex-col xl:px-80' id='frame'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 text-4xl font-regular px-7 py-2 mb-5 self-start' data-aos='fade-right'>CATEGORY</h1>
            <div className='w-max h-ful grid grid-cols-1 grid-rows-6 gap-2 mb-5 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2' id="grid">
                <Link to='/explore' data-aos='fade-up'>
                    <div className="w-80 h-32 bg-cover bg-adventure bg-center rounded-md xl:w-96 xl:hover:scale-y-110 xl:hover:duration-300 xl:hover:ease-in-out">
                        <div className=' bg-opacity-30 bg-black w-full h-full flex'>
                            <h1 className='text-[#b2dcec] text-right w-full font-bold self-end text-3xl m-5'>Adventure</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/explore' data-aos='fade-up'>
                    <div className="w-80 h-32 bg-cover bg-comedy bg-center rounded-md xl:w-96 xl:hover:scale-y-110 xl:hover:duration-300 xl:hover:ease-in-out ">
                        <div className=' bg-opacity-30 bg-black w-full h-full flex'>
                            <h1 className='text-[#d1dd83] text-right w-full font-bold self-end text-3xl m-5'>Comedy</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/explore' data-aos='fade-up'>
                    <div className="w-80 h-32 bg-cover bg-drama bg-center rounded-md xl:w-96 xl:hover:scale-y-110 xl:hover:duration-300 xl:hover:ease-in-out">
                        <div className=' bg-opacity-30 bg-black w-full h-full flex'>
                            <h1 className='text-[#dd8392] text-right w-full font-bold self-end text-3xl m-5'>Drama</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/explore' data-aos='fade-up'>
                    <div className="w-80 h-32 bg-cover bg-horror bg-center rounded-md xl:w-96 xl:hover:scale-y-110 xl:hover:duration-300 xl:hover:ease-in-out">
                        <div className=' bg-opacity-30 bg-black w-full h-full flex'>
                            <h1 className='text-[#83cbdd] text-right w-full font-bold self-end text-3xl m-5'>Horror</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/explore' data-aos='fade-up'>
                    <div className="w-80 h-32 bg-cover bg-romantic bg-center rounded-md xl:w-96 xl:hover:scale-y-110 xl:hover:duration-300 xl:hover:ease-in-out">
                        <div className=' bg-opacity-30 bg-black w-full h-full flex'>
                            <h1 className='text-[#f7bdbd] text-right w-full font-bold self-end text-3xl m-5'>Romantic</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/explore' data-aos='fade-up'>
                    <div className="w-80 h-32 bg-cover bg-scifi bg-center rounded-md xl:w-96 xl:hover:scale-y-110 xl:hover:duration-300 xl:hover:ease-in-out">
                        <div className=' bg-opacity-30 bg-black w-full h-full flex'>
                            <h1 className='text-[#bbd1ff] text-right w-full font-bold self-end text-3xl m-5 '>Sci-Fi</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}