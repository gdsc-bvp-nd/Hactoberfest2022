import { Link } from "react-router-dom";
import Footer from "../components/footer";
import MovieCard from "../components/movieCard";
import NavBar from "../components/navbar";
import MovieDB from "../movieDB";
import { useEffect } from 'react';

const Catalog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <NavBar />
            <div className=" w-full h-max pt-20 flex justify-center items-center bg-back text-white mb-10">
                <div className=" grid gap-4 grid-cols-1 grid-rows-15 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-5">
                    <Link to={`/${MovieDB[0].Id}`} data-aos='fade-up'>
                        <MovieCard poster={MovieDB[0].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[1].Id}`} data-aos='fade-up' data-aos-duration="2000">
                        <MovieCard poster={MovieDB[1].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[2].Id}`} data-aos='fade-up' data-aos-duration="2500">
                        <MovieCard poster={MovieDB[2].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[3].Id}`} data-aos='fade-up' data-aos-duration="3000">
                        <MovieCard poster={MovieDB[3].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[4].Id}`} data-aos='fade-up'>
                        <MovieCard poster={MovieDB[4].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[5].Id}`} data-aos='fade-up' data-aos-duration="2000">
                        <MovieCard poster={MovieDB[5].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[6].Id}`} data-aos='fade-up' data-aos-duration="2500">
                        <MovieCard poster={MovieDB[6].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[7].Id}`} data-aos='fade-up' data-aos-duration="3000">
                        <MovieCard poster={MovieDB[7].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[8].Id}`} data-aos='fade-up'>
                        <MovieCard poster={MovieDB[8].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[9].Id}`} data-aos='fade-up' data-aos-duration="2000">
                        <MovieCard poster={MovieDB[9].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[10].Id}`} data-aos='fade-up' data-aos-duration="2500">
                        <MovieCard poster={MovieDB[10].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[11].Id}`} data-aos='fade-up' data-aos-duration="3000">
                        <MovieCard poster={MovieDB[11].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[12].Id}`} data-aos='fade-up'>
                        <MovieCard poster={MovieDB[12].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[13].Id}`} data-aos='fade-up' data-aos-duration="2000">
                        <MovieCard poster={MovieDB[13].poster_link} />
                    </Link>
                    <Link to={`/${MovieDB[14].Id}`} data-aos='fade-up' data-aos-duration="2500">
                        <MovieCard poster={MovieDB[14].poster_link} />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Catalog;