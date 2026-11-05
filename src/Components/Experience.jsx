import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "NEC Money Transfer Limited",
    start: "2026-04-16",
    end: null,
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
    company: "Red Technologies Limited",
    workplace: "Hybrid",
    start: "2024-02-01",
    end: "2025-07-31",
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

const monthYear = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

// LinkedIn-style duration, e.g. "1 yr 6 mos" or "8 mos".
const duration = (startIso, endIso) => {
  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "1 mo";
};

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've Worked"
          description="Hands-on experience running production infrastructure for fintech and money transfer platforms."
        />

        <div
          data-aos="fade-up"
          className="card-surface mx-auto max-w-4xl p-6 sm:p-8"
        >
          <ol>
            {experiences.map((job, index) => {
              const isLast = index === experiences.length - 1;
              const isCurrent = !job.end;
              return (
                <li
                  key={job.company}
                  className={`relative flex gap-4 sm:gap-6 ${
                    isLast ? "" : "pb-10"
                  }`}
                >
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-6 top-14 w-0.5 -translate-x-px bg-slate-300 dark:bg-slate-700"
                    />
                  )}

                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xl text-white shadow-md shadow-teal-600/30 ring-4 ring-white dark:ring-slate-900">
                    <FiBriefcase />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                          {job.company}
                          {job.workplace && (
                            <span className="text-slate-500 dark:text-slate-400">
                              {" "}
                              · {job.workplace}
                            </span>
                          )}
                        </p>
                        <p className="mt-1 flex flex-wrap items-center gap-x-1.5 text-sm text-slate-500 dark:text-slate-400">
                          <FiCalendar className="text-teal-600 dark:text-teal-400" />
                          {monthYear(job.start)} —{" "}
                          {job.end ? monthYear(job.end) : "Present"}
                          <span>·</span>
                          {duration(job.start, job.end)}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                          <FiMapPin className="text-teal-600 dark:text-teal-400" />
                          {job.location}
                        </p>
                      </div>
                      {isCurrent && (
                        <span className="chip !border-emerald-500/30 !bg-emerald-500/10 !text-emerald-600 dark:!text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
