import React from "react";

const FeaturedJobs = ({ job }) => {
    const { job_Title, company, location, salary, job_id, jobType, logo } = job;
    return (
        <div className=" p-6 border-solid border-2 static">
            <img className="w-24" src={logo} alt="" />
            <h1 className="text-2xl font-semibold mt-2">{job_Title}</h1>
            <p className="mt-2 text-gray-500">{company}</p>
            <p className="border-solid border-2 border-purple-600 p-1 w-24 my-2 text-purple-600 font-semibold rounded-md text-center">
                {jobType}
            </p>
            <div className="flex gap-2 text-gray-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                </svg>

                <p>{location}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <p> Salary: {salary}</p>
            </div>
            <button className="btn-primary mt-6">View Details</button>
        </div>
    );
};

export default FeaturedJobs;
