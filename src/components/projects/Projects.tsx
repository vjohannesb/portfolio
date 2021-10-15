import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

import "./Projects.scss";

const Projects = (): JSX.Element => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="project-grid mt-5">
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
