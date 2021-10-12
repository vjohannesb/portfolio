import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { useAppContext } from "./components/context/ContextProvider";
import CustomSwitch from "./components/custom/CustomSwitch";
import Footer from "./components/footer/Footer";
import MainNav from "./components/navigation/MainNav";
import { themes } from "./components/context/Themes";

function App(): JSX.Element {
    const {
        darkThemeState: { darkTheme },
    } = useAppContext();

    return (
        <>
            <div
                className="App"
                style={darkTheme ? themes.darkTheme : themes.lightTheme}>
                <Router>
                    <MainNav />
                    <div className="container mt-5">
                        <CustomSwitch />
                    </div>
                </Router>
                <Footer />
            </div>
        </>
    );
}

export default App;
