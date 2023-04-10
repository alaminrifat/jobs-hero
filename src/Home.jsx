import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Navbanner from "./Navbanner";
import JobSection from "./LandingPage/JobSection";
import FeaturedJobSection from "./LandingPage/FeaturedJobSection";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Navbanner></Navbanner>
            </div>
            <JobSection></JobSection>
            <FeaturedJobSection></FeaturedJobSection>
        </div>
    );
};

export default Home;
