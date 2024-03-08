import { MdDetails } from "react-icons/md";
import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

const BlogPage = () => {
    // AOS.init({
    //     delay: 0,
    //     duration: 1500,
    //     easing: 'easeOutExpo',
    //     offset: 120,
    // });
    return (
        <div id="blog" className="py-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Blogs</h1>
            <hr className='w-32 border-b-2 border-fuchsia-600 mt-2' />
            <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                <>
                    <div data-aos="flip-left" className="cursor-pointer border w-full h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                        <div>
                            <img src={'https://i.postimg.cc/gJf8xK34/achivements.jpg'} className='w-full h-[430px]' alt="project-image" />
                        </div>
                        <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                            <div className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                                <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'> <Link to={'liveLink'} target='_blank' className='flex items-center'><span><MdDetails className="w-6 h-6" /></span>Show Details</Link></button>
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div data-aos="flip-left"  className="cursor-pointer border w-full h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                        <div>
                            <img src={'https://i.postimg.cc/gJf8xK34/achivements.jpg'} className='w-full h-[430px]' alt="project-image" />
                        </div>
                        <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                            <div className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                                <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'> <Link to={'liveLink'} target='_blank' className='flex items-center'><span><MdDetails className="w-6 h-6" /></span>Show Details</Link></button>
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div data-aos="flip-left"  className="cursor-pointer border w-full h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                        <div>
                            <img src={'https://i.postimg.cc/gJf8xK34/achivements.jpg'} className='w-full h-[430px]' alt="project-image" />
                        </div>
                        <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                            <div className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                                <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'> <Link to={'liveLink'} target='_blank' className='flex items-center'><span><MdDetails className="w-6 h-6" /></span>Show Details</Link></button>
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div data-aos="flip-left"  className="cursor-pointer border w-full h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                        <div>
                            <img src={'https://i.postimg.cc/gJf8xK34/achivements.jpg'} className='w-full h-[430px]' alt="project-image" />
                        </div>
                        <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                            <div className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                                <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'> <Link to={'liveLink'} target='_blank' className='flex items-center'><span><MdDetails className="w-6 h-6" /></span>Show Details</Link></button>
                            </div>
                        </div>
                    </div>
                </>
                <div data-aos="flip-right" >

                </div>
            </div>
        </div >
    );
};

export default BlogPage;