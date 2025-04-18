import { IoMdDownload } from "react-icons/io";
// import { motion, useScroll } from "framer-motion"
import pic from "../../public/pic3.jpg";
import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const pdf = "./cv_of_anfal.pdf";

const Banner = () => {
  // const { scrollYProgress } = useScroll();
  const downloadPDF = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = pdf;

    iframe.onload = () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const downloadLink = doc.createElement("a");
      downloadLink.href = pdf;
      downloadLink.download = "cv_of_anfal.pdf";
      doc.body.appendChild(downloadLink);
      downloadLink.click();
      doc.body.removeChild(downloadLink);
      iframe.remove();
    };

    document.body.appendChild(iframe);
  };

  return (
    <div className="max-w-[1520px] pt-20 mx-auto" id="/">
      {/* <motion.div
    style={{
      scaleX: scrollYProgress,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: "orange",
      transformOrigin: "0%",
    }}>
    </motion.div> */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-20 mx-20 gap-10">
        <div 
        data-aos="fade-right"
        data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold mb-4">Hello, I am Anfal</h1>
            <h2 className="text-2xl font-semibold mb-4">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={["DevOps Engineer"]}
              />
            </h2>
            <p className="text-lg mb-6">
              {/* I am passionate about creating responsive and user-friendly web applications and  Skilled in HTML, CSS, JavaScript, React, ExpressJs,
              and MongoDB. */}
              DevOps Engineer: CI/CD, Docker, Kubernetes, IaC using Terraform, Ansible, AWS, Azure, GCP proficiency for seamless deployment and management.
            </p>
            <button
              onClick={downloadPDF}
              className="flex px-2 py-2 rounded-lg items-center gap-2 bg-black text-white hover:bg-gray-700"
            >
              <IoMdDownload /> Download CV
            </button>
          </div>
        </div>
        <div data-aos="fade-left"
        data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">
          <img
            src={pic}
            className="one w-96 lg:w-[430px] xl:w-[550px]"
            alt="Anfal Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
