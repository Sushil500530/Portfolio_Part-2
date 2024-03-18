import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer footer-center mt-8 pb-5 lg:p-10  rounded text-white  container mx-auto p-5">
            <footer className="w-full h-full">
                <nav>
                    <ul className=" flex items-center justify-center gap-3">
                        <span className="tooltip tooltip-bottom" data-tip="Facebook">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link to="https://tinyurl.com/46j32cs7" target="_blank" ><FaFacebook className="w-full h-full p-1 cursor-pointer " /></Link></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Linkedin">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link to="https://www.linkedin.com/in/sushil-hemrom-b39b762b8/" target="_blank"><FaLinkedinIn className="w-full h-full p-1 cursor-pointer " /></Link></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Github">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link to="https://github.com/Sushil500530" target="_blank"><FaGithub className="w-full h-full p-1 cursor-pointer " /></Link></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Instagram">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link to="https://www.instagram.com/sushil500530/" target="_blank"><FaInstagramSquare className="w-full h-full p-1 cursor-pointer " /></Link></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Twitter">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link to="https://twitter.com/Sushil500530Roy" target="_blank"><FaTwitter className="w-full h-full p-1 cursor-pointer " /></Link></li>
                        </span>
                    </ul>
                </nav >
                <aside className="text-base font-medium">
                    <p>Copyright © 2024 - All right reserved by Sushil Hemrom</p>
                </aside>
            </footer >
        </div >
    );
};

export default Footer;