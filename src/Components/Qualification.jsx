import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Qualification = () => {
  return (
    <section className="mt-64 mb-20">
      <div
        data-aos="zoom-in-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-4xl underline text-center font-bold mb-10">
          {" "}
          Academic Qualifications{" "}
        </h1>
        <ul className="px-2 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2017</time>
              <div className="text-lg font-black">SSC</div>
              Naogaon K.D. Govt. High School Noagaon <br />
              GPA: 5.00
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2019</time>
              <div className="text-lg font-black">HSC</div>
              Naogaon Govt. College, Naogaon <br />
              GPA: 4.42
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">
                BSC in Computer Science and Engineering(CSE)
              </div>
              Daffodil International University, Ashulia, Savar, Dhaka <br />
              CGPA: 3.28
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Qualification;
