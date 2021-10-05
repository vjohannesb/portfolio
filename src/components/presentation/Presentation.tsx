import React from "react";
import { Link } from "react-router-dom";

import "./Presentation.scss";

const Presentation = (): JSX.Element => {
    return (
        <div id="presentation">
            <div className="presentation-group">
                <h1 className="fancy-hello">
                    Hello! <span className="wave-emoji">👋</span>
                </h1>
            </div>
            <div className="presentation-group">
                <h1 className="presentation-description">My name is</h1>
                <h1 className="fancy-name"> Johannes Bergendahl,</h1>
            </div>
            <div className="presentation-group">
                <h1 className="presentation-description">&amp; I am a </h1>
                <h1 className="fancy-name">.NET Web Developer</h1>
            </div>
            <div className="row button-group">
                <Link to="/about" className="btns btn-large col-auto">
                    About me
                </Link>
                <Link to="/projects" className="btns btn-large col-auto mx-3">
                    Projects
                </Link>
                <Link to="/resume" className="btns btn-large col-auto">
                    Resume
                </Link>
            </div>
        </div>
    );
};

export default Presentation;
