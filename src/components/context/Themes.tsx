import React from "react";

type Theme = {
    background: string;
    color: string;
    transition: string;
};

const darkTheme: Theme = {
    background: "#171823ff",
    color: "white",
    transition: "200ms",
};

const lightTheme: Theme = {
    background: "#e8e9eeff",
    color: "black",
    transition: "200ms",
};

export const themes = {
    darkTheme: darkTheme,
    lightTheme: lightTheme,
};
