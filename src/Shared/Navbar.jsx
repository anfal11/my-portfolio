import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";
import { navLinks } from "../data/navLinks";

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
  activeClass: "active",
};

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <ScrollLink
          to="home"
          smooth
          offset={-80}
          duration={500}
          className="cursor-pointer text-2xl font-extrabold tracking-tight"
        >
          Anfal<span className="text-gradient">.Code</span>
        </ScrollLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink {...scrollProps} to={link.to} className="nav-link">
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="icon-btn"
          >
            <span className="transition-transform duration-500 hover:rotate-45">
              {isDark ? <FiSun /> : <FiMoon />}
            </span>
          </button>
          <ScrollLink
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="btn-brand hidden !px-5 !py-2.5 sm:inline-flex"
          >
            Hire Me
          </ScrollLink>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="icon-btn lg:hidden"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 pb-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                {...scrollProps}
                to={link.to}
                onClick={() => setOpen(false)}
                className="nav-link !rounded-xl !px-4 !py-3"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
