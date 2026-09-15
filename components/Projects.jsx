"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Nova",
    img: "/assets/images/nova.webp",
    year: "2026",
    type: "Product Design",
    url: "https://nova-product.vercel.app/",
  },
  {
    title: "Nexora",
    img: "/assets/images/nexora.webp",
    year: "2025",
    type: "Digital Agency",
    url: "https://nexora-digital-ui.vercel.app/",
  },
  {
    title: "Clario",
    img: "/assets/images/clario.webp",
    year: "2026",
    type: "SaaS Analytics Dashboard",
    url: "https://clario-analytics-dashboard.vercel.app/",
  },
  {
    title: "Wanderly",
    img: "/assets/images/wanderly.webp",
    year: "2026",
    type: "Travel Platform",
    url: "https://wanderly-travel-experience.vercel.app/",
  },
];

export default function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="projects-heading">Projects</h2>
          </div>
        </div>
        <div className="projects-grid" id="projectsGrid" ref={gridRef}>
          {projects.map((project, i) => (
            <div
              className="project-card"
              style={{ transitionDelay: `${i * 80}ms` }}
              key={project.title}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
                aria-label={project.title}
              >
                <img
                  className="project-card-img"
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />
              </a>
              <div className="project-card-body">
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p className="project-card-title">{project.title}</p>
                  </a>
                  <p className="project-card-type">{project.type}</p>
                </div>
                <div className="project-card-year">{project.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
