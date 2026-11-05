const SectionTitle = ({ eyebrow, title, description, align = "center" }) => {
  const centered = align === "center";
  return (
    <div
      data-aos="fade-up"
      className={`mb-14 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-blue-600 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
