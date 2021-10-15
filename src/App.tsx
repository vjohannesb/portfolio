import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import CustomSwitch from "./components/customSwitch/CustomSwitch";
import Footer from "./components/footer/Footer";
import MainNav from "./components/navigation/MainNav";

function App(): JSX.Element {
    return (
        <>
            <div className={`App`}>
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
