import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PERSONAL } from "../data/index.jsx";

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(10,10,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <div
              className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {PERSONAL.initials}
            </div>
            <span className="font-mono font-bold text-sm tracking-tight" style={{ color: "var(--text)" }}>
              {PERSONAL.name.split(" ")[0]}
              <span style={{ color: "var(--accent)" }}>.dev</span>
            </span>
          </motion.div>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => {
              const active = activeSection === link.toLowerCase();
              return (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-200"
                  style={{ color: active ? "var(--accent)" : "var(--muted)" }}
                >
                  {/* <span className="font-mono text-[10px] mr-1" style={{ color: "var(--muted2)" }}>
                    0{i + 1}.
                  </span> */}
                  {link}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CV button */}
          <div className="hidden md:flex">
            <motion.a
              href={PERSONAL.resumeUrl}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold transition-all"
              style={{
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
            >
              [ RESUME ]
            </motion.a>
          </div>


          {/* mobile menu button */}
          <button
            className="md:hidden"
            style={{ color: "var(--muted)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: "1px solid var(--border)", backgroundColor: "rgba(10,10,8,0.97)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left px-3 py-3 font-mono text-sm transition-all"
                  style={{ color: activeSection === link.toLowerCase() ? "var(--accent)" : "var(--muted)" }}
                >
                  <span style={{ color: "var(--muted2)" }}>0{i + 1}. </span>{link}
                </button>
              ))}
              <a
                href={PERSONAL.resumeUrl}
                download
                className="mt-3 px-3 py-3 font-mono text-xs font-bold text-center"
                style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
              >
                [ DOWNLOAD RESUME ]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
