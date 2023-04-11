import React from "react";
import background from "/Vector.png";

const JobdetailsHeader = () => {
    const myStyle = {
        backgroundImage: "url('https://i.ibb.co/s2pL0hW/Vector.png')",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="h-48 bg-gray-100  text-center bg-no-repeat">
            <div style={myStyle} className="h-full w-full flex items-center justify-center">
                <h1 className="text-xl font-semibold"> Job Details</h1>
            </div>
        </div>
    );
};

export default JobdetailsHeader;
