import React from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";

import illustration from "../../img/undraw_thought_process.svg";
import SkillList from "./SkillList";

import "./About.scss";

const titles = [
    "Dad (1 human, 2 cats)",
    "Husband",
    "Music nerd",
    "Tech fan",
    "Puzzle lover",
    "Problem solver",
    "Creative",
    "Autodidact",
    "Chess player",
    "ML enthusiast",
    "Google Fu Blackbelt",
];

const About = (): JSX.Element => {
    return (
        <div>
            <div id="about" className="row">
                <div className="presentation-illustration d-none d-lg-flex col-lg-5">
                    <TextLoop
                        className="text-loop"
                        interval={2000}
                        springConfig={{ stiffness: 180, damping: 8 }}>
                        {titles.map((t, idx) => (
                            <span key={idx} className="title-span">
                                <span className="title-wrapper">{t}</span>
                            </span>
                        ))}
                    </TextLoop>
                    <img
                        className="illustration"
                        src={illustration}
                        alt="Illustration"
                    />
                </div>
                <div className="col-12 col-lg-7">
                    <h2>Background</h2>
                    <p>
                        My journey on the web started around 2004, when we got
                        our first ADSL-connection. A whole new world opened up,
                        and I was instantly hooked. Eventually, and with a
                        little break to kindle my passion for music, what
                        started as (admittedly terrible) websites about me or my
                        guinea pig 16-something years ago developed into a
                        career choice and an ever-growing love for code.
                    </p>

                    <h2>What Do I Do?</h2>
                    <p>
                        I am currently studying the vocational programme{" "}
                        <a
                            href="https://ecutbildning.se/utbildningar/webbutvecklare-inom-net/orebro/"
                            rel="noopener noreferrer"
                            target="_blank">
                            .NET Web Developer
                        </a>{" "}
                        at{" "}
                        <a
                            href="https://ecutbildning.se/"
                            rel="noopener noreferrer"
                            target="_blank">
                            EC Utbildning
                        </a>
                        , so during office hours I am either studying or honing
                        my skills through a{" "}
                        <Link to="/projects">personal project</Link>.
                    </p>
                    <p>
                        Otherwise, I am most likely either playing with my son,
                        burning through any given Netflix-show with my wife for
                        the nth time, or on my computer. While there, if
                        I&apos;m not currently obsessing about my latest
                        project, I like to play chess, waste time in the compsci
                        section of YouTube, go down some obscure Wikipedia
                        rabbit hole, or study math (yes, voluntarily.)
                    </p>
                    <p>
                        It all comes down to my love for learning and problem
                        solving - whether it&apos;s sudoku, chess or
                        programming, trying to figure out the best way to solve
                        any kind of problem just gets me in the zone.
                    </p>
                </div>

                <div>
                    <h2>What Can I Do?</h2>
                    <SkillList />
                </div>
            </div>
            <div>
                <Link to="/">
                    <i className="far fa-arrow-alt-circle-left fa-4x"></i>
                </Link>
            </div>
        </div>
    );
};

export default About;
