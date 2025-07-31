import { useState } from "react";

export default function Projects() {
  // TypeScript хувилбар - type annotation нэмсэн
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Coup Portfolio",
      description:
        "Modern, responsive portfolio site built with Next.js featuring glassmorphism design and smooth animations.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "/assets/coupmain.jpeg",
      github: "#",
      demo: "#",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "Modern, responsive portfolio site built with Next.js featuring glassmorphism design and smooth animations.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Task Tracker App",
      description:
        "React app with local storage support, drag & drop functionality, and beautiful modern UI design.",
      tech: ["React", "JavaScript", "Local Storage"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with payment integration and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with interactive maps, forecasts, and personalized alerts.",
      tech: ["Vue.js", "API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress",
    },
  ];

  return (
    <div className="section project-section">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="projects-subtitle">
            Discover the digital experiences I've crafted with passion and
            precision
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card project-card-${index + 1}`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>

                {/* Status Badge */}
                <div
                  className={`status-badge ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </div>

                {/* Hover Actions */}
                <div
                  className={`project-actions ${
                    hoveredCard === project.id ? "visible" : ""
                  }`}
                >
                  <button className="action-btn github-btn" title="View Code">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                  <button className="action-btn demo-btn" title="Live Demo">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m18 13 5-5-5-5"></path>
                      <path d="M2 18h1.5c1.3 0 2.5-.6 2.5-2V9c0-1.4 1.2-2 2.5-2H12"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a href={project.demo} className="project-link primary">
                    View Project
                  </a>
                  <a href={project.github} className="project-link secondary">
                    Source Code
                  </a>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div
                className={`card-glow ${
                  hoveredCard === project.id ? "active" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects-cta">
          <p className="cta-text">Want to see more? Check out my GitHub!</p>
          <button className="cta-button">View All Projects</button>
        </div>
      </div>
    </div>
  );
}
