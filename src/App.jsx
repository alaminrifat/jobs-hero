import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div >
            <div className="bg-gray-100">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default App;
