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

    /*
     *
     */
    // const sortDataByType = (type) => {
    //     const sortedData = jobs.sort((a, b) => {
    //         if (type === "remote") {
    //             return a.type.localeCompare(b.type);
    //             console.log('b');
    //         } else {
    //             return b.type.localeCompare(a.type);
    //             console.log('a');
    //         }
    //     });
    //     setJobs(sortedData);
    // };

    const sortDataByType = (type) => {
        const sortedData = jobs.sort((a, b) => {
          if (!a.type || !b.type) {
            return 0;
            console.log('0');
          }
          if (type === "remote") {
            return a.type.localeCompare(b.type);
            console.log('5');
          } else {
            return b.type.localeCompare(a.type);
            console.log('a');
          }
        });
        setJobs(sortedData);
      };
      
    return (
        <div>
            <AppliedJobHeader></AppliedJobHeader>
            <div className="container mx-auto mt-10 flex justify-end gap-6">
                <button className="btn-primary w-24" onClick={() => sortDataByType("onsite")}>Onsite</button>
                <button className="btn-primary w-24" onClick={() => sortDataByType("remote")}>Remote</button>
            </div>
            <div className="mt-10">
                <div className="container mx-auto">
                    {jobs.map((si) => (
                        <AppliedJob job={si} key={si.job_id}></AppliedJob>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsload;
