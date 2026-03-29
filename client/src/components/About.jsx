import { motion } from "framer-motion";
import { PERSONAL, EDUCATION, SOFTWARE } from "../data/index.jsx";
import FadeUp from "./ui/FadeUp.jsx";
import SectionHeader from "./ui/SectionHeader.jsx";

const About = () => (
  <section id="about" className="relative py-24" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader eyebrow="Who Am I" title="About" highlight="Me" />

      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left: Bio + Stats */}
        <FadeUp delay={0.1}>
          <div className="space-y-6">
            <p style={{ color: "var(--muted)", fontFamily: "'Outfit', sans-serif", lineHeight: 1.8 }}>
              Hey! I'm{" "}
              <span className="font-semibold" style={{ color: "var(--text)" }}>{PERSONAL.name}</span>
              {", "}
              {PERSONAL.longBio1.replace(`Hey! I'm ${PERSONAL.name}, `, "")}
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{PERSONAL.longBio2}</p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{PERSONAL.longBio3}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {PERSONAL.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 text-center"
                  style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface2)" }}
                >
                  <div className="font-mono font-bold text-2xl" style={{ color: "var(--accent)" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1 font-mono" style={{ color: "var(--muted2)" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Resume */}
            <motion.a
              href={PERSONAL.resumeUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 font-mono font-bold text-sm transition-all"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              DOWNLOAD RESUME
            </motion.a>
          </div>
        </FadeUp>

        {/* Education + Tools */}
        <div className="space-y-6">
          <FadeUp delay={0.2}>
            <div className="p-6" style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface2)" }}>
              <h3 className="font-mono font-bold text-sm mb-5 flex items-center gap-3" style={{ color: "var(--text)" }}>
                <span style={{ color: "var(--accent)" }}> EDUCATION </span>
                <span style={{ color: "var(--accent3)" }}> (●'◡'●) </span>
              </h3>
              <div className="space-y-5">
                {EDUCATION.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-px self-stretch mt-1 flex-shrink-0" style={{ background: "var(--accent)", opacity: 0.4 }} />
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{e.degree}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{e.institution}</p>
                      <div className="flex gap-3 mt-1.5">
                        <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>{e.year}</span>
                        <span className="font-mono text-xs" style={{ color: "var(--accent3)" }}>{e.grade}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
            {/* Software & Tools */}
          <FadeUp delay={0.3}>
            <div className="p-6" style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface2)" }}>
              <h3 className="font-mono font-bold text-sm mb-5 flex items-center gap-3" style={{ color: "var(--text)" }}>
                <span style={{ color: "var(--accent)" }}> SOFTWARE & TOOLS </span>
                <span style={{ color: "var(--accent3)" }}> (●'◡'●) </span>
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {SOFTWARE.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ scale: 1.04 }}
                    className="flex flex-col items-center gap-1.5 py-3 px-2 transition-all cursor-default"
                    style={{ border: "1px solid var(--border)" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(212,255,0,0.3)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                  >
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-mono text-[10px]" style={{ color: "var(--muted)" }}>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);

export default About;
