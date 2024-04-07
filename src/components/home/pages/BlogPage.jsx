import { MdDetails } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogPage = () => {
    const blogData = [
        {
            id: 1,
            link: "https://tinyurl.com/59p5f6m9",
            image: "https://i.ibb.co/ThVXcd5/react.png"
        },
        {
            id: 2,
            link: "https://with.zonayed.me/tag/javascript",
            image: "https://i.ibb.co/JqDNNTC/js.jpg"
        },
        {
            id: 3,
            link: "https://tinyurl.com/2ara77xt",
            image: "https://i.ibb.co/hKzy6YP/redux-img.png"
        },
        {
            id: 4,
           link: "https://tinyurl.com/bdv5ttjp",
            image: "https://i.ibb.co/Lx25Cfr/mongoose.png"
        },
        {
            id: 5,
            link: "https://tinyurl.com/2ztrncdx",
            image: "https://i.ibb.co/rkkbKWZ/nextjs.png"
        }
    ]
    return (
        <div id="blog" className="py-12 container mx-auto p-5">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Blogs</h1>
            <hr className='w-32 border-b-2 border-fuchsia-500 mt-2' />
            <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                {
                    blogData?.map(blog => <div key={blog?.id} data-aos="flip-down" className="cursor-pointer border w-full h-[330px] lg:h-[300px] xl:h-[380px] 2xl:h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                        <div><img src={blog?.image} className='w-full h-[430px]' alt="project-image" /></div>
                        <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                            <div className='absolute w-full h-auto top-[40%] flex flex-col items-center justify-center'>
                                 <Link to={blog?.link} target='_blank' className='flex items-center'>
                                <button className='btn bg-gradient-to-l from-purple-500 to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-white hover:ease-in-out'><span><MdDetails className="w-6 h-6" /></span>Show Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
                <div data-aos="flip-right" ></div>
            </div>
        </div >
    );
};

export default BlogPage;