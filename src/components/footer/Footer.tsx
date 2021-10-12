import React from "react";

import "./Footer.scss";

const Footer = (): JSX.Element => {
    return (
        <footer id="mainFooter">
            <div className="footer-text">
                <a
                    href="https://github.com/vjohannesb/portfolio"
                    rel="noopener noreferrer"
                    target="_blank">
                    Made by Johannes Bergendahl
                </a>
            </div>
        </footer>
    );
};

export default Footer;
