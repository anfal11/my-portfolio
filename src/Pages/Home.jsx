import About from "../Components/About";
import Banner from "../Components/Banner";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Qualification from "../Components/Qualification";
import Skills from "../Components/Skills";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Experience />
            <Projects />
            <Qualification />
            <About />
            <Contact />
        </div>
    );
};

export default Home;