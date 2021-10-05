import React from "react";
import ProjectCard from "./ProjectCard";

import projects from "./projects.json";

const Projects = (): JSX.Element => {
    return (
        <div>
            <h1>Projects</h1>
            {projects.projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
            ))}
            <div className="mb-5"></div>
            <div className="pb-5"></div>
            <div className="pb-5"></div>
        </div>
    );
};

export default Projects;
