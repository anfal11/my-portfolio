import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowRight, FiCheck, FiDownload, FiMapPin } from "react-icons/fi";
import { contactInfo, socials } from "../data/socials";
import "./Banner.css";

const floatingBadges = [
  {
    label: "Docker",
    icon: "https://img.icons8.com/color/96/000000/docker",
    className: "left-0 top-8 animate-float",
  },
  {
    label: "Kubernetes",
    icon: "https://img.icons8.com/color/96/000000/kubernetes",
    className: "-right-2 top-[46%] animate-float-slow",
  },
];

const pods = [
  { name: "api-gateway", status: "Running", ready: "1/1" },
  { name: "ci-runner", status: "Running", ready: "3/3" },
];

const Banner = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />
        <div className="absolute -left-32 -top-32 h-96 w-96 animate-blob rounded-full bg-brand-400/25 blur-3xl dark:bg-brand-500/10" />
        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-blue-500/20 blur-3xl [animation-delay:4s] dark:bg-blue-600/10" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div data-aos="fade-right">
          <span className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
            </span>
            DevOps Engineer
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="inline-flex items-center gap-1">
              <FiMapPin className="text-slate-500 dark:text-slate-400" />
              {contactInfo.location}
            </span>
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-500 via-blue-600 to-purple-500 bg-clip-text text-transparent">
              Anfal
            </span>
            <span className="text-amber-500">.</span>
          </h1>

          <p className="mt-4 font-mono text-2xl font-medium text-teal-600 sm:text-3xl dark:text-teal-400">
            <span className="mr-2 text-slate-400 dark:text-slate-500">$</span>
            <Typewriter
              words={[
                "DevOps Engineer",
                "Cloud & Infrastructure",
                "CI/CD Automation",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1600}
            />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I build and automate reliable delivery pipelines with CI/CD, Docker
            and Kubernetes, and manage cloud infrastructure on AWS, Azure and
            GCP using Terraform and Ansible for seamless deployment and
            operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contactInfo.resume}
              download="resume_of_anfal.pdf"
              className="btn-brand"
            >
              <FiDownload className="text-base" /> Download Resume
            </a>
            <ScrollLink
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="btn-outline"
            >
              Contact Me <FiArrowRight className="text-base" />
            </ScrollLink>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Find me on
            </span>
            <span className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="social-btn"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <div
            aria-hidden
            className="absolute inset-6 -z-10 rounded-full bg-gradient-to-tr from-brand-400 to-blue-600 opacity-40 blur-3xl dark:opacity-30"
          />
          <img
            src="/pic3.JPG"
            alt="Anfal Ratul"
            className="one w-full select-none"
            draggable="false"
          />

          {/* Pipeline status pill */}
          <div className="absolute -top-2 right-0 hidden animate-float-slow items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-4 py-2.5 text-sm shadow-lg backdrop-blur sm:flex dark:border-slate-700 dark:bg-slate-900/90">
            <FiCheck className="text-base text-emerald-500" strokeWidth={3} />
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Pipeline passed
            </span>
            <span className="text-slate-400 dark:text-slate-500">·</span>
            <span className="text-slate-500 dark:text-slate-400">2m 14s</span>
          </div>

          {/* kubectl terminal card */}
          <div className="absolute bottom-[7%] -left-4 hidden animate-float rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 font-mono text-[13px] shadow-lg backdrop-blur sm:block dark:border-slate-700 dark:bg-slate-900/90">
            <p className="text-slate-400 dark:text-slate-500">
              $ kubectl get pods
            </p>
            <table className="mt-1 border-separate border-spacing-x-0 text-teal-600 dark:text-teal-400">
              <tbody>
                {pods.map((pod) => (
                  <tr key={pod.name}>
                    <td className="pr-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 align-middle" />
                    </td>
                    <td className="pr-6">{pod.name}</td>
                    <td className="pr-5">{pod.status}</td>
                    <td>{pod.ready}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {floatingBadges.map((badge) => (
            <div
              key={badge.label}
              className={`absolute hidden items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-700 shadow-lg backdrop-blur sm:flex dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 ${badge.className}`}
            >
              <img src={badge.icon} alt="" className="h-7 w-7" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
