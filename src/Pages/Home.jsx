import Banner from "../Components/Banner";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;