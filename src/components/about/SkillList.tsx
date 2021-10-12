import React, { useState } from "react";
import SkillCard from "./SkillCard";

import "./SkillList.scss";

const skills: Skill[] = [
    {
        name: "C#",
        weight: 10,
        extra: [
            { name: ".NET Core" },
            { name: "ASP.NET MVC" },
            { name: "ASP.NET Web API" },
            { name: "Blazor" },
            { name: "Razor" },
            { name: "UWP" },
        ],
    },
    { name: "ReactJS", weight: 10 },
    {
        name: "Python",
        weight: 10,
        extra: [
            { name: "TensorFlow" },
            { name: "Keras" },
            { name: "OpenCV" },
            { name: "Matplotlib" },
        ],
    },
    { name: "TypeScript", weight: 9 },
    { name: "JavaScript", weight: 8 },
    { name: "Node.js", weight: 8 },
    { name: "HTML5", weight: 8 },
    { name: "SCSS", weight: 8 },
    { name: "CMS", weight: 7 },
    { name: "Umbraco", weight: 7 },
    { name: "ExpressJS", weight: 7 },
    { name: "jQuery", weight: 6 },
];

const techniques: Skill[] = [
    { name: "SQL", weight: 10 },
    { name: "NoSQL", weight: 9 },
    { name: "Git", weight: 9 },
    { name: "Agile Development", weight: 8 },
    { name: "EntityFramework", weight: 7 },
    { name: "Azure", weight: 6 },
];

const SkillList = (): JSX.Element => {
    return (
        <div className="skillcard">
            <ul className="skill-container">
                {skills.map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                ))}
            </ul>
            <ul className="skill-container">
                {techniques.map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
