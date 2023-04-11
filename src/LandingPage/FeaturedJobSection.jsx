import React, { useEffect, useState } from 'react';
import FeaturedJobs from './FeaturedJobs';

const FeaturedJobSection = () => {
    
    const [jobs, setJobs] = useState([]);
    const [showless, setShowless] = useState([]);

    useEffect(()=>{
        fetch('Jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    useEffect(()=>{
        setShowless(jobs.slice(0,4));
    },[jobs])

    const [status, setStatus] = useState(false);
    const toggleStatus = () => {
        setStatus(!status);
    }
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="mt-28 text-center">
                <h1 className="font-semibold text-3xl">Featured Jobs</h1>
                <p className="text-gray-500 mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mt-28 grid grid-cols-1 w-11/12 md:grid-cols-2  md:w-full container mx-auto gap-6'>
                { 
                   status? jobs.map(job => <FeaturedJobs key={job.job_id} job={job}></FeaturedJobs>) : showless.map(sl => <FeaturedJobs key={sl.job_id} job={sl}></FeaturedJobs>)
                }
            </div>
            <button onClick={toggleStatus} className='btn items-center mt-10'>
                See All jobs
            </button>
        </div>
    );
};

export default FeaturedJobSection;
