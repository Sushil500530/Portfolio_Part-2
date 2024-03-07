/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";

const Navbar = () => {

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
                                <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black" >Home</button>
                                <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black">Project</button>
                                <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black">Service</button>
                                <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black">Contact</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box w-[92%] md:w-2/3 ">
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
                            <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black" >Home</button>
                            <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black">Project</button>
                            <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black">Service</button>
                            <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;