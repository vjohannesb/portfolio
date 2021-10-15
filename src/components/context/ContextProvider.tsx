import React, { useContext, createContext, useState, useEffect } from "react";

type AnimState = {
    animDone: boolean;
    setAnimDone: React.Dispatch<React.SetStateAction<boolean>>;
};

type DarkThemeState = {
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

type Context = {
    animState: AnimState;
    darkThemeState: DarkThemeState;
};

const defaults = {
    animState: {
        animDone: false,
        setAnimDone: (): boolean => false,
    },
    darkThemeState: {
        darkTheme: false,
        setDarkTheme: (): boolean => true,
    },
};

const AppContext = createContext<Context>(defaults);

export function useAppContext(): Context {
    return useContext(AppContext);
}

type propTypes = {
    children: React.ReactNode;
};

const ContextProvider = ({ children }: propTypes): JSX.Element => {
    const [animDone, setAnimDone] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("darkTheme");
        if (selectedTheme) setDarkTheme(selectedTheme === "true");
    }, []);

    useEffect(() => {
        localStorage.setItem("darkTheme", String(darkTheme));
        document.getElementsByTagName("body")[0].className = darkTheme
            ? "theme-dark"
            : "theme-light";
    }, [darkTheme]);

    const contextState: Context = {
        animState: {
            animDone: animDone,
            setAnimDone: setAnimDone,
        },
        darkThemeState: {
            darkTheme: darkTheme,
            setDarkTheme: setDarkTheme,
        },
    };

    return (
        <AppContext.Provider value={contextState}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
