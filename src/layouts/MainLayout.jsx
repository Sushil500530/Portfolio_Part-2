import { Outlet } from "react-router-dom";
import Navbar from "../components/heade/navbar/Navbar";
import { useEffect, useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

const MainLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
        <div  id="home" className="relative w-full h-full z-10">
            <div className="absolute bg-black w-full h-full opacity-25 -z-50"></div>
            <div className={`w-full z-20 relative ${isScrolled ? 'block' : 'hidden'}`}>
                <Link to={'#home'} smooth className="fixed bottom-3 right-3 animate-bounce w-12 h-12 rounded-full bg-purple-500 text-black font-bold">Sush</Link>
            </div>   
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;