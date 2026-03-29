import { motion } from "framer-motion";

const ProjectCard = ({ project, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
    className="group flex flex-col"
    style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
  >
    {/* image */}
    <div className="relative overflow-hidden h-44">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
      />
      {/* number overlay */}
      <div
        className="absolute top-3 left-3 font-mono font-bold text-4xl leading-none select-none pointer-events-none"
        style={{ color: "rgba(212,255,0,0.12)" }}
      >
        0{i + 1}
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 60%)" }} />
    </div>

    {/* content */}
    <div className="flex flex-col flex-1 p-5">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-mono font-bold text-base" style={{ color: "var(--text)" }}>
          {project.title}
        </h3>
        <span className="font-mono text-xs ml-2 flex-shrink-0" style={{ color: "var(--muted2)" }}>
          /{String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)", fontFamily: "'Outfit', sans-serif" }}>
        {project.description}
      </p>

      {/* tech */}
      <div className="flex flex-wrap gap-1.5 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 font-mono text-[10px]"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}>
            {t}
          </span>
        ))}
      </div>

      {/* links */}
      <div className="flex gap-3">
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 font-mono font-bold text-xs transition-all"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          LIVE DEMO ↗
        </motion.a>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 font-mono font-bold text-xs transition-all"
          style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--muted)"; e.currentTarget.style.color = "var(--text)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
        >
          GITHUB →
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;