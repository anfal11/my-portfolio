const Experience = () => {
    return (
      <div className="max-w-[1520px] mx-auto py-8 px-4 mt-48 mb-20">
        <h2 className="text-center font-bold text-4xl underline mb-10" data-aos="zoom-in" data-aos-duration="1000">Experience</h2>
        <div className="border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-extrabold mb-2">DevOps Engineer (remote) at Rosebay Tech</h3>
          <p className="text-gray-700 mb-2 font-bold">February 2024 - Present</p>
          <p className="text-gray-700 mb-2 font-semibold">Location: United Kingdom (UK)</p> 
          <ul className="list-disc list-inside">
            <li>Implemented CI/CD pipelines using Git actions, Jenkins and Docker for automating deployments.</li>
            <li>Managed infrastructure on AWS, including EC2, S3, and RDS.</li>
            <li>Collaborated with development teams to optimize application performance and reliability.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Experience;
  