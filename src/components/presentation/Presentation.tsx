import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import illustration from "../../img/undraw_developer_activity.svg";

import "./Presentation.scss";

const Presentation = (): JSX.Element => {
    const [animDone, setAnimDone] = useState(false);

    const onAnimationEnd = () => {
        setAnimDone(true);
    };

    return (
        <>
            <div
                id="presentation"
                className={`row align-items-center ${
                    animDone ? "anim-done" : ""
                }`}>
                <div className="presentation-group col-12 col-lg-7">
                    <h1 className="fancy-hello" onAnimationEnd={onAnimationEnd}>
                        Hello! <span className="wave-emoji">👋</span>
                    </h1>
                    <h1 className="presentation-description pd-name">
                        My name is
                    </h1>
                    <h1 className="fancy-name"> Johannes Bergendahl,</h1>
                    <h1 className="presentation-description pd-iama">
                        &amp; I am a
                    </h1>
                    <h1 className="fancy-title">Web Developer</h1>

                    <div className="row button-group">
                        <Link to="/about" className="btns btn-large col-auto">
                            About me
                        </Link>
                        <Link
                            to="/projects"
                            className="btns btn-large col-auto mx-3">
                            Projects
                        </Link>
                        <Link to="/resume" className="btns btn-large col-auto">
                            Resume
                        </Link>
                    </div>
                </div>

                <div className="presentation-illustration col-5">
                    <img
                        className="presentation-img d-none d-lg-block"
                        src={illustration}
                        alt="Illustration of a person and a computer"
                    />
                </div>

                <div className="presentation-group mt-5 col-12">
                    <h2 className="fw-bold">Get in touch</h2>
                    <div className="contacts">
                        <a
                            href="mailto:info@jbergendahl.se"
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="far fa-envelope fa-2x" />{" "}
                        </a>

                        <a
                            href="https://linkedin.com/in/johannes-bergendahl"
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-linkedin fa-2x" />
                        </a>

                        <a
                            href="https://github.com/vjohannesb"
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-github fa-2x" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Presentation;
