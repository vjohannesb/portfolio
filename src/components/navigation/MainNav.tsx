import React from "react";

import "./MainNav.scss";

const MainNav = (): JSX.Element => {
    return (
        <header id="navContainer">
            <nav id="mainNavigation" className="container">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNav;
