import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { useAppContext } from "./components/context/ContextProvider";
import CustomSwitch from "./components/custom/CustomSwitch";
import Footer from "./components/footer/Footer";
import MainNav from "./components/navigation/MainNav";

function App(): JSX.Element {
    const {
        darkThemeState: { darkTheme },
    } = useAppContext();

    return (
        <>
            <div className={`App theme-${darkTheme ? "dark" : "light"}`}>
                <Router>
                    <MainNav />
                    <main className="container mt-5">
                        <CustomSwitch />
                    </main>
                </Router>
                <Footer />
            </div>
        </>
    );
}

export default App;
