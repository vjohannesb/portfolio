import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Illustration } from "../../img/undraw_developer_activity.svg";
import { useAppContext } from "../context/ContextProvider";

import "./Presentation.scss";

const Presentation = (): JSX.Element => {
    const {
        animState: { animDone, setAnimDone },
    } = useAppContext();

    const onAnimationEnd = () => {
        setAnimDone(true);
    };

    return (
        <div
            id="presentation"
            className={`row align-items-center ${animDone ? "anim-done" : ""}`}>
            <div className="presentation-group col-12 col-lg-7">
                <h1 className="fancy-hello" onAnimationEnd={onAnimationEnd}>
                    Hello! <span className="wave-emoji">👋</span>
                </h1>
                <h1 className="presentation-description pd-name">My name is</h1>
                <h1 className="fancy-name"> Johannes Bergendahl</h1>
                <h1 className="presentation-description pd-iama">
                    &amp; I am a
                </h1>
                <h1 className="fancy-title">Web Developer</h1>

                <div className="row mt-3">
                    <Link to="/about" className="btns btn-large col-auto">
                        About me
                    </Link>
                    <Link
                        to="/projects"
                        className="btns btn-large col-auto mx-3">
                        Projects
                    </Link>
                </div>
            </div>

            <div className="presentation-illustration col-5">
                <Illustration className="presentation-img d-none d-lg-block" />
            </div>

            <div className="presentation-group mt-5 col-12">
                <h2 className="fw-bold underlined">Get in touch</h2>
                <div className="contacts">
                    <a
                        href="mailto:info@jbergendahl.se"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Email">
                        <i className="far fa-envelope fa-2x" />
                    </a>

                    <a
                        href="https://linkedin.com/in/johannes-bergendahl"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="LinkedIn">
                        <i className="fab fa-linkedin fa-2x" />
                    </a>

                    <a
                        href="https://github.com/vjohannesb"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="GitHub">
                        <i className="fab fa-github fa-2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
