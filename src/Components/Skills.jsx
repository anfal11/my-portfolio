import SectionTitle from "../Shared/SectionTitle";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow="Skills"
          title="Tools & Technologies"
          description="The stack I use day to day to ship, run and observe software in production."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
              className="card-surface card-hover p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                  0{groupIndex + 1}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:bg-slate-800"
                  >
                    {skill.Icon ? (
                      <skill.Icon
                        aria-hidden
                        style={skill.color ? { color: skill.color } : undefined}
                        className={`h-7 w-7 text-2xl transition-transform duration-300 group-hover:scale-110 ${
                          skill.iconClass ?? ""
                        }`}
                      />
                    ) : (
                      <img
                        src={skill.icon}
                        alt=""
                        loading="lazy"
                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
