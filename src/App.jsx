import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="bg-gray-100">
            <div >
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default App;
