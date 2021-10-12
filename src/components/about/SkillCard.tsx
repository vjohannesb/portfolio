import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./SkillCard.scss";

type propTypes = {
    skill: Skill;
};

const SkillCard = ({ skill }: propTypes): JSX.Element => {
    const [expanded, setExpanded] = useState(false);

    const expand = () => {
        setExpanded((value) => !value);
    };

    return (
        <>
            <li
                style={{
                    fontSize: 3.2 * skill.weight,
                    opacity: skill.weight / 10,
                }}>
                {skill.name}
                {skill.extra && (
                    <span
                        className="extra-indicator"
                        style={{ cursor: "pointer" }}
                        onClick={expand}>
                        +
                    </span>
                )}
            </li>

            {skill.extra && (
                <CSSTransition
                    in={expanded}
                    timeout={500}
                    classNames="skill-fade">
                    <div className="subskill-container">
                        {expanded &&
                            skill.extra.map((extra, idx) => (
                                <span key={idx} className="subskill">
                                    {extra.name}
                                </span>
                            ))}
                    </div>
                </CSSTransition>
            )}
        </>
    );
};

export default SkillCard;
