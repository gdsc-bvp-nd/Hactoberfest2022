import '../index.css';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDB from '../movieDB';


function Detail() {

    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState();
    const [disc, setDisc] = useState();
    const [poster, setPoster] = useState();
    const [back, setBack] = useState();
    const [trailer, setTrailer] = useState();

    useEffect(() => {
        console.log(params.id);
        for (let i = 0; i < 15; i = i + 1) {
            console.log(i);
            if (params.id === MovieDB[i].Id) {
                const movie = MovieDB[i];
                console.log(movie);
                setTitle(movie.name);
                setDisc(movie.description);
                setPoster(movie.poster_link);
                setBack(movie.background_img);
                setTrailer(movie.trailer_link);
            }
        }
    },[params.id]);

    return (
        <div className='w-full h-max justify-center items-center bg-white bg-cover xl:h-screen' style={{ backgroundImage: `url(${back})` }}>
            <div className='w-full h-full backdrop-blur-2xl bg-opacity-30 bg-black flex flex-col-reverse md:p-10 xl:flex-row xl:p-20'>
                <div className='w-full h-full flex justify-center flex-col p-5 md:items-center xl:w-2/3' data-aos='fade-right'>
                    <button className='self-start mb-10 -translate-x-1/2 xl:flex hidden'>
                        <IoMdArrowRoundBack color='white' size={64} onClick={() => navigate(-1)} />
                    </button>
                    <h1 className='text-[#f5f5f5] font-bold text-4xl md:w-full md:text-5xl xl:text mb-10'>{title}</h1>
                    <p className='text-white text-sm md:w-full md:text-xl'>{disc}</p>
                    <div className='w-full h-12 flex mt-5 items-center md:mt-10'>
                        <img src={require('../assets/imdb.png')} className='aspect-auto mr-2 my-1' alt='' />
                        <p className='text-4xl font-bold text-[#F1F1F1]'>9.2</p>
                    </div>
                    <div className='w-full flex justify-evenly my-4 md:w-max self-start xl:mt-7'>
                        <button className='px-3 py-1 bg-[#f5f5f5] rounded-xl my-3 shadow-lg font-semibold text-slate-800 md:mx-5'>Add to Watch Later</button>
                        <button className='px-3 py-1 border-4 border-[#f5f5f5] rounded-xl my-3 shadow-lg font-semibold text-[#f5f5f5] md:mx-5'>
                            <a href={trailer}>Watch Trailer</a>
                        </button>
                    </div>
                    <p className='text-white md:w-full md:text-xl'>Caste: John duo, Parry Toes, Uncle Uncle</p>
                    <p className='text-white md:w-full md:text-xl'>Director: NoOne</p>
                    <p className='text-white md:w-full md:text-xl'>Producer: Palki Kumari</p>
                    <p className='text-white md:w-full md:text-xl'>Production Studio: BVP Prod Ltd</p>
                </div>
                <img src={poster} className='xl:w-1/3 rounded-xl shadow-lg m-10 aspect-auto' alt='' data-aos='fade-left' />
            </div>
        </div>
    );
}

export default Detail;

