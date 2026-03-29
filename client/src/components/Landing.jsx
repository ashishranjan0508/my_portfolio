import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SOCIAL_LINKS, PERSONAL } from "../data/index.jsx";

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span>
      {displayed}
      <span style={{ color: "var(--accent)" }} className="animate-pulse">_</span>
    </span>
  );
};

const Landing = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>

      {/* background large text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ opacity: 0.025 }}
      >
        <span
          className="font-mono font-bold whitespace-nowrap"
          style={{ fontSize: "22vw", color: "var(--accent)", lineHeight: 1 }}
        >
          DEV
        </span>
      </div>

      {/* top-right accent corner */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(212,255,0,0.08), transparent 70%)",
        }}
      />

     
      <div className="absolute top-0 left-0 right-0" style={{ borderTop: "1px solid var(--border)", top: "4rem" }} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full"
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* text */}
          <div>
            {/* greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 font-mono text-xs px-3 py-1.5"
                style={{ border: "1px solid rgba(212,255,0,0.3)", color: "var(--accent)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Welcome!
              </div>
              <div className="h-px flex-1 max-w-20" style={{ background: "var(--border)" }} />
            </motion.div>

            {/* name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-mono font-bold leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "var(--text)" }}
            >
              Hi, I'm<br />
              <span style={{ color: "var(--accent)" }}>{PERSONAL.name}</span>
            </motion.h1>

            {/* typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-xl sm:text-2xl mb-6 h-9"
              style={{ color: "var(--muted)" }}
            >
              <TypewriterText texts={PERSONAL.taglines} />
            </motion.div>

            {/* bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--muted)", fontFamily: "'Outfit', sans-serif" }}
            >
              {PERSONAL.shortBio}
            </motion.p>

            {/* call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 font-mono font-bold text-sm transition-all"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
              >
                VIEW WORK →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 font-mono font-bold text-sm transition-all"
                style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                GET IN TOUCH
              </motion.button>
            </motion.div>

            {/* social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-xs" style={{ color: "var(--muted2)" }}>FIND ME //</span>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="w-9 h-9 flex items-center justify-center transition-all"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
                    title={s.name}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative flex-shrink-0"
          >
            <div className="relative w-72 h-72">
              {/* corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "var(--accent)" }} />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: "var(--accent)" }} />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: "var(--accent)" }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: "var(--accent)" }} />

              {/* profile picture */}
              <div className="w-full h-full overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <img
                  src={PERSONAL.photo}
                  alt={PERSONAL.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* accent overlay */}
                <div className="absolute inset-0 mix-blend-color pointer-events-none"
                  style={{ background: "rgba(212,255,0,0.04)" }} />
              </div>

              {/* floating stat cards */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-14 top-8 px-3 py-2 font-mono text-xs font-bold"
                style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--accent)" }}
              >
                 ⚡
                {/* ⚡ 2+ YRS */}
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-14 bottom-8 px-3 py-2 font-mono text-xs font-bold"
                style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--accent2)" }}
              >
                🚀 3+ PRJ
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-9 left-10 flex items-center gap-3"
        style={{ color: "var(--muted2)" }}
      >
        <div className="w-px h-12" style={{ background: "var(--border)" }} />
        <span className="font-mono text-[10px] tracking-[0.2em] rotate-90 origin-left translate-y-1">➡️SCROLL </span>
      </motion.div>
    </section>
  );
};

export default Landing;
