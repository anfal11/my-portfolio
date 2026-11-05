import { FiBriefcase, FiCalendar, FiCheckCircle, FiMapPin } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

const experiences = [
  {
    role: "DevOps Engineer",
    type: "Current",
    company: "NEC Money Transfer Limited",
    period: "Apr 2026 — Present",
    location: "Dhaka, Bangladesh",
    stack: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "AWS",
      "Linux",
      "Prometheus",
      "Grafana",
      "Nginx",
    ],
    highlights: [
      "Building and maintaining CI/CD pipelines to automate build, test and deployment workflows for the money transfer platform.",
      "Managing cloud infrastructure and Linux servers with a focus on security, scalability and high availability.",
      "Running monitoring, alerting and centralized logging to keep production services healthy and observable.",
      "Collaborating with development teams to improve release reliability and system performance.",
    ],
  },
  {
    role: "DevOps Engineer",
    type: "Hybrid",
    company: "Red Technologies Limited",
    period: "Feb 2024 — Jul 2025",
    location: "Baridhara, Dhaka",
    stack: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "AWS",
      "Prometheus",
      "Grafana",
      "OpenSearch",
      "Kafka",
      "Kong",
      "MinIO",
    ],
    highlights: [
      "Implemented CI/CD pipelines using GitHub Actions, Jenkins and Docker to automate application build and deployment processes.",
      "Managed AWS infrastructure including EC2, S3 and RDS for fintech applications, ensuring scalability and high availability.",
      "Collaborated closely with development teams to enhance application performance, stability and reliability.",
      "Set up monitoring and alerting with Prometheus and Grafana to proactively track system health and metrics.",
      "Built centralized log management with OpenSearch and Filebeat for efficient debugging and troubleshooting.",
      "Administered MySQL, MSSQL and PostgreSQL databases, including performance tuning, backups and query optimization.",
      "Implemented load balancing strategies to distribute traffic and improve availability and fault tolerance.",
      "Deployed and managed MinIO object storage for scalable, cost-effective data storage.",
      "Utilized Apache Kafka for real-time stream processing and data integration across microservices.",
      "Managed APIs with Kong Gateway to ensure secure, scalable service-to-service communication.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've Worked"
          description="Hands-on experience running production infrastructure for fintech and money transfer platforms."
        />

        <div className="space-y-8">
          {experiences.map((job) => (
            <article
              key={job.company}
              data-aos="fade-up"
              className="card-surface card-hover overflow-hidden"
            >
              <div className="h-1.5 bg-gradient-to-r from-brand-500 to-blue-600" />
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-blue-600 text-2xl text-white shadow-lg shadow-brand-500/25">
                      <FiBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {job.role}
                        <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                          {job.type}
                        </span>
                      </h3>
                      <p className="mt-1 font-semibold text-slate-700 dark:text-slate-300">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <FiCalendar className="text-brand-500" /> {job.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FiMapPin className="text-brand-500" /> {job.location}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
