/* eslint-disable no-unused-vars */
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbScanEye } from "react-icons/tb";
import { useState } from "react";
import ShowProject from "./modal/ShowProject";
import useProjectData from "../../hooks/useProjectData";
import Loader from "../../shared/Loader";



const Projects = () => {
    const [projects, refetch, isLoading] = useProjectData();
    const [findProject,setFindProject] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    refetch();
    function openModal() {
        setIsOpen(true)
    }
    const handleView =async(id) => {
         openModal();
        const data = await projects.find(findI =>findI?._id === id);
        setFindProject(data)
       
    }

    if(isLoading || projects?.length < 0){
        return <Loader />
    }
    
    return (
        <>
            <ShowProject isOpen={isOpen} setIsOpen={setIsOpen} findProject={findProject} />
            <div id="projects" className="py-12 relative container mx-auto p-5">
                <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Projects</h1>
                <hr className='w-32 border-b-2 border-fuchsia-500 mt-2' />
                <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                    {
                        projects?.length > 0 && projects?.map((item,) => <div key={item?._id}>
                            <div data-aos="flip-left" className="cursor-pointer border w-full h-[330px] lg:h-[300px] xl:h-[380px] 2xl:h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                                <div>
                                    <img src={item?.bgImage} className='w-full h-[430px]' alt="project-image" />
                                </div>
                                <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                                    <div className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                                        <button onClick={()=>handleView(item?._id)} className='btn bg-gradient-to-l from-purple-500 to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-black border-none mt-5 hover:text-white hover:ease-in-out'><span><FaRegEye /></span>View Project</button>
                                        <button className='btn bg-gradient-to-l from-purple-500 to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-black border-none mt-5 hover:text-white hover:ease-in-out'> <Link to={item?.liveLink} target='_blank' className='flex items-center'><span><TbScanEye className="w-6 h-6" /></span>Live Show</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    <div data-aos="flip-up"> </div>
                </div>
            </div >
        </>
    );
};

export default Projects;