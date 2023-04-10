import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    const { id } = useParams();
    const [job, setJob] = useState(null);
  
    useEffect(() => {
      const jobData = jobs.find((j) => j.job_id == id);
      setJob(jobData);
    }, []);


    return (
        <div>
            {
                // job data scrapped !!!
                console.log(job.job_id)
            }
        </div>
    );
};

export default JobDetails;