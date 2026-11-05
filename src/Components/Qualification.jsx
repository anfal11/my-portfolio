import { FiAward, FiBookOpen } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

const education = [
  {
    year: "Oct 2025 — Jan 2026",
    title: "Research Assistant",
    institution:
      "University of Fukui, Japan · Automata Theory & Quantum Computing",
    note: "Research",
    icon: FiBookOpen,
  },
  {
    year: "2024",
    title: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "Daffodil International University, Ashulia, Savar, Dhaka",
    note: "CGPA 3.28",
    icon: FiAward,
  },
  {
    year: "2019",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Naogaon Govt. College, Naogaon",
    note: "GPA 4.42",
    icon: FiAward,
  },
  {
    year: "2017",
    title: "Secondary School Certificate (SSC)",
    institution: "Naogaon K.D. Govt. High School, Naogaon",
    note: "GPA 5.00",
    icon: FiAward,
  },
];

const Qualification = () => {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Education"
          title="Academic Journey"
          description="My academic background, from school to university and beyond."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand-500 via-slate-300 to-transparent md:left-1/2 dark:via-slate-700"
          />

          <ul className="space-y-10">
            {education.map((item, index) => {
              const left = index % 2 === 0;
              return (
                <li
                  key={item.title}
                  data-aos={left ? "fade-right" : "fade-left"}
                  className={`relative pl-14 md:w-1/2 md:pl-0 ${
                    left ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-blue-600 text-white shadow-lg shadow-brand-500/30 dark:border-slate-950 ${
                      left
                        ? "left-0 md:left-auto md:-right-5"
                        : "left-0 md:-left-5"
                    }`}
                  >
                    <item.icon className="text-base" />
                  </span>

                  <div className="card-surface card-hover p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-sm font-medium text-brand-600 dark:text-brand-400">
                        {item.year}
                      </span>
                      <span className="chip">{item.note}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {item.institution}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
