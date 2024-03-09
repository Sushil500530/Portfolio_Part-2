import Image from "../../../assets/image/sushil-bg-.png";
import { NavHashLink as Link } from "react-router-hash-link";

const About = () => {
    return (
        <div id="about" className="w-full py-12 container mx-auto p-5">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">About Me</h1>
            <hr className='w-40 border-b-2 border-fuchsia-600 mt-2' />
            <div className="flex flex-col lg:flex-row gap-5 w-full h-auto items-center pt-10">
                <div data-aos="fade-right" className='w-full md:w-[30%] lg:w-[40%] relative '>
                    <div className='w-[300px] md:w-[220px] lg:w-[300px] rounded-full mx-auto h-[300px] md:h-[220px] lg:h-[300px] border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff]'>
                        <img src={Image} className='w-full h-full rounded-full' alt="profile-image" />
                    </div>
                </div>
                <div data-aos="fade-left" className='border p-4 bg-gradient-to-l from-[#40407a] to-black rounded-md border-b-8 border-[#7d5fff] hover:border-fuchsia-500'>
                    <p className='text-[17px]'>
                        {`Hi👋 My name is Sushil Hemrom. A Passionate React || Front-End Web Developer with a mission to craft remarkable digital experiences. on the other hand roducing quality product, research, working with expertises is my main objective. i eager to learn and explore new technologis..!.`}
                    </p>
                    <h2 className='font-medium text-[18px]'>Name : Sushil Hemrom</h2>
                    <h2 className='font-medium text-[18px]'>Phone Number : +8801767122497</h2>
                    <h2 className='font-medium text-[18px]'>Address : Chirirbondar, Dinajpur</h2>
                    <h2 className='font-medium text-[18px]'>Email : sushil500530@gmail.com</h2>
                    <Link to={'#contact'} smooth>
                        <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'>Hire Me</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;