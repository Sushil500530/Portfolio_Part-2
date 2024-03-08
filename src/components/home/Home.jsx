import About from "./pages/About";
import Banner from "./pages/Banner";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
const Home = () => {
    return (
        <div className="relative container mx-auto p-5 ">
            <Banner />
            <Skills />
            <Projects />
            <About />
            <BlogPage />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;