import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobHeader from "./AppliedJobHeader";
import AppliedJob from "./AppliedJob";
import { getData } from "../../public/db";

const AppliedJobsload = () => {
    const [jobs, setJobs] = useState([]);
    const [webJobs, setWebJobs] = useState([]);
    const alljobs = useLoaderData();
    const alljobsArray = Object.values(alljobs);

    useEffect(() => {
        setWebJobs(alljobsArray);
    }, []);

    useEffect(() => {
        const storedJob = getData();
        const matchedJobs = alljobsArray.filter((job) =>
            storedJob.some((storedJob) => storedJob.id === job.job_id)
        );
        setJobs(matchedJobs);
        console.log(jobs);
    }, [webJobs]);

    //
    const [newData, setNewData] = useState(jobs);
    const [onsitestatus, setOnsitestatus] = useState(false);
    const [remotestatus, setRemotestatus] = useState(false);

    const handleOnSite = () => {
        setRemotestatus(false);
        setOnsitestatus(true);
        const updatedData = jobs.filter((item) => item.jobType === "Onsite");
        setNewData(updatedData);
    };

    const handleRemote = () => {
        setRemotestatus(true);
        setOnsitestatus(false);
        const updatedData = jobs.filter((item) => item.jobType === "Remote");
        setNewData(updatedData);
    };

    return (
        <div>
            <AppliedJobHeader></AppliedJobHeader>
            <div className="container mx-auto mt-10 flex justify-end gap-6">
                <button className="btn-primary w-24" onClick={handleOnSite}>
                    Onsite
                </button>
                <button className="btn-primary w-24" onClick={handleRemote}>
                    Remote
                </button>
            </div>
            <div className="mt-10">
                <div className="container mx-auto">
                    {
                        onsitestatus ? 
                        newData.map((si) => (
                            <AppliedJob job={si} key={si.job_id}></AppliedJob>
                        )) : remotestatus ? 
                        newData.map((si) => (
                            <AppliedJob job={si} key={si.job_id}></AppliedJob>
                        )) :
                        jobs.map((si) => (
                            <AppliedJob job={si} key={si.job_id}></AppliedJob>
                        ))
                    }
                </div>
            </div>
            {console.log(newData)}
        </div>
    );
};

export default AppliedJobsload;
