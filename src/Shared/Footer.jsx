import { Link as ScrollLink } from "react-scroll";
import { FiMail, FiMapPin } from "react-icons/fi";
import { navLinks } from "../data/navLinks";
import { contactInfo, socials } from "../data/socials";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            DevOps engineer focused on automating delivery pipelines, running
            reliable cloud infrastructure and keeping systems observable and
            scalable.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="social-btn !h-10 !w-10"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
            Quick Links
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
              >
                <FiMail className="text-brand-500" /> {contactInfo.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <FiMapPin className="text-brand-500" /> {contactInfo.location}
            </li>
          </ul>
          <a
            href={contactInfo.resume}
            download="resume_of_anfal.pdf"
            className="btn-outline mt-6 !px-5 !py-2.5"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row dark:text-slate-500">
          <p>© {year} Anfal Ratul. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
