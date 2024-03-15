import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="w-full h-[50vh] flex items-center justify-center flex-col gap-5">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#FF00FF"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h1 className="text-3xl font-bold animate-pulse">Loading.....</h1>
        </div>
    );
};

export default Loader;