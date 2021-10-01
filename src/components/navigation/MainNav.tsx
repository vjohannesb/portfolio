import React from "react";

import "./MainNav.scss";

const MainNav = (): JSX.Element => {
    return (
        <div id="navContainer">
            <nav id="mainNavigation" className="container">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNav;
