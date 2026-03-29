import { motion } from "framer-motion";
import { SKILLS } from "../data/index.jsx";
import SectionHeader from "./ui/SectionHeader.jsx";

const Skills = () => (
  <section id="skills" className="relative py-24" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader eyebrow="What I Work With" title="My" highlight="Skills" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.04 }}
            className="group flex flex-col items-center gap-2.5 p-4 transition-all cursor-default"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(212,255,0,0.35)";
              e.currentTarget.style.backgroundColor = "var(--surface2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.backgroundColor = "var(--surface)";
            }}
          >
          
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-mono text-[10px] text-center leading-tight" style={{ color: "var(--muted)" }}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
