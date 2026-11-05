import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section
      id="projects"
      className="section bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've Built"
          description="A selection of full-stack applications I have designed, built and deployed."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id ?? index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="card-surface card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-end gap-2 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="icon-btn !border-white/30 !bg-white/20 !text-white hover:!bg-white hover:!text-slate-900"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.Live_Link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                    className="icon-btn !border-white/30 !bg-white/20 !text-white hover:!bg-white hover:!text-slate-900"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technology?.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {project.details?.slice(0, 3).map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline flex-1 !px-4 !py-2.5"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.Live_Link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brand flex-1 !px-4 !py-2.5"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
