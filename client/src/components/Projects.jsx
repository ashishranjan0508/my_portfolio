import { PROJECTS } from "../data/index.jsx";
import SectionHeader from "./ui/SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx"

const Projects = () => (
  <section id="projects" className="relative py-24" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader eyebrow="My Work" title="Featured" highlight="Projects" />
      <div className="grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
