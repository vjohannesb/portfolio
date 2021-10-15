import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

import "./Projects.scss";

const Projects = (): JSX.Element => {
    return (
        <section id="projects">
            <h1>Projects</h1>

            <h2 className="underlined mb-3">Current</h2>
            <div className="project-grid">
                <ProjectCard
                    className="project-featured"
                    project={projects.featured}
                />
                {projects.current.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
