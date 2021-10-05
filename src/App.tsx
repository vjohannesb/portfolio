import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import MainNav from "./components/navigation/MainNav";
import Presentation from "./components/presentation/Presentation";
import Projects from "./components/projects/Projects";

function App(): JSX.Element {
    return (
        <div className="App">
            <MainNav />
            <div className="container mt-5">
                <Router>
                    <Switch>
                        <Route path="/about">
                            <h1>About</h1>
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/resume">
                            <h1>Resume</h1>
                        </Route>
                        <Route path="/">
                            <Presentation />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
