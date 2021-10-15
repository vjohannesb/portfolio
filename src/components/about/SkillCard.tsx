import React from "react";

import "./SkillCard.scss";

type propTypes = {
    skill: Skill;
    delay: number;
};

const SkillCard = ({ skill, delay }: propTypes): JSX.Element => {
    return (
        <li
            style={{
                fontSize: 3.2 * skill.weight,
                animationDelay: `${delay * 0.2}s`,
            }}
            className="skill-card">
            {skill.name}
        </li>
    );
};

export default SkillCard;
