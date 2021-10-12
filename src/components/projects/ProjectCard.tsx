import React from "react";

import "./ProjectCard.scss";

type propTypes = {
    project: Project;
};

const ProjectCard = ({ project }: propTypes): JSX.Element => {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.title}</h3>

            <div className="project-description">
                <p>{project.description}</p>
            </div>

            <ul className="project-tech">
                {project.languages.map((p, i) => (
                    <li key={i} className="project-lang-li">
                        {p}
                    </li>
                ))}
                |
                {project.tech?.map((p, i) => (
                    <li key={i} className="project-tech-li">
                        {p}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;
