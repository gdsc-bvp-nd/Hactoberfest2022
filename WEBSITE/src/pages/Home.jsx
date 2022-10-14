import Catagory from "../components/catagories";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Originals from "../components/originals";
import SlidingCards from "../components/slidingCards";
import Trending from "../components/trending";
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <NavBar />
            <SlidingCards />
            <Originals />
            <Trending/>
            <Catagory/>
            <Footer />
        </>
    );
}

export default Home;