import { useState, useEffect } from "react";
import { NAV_LINKS } from "./data/index.jsx";

import Navbar   from "./components/Navbar.jsx";
import Landing     from "./components/Landing.jsx";
import About    from "./components/About.jsx";
import Skills   from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact  from "./components/Contact.jsx";
import Footer   from "./components/Footer.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.toLowerCase());
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }} className="font-sans antialiased">
      <Navbar   activeSection={activeSection} />
      <Landing     />
      <About    />
      <Skills   />
      <Projects />
      <Contact  />
      <Footer   />
    </div>
  );
};

export default App;