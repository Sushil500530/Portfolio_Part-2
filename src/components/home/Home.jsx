import About from "./pages/About";
import Banner from "./pages/Banner";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
const Home = () => {
    return (
        <>
            <div className="bg-gradient-to-t from-[#1e1d1d] to-[#03046f] w-full h-full overflow-hidden">
                <Banner />
            </div>
            <div className="bg-gradient-to-b from-[#1e1d1d] to-[#03046f] w-full h-full overflow-hidden">
                <Skills />
            </div>
            <div className="bg-gradient-to-t from-[#1e1d1d] to-[#03046f] w-full h-full overflow-hidden">
                <Projects />
            </div>
            <div className="bg-gradient-to-b from-[#1e1d1d] to-[#03046f] w-full h-full overflow-hidden">
                <About />
            </div>
            <div className="bg-gradient-to-t from-[#1e1d1d] to-[#03046f] w-full h-full overflow-hidden">
                <BlogPage />
            </div>
            <div className="bg-gradient-to-b from-[#1e1d1d] to-[#03046f] w-full h-full overflow-hidden">
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default Home;