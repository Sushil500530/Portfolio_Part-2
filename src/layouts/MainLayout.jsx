import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";
import { useEffect, useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { IoIosArrowUp } from "react-icons/io";
import Preloader from "../components/shared/Preloader";
const MainLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const stackTime = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
        stackTime()
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    return (
        <>
            {
                isLoading ? <Preloader /> :
                    <div id="home" className="relative w-full h-full z-10 text-white bg-gradient-to-b from-[#1e1d1d] to-[#03046f]">
                        {/* <div className="absolute bg-gradient-to-r from-[#1e1d1d] to-[#03046f] w-full h-full -z-50"></div> */}
                        <div className={`w-full z-20 relative ${isScrolled ? 'block' : 'hidden'}`}>
                            <Link to={'#home'} smooth className="fixed bottom-3 right-5 animate-bounce rounded-lg font-bold"><span className="w-full h-full flex items-center justify-center">
                                <IoIosArrowUp className="btn btn-square bg-[#704ff2] outline-none border-none hover:bg-[#704ff2] text-5xl rounded-lg transition ease-in-out hover:text-white" />
                            </span></Link>
                        </div>
                        <Navbar />
                        <Outlet />
                    </div>
            }
        </>
    );
};

export default MainLayout;