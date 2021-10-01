import React from "react";

import "./App.scss";
import MainNav from "./components/navigation/MainNav";
import Presentation from "./components/presentation/Presentation";

function App(): JSX.Element {
    return (
        <div className="App">
            <MainNav />
            <header className="App-header">
                <div className="container mt-5">
                    <Presentation />
                </div>
            </header>
        </div>
    );
}

export default App;
