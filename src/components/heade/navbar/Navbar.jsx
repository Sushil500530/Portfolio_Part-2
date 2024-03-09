import { FaBars } from "react-icons/fa";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
    const navLinks = <>
        <NavLink to={'#home'} className='text-xl font-medium border-b-2 w-[80px] flex items-center justify-center hover:border-b-2 border-b-white hover:-translate-y-[1px] transition ease-in-out'>
            Home
        </NavLink>
        <NavLink to='#skills' smooth className='text-xl font-medium hover:border-b-2 border-b-black  hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out border-b-2 hover:border-white border-b-transparent'>
            Skills
        </NavLink>
        <NavLink to='#projects' smooth className='text-xl font-medium hover:border-b-2 border-b-black hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out border-b-2 hover:border-white border-b-transparent'>
            Project
        </NavLink>
        <NavLink to='#about' smooth className='text-xl font-medium hover:border-b-2 border-b-black  hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out border-b-2 hover:border-white border-b-transparent'>
            About
        </NavLink>
        <NavLink to='#blog' smooth className='text-xl font-medium hover:border-b-2 border-b-black  hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out border-b-2 hover:border-white border-b-transparent'>
            Blog
        </NavLink>
        <NavLink to='#contact' smooth className='text-xl font-medium hover:border-b-2 border-b-black  hover:-translate-y-[1px] w-[80px] flex items-center justify-center transition ease-in-out border-b-2 hover:border-white border-b-transparent'>
            Contact
        </NavLink>
    </>
    return (
        <div className="relative bg-gradient-to-b from-[#1e1d1d] to-[#03046f]">
            <div className="container mx-auto ">
                <div className="py-2">
                    <div className="flex items-center justify-between lg:hidden">
                        <div>
                            <h2 className="text-6xl font-serif px-3 text-purple-500">S<span className="text-[#8e71ff]">H</span></h2>
                        </div>
                        <button className="p-2 text-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}><FaBars /></button>
                    </div>
                    <dialog id="my_modal_5" className="modal modal-top sm:modal-middle md:modal-top">
                        <div className="modal-box bg-gradient-to-r from-[#2f2f2f] to-[#500c7d]">
                            <ul className="flex flex-col items-center z-10 gap-2 md:flex-row md:gap-5 md:justify-center text-[16px] font-medium">
                                {navLinks}
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box w-[92%] mx-auto md:w-2/3 md:h-auto">
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
                            <h2 className="text-6xl font-serif px-3 text-purple-500">S<span className="text-[#8e71ff]">H</span></h2>
                        </div>
                        <div className="flex items-center justify-center gap-5 text-white">
                            {navLinks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;