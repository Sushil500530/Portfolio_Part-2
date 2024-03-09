import { Outlet } from "react-router-dom";
import Navbar from "../components/heade/navbar/Navbar";
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
            }, 2000);
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
                    <div id="home" className="relative w-full h-full z-10 text-white">
                        {/* <div className="absolute bg-gradient-to-r from-[#1e1d1d] to-[#03046f] w-full h-full -z-50"></div> */}
                        <div className={`w-full z-20 relative ${isScrolled ? 'block' : 'hidden'}`}>
                            <Link to={'#home'} smooth className="fixed bottom-3 right-3 animate-bounce w-12 h-12 rounded-full bg-[#8e71ff] text-black font-bold"><span className="w-full h-full flex items-center justify-center">
                                <IoIosArrowUp className="text-5xl text-black transition ease-in-out hover:text-white" />
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