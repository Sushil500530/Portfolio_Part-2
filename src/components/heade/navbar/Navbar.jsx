/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? 'text-xl font-medium border-b-2 w-[80px] flex items-center justify-center hover:border-b-2 border-b-black hover:-translate-y-[1px] transition ease-in-out' : "border-b-2 border-b-transparent hover:border-b-black hover:border-b-2 border-b-black transition ease-in-out  hover:-translate-y-[1px] w-[80px] flex items-center justify-center text-xl"}>
            Home
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) =>
            isActive ? 'text-xl font-medium hover:border-b-2 border-b-black  hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out' : "border-b-2 border-b-transparent hover:border-b-black hover:border-b-2 border-b-black transition ease-in-out  hover:-translate-y-[1px] w-[80px] flex items-center justify-center text-xl"}>
            Project
        </NavLink>
        <NavLink to='/services' className={({ isActive }) =>
            isActive ? 'text-xl font-medium hover:border-b-2 border-b-black transition  hover:-translate-y-[1px] w-[80px] flex items-center justify-center ease-in-out' : "border-b-2 border-b-transparent hover:border-b-black hover:border-b-2 border-b-black transition ease-in-out  hover:-translate-y-[1px] w-[80px] flex items-center justify-center text-xl"}>
            Service
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) =>
            isActive ? 'text-xl font-medium border-b-2 hover:border-b-2 border-b-black  hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out' : "border-b-2 border-b-transparent hover:border-b-black hover:border-b-2 border-b-black transition ease-in-out  hover:-translate-y-[1px] w-[80px] flex items-center justify-center text-xl"}>
            Contact
        </NavLink>
    </>
    return (
        <div className="w-full bg-blue-50 h-screen">
            <div className="container mx-auto">
                <div>
                    <div className="flex items-center justify-between lg:hidden">
                        <h1 className="p-2 text-3xl font-bold ">Sushil</h1>
                        <button className="p-2 text-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}><FaBars /></button>

                    </div>
                    <dialog id="my_modal_5" className="modal modal-top sm:modal-middle md:modal-top">
                        <div className="modal-box">
                            <ul className="flex flex-col items-center z-10 gap-2 md:flex-row md:gap-5 md:justify-center text-[16px] font-medium">
                                {navLinks}
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box w-[92%] md:w-2/3 md:h-auto">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">✕</button>
                                        </form>
                                    </div>
                                </dialog>
                            </ul>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle bg-red-500 text-white btn-ghost absolute right-2 top-2 hover:text-black">✕</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center justify-between px-5 py-2">
                        <div>
                            <h2 className="text-3xl font-bold">Sushil</h2>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            {navLinks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;