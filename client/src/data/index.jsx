// ----------Assets-------------------
import assets from "../assets/assets.js";

// ----------- NAVIGATION ------------------------------------------------
export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

// ------------ SOCIAL LINKS -----------------------------------------
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/ashishranjan0508",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashishranjan0508",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/a_ashish_ranjan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

// ------ SKILLS ------------------------------------------------------
export const SKILLS = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Node.js", color: "#68A063", icon: "🟢" },
  { name: "Express.js", color: "#ffffff", icon: "🚀" },
  { name: "Tailwind CSS", color: "#38BDF8", icon: "🎨" },
  { name: "PostgreSQL", color: "#336791", icon: "🐘" },
  // { name: "MongoDB", color: "#47A248", icon: "🍃" },
  { name: "Git", color: "#F05032", icon: "📦" },
  { name: "GitHub", color: "#ffffff", icon: "🐙" },
  { name: "C++", color: "#00599C", icon: "⚡" },
  { name: "JavaScript", color: "#F7DF1E", icon: "✨" },
  { name: "TypeScript", color: "#3178C6", icon: "📘" },
  { name: "VS Code", color: "#007ACC", icon: "💻" },
  // { name: "Next.js", color: "#ffffff", icon: "▲" },
  // { name: "Docker", color: "#2496ED", icon: "🐳" },
  { name: "REST API", color: "#FF6B6B", icon: "🔗" },
  { name: "HTML/CSS", color: "#E34F26", icon: "🌐" },
];

// ------- EDUCATION ------------------------------------------------------
export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Motihari College of Engineering, Motihari",
    year: "2022 - 2026",
    grade: "CGPA: 7.9 / 10",
  },
  {
    degree: "Class XII (PCM)",
    institution: "KBC Inter School",
    // year: "2018 - 2020",
    grade: "Percentage: 80%",
  },
  {
    degree: "Class X",
    institution: "KBC Inter School",
    // year: "2017 - 2018",
    grade: "Percentage: 78%",
  },
];

// ----------- SOFTWARE TOOLS -----------------------------------------------------------------
export const SOFTWARE = [
  { name: "VS Code", icon: "🆚" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Postman", icon: "🟠" },
  // { name: "Figma", icon: "🎨" },
  // { name: "Docker", icon: "🐳" },
  // { name: "Linux", icon: "🐧" },
];

// ----------PROJECTS ----------------------------------------------------------------
export const PROJECTS = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack application to track and visualize spending habits, utilizing React for dynamic data rendering and categorization.",
    image: assets.expense_image,
    tech: ["React", "Node.js", "PostgreSQL", "Express.js", "Tailwind"],
    live: "https://expense-tracker-usvx.onrender.com/",
    github: "https://github.com/ASHISHRANJAN0508/EXPENSE_TRACKER",
  },
  {
    title: "Examino",
    description:
      "A platform to conduct exams with both MCQ and long-answer questions, allowing teachers to prepare questions and students to take the test in real time.",
    image: assets.examino_image,
    tech: ["React", "Node.js", "PostgreSQL", "Express.js", "Tailwind"],
    live: "#",
    github: "https://github.com/ashishranjan0508/Examino",
  },
  {
    title: "Imagify",
    description:
      "A full-stack web app that generates images from user text prompts using a generative AI API",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&q=80",
    tech: ["React", "Node.js", "Express.js", "Tailwind"],
    live: "#",
    github: "https://github.com/ashishranjan0508/imagify",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio is built using React and Tailwind CSS, featuring reusable components, a clean UI, and smooth animations powered by Framer Motion.",
    image: assets.portfolio_image,
    tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    live: "#",
    github: "#",
  },
];

// -------- PERSONAL INFO -------------------------------------------------------------
export const PERSONAL = {
  name: "Ashish Ranjan",
  initials: "AR",
  taglines: ["Full Stack Developer", "React Specialist", "Node.js Engineer", "Problem Solver"],
  shortBio:
    "I craft high-performance web applications with clean code and pixel-perfect UIs. Passionate about turning complex problems into elegant digital solutions.",
  longBio1:
    "Hey! I'm Ashish Ranjan, a passionate Full Stack Developer based in India. I love building beautiful, functional web applications that make a real difference.",
  longBio2:
    "With hands-on experience in the MERN stack and modern web technologies, I specialize in creating scalable back-ends and pixel-perfect front-ends. I enjoy solving complex problems and continuously learning new technologies.",
  longBio3:
    "When I'm not coding, you'll find me exploring open-source projects, contributing to communities, or leveling up my competitive programming skills.",
  photo: assets.profile_pic,
  email: "ashishranjan2052@email.com",
  phone: "+91 728207****",
  location: "Patna, India",
  resumeUrl: "https://drive.google.com/file/d/1qQ1tJlHLEo7lozOwVhL2RkOtkDOrBVlh/view?usp=sharing",
  stats: [
    { label: "Projects Completed", value: "3" },
    { label: "Technologies", value: "10+" },
    { label: "Years Experience", value: "" },
    { label: "GitHub Commits", value: "" },
  ],
};
