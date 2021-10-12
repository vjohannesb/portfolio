import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useAppContext } from "../context/ContextProvider";

import "./MainNav.scss";

const MainNav = (): JSX.Element => {
    const {
        darkThemeState: { darkTheme, setDarkTheme },
    } = useAppContext();

    const switchTheme = () => {
        setDarkTheme((v) => !v);
    };

    return (
        <>
            <header id="navContainer">
                <nav id="mainNavigation" className="container">
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li className="theme-switch" onClick={switchTheme}>
                            <SwitchTransition>
                                <CSSTransition
                                    key={darkTheme ? "Dark" : "Light"}
                                    classNames="theme-anim"
                                    timeout={400}>
                                    {darkTheme ? (
                                        <i className="far fa-moon"></i>
                                    ) : (
                                        <i className="far fa-sun"></i>
                                    )}
                                </CSSTransition>
                            </SwitchTransition>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainNav;
