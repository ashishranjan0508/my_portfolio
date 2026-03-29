import { PERSONAL, SOCIAL_LINKS } from "../data/index.jsx";

const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

      {/* logo */}
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 flex items-center justify-center font-mono font-bold text-xs"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {PERSONAL.initials}
        </div>
        <span className="font-mono text-sm" style={{ color: "var(--muted)" }}>{PERSONAL.name}</span>
      </div>

      {/* copyright */}
      <p className="font-mono text-xs" style={{ color: "var(--muted2)" }}>
        © {new Date().getFullYear()} — BUILT WITH REACT
      </p>

      {/* socials */}
      <div className="flex gap-2">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="transition-colors"
            style={{ color: "var(--muted2)" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted2)"}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
