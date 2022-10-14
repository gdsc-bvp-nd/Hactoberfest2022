import '../index.css'
import { BiSearch, BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const NavBar = () => {

    function ToggleSlide() {
        const slide = document.querySelector('#SlidingNav');
        slide.classList.toggle('-translate-x-full');
    }

    return (
        <>
            <nav className='w-full h-20 bg-transparent flex lg:px-6 backdrop-blur-sm justify-between px-3 md:px-5 xl:px-[12.5rem] 2xl:px-[15rem] top-0 absolute z-40' data-aos='fade-down'>
                <div className='lg:w-2/3 sm:w-max flex items-center sm:h-full' id='LeftPart'>
                    <img src={require('../assets/Logo.png')} alt="Logo" className=' w-[67px] h-[30px] sm:mr-5 mr-3 md:mr-3' />
                    <div className='w-[4px] h-10 bg-white rounded-md opacity-30 sm:mr-5 mr-3' />
                    <button className='font-semibold text-white px-3 py-1.5 bg-slate-600 rounded-md bg-gradient-to-r from-[#5b72e5] to-[#8a39e1]' >Explore Premium</button>
                    <ul className=' hidden text-white lg:flex flex-row mx-2.5'>
                        <Link to='/'>
                            <li className='mx-2.5 text-md'>Home</li>
                        </Link>
                        <Link to='/'>
                            <li className='mx-2.5 text-md'>Trending</li>
                        </Link>
                        <Link to='/explore'>
                            <li className='mx-2.5 text-md'>Explore</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex items-center justify-end w-max h-full'>
                    <div className='py-1.5 border-b mx-5 border-[#9ca3af] hidden justify-between lg:flex'>
                        <input placeholder='Search' className='appearance-none bg-transparent outline-none text-white' />
                        <BiSearch color='#9ca3af' size={30} />
                    </div>
                    <Link to='/sign'>
                        <button className=' hidden lg:flex font-semibold text-white w-20 py-2 justify-center bg-slate-600 rounded-md bg-gradient-to-r from-[#9625b8] to-[#d307b1]' >Sign In</button>
                    </Link>
                    <BiMenu color='#9ca3af' className='lg:hidden' size={40} onClick={() => { ToggleSlide() }} />
                </div>
            </nav>
            <div className=' overflow-hidden z-50 -translate-x-full transition duration-200 ease-in-out w-full h-screen absolute top-0 right-0 backdrop-blur-3xl bg-slate-800 bg-opacity-20 p-12 flex justify-center items-center flex-col lg:hidden' id="SlidingNav">
                <ImCross color='white' size={30} className=' m-10 absolute top-0 left-0' onClick={() => { ToggleSlide() }} />
                <div className='py-1.5 border-b mx-5 border-[#9ca3af] justify-between flex mb-16'>
                    <input placeholder='What you want?' className='appearance-none bg-transparent outline-none text-white' />
                    <BiSearch color='#9ca3af' size={30} />
                </div>
                <ul className='text-white text-center'>
                    <Link to='/'>
                        <li className='mx-2.5 text-md m-2' onClick={() => { ToggleSlide() }}>Home</li>
                    </Link>
                    <Link to='/'>
                        <li className='mx-2.5 text-md m-2' onClick={() => { ToggleSlide() }}>Trending</li>
                    </Link>
                    <Link to='/explore'>
                        <li className='mx-2.5 text-md m-2' onClick={() => { ToggleSlide() }}>Explore</li>
                    </Link>
                </ul>
                <button className=' m-10 absolute top-0 right-0 flex font-semibold text-white w-20 py-2 justify-center bg-slate-600 rounded-md bg-gradient-to-r from-[#9625b8] sm:to-[#d307b1]' >Sign In</button>
            </div>
        </>
    );
}

export default NavBar;