import FadeUp from "./FadeUp.jsx";

const SectionHeader = ({ eyebrow, title, highlight }) => (
  <FadeUp>
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-[var(--accent)]" />
        <span className="text-[var(--accent)] font-mono text-xs tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] leading-tight">
        {title}{" "}
        <span
          className="italic"
          style={{ color: "var(--accent)", WebkitTextStroke: "0px" }}
        >
          {highlight}
        </span>
      </h2>
    </div>
  </FadeUp>
);

export default SectionHeader;
