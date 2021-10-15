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
    "Creative thinker",
    "Chess player",
    "ML enthusiast",
    "Google Fu Blackbelt",
];

const About = (): JSX.Element => {
    return (
        <section id="about" className="row">
            <div className="presentation-illustration col-12 col-lg-5">
                <TextLoop
                    className="text-loop mb-5 mb-lg-0"
                    interval={2000}
                    springConfig={{ stiffness: 180, damping: 8 }}>
                    {titles.map((t, idx) => (
                        <span key={idx} className="title-span">
                            <span className="title-wrapper">{t}</span>
                        </span>
                    ))}
                </TextLoop>
                <img
                    className="illustration d-none d-lg-block"
                    src={illustration}
                    alt="Illustration"
                />
            </div>
            <div className="col-12 col-lg-7">
                <article>
                    <h2 className="underlined">Background</h2>
                    <p>
                        My journey on the web started around 2004, when we got
                        our first ADSL-connection. A whole new world opened up,
                        and hooked me instantly. Eventually, and with a little
                        break to kindle my passion for music, what started as
                        (admittedly terrible) websites about me or my guinea pig
                        16-something years ago developed into a career choice
                        and an ever-growing love for code.
                    </p>
                </article>

                <article>
                    <h2 className="underlined">What Do I Do?</h2>
                    <p>
                        I am currently studying the vocational program{" "}
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
                        Otherwise, if I&apos;m not playing with my son or
                        burning through any given Netflix show with my wife for
                        the nth time, I&apos;m probably playing chess, lazing
                        around in the compsci part of YouTube, or studying math
                        (yes, voluntarily.)
                    </p>
                    <p>
                        It all comes down to my love for learning and problem
                        solving - whether it&apos;s sudoku, chess or
                        programming, trying to figure out the best way to solve
                        a problem or learning something new just gets me in the
                        zone.
                    </p>
                </article>
            </div>

            <article>
                <h2 className="underlined">Technical Skills</h2>
                <SkillList />
            </article>
        </section>
    );
};

export default About;
