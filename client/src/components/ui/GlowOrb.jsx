// Replaced GlowOrb with a geometric accent shape that fits the new design
const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      background: "radial-gradient(circle, rgba(212,255,0,0.06) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(60px)",
    }}
  />
);

export default GlowOrb;
