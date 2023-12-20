import pic from "../../public/dsdf.JPG"
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
  Greetings! I&apos;m Anfal, a soon-to-graduate computer science student at Daffodil International University. Specializing in the MERN Stack, my journey is marked by a keen passion for innovation. Eagerly seeking opportunities, I am poised to apply my skills to cutting-edge projects, craft engaging user experiences, and play a part in shaping the future of the web. As a fresh graduate, I bring a dynamic and enthusiastic approach to contribute effectively to your team.
</p>


              
            </div>
          </div>
        </div>
        </div>
      );
    };
export default About;