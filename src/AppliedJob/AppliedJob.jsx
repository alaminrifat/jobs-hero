import React from "react";

const AppliedJob = ({ job }) => {
    const {
        job_Title,
        company,
        location,
        salary,
        job_id,
        jobType,
        logo,
        jobTime,
    } = job;
    return (
        <div className=" grid grid-cols-1 my-6 border-2 p-6">
            <div className="flex justify-between items-center">
                <div className="flex justify-start gap-10 items-center">
                    <div className="h-32 w-32 bg-slate-100 flex items-center p-4 rounded-md">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        {/* data */}
                        <h1 className="text-xl font-semibold">{job_Title}</h1>
                        <p className="text-gray-500 mt-1">{company}</p>
                        <div className="flex gap-4">
                            <p className="border-solid border-2 mt-1 border-purple-600 w-24 text-purple-600 font-semibold rounded-md text-center">
                                {jobType}
                            </p>
                            <p className="border-solid border-2 mt-1 border-purple-600 w-24 text-purple-600 font-semibold rounded-md text-center">
                                {jobTime}
                            </p>
                        </div>
                        <div className="flex gap-2 text-gray-600 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>

                            <p>{location}</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <p> Salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
