
const Skills = () => {
    return (
        <div id='skills' className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Skills</h1>
            <hr className='w-24 border-b-2 border-fuchsia-600 mt-2' />
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-10 items-center justify-center">
                <div className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/PqbYBG5W/html.png" alt="" />
                    <h3 className="font-semibold">HTML</h3>
                </div>
                <div className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/4y2zBzNj/css.png" alt="" />
                    <h3 className="font-semibold">CSS</h3>
                </div>
                <div className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/7hR2gwKk/tailwind-css.png" alt="" />
                    <h3 className="font-semibold">Tailwind</h3>
                </div>
                <div className="text-center space-y-2 ">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/v89NqTWk/React-fotor-20230726124744.png" alt="" />
                    <h3 className="font-semibold">React</h3>
                </div>
                <div className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/k4nKCj2k/js.png" alt="" />
                    <h3 className="font-semibold">Javascript</h3>
                </div>
                <div
                    className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/HkyQ98GP/ex.png" alt="" />
                    <h3 className="font-semibold">Expressjs</h3>
                </div>
                <div
                    className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/s2FD5vym/download-8.png" alt="" />
                    <h3 className="font-semibold">Mongodb</h3>
                </div>
                <div
                    className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.postimg.cc/mZpCxyB5/node.png" alt="" />
                    <h3 className="font-semibold">NodeJs</h3>
                </div>
                <div
                    className="text-center space-y-2">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://i.ibb.co/nwVb7rp/image.png" alt="" />
                    <h3 className="font-semibold">Firebase</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;