import React from "react";

import "./ProjectCard.scss";

type propTypes = {
    project: Project;
    className?: string;
};

const ProjectCard = ({ project, className }: propTypes): JSX.Element => {
    return (
        <article className={`project-card ${className}`}>
            <header className="project-title">
                <h3>{project.title}</h3>
            </header>

            <ul className="project-tech">
                {project.languages.map((p, i) => (
                    <li key={i} className="project-lang-li">
                        {p}
                    </li>
                ))}
                {project.tech?.map((p, i) => (
                    <li key={i} className="project-tech-li">
                        {p}
                    </li>
                ))}
            </ul>

            <div className="project-links">
                {project.github && (
                    <a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="GitHub">
                        <i className="fab fa-github" />
                    </a>
                )}
                {project.external && (
                    <a
                        href={project.external}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="External link">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )}
            </div>

            <div className="project-description">
                <p>{project.description}</p>
            </div>
        </article>
    );
};

export default ProjectCard;
