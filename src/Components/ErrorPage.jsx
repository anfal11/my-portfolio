import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="relative grid min-h-screen place-content-center overflow-hidden bg-white px-4 text-center dark:bg-slate-950">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/20 blur-3xl" />
      </div>
      <p className="text-gradient text-8xl font-extrabold tracking-tight sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="btn-outline"
        >
          <FiArrowLeft /> Go Back
        </button>
        <Link to="/" className="btn-brand">
          <FiHome /> Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
