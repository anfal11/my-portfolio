import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {

    useEffect(()=>{
        AOS.init();
    },[]);

  return (
    <div className="max-w-[1520px] mx-auto pt-48">
      
    
        
        <h1 className="text-center font-bold text-4xl underline mb-10" data-aos="zoom-in" data-aos-duration="1000">
          {" "}
          Skills{" "}
        </h1>

      <div>
        <div className="flex flex-wrap justify-center items-center gap-5" data-aos="flip-left"
            data-aos-duration="1000">
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/html-5--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">HTML</figcaption>
            </figure>
{/*  */}
            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/docker"
                alt=""
              />
              <figcaption className="text-lg font-semibold">DOCKER</figcaption>
            </figure>
          </div>

            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/kubernetes"
                alt=""
              />
              <figcaption className="text-lg font-semibold">KUBERNETES</figcaption>
            </figure>
          </div>

            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/amazon-web-services"
                alt=""
              />
              <figcaption className="text-lg font-semibold">AWS</figcaption>
            </figure>
          </div>

            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/linux"
                alt=""
              />
              <figcaption className="text-lg font-semibold">LINUX</figcaption>
            </figure>
          </div>


            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/ansible"
                alt=""
              />
              <figcaption className="text-lg font-semibold">ANSIBLE</figcaption>
            </figure>
          </div>

            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
              className="h-24 w-24"
                src="https://i.ibb.co/xzngSDs/azure.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">AZURE</figcaption>
            </figure>
          </div>

            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/git"
                alt=""
              />
              <figcaption className="text-lg font-semibold">GIT</figcaption>
            </figure>
          </div>
            <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
              className="h-24 w-24"
                src="https://i.ibb.co/Wt1QDCY/github-1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">GitHub</figcaption>
            </figure>
          </div>
        
{/*  */}
          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/css3.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">CSS</figcaption>
            </figure>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/tailwindcss--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">
                Tailwind CSS
              </figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/bootstrap--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">
                Bootstrap
              </figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/javascript--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">
                JavaScript
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/react-native.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">ReactJs</figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/nodejs--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">Nodejs</figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/firebase"
                alt=""
              />
              <figcaption className="text-lg font-semibold">Firebase</figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/express-js--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">
                Expressjs
              </figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/mysql"
                alt=""
              />
              <figcaption className="text-lg font-semibold">MySQL</figcaption>
            </figure>
          </div>

          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <figure className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out">
              <img
                src="https://img.icons8.com/color/96/000000/mongodb--v1.png"
                alt=""
              />
              <figcaption className="text-lg font-semibold">MongoDB</figcaption>
            </figure>
          </div>

        </div>
      </div>
    </div>
  );
};

// const SkillItem = ({ iconUrl, skillName }) => (
//     <div className="flex flex-col justify-center items-center">
//         <img src={iconUrl} alt={skillName} />
//         <p className="text-center font-semibold text-lg">{skillName}</p>
//     </div>
// );

export default Skills;
