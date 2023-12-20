import About from "../Components/About";
import Banner from "../Components/Banner";
import Projects from "../Components/Projects";
import Qualification from "../Components/Qualification";
import Skills from "../Components/Skills";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <Qualification />
            <About />
            <Contact />
        </div>
    );
};

export default Home;