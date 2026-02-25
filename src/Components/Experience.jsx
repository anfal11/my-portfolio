const Experience = () => {
  return (
    <div className="max-w-[1520px] mx-auto py-8 px-4 mt-48 mb-20">
      <h2
        className="text-center font-bold text-4xl underline mb-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Experience
      </h2>
      <div className="border border-gray-200 p-4 rounded">
        <h3 className="text-lg font-extrabold mb-2">
          DevOps Engineer (Hybrid) at Red Technologies Limited
        </h3>
        <p className="text-gray-700 mb-2 font-bold">
          February 2024 - July 2025
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Location: Baridhara, Dhaka
        </p>
        <ul className="list-disc list-inside">
          <li>
            Implemented CI/CD pipelines using GitHub Actions, Jenkins, and
            Docker to automate application build and deployment processes.
          </li>

          <li>
            Managed AWS infrastructure including EC2, S3, and RDS for fintech
            applications, ensuring scalability and high availability.
          </li>

          <li>
            Collaborated closely with development teams to enhance application
            performance, stability, and reliability.
          </li>

          <li>
            Set up monitoring and alerting systems using Prometheus and Grafana
            to proactively track system health and metrics.
          </li>

          <li>
            Built centralized log management solutions using OpenSearch and
            Filebeat for efficient debugging and troubleshooting.
          </li>

          <li>
            Administered MySQL, MSSQL, and PostgreSQL databases, including
            performance tuning, backup management, and query optimization.
          </li>

          <li>
            Implemented load balancing strategies to distribute traffic and
            improve system availability and fault tolerance.
          </li>

          <li>
            Deployed and managed MinIO object storage for scalable and
            cost-effective data storage solutions.
          </li>

          <li>
            Utilized Apache Kafka for real-time stream processing and seamless
            data integration across microservices.
          </li>

          <li>
            Managed APIs using Kong Gateway to ensure secure, scalable, and
            efficient service-to-service communication.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
