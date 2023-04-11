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

    useEffect(()=>{
        setWebJobs(alljobsArray);
    },[])

    useEffect(() => {
        const storedJob = getData();
        const matchedJobs = alljobsArray.filter((job) => storedJob.some((storedJob) => storedJob.id === job.job_id));
        setJobs(matchedJobs);
        console.log(jobs);
    }, [webJobs]);


    
    return (
        <div>
            <AppliedJobHeader></AppliedJobHeader>
            <div className="container mx-auto mt-10 flex justify-end gap-6">
                <button className="btn-primary w-24" >Onsite</button>
                <button className="btn-primary w-24">Remote</button>
            </div>
            <div className="mt-10">
                <div className="container mx-auto">
                    {jobs.map((si) => (
                        <AppliedJob job={si}></AppliedJob>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsload;
