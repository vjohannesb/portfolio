import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import About from "../about/About";
import Presentation from "../presentation/Presentation";
import Projects from "../projects/Projects";

import "./CustomSwitch.scss";

const CustomSwitch = (): JSX.Element => {
    const location = useLocation();
    console.log(
        `key: ${location.key}, pathname: ${location.pathname}, search: ${location.search}`
    );
    return (
        <SwitchTransition>
            <CSSTransition
                in
                appear
                key={location.key || location.pathname}
                classNames="fade"
                timeout={500}>
                <Switch location={location}>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Presentation />
                    </Route>
                </Switch>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default CustomSwitch;
