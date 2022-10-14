import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function Sign() {
    const nav = useNavigate()
    return (
        <div className="w-full h-screen bg-back flex justify-center items-center flex-col">
            <div className='w-[400px] h-max bg-[#f3e2ff] rounded-md p-10'>
                <h1 className='w-full text-center font-bold text-2xl mb-5'>SignIn or SignUp</h1>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    fullWidth
                    margin='dense'
                    type={'email'}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Password"
                    multiline
                    maxRows={4}
                    fullWidth
                    margin='dense'
                    pas
                />
            </div>
            <div className='w-[400px] h-max py-3 flex justify-between items-center'>
                <button className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 w-1/2 border-4 font-bold mr-1 border-purple-600 py-3 rounded-md'>SignUp</button>
                <button className='lg:flex font-semibold text-white w-1/2 py-4 justify-center bg-slate-600 rounded-md bg-gradient-to-r ml-1 from-[#9625b8] to-[#d307b1]' >SignIn</button>
            </div>
                <button className='w-[400px] text-center text-purple-500 py-5' onClick={()=>{ nav(-1); }}>Go Back</button>
        </div>
    );
}