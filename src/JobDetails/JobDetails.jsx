import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import JobdetailsHeader from "./JobdetailsHeader";

const JobDetails = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    const { id } = useParams();
    const [job, setJob] = useState([]);

    useEffect(() => {
        const jobData = jobs.find((j) => j.job_id == id);
        setJob(jobData);
    }, []);

    const applyJob = (jobId) => {
        // Check if the jobs array already exists in localStorage
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        //TODO: toaster
        if (jobs.some((job) => job.id === jobId)){
            alert('Already Applied');
        }
        // Check if the jobId already exists in the jobs array
        if (!jobs.some((job) => job.id === jobId)) {
            // If the jobId does not exist in the jobs array, add it
            jobs.push({ id: jobId });
            alert(' Applied');
            // Store the updated jobs array in localStorage
            localStorage.setItem("jobs", JSON.stringify(jobs));
        }
    };
    return (
        <div>
            <JobdetailsHeader></JobdetailsHeader>
            <div className="container mx-auto my-20 flex gap-10 justify-between">
                <div className="w-10/12 leading-loose">
                    <p className="mt-4">
                        <span className="font-semibold">Job Description: </span>{" "}
                        {job.jobDescription}
                    </p>
                    <p className="mt-4">
                        <span className="font-semibold">
                            Job Responsibilities:{" "}
                        </span>{" "}
                        {job.jobResponsibilities}
                    </p>
                    <p className="mt-4">
                        <span className="font-semibold">
                            Educational Requirements:{" "}
                        </span>{" "}
                        <br />
                        {job.educationalRequirements}
                    </p>
                    <p className="mt-4">
                        <span className="font-semibold">Experiences: </span>{" "}
                        <br />
                        {job.experiences}
                    </p>
                </div>
                <div className="bg-indigo-50 w-96 p-12 rounded-lg">
                    <div>
                        <h1 className="font-semibold text-md my-2">
                            Job Details
                        </h1>
                        <div class="border-b-2 border-gray-300"></div>
                        <p className="mt-2 flex gap-2">
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
                            Salary:{" "}
                            <span className="text-gray-400">{job.salary}</span>
                        </p>
                        <p className="mt-2 flex gap-2">
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
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                            </svg>
                            Job Title:{" "}
                            <span className="text-gray-400">
                                {job.job_Title}
                            </span>
                        </p>
                        <h1 className="font-semibold text-md my-2">
                            Contact Information
                        </h1>
                        <div class="border-b-2 border-gray-300"></div>
                        <p className="mt-2 flex gap-2">
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
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                            Phone:{" "}
                            <span className="text-gray-400">{job.phone}</span>
                        </p>
                        <p className="mt-2 flex gap-2">
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
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            Email:{" "}
                            <span className="text-gray-400">{job.email}</span>
                        </p>
                        <p className="mt-2 flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
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
                            </svg>{" "}
                            Address:{" "}
                            <span className="text-gray-400">{job.address}</span>
                        </p>
                    </div>
                    <div>
                        <button className="btn-primary text-center mt-4 w-full" onClick={()=>applyJob(job.job_id)}>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
