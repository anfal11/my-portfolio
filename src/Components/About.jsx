import pic from "../../public/dsdf.JPG"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
    return (
        <div id="about" className="mt-64 mb-40">
            
        <div className="hero">
          <div className="hero-content flex flex-col lg:flex-row items-center justify-center gap-4">
         
            <img
            data-aos="zoom-in-right"
              src={pic}
              alt="Profile"
              className="rounded-full shadow-2xl mb-6 lg:mb-0 lg:mr-6"
            />
         
            <div data-aos="zoom-out">
            <h1 className="text-4xl underline text-center font-bold mb-4">
        About Me
      </h1>
              <p className="py-4 ">
  {/* Greetings! I&apos;m Anfal, a soon-to-graduate computer science student at Daffodil International University. Specializing in the MERN Stack, my journey is marked by a keen passion for innovation. Eagerly seeking opportunities, I am poised to apply my skills to cutting-edge projects, craft engaging user experiences, and play a part in shaping the future of the web. As a fresh graduate, I bring a dynamic and enthusiastic approach to contribute effectively to your team. */}

  Greetings! I&apos;m Anfal, a DevOps engineer with a solid foundation in computer science from Daffodil International University. My journey into technology is fueled by a passion for efficiency and automation. I excel at optimizing software delivery pipelines and enhancing system scalability. Proficient in orchestrating seamless deployments and managing cloud infrastructure, I&apos;m committed to continuous improvement and fostering collaboration. Eager to tackle new challenges, I bring a dynamic and adaptable mindset to your team. As a fresh graduate, I&apos;m excited to contribute my skills and drive innovation. Let&apos;s work together to build resilient and agile systems shaping the future of technology.</p>


              
            </div>
          </div>
        </div>
        </div>
      );
    };
export default About;