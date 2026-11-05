import { Outlet } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import BackToTop from "../Shared/BackToTop";

const Root = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex min-h-screen flex-col">
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-500 to-blue-600"
      />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Root;
