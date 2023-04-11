import React from "react";

const Navbanner = () => {
    return (
        <div className="flex flex-col ms-2 md:flex-row justify-around "> 
            <div className="flex flex-col  justify-center max-w-xl gap-4 text-left">
                <h1 className="text-6xl font-semibold">One Step <br /> Closer To Your <br /><span className="text-indigo-500">  Dream Job</span></h1>
                <p className="text-md text-gray-500">
                    Explore thousands of job opportunities with all the <br />
                    information you need. Its your future. Come find it. Manage
                    all <br /> your job application from start to finish.
                </p>
                <button className="btn-primary w-2/5">Get Started</button>
            </div>
            <div>
                <img src="https://i.ibb.co/VtSwtct/P3-OLGJ1-copy-1.png" alt="" />
            </div>
        </div>
    );
};

export default Navbanner;
