import { Link as ScrollLink } from "react-scroll";

const Logo = ({ className = "" }) => {
  return (
    <ScrollLink
      to="home"
      smooth
      offset={-80}
      duration={500}
      aria-label="Anfal.Code — back to top"
      className={`inline-flex cursor-pointer items-baseline gap-2 ${className}`}
    >
      <span className="font-mono text-lg font-medium text-teal-600 dark:text-teal-400">
        ~/
      </span>
      <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Anfal<span className="text-gradient">.Code</span>
      </span>
    </ScrollLink>
  );
};

export default Logo;
