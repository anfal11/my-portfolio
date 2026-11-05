import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "NEC Money Transfer Limited",
    workplace: "On-site",
    start: "2026-04-16",
    end: null,
    location: "House 31, Block A, Road 2, Banasree, Dhaka 1219, Bangladesh",
    stack: [
      "Docker",
      "CI/CD",
      "GitLab",
      "Grafana",
      "Prometheus",
      "Loki",
      "Nginx",
      "Linux",
      "AWS",
      "Cloudflare R2",
      "FortiGate",
      "IPsec VPN",
      "iptables",
      "OpenVAS",
      "OWASP ZAP",
      "DC-DR",
    ],
    highlights: [
      "Built log and server monitoring for Windows and Linux servers using Grafana, Prometheus and Loki, and set up MSSQL DC-DR monitoring covering connectivity, logs and overall health.",
      "Deployed and administered a self-hosted GitLab instance to manage source code and team workflows.",
      "Configured and managed Cloudflare R2 storage buckets for object storage.",
      "Performed vulnerability assessment and penetration testing (VAPT) using OpenVAS, Nmap, Masscan and OWASP ZAP to identify and fix security risks.",
      "Configured iptables firewall rules to block vulnerable ports and secure public-facing servers.",
      "Managed SSL certificates and configured Nginx reverse proxy for multiple subdomains.",
      "Built a custom script-based health monitoring system with Telegram and email alert integration for real-time server health notifications.",
      "Deployed and managed over 70 Docker containers running NestJS microservices across production data center and disaster recovery environments.",
      "Designed and maintained disaster recovery (DC-DR) failover architecture for high availability.",
      "Built custom AES-256 encryption tools for securing sensitive environment configuration files shared with developers.",
      "Set up CI/CD pipelines to automate and accelerate app and web deployment.",
      "Configured YAML deployment files and deployed campaign management microservices that let teams send SMS, email and advertising campaigns through bulk file uploads.",
      "Configured and managed Fortinet FortiGate firewalls for network security across multiple data center environments (DC & DR).",
      "Set up AWS Site-to-Site VPN tunnels using Fortinet FortiGate and IPsec (Phase 1 & Phase 2), connecting the Dhaka colo data center with AWS for hybrid cloud and disaster recovery.",
      "Performed network security optimization including firewall rule tuning, port hardening and traffic filtering to improve overall security posture.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Red Technologies Limited",
    workplace: "Hybrid",
    start: "2024-02-01",
    end: "2025-07-31",
    location: "Baridhara DOHS, Dhaka, Bangladesh",
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
      "FortiGate",
    ],
    highlights: [
      "Set up CI/CD pipelines using GitHub Actions, Jenkins and Docker to make app deployment automatic and faster.",
      "Managed AWS cloud services such as EC2, S3, Route 53 and RDS to run and support fintech applications.",
      "Worked closely with development teams to make applications run faster and more reliably.",
      "Set up monitoring and alert systems using Prometheus and Grafana to track server health on DC-DR servers.",
      "Built a central log system using OpenSearch, ISM, Logstash and Filebeat to make finding and fixing issues easier.",
      "Managed and migrated MySQL, MSSQL and PostgreSQL databases multiple times without data loss.",
      "Set up load balancing to spread traffic evenly and keep the system running smoothly.",
      "Deployed MinIO storage for low-cost, scalable data storage and kept data synced between DC and DR servers.",
      "Used Apache Kafka to handle real-time data streaming and connect different systems.",
      "Managed APIs using Kong Gateway to keep service communication secure and efficient.",
      "Configured and managed Fortinet FortiGate firewalls for network security across multiple data center environments (DC & DR).",
      "Set up AWS Site-to-Site VPN tunnels using Fortinet FortiGate and IPsec (Phase 1 & Phase 2), connecting the Dhaka colo data center with AWS for hybrid cloud and disaster recovery.",
      "Performed network security optimization including firewall rule tuning, port hardening and traffic filtering to improve overall security posture.",
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
