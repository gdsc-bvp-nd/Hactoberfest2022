import "../index.css";
import MovieCard from "./movieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import MovieDB from "../movieDB";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="w-full flex h-max mb-6 lg:mb-10 px-3 flex-row xl:px-80 xl:justify-center xl:items-center" id="trending">
      <div id="TextBox" className="hidden xl:flex xl:w-1/2 flex-col justify-center items-start " data-aos='fade-right'>
        <div className=" lg:px-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 lg:text-[2.4rem]">TRENDING</div>
        <div className=" lg:px-8 lg:mt-6 text-[#b39cca]">
          Tinylig terrorresa. Teranade hemivena. Gylilingar pybelt. Laheten
          sarissa. Biosion. Betalvärd poheten. Ponelig. Epigon jehuning. Gångpeng
          alande. Hemit bymiligen.
        </div>
        <Link to='/explore'>
          <button className='my-3 bg-[#d7bef1] py-1 px-3 rounded-md lg:mx-8 md:text-xl md:my-5'>Explore Now</button>
        </Link>
      </div>
      <div id="Slider" className="w-full h-max xl:w-2/3" data-aos='fade-left'>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 font-bold my-5 text-4xl mx-4 xl:hidden" data-aos='fade-up-right'>TRENDING</h1>
        <div className="flex">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards,Autoplay]}
            className="w-2/3 h-max flex xl:w-1/2 md:translate-x-1/4"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <Link to={`/${MovieDB[0].Id}`}>
                <MovieCard poster={MovieDB[0].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[1].Id}`}>
                <MovieCard poster={MovieDB[7].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[2].Id}`}>
                <MovieCard poster={MovieDB[2].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[3].Id}`}>
                <MovieCard poster={MovieDB[3].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[4].Id}`}>
                <MovieCard poster={MovieDB[4].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[5].Id}`}>
                <MovieCard poster={MovieDB[5].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[6].Id}`}>
                <MovieCard poster={MovieDB[6].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[7].Id}`}>
                <MovieCard poster={MovieDB[7].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[8].Id}`}>
                <MovieCard poster={MovieDB[8].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[9].Id}`}>
                <MovieCard poster={MovieDB[9].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[10].Id}`}>
                <MovieCard poster={MovieDB[10].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[11].Id}`}>
                <MovieCard poster={MovieDB[11].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[12].Id}`}>
                <MovieCard poster={MovieDB[12].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[13].Id}`}>
                <MovieCard poster={MovieDB[13].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[14].Id}`}>
                <MovieCard poster={MovieDB[14].poster_link} />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trending;
