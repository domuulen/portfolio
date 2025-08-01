"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Next.js Link-ийг импорт хийсэн

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Instagram",
      description:
        "Modern, responsive portfolio site built with Next.js featuring glassmorphism design and smooth animations.",
      tech: [],
      image: "/assets/coupmain.jpeg",
      github: "#",
      demo: "#",
      status: "",
    },
    {
      id: 2,
      title: "Github",
      description:
        "Modern, responsive portfolio site built with Next.js featuring glassmorphism design and smooth animations.",
      tech: [],
      image: "/assets/coupmain.jpeg",
      github: "#",
      demo: "#",
      status: "",
    },
    {
      id: 3,
      title: "Figma",
      description:
        "React app with local storage support, drag & drop functionality, and beautiful modern UI design.",
      tech: [],
      image: "/assets/coupmain.jpeg",
      github: "#",
      demo: "#",
      status: "",
    },
    // {
    //   id: 4,
    //   title: "E-Commerce Platform",
    //   description:
    //     "Full-featured online shopping platform with payment integration and admin dashboard.",
    //   tech: ["React", "Node.js", "MongoDB"],
    //   image: "/assets/coupmain.jpeg",
    //   github: "#",
    //   demo: "#",
    //   status: "In Progress",
    // },
    // {
    //   id: 5,
    //   title: "Weather Dashboard",
    //   description:
    //     "Beautiful weather app with interactive maps, forecasts, and personalized alerts.",
    //   tech: ["Vue.js", "API", "Chart.js"],
    //   image:
    //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    //   github: "#",
    //   demo: "#",
    //   status: "In Progress",
    // },
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
          <p className="projects-subtitle">See more details here.</p>
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
              <div
                className="project-image"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="image-overlay"></div>

                {/* Status Badge */}
                <div
                  className={`status-badge ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
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
                  <Link href={project.demo} className="project-link primary">
                    Visit
                  </Link>
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
      </div>
    </div>
  );
}
