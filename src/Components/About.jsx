import { FiDownload, FiMail, FiMapPin, FiUser, FiBookOpen } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import SectionTitle from "../Shared/SectionTitle";
import { contactInfo } from "../data/socials";

const facts = [
  { label: "Name", value: "Anfal Ratul", icon: FiUser },
  { label: "Email", value: contactInfo.email, icon: FiMail },
  { label: "Location", value: contactInfo.location, icon: FiMapPin },
  { label: "Degree", value: "B.Sc. in CSE", icon: FiBookOpen },
];

const About = () => {
  return (
    <section id="about" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div data-aos="fade-right" className="lg:col-span-5">
          <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500 to-blue-600 opacity-80 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-brand-500/50"
            />
            <img
              src="/DP.jpeg"
              alt="Anfal Ratul"
              className="relative w-full rounded-[2rem] object-cover shadow-2xl ring-4 ring-white dark:ring-slate-900"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="lg:col-span-7">
          <SectionTitle
            eyebrow="About Me"
            title="A DevOps engineer who loves automation"
            align="left"
          />

          <p className="-mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
            Hi! I&apos;m Anfal, a DevOps engineer with a solid foundation in
            Computer Science from Daffodil International University. I&apos;m
            passionate about technology, automation and making software systems
            work more efficiently. I enjoy working with CI/CD pipelines, cloud
            platforms and deployment automation.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            I focus on improving software delivery processes, maintaining system
            reliability and learning new tools and technologies. I&apos;m
            comfortable working with cloud infrastructure and enjoy solving
            real-world technical problems in collaborative environments, while
            contributing to scalable and reliable infrastructure solutions.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact.label}
                className="card-surface flex items-center gap-4 px-4 py-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <fact.icon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {fact.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {fact.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contactInfo.resume}
              download="resume_of_anfal.pdf"
              className="btn-brand"
            >
              <FiDownload /> Download CV
            </a>
            <ScrollLink
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="btn-outline"
            >
              Let&apos;s Talk
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
