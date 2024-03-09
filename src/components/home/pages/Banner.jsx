import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import Image from "../../../assets/image/sushil-bg-.png"
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from "../../../assets/image/sushil_resume (2).pdf"

const Banner = () => {
    AOS.init({
        delay: 0,
        duration: 1500,
        easing: 'easeOutExpo',
        offset: 120,
    });
    return (
        <div className=" container mx-auto p-5">
            <div id='home' className="flex items-center flex-col lg:flex-row md:flex-row gap-5 py-28 w-full">
                <div data-aos="fade-right" className="space-y-3 flex-1 w-full md:w-2/3 lg:w-2/3" >
                    <h3 className="text-5xl font-semibold">{`Hi, I'm `}<span className="text-[#8e71ff] ">Sushil...</span><span className="animate-ping">👋</span></h3>
                    <h4 className="text-2xl ">I am a <span className="text-3xl text-[#8e71ff]">
                        <TypeAnimation
                            sequence={[
                                'React Developer_',
                                1000,
                                'Junior Web Developer_',
                                1000,
                                'MERN Stack Developer_',
                                1000]
                            }
                            wrapper="span" speed={50} className='text-3xl font-bold' repeat={Infinity}
                        />
                    </span></h4>
                    <h4 className="">{`Hey, I'm Sushil. I am a passionate React || Front-End Web Developer with a mission to craft remarkable digital experiences. on the other hand roducing quality product, research, working with expertises is my main objective. i eager to learn and explore new technologis..!`}</h4>
                    <nav>
                        <ul className=" flex items-start gap-3">
                            <span className="tooltip tooltip-bottom" data-tip="Facebook">
                                <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link href="https://tinyurl.com/46j32cs7" target="_blank" ><FaFacebook className="w-full h-full p-1 cursor-pointer " /></Link></li>
                            </span>
                            <span className="tooltip tooltip-bottom" data-tip="Linkedin">
                                <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link href="https://tinyurl.com/46j32cs7" target="_blank"><FaLinkedinIn className="w-full h-full p-1 cursor-pointer " /></Link></li>
                            </span>
                            <span className="tooltip tooltip-bottom" data-tip="Github">
                                <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link href="https://github.com/Sushil500530" target="_blank"><FaGithub className="w-full h-full p-1 cursor-pointer " /></Link></li>
                            </span>
                            <span className="tooltip tooltip-bottom" data-tip="Instagram">
                                <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link href="#"><FaInstagramSquare className="w-full h-full p-1 cursor-default " /></Link></li>
                            </span>
                            <span className="tooltip tooltip-bottom" data-tip="Twitter">
                                <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><Link href="#"><FaTwitter className="w-full h-full p-1 cursor-default " /></Link></li>
                            </span>
                        </ul>
                    </nav >
                    <div>
                       <button><a href={Resume} download className="btn btn-info mt-5 flex items-center rounded-full text-base"><span><IoMdCloudDownload className="text-2xl" /></span>Downlaod Resume </a></button>
                    </div>
                </div>
                <div data-aos="fade-left" className='w-full md:w-[30%] lg:w-[40%] relative '>
                    <div className='w-[300px] md:w-[220px] lg:w-[400px] rounded-full mx-auto h-[300px] md:h-[220px] lg:h-[400px] border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff]'>
                        <img src={Image} className='w-full h-full rounded-full' alt="profile-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;