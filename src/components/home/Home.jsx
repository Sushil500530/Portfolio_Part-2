import About from "./pages/About";
import Banner from "./pages/Banner";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const Home = () => {

    return (
        <div className="relative container mx-auto p-5 ">
            <Banner />
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default Home;