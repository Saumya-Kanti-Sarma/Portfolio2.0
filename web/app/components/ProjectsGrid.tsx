"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  picture: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const triggerButton = triggerButtonRef.current;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      triggerButton?.focus();
    };
  }, [selectedProject]);

  return (
    <>
      <div className="project-grid">
        {projects.map((project) => (
          <button
            className="project-card"
            key={project.title}
            onClick={(event) => {
              triggerButtonRef.current = event.currentTarget;
              setSelectedProject(project);
            }}
            type="button"
            aria-label={`View ${project.title} project details`}
          >
            <span className="project-card-image">
              <Image
                src={project.picture}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
            </span>
            <span className="project-card-title">{project.title}</span>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <section
            aria-labelledby="project-modal-title"
            aria-modal="true"
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close project details"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              ref={closeButtonRef}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="project-modal-image">
              <Image
                src={selectedProject.picture}
                alt={`${selectedProject.title} project`}
                fill
                sizes="(max-width: 760px) 100vw, 720px"
              />
            </div>
            <div className="project-modal-content">
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <ul aria-label="Technologies" className="project-technologies">
                {selectedProject.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {selectedProject.url ? (
                <a
                  className="project-visit-link"
                  href={selectedProject.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit project <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <p className="project-link-pending">Project link coming soon.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
