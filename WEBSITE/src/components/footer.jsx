import "../index.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" bg-[#100022] w-full h-40 flex tracking-wide justify-center items-center flex-col">
            <p className="text-md text-[#e3d5f1] mb-3">All rights are reserved by ™EyeMate</p>
            <p className="text-md text-[#cea3ff] mb-3" >
                <Link to={'./creators'}>
                Creators Shelf
                </Link>
            </p>
            <p className="text-md text-[#9778ba]">Terms And Condition</p>
        </footer>
    );
}

export default Footer;