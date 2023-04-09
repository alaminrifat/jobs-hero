import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Navbanner from "./Navbanner";
import JobSection from "./Section/JobSection";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Navbanner></Navbanner>
            </div>
            <JobSection></JobSection>
        </div>
    );
};

export default Home;
