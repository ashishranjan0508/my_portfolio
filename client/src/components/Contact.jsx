import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "../data/index.jsx";
import FadeUp from "./ui/FadeUp.jsx";
import SectionHeader from "./ui/SectionHeader.jsx";

const CONTACT_ITEMS = [
  { icon: "📧", label: "Email",    getValue: () => PERSONAL.email,    getHref: () => `mailto:${PERSONAL.email}` },
  { icon: "📱", label: "Phone",    getValue: () => PERSONAL.phone,    getHref: () => `tel:${PERSONAL.phone.replace(/\s/g, "")}` },
  { icon: "📍", label: "Location", getValue: () => PERSONAL.location, getHref: () => "#" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="relative py-24" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow="Let's Talk" title="Get In" highlight="Touch" />

        <p className="text-sm mb-14 max-w-lg" style={{ color: "var(--muted)", fontFamily: "'Outfit', sans-serif" }}>
          Have a project in mind or just want to say hello? I'm always open to new opportunities and collaborations.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* left */}
          <FadeUp delay={0.1}>
            <div className="space-y-5">
              <h3 className="font-mono font-bold text-lg" style={{ color: "var(--text)" }}>
                Let's build something<br />
                <span style={{ color: "var(--accent)" }}>amazing together</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "'Outfit', sans-serif" }}>
                I'm currently available for full-time positions. Whether you have a question, a project idea, or just want to connect - my inbox is always open!
              </p>

              <div className="space-y-3 pt-2">
                {CONTACT_ITEMS.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.getHref()}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 transition-all group"
                    style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(212,255,0,0.3)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                  >
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest" style={{ color: "var(--muted2)" }}>{c.label.toUpperCase()}</p>
                      <p className="text-sm font-medium mt-0.5" style={{ color: "var(--text)" }}>{c.getValue()}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-3">
                <p className="font-mono text-xs mb-3" style={{ color: "var(--muted2)" }}>// SOCIAL</p>
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((s) => (
                    <motion.a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 flex items-center justify-center transition-all"
                      style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
                      title={s.name}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* right form */}
          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4 p-6"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] tracking-widest block mb-2" style={{ color: "var(--muted2)" }}>NAME</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest block mb-2" style={{ color: "var(--muted2)" }}>EMAIL</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest block mb-2" style={{ color: "var(--muted2)" }}>MESSAGE</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 font-mono font-bold text-sm transition-all"
                style={{ background: sent ? "var(--accent3)" : "var(--accent)", color: "var(--bg)" }}
              >
                {sent ? "✓ MESSAGE SENT" : "SEND MESSAGE →"}
              </motion.button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Contact;
