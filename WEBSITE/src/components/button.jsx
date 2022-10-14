import '../index.css'
import { IoMdPlay } from 'react-icons/io';
const Btn = () => {
    return (
        <div className='btn flex flex-row items-center w-36 justify-between px-3 py-2 border-2 border-[#8a39e1] rounded-md mt-5'>
            <IoMdPlay color='#8a39e1' />
            <h1 className='text-[#8a39e1] original_font'>Watch Now</h1>
        </div>
    );
}

export default Btn;