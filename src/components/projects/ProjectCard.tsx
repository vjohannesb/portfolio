import React from "react";

import "./ProjectCard.scss";

type propTypes = {
    project: Project;
};

const ProjectCard = ({ project }: propTypes): JSX.Element => {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.title}</h3>

            <img
                className="project-image"
                src="https://via.placeholder.com/70/0A192F/68ffd9?text=TMP"
            />

            <ul className="project-tech">
                {project.languages.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
                {project.frameworks?.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
            <div className="project-description">
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
