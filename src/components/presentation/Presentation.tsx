import { PrimaryButton } from "@fluentui/react/lib/components/Button/PrimaryButton/PrimaryButton";
import React from "react";

import data from "./Presentation.json";
import "./Presentation.scss";

const name = "Johannes Bergendahl";

const Presentation = (): JSX.Element => {
    return (
        <div id="presentation">
            <div className="presentation-group">
                <h1 className="fancy-hello">Hello! 👋</h1>
            </div>
            <div className="presentation-group">
                <h1 className="presentation-description">My name is</h1>
                <h1 className="fancy-name"> Johannes Bergendahl,</h1>
            </div>
            <div className="presentation-group">
                <h1 className="presentation-description">&amp; I am a </h1>
                <h1 className="fancy-usp">.NET Web Developer</h1>
            </div>
            <div className="button-group">
                <PrimaryButton text="My skills" />
                <PrimaryButton text="My projects" />
                <PrimaryButton text="My resume" />
            </div>
        </div>
    );
};

export default Presentation;
