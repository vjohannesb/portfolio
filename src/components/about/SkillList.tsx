import React from "react";
import SkillCard from "./SkillCard";

import "./SkillList.scss";

const skills: Skill[] = [
    { name: "C#", weight: 10 },
    { name: ".NET Core", weight: 10 },
    { name: "ASP.NET MVC", weight: 10 },
    { name: "ASP.NET Web API", weight: 10 },
    { name: "Blazor", weight: 10 },
    { name: "Razor", weight: 10 },
    { name: "ReactJS", weight: 10 },
    { name: "Python", weight: 10 },
    { name: "SQL", weight: 10 },
    { name: "NoSQL", weight: 10 },
    { name: "TypeScript", weight: 9 },
    { name: "JavaScript", weight: 9 },
    { name: "Git", weight: 9 },
    { name: "Agile Development", weight: 9 },
    { name: "Node.js", weight: 8 },
    { name: "HTML5", weight: 8 },
    { name: "SCSS", weight: 8 },
    { name: "CMS", weight: 7 },
    { name: "Umbraco", weight: 7 },
    { name: "ExpressJS", weight: 7 },
    { name: "EF Core", weight: 7 },
    { name: "jQuery", weight: 6 },
    { name: "Azure", weight: 6 },
    { name: "TDD", weight: 6 },
];

const SkillList = (): JSX.Element => {
    return (
        <div className="skillcard">
            <ul className="skill-container">
                {skills.map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} delay={idx} />
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
