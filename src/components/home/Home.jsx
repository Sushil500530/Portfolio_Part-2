import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const Home = () => {

    return (
        <div className="relative">
            <div className="w-full h-screen">
                <h2 className="text-center text-2xl font-bold">Home is Comming......!</h2>
            </div>
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default Home;