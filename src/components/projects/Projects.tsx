import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

import "./Projects.scss";

const Projects = (): JSX.Element => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <h2>Featured</h2>
            <p>The projects I am currently working on.</p>
            <div className="project-grid">
                {projects.current.map((p, idx) => (
                    <ProjectCard key={idx} project={p} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
